const express = require('express');
const router = express.Router();
const User=require('../models/userModel');
const mongoose=require('mongoose')

router.post('/register', async(req,res)=>{
    const {name,email,password}=req.body;
    const newUser=new User({name,email,password,_id: new mongoose.Types.ObjectId()})
    try {
       newUser.save();
       res.status(200).json(
        {
            success:true,
            message:"Register Success",
        }
       )
    } catch (error) {
        res.status(400).json({message:error})
    }
})

router.post('/login', async(req,res)=>{
    const {email,password}=req.body;
    try {
       const user= await User.find({email,password});
       if(user.length>0){
        const currentUser={
            name:user[0].name,
            email:user[0].email,
            isAdmin:user[0].isAdmin,
            _id:user[0]._id,
        }
        res.status(200).send(currentUser)
       }else{
        res.status(400).json({
            message:'login failed'
        })
       }
    } catch (error) {
        res.status(404).json({
            message:'something went wrong'
        })
        
    }
})

router.get('/getallusers',async(req,res)=>{
    try {
        const users= await User.find({});
        res.status(200).send(users);
    } catch (error) {
        res.status(404).json({message:error.stack});
    }
})

router.post('/deleteuser', async(req,res)=>{
    const userid=req.body.userid
    try {
        const deletedUser = await User.findOneAndDelete({ _id: userid });
        res.status(200).send(userid);
    } catch (error) {
        console.log('error aagya');
        console.log(error);
        res.json({message:error});
    }
})
/*
router.post('/deleteuser', async (req, res) => {
    const userid = req.body.userid; // Assuming 'userid' is sent in the request body
    try {
      const deletedUser = await User.findOneAndDelete({ _id: userid });
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ message: 'User deleted successfully', deletedUser });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', error: error.message });
    }
  });
  */
module.exports= router;

