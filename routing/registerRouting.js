const express=require('express');
const nodemailer = require("nodemailer");
const Register = require('../model/RegisterModel');
const { Slide } = require('react-toastify/unstyled');
const registerRouter = express.Router();


const transport = nodemailer.createTransport({
   service: "gmail",
   auth:{
      user:"kavithachinelli699@gmail.com",
      pass: "zgdv rtai pckc ocnl",
   },
});

registerRouter.post('/register', async (req, res) =>{
   try{
     const registerdata = new Register(req.body);
    const result = await registerdata.save();
    if(result._id){
        res.status(200).send({message:'Register added successfully'});
    }
    else{
         res.status(400).send({message:'failed registration'});
    }
   }
   catch(err){
    res.status(400).send({message:'failed registration', error:err.message});
   }
});


registerRouter.post('/forgotpassword', async (req, res) =>{
   try
   {
      const {email} =req.body;
      const user = await Register.findOne({ email:email});
      if(!user) {
         return res.status(200).send({message:'User not found'});
      }
      else{
           const mailOptions = {
            from:"kavithachinelli699@gmail.com",
            to:"kavithachinnu319@gmail.com",
            subject:"Forgot password Test",
            text:`Password is ${user.password}`,
         };
         await transport.sendMail(mailOptions);
         return res.status(200).send({message: 'Password reset email sent'});


      }

   }
   catch(err){
    res.status(400).send({message:'failed registration', error:err.message});
   }
   
});


registerRouter.post('/login', async(req, res) =>{
   try
   {
    const {email, password} =req.body;
    const user = await Register.findOne({email:email});
   if(!user)
    {
    return res.status(200).send({message:'User not found'});
   }
   else if(user.password !== password)
    {
    return res.status(200).send({message: 'Invalid password'});
   }
   else
    {
     return res.status(200).send({message: 'Login sucessful'});
   }
   }
   catch(err) {
    res.status(400).send({message:'Login failed', error:err.message});
   }

});


module.exports = registerRouter;
