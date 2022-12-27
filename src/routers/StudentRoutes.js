const express = require('express');
const router = new express.Router();

// Conecting with the database
require("../db/connection.js");

// getting the model to create new student
const Student = require("../models/students");

// router.post("/students",(req,res)=>{
//     console.log(req.body);
//     const st = new Student(req.body);
//     st.save().then(()=>{
//         res.status(201).send(st);
//     }).catch((e)=>{
//         res.status(400).send(e);
//     });
// });


// Handling post request
// Registering new Students to the database
router.post("/students", async (req, res) => {
  try {
    const st = new Student(req.body);
    const new_st = await st.save();
    res.status(201).send(new_st);
  } catch (e) {
    res.status(400).send(e);
  }
});


// Handling get request
// getting data of all students
router.get("/students", async (req, res) => {
  try {
    const allStudentData = await Student.find();
    res.status(200).send(allStudentData);
  } catch (e) {
    res.status(400).send(e);
  }
});


// Handling get request
// Getting data of a particualar student using different parameters
router.get("/students/:arg/:val", async (req, res) => {
  let st;
  let value = req.params.val;
  let obj;
  try {
    const index = req.params.arg;
    if (index == 0) {
      const _id = req.params.val;
      st = await Student.findById(_id);
    } else if (index == 1) {
      obj = { name: value };
      st = await Student.find(obj);
    } else if (index == 2) {
      obj = { email: value };
      st = await Student.find(obj);
    } else if (index == 3) {
      obj = { phone: value };
      st = await Student.find(obj);
    }
    res.status(200).send(st);
    console.log(st);
  } catch (error) {
    res.status(500).send(error);
  }
});


// Handling patch request
// Updating data of a particular student
router.patch("/students/:id", async (req, res) => {
  try {
    const id = req.params.id;
    // const st = await Student.findById(id);
    // const update_st = await st.updateOne(req.body);
    const update_st = await Student.findByIdAndUpdate(id,req.body,{new : true});
    res.status(200).send(update_st);
  } catch (error) {
    res.status(500).send(error);
  }
});


// Handling Delete request
// Deleting data of a particular student
router.delete("/students/:id",async (req,res)=>{
  try {
    const id = req.params.id;
    const ack = await Student.findByIdAndDelete(id);
    res.status(200).send(ack);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports=router;