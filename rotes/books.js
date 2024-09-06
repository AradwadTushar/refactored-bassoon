const express = require("express");

const {users} = require("../data/users.json")
const {books} = require("../data/books.json")


const router = express.Router();

/**
 * Routes : /books
 * Method : GET
 * Description : Get all books 
 * Access : Public
 * Parameters : None
 */

router.get("",(req,res) =>{
    res.status(200).json({
        success: true,
        data : books,
    })
})


/**
 * Routes : /books/:id
 * Method : GET
 * Description : Get books by their ids 
 * Access : Public
 * Parameters : id
 */

router.get("/:id",(req,res) => {
    const {id} = req.params;
    const book = books.find((each) => each.id === id);
    if(!book)
        return res.status(404).json({
    success : false,
    message : "Book Not Found"
})
     return res.status(200).json({
        success : true,
        data : book
     })
    
})

/**
 * Routes : /books
 * Method : POST
 * Description : Create a new book  
 * Access : Public
 * Parameters : None
 */

router.post("",(req,res) => {
    const {id,name,author,genre,price,publisher} = req.body;
    
    const book = books.find((each) => each.id === id);

    if(book) {
        return res.status(404).json({
            success: false,
            message : "Hey boss you cannot add this book as book with this id already exist",
        })

    }

    books.push({id,name,author,genre,price,publisher});
    res.status(201).json({
        success : true,
        data : books,
    })

})

/**
 * Routes : /books/:id
 * Method : PUT
 * Description : Updating a book by their id  
 * Access : Public
 * Parameters : id
 */

router.put("/:id",(req,res) => {
    const {id} = req.params;
    const {data} = req.body;

    const book = books.find((each) => each.id === id);
    if(!book)
        return res.status(404).json({
    success : false,
    message : "book Not Found"
})

const updateBook = books.map((each) => {
    if(each.id === id) {
        return {
            ...each,
            ...data,
        }
    }
    return each;
})

   return res.status(200).json({
    success : true,
    data : updateBook
   })

})

/**
 * Routes : /books/:id
 * Method : DELETE
 * Description : Deleting a book by their id  
 * Access : Public
 * Parameters : id
 */

router.delete("/:id",(req,res) => {
    const {id} = req.params;

    const book = books.find((each) => each.id === id);
    if(!book)
        return res.status(404).json({
    success : false,
    message : "Book Not Found"
})

   const index = books.indexOf(book);
   books.splice(index,1)

   res.status(200).json({
    success : true,
    data : books,
   })
})

module.exports = router;