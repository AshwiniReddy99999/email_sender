const express=require('express')
const nodemailer = require('nodemailer');
const cors=require('cors');
const app=express();
app.use(express.json());
app.use(cors())

app.post('/mail',(req,res)=>{
    console.log(req.body)
    var transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:"reddy120799@gmail.com",
            pass:"qxzalrjblhfsloht"
        }

    })
    const mailOptions={

        from:"reddy120799@gmail.com",
        to:req.body.email,
        subject:req.body.subject,
        description:req.body.description,
        html:`
        <div style="padding:10px;border-style: ridge">
        <h3>Contact Details</h3>
        <ul>
            <li>Email: ${req.body.email}</li>
            <li>Subject: ${req.body.subject}</li>
            <li>Message: ${req.body.description}</li>
        </ul>
        `
    }
    transporter.sendMail(mailOptions,function(err,data){
        if(err){
            res.status(404).json({
                status:"failure",
                message:err.message
            })
        }else{
            res.status(200).json({
                status:"success",
                message:"Email sent successfully"
            })
        }
    })
})





app.listen(5000,()=>{
    console.log('server is up at port 5000')
})