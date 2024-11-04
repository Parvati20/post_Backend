// //these two are import statement
// // ye common js module system
// // ye synchronous hoti hai(nature wise)
// //server side rendering
// // dynamic imports are not allowed.

// //importing express
// const express=require('express'); 
// //export it
// module.exports=express();

// // ye asynchronous hoti hai(nature)
// // ye ES(echma script module system)
// //server side  and client side rendering both
// // dynamic imports are not allowed.

// //importing express
// import express from 'express';
// //export it
// export default express();


const express=require('express');
const data=require('./data');
const cors=require("cors");
const bodyParser = require("body-parser");
const app=express();//creates a instance of express, App is used to handle requests and responses, routing, server configuration etc. (creates express app or it is used to create express application)
const port=3000;


app.use(cors());
app.use(bodyParser.json()); 

//this is a route handler.it is a function that is executed when a request is made to the specific path
// app.get ye phla parameter route lete hai aur dusra callback function 
app.get("/",(req,res)=>{
    res.send("Please switch to /api/data to get the data");
    // nodemon:-ye ek tool hai jo ye continue server ko listen krte hai
    // npm i nodemon
    //run-npm start

});
// Routes are defined using app.get() method. It takes two arguments, the path and the route handler.
app.get("/users", (req, res) => {
    res.send(data);
  });


//get requests for specific user


app.get("/users/:userId", (req, res) => {
    // this :id is a route parameter. It is a placeholder for the actual value that will be passed in the request. Dynamic route
    const id = req.params.userId; // this is how you access the route parameter in express.
    console.log(id);
    const user = data.find((user) => user.id == id); // find the user with the specified id.
    console.log(user);
    res.status(200).send(user); // send the user as response.
  });

  app.post("/users", (req, res) => {
    // res.send("post request to homepage");

    const newUser = req.body;
    console.log(newUser);
    data.push(newUser);
    const id = data.length;
    console.log(id)

    // const modififiedUser={...newUser,id:data.length+1};
    // console.log(modififiedUser);
    // data.push( modififiedUser);
    // res.status(201).json(modififiedUser);


  });
   



//start the server and listen on the port
// app.listen ek method hai,jo hamare server ko start krta hai
// aur ye 2 cheeje leta hai, ek port number jis pr hume serve krna hai
// dusra callback function
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    console.log(`Server is running on port ${port}, data: `, data);
});
