const express = require('express');
const port = 8000;

// Importing Path so that we can use to set path of views
const path = require('path');
const app = express();

// Adding DataBase
const db = require('./config/mongoose');
const Task = require('./models/task');

// Adding Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

// Setting up ejs
app.set('view engine','ejs');
app.set('views' , path.join(__dirname,'views'));

// Use of Static Files
app.use(express.static('assets'));

// Task List
var taskList = [
    {
        Description : "I want to Dance",
        DueDate : "12 May 2024",
        categories : "Personal",
    },

    {
        Description : "I want to clean",
        DueDate : "12 May 2024",
        categories : "Others",
    },

    {
        Description : "I want to Party",
        DueDate : "12 May 2024",
        categories : "Personal",
    }
];

// Get Request
app.get('/' , function(req,res){
    // return res.render('home' , {
    //     title : "TODO APP USING MERN STACK",
    //     task_list : taskList
    // });

    Task.find({},
    )
    .then((tasks) =>{
        return res.render('home' , {
            title : 'TODO APP USING MERN STACK',
            task_list : tasks
        });
    })
    
    .catch((err) => console.log("It's an Error"));
});

// Post Request
app.post('/create-list' , function(req,res){
    // console.log(req.body);
    // req.body.id = Date.now().toString();
    // taskList.push({
    //     // name:req.body.name,
    //     // phone:req.body.phone
    //     Description : req.body.Description,
    //     DueDate : req.body.DueDate,
    //     categories : req.body.categories,
    //     id : req.body.id,
    // });

    // return res.redirect('back');

    Task.create({
        Description : req.body.Description,
        DueDate : req.body.DueDate,
        categories : req.body.categories

    },)
    .then((newTask) => console.log('*********' , newTask))

    .catch((err) => console.log("Error in creating a Task"));

    return res.redirect('back');
});

// Get all the ids first;
let arr = new Array;
app.get('/deleteIt' , function(req,res){
    let id = req.query.id;
    arr.push(id);

    // return res.redirect('back');
})

// Deleting the task
app.get('/delete-task' , function(req,res){

    // let id = req.query.id;

    // let taskIndex = taskList.findIndex(task => task.id == id);

    // if(taskIndex != -1){
    //     taskList.splice(taskIndex,1);
    // }

    if(arr.length != 0){
        for(let i of arr){
            // let taskIndex = taskList.findIndex(task => task.id == i);

            // if(taskIndex != -1){
            //     taskList.splice(taskIndex,1);
            // }
            Task.findByIdAndDelete(i,
            )
            .catch((err) => console.log("Hey it's an error while deleting"));
        }
    }

    return res.redirect('back');
});


// Listening our app on port 8000
app.listen(port , function(err){
    if(err){
        console.log(`Error While serving using express : ${err}`);
        return;
    }

    console.log(`Yup! My server is running successfully on port : ${port}`);
});


// Comments for myself
// Express Installed
// Ejs installed