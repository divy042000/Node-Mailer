const nodemailer=require('nodemailer');
const {EMAIL,PASSWORDS} = require('../env.js');
const signup= async (req,res)=>{

    // testing account
    let testAccount = await nodemailer.createTestAccount();
     
    let transporter=nodemailer.createTransport({
    host:"smtp.ethereal.email",
    port:587,
    secure:false,
    auth:{
      user:testAccount.user,
      pass:testAccount.pass, 
    }
    });

    let message={
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Thank You For registering with us", // plain text body
    html: "<b>Thank You For registering with us</b>", // html body
    }
    
    transporter.sendMail(message).then((info)=>{ 
        return res.status(201).json({msg:"You should receive email",
    info:info.messageId,preview:nodemailer.getTestMessageUrl(info)})
    }).catch(error=>{
        return res.status(500).json({error})
    })


    // res.status(201).json("SignUp Sucessfully !!!");  
}

const getBill=(req,res)=>{

    let config={
        service:'gmail',
        auth:{
            user:'EMAIL',
            pass:'PASSWORD'
        }
    }
    let transporter=nodemailer.createtransport(config)
    // res.status(201).json("Signup Sucessfully !!!");
}

module.exports={
    signup,getBill 
}