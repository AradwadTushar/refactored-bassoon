const express = require ("express");
const {users} = require ("./data/users.json");

// Data Base connection
const DbConnection = require("./databaseConnections");
const dotenv = require("dotenv");

//Importing routes 

const usersRouter = require("./rotes/users");
const booksRouter = require("./rotes/books");

dotenv.config()
const app = express();
DbConnection();

const port = 8081;

app.use(express.json());

app.get("/", (req,res) =>{
    res.status(200).json({
        message : "server is up n running"
    })
})


app.use("/users",usersRouter);
app.use("/books",booksRouter);


app.all("*",(req,res) => {
    res.status(404).json({
        message: "This route does not exist"
    })
})

app.listen(port, () => {
    console.log(`server is running on ${port}`);
})