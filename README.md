# BackendBooksTask

deployment details=>

I have used Render for deployment. In this deployment process I have add the environment variable as the MongoDB url stored in my .env file.

Here is my deplyment link=>

https://backendtask-ue3a.onrender.com/


1)Instruction to set up and run the application locally =>

A) git clone https://github.com/Rohitphulpagar/BackendBooksTask.git
cd BackendBooksTask

B)Install dependencies=> npm install

C)create a '.env' file in the root directory and store the MongoDB url for connectivity.

D)Start application node server.js

2)API end point and their uses=>

a)Add a book in the database
Endpoints:->POST /user/addBook

b)Show the all books details in the database
Endpoints:->GET /user/list

c)Display particular data of that id matches in the database.
Endpoints:->GET /user/list/:id

d)Update the particular book data in the database
Endpoints:->PUT /user/update/:id

e)Delete a particular data of that id matches in the database
Endpoints:->DELETE /user/delete/:id


3)Decisions and Assumptions

During the development=>
In this application I used Express.js beacause using Node.js write code using HTTP is very difficult to understand and write that why I used Express.js.

a)The API is build using Node.js and Express.js.

b)Use the books model contain data like Author, Title, Summary in the database.

c)Created dynamic route to perform updation and deletion task using specific id

d)Use try catch block to handle internal server error.

e)Use MondoDB methods like find, FindByIdAndUpdate, findByIdAndDelete, findById to perform CRUD operations.

f)Uses the HTTP method
1)GET 2)POST 3)PUT/PATCH 4)DELETE

g)Use the mongoose (object data modelling) library for MongoDB and Node.js connectivity.

h)Use body-parser middleware.
