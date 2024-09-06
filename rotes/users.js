const express = require("express");

const {users} = require("../data/users.json")

const router = express.Router();


/**
 * Routes : /users
 * Method : GET
 * Description : Get all users 
 * Access : Public
 * Parameters : None
 */

router.get("",(req,res) =>{
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

router.get("/:id",(req,res) => {
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

/**
 * Routes : /users
 * Method : POST
 * Description : Create a new  users  
 * Access : Public
 * Parameters : None
 */

router.post("",(req,res) => {
    const {id,name,surname,email,subscriptionType,subscriptionDate} = req.body;
    
    const user = users.find((each) => each.id === id);

    if(user) {
        return res.status(404).json({
            success: false,
            message : "Hey boss you cannot add this user as user with this id already exist",
        })

    }

    users.push({id,name,surname,email,subscriptionType,subscriptionDate});
    res.status(201).json({
        success : true,
        data : users,
    })

})

/**
 * Routes : /users/:id
 * Method : PUT
 * Description : Updating a user by their id  
 * Access : Public
 * Parameters : id
 */

router.put("/:id",(req,res) => {
    const {id} = req.params;
    const {data} = req.body;

    const user = users.find((each) => each.id === id);
    if(!user)
        return res.status(404).json({
    success : false,
    message : "User Not Found"
})

const updateUser = users.map((each) => {
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
    data : updateUser
   })

})

/**
 * Routes : /users/:id
 * Method : DELETE
 * Description : Deleting a user by their id  
 * Access : Public
 * Parameters : id
 */

router.delete("/:id",(req,res) => {
    const {id} = req.params;

    const user = users.find((each) => each.id === id);
    if(!user)
        return res.status(404).json({
    success : false,
    message : "User Not Found"
})

   const index = users.indexOf(user);
   users.splice(index,1)

   res.status(200).json({
    success : true,
    data : users,
   })
})

module.exports = router;