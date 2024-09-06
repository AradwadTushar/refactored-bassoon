# Book Record Management system "

## Routes and EndPoints

### user
POST : Create a new user
GET: Get all the list of users 

## /users/{id}
GET : GEt user by id 
PUT : Uodate a user by id
DELETE : Delte user ID (chk if he/she has still an issued book && is there any finde to be paid)

### /users/subscription Details/{id}
GET : user subscription details 
    >> Date of subscription
    >> Validity
    >> fine if any

### /books
GET : Get all books
POST : Create/Add a new book entry

### /books/{id}
GET : get a book by id
PUT : update a book by id


### /books/issued
GET : Get all issued books 

### /books/issued/withfine
GET : Get all issued books with fine


# subscription Type :
    >> Basic (3 months)
    >> Standard (6 months)
    >> Premium (12 months)


# Cmds
    >>npm init 
    >>npm i express
    >>npm i nodemon


 ## MongoDB :
       npm i mongoose
       npm i mongodb

       mongodb+srv://aradwadtushar2004:29-05-2004@cluster0.75x6n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

       npm i dotenv