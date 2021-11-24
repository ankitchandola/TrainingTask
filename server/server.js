// import express (after npm install express)
const express = require('express');
const mongoose = require("mongoose");
const TableModel = require('../server/models/Table') 
const bodyParser = require ('body-parser')
const cors = require ('cors')




// create new express app and save it as "app"
const app = express();
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())

mongoose.connect("mongodb+srv://newuser:axRUqK8rPWyXpWT@crud.dsr21.mongodb.net/Crud?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    
},console.log("mongo bhai"))

// server configuration

app.get("/", async(req, res, next) => {
    // res.status(200).json({
    //   msg: "new message"
    // })
   TableModel.find()
   .then(result=>{
     res.status(200).json({
       newTable:result
     })
   })

    .catch(err=>{
      comsole.log(err)
      res.status(500).json({
        error:err
      })
    })
})
app.get("/:id", async(req, res, next) => {
  console.log(req.params.id)
  
 TableModel.findById(req.params.id)
 .then(result=>{
   res.status(200).json({
     newTable:result
   })
 })

  .catch(err=>{
    comsole.log(err)
    res.status(500).json({
      error:err
    })
  })
})

app.delete('/:id',(req,res,next)=>{

  TableModel.remove({_id:req.params.id})
  .then(result=>{
    console.log(result)
    res.status(200).json({
      newTable:result
    })
  })
  .catch(err =>{
    console.log(err)
    res.status(500).json({
      error:err
    })
  })
})
// create a route for the app
app.post("/", async(req, res) => {
   console.log(req.body)
   const table = new TableModel({
      _id: new mongoose.Types.ObjectId,
      name:req.body.name,
      childrens:req.body.childrens

   })

    await table.save()
    .then(result => {
      console.log(result)
      res.status(200).json({
        newTable:result
      })
    })
    
    .catch(err =>{
      console.log(err)
      res.status(500).json({
        error:err
      })
    })


});

// make the server listen to requests
app.listen(3001, () => {
  console.log("Server running on port 3001");
});

