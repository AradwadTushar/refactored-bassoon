const express = require ("express");
const {users} = require ("./data/users.json");

const app = express();

const port = 8081;

app.use(express.json());

app.get("/", (req,res) =>{
    res.status(200).json({
        message : "server is up n running"
    })
})

/**
 * Routes : /users
 * Method : GET
 * Description : Get all users 
 * Access : Public
 * Parameters : None
 */

app.get("/users",(req,res) =>{
    res.status(200).json({
        success: true,
        data : users,
    })
})


/**
 * Routes : /users/:id
 * Method : GET
 * Description : Get users by their ids 
 * Access : Public
 * Parameters : id
 */

app.get("/users/:id",(req,res) => {
    const {id} = req.params;
    const user = users.find((each) => each.id === id);
    if(!user)
        return res.status(404).json({
    success : false,
    message : "User Not Found"
})
     return res.status(200).json({
        success : true,
        data : user
     })
    
})

app.all("*",(req,res) => {
    res.status(404).json({
        message: "This route does not exist"
    })
})

app.listen(port, () => {
    console.log(`server is running on ${port}`);
})