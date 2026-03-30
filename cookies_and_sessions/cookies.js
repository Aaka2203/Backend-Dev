import express from 'express';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';

const app = express();

app.use(cookieParser('my-super-secret-key'));



const authMiddleware = (req,res,next)=> {
  if(!req.cookies.token){
    res.send("Invalid user");
    return;
  }
  next()
}

app.get('/set-cookie', (req,res) =>{
  let user = {
    name: "rohan",
    email : "rohan@gmail.com"
  };

  const token = jwt.sign(user,"qwertyuiop",{expiresIn:"1h"});
  console.log("cookies sent!");

  res.cookie("token",token,{httpOnly:true});
  res.send("Cookie has been set")

})

app.get('/get-cookie',authMiddleware, (req,res) =>{

  
  const name = req.cookies.name;
  res.send(`cookie value : ${name}`);
})

app.get('/profile',authMiddleware, (req,res) =>{

  
  const name = req.cookies.name;
  res.send(`welcome : ${name}`);
})

app.get('/logout',authMiddleware, (req,res) =>{

  
  res.clearCookie("name")
  res.send(`logged out`);
})

app.listen(3000,()=> console.log('Server is running on port 3000'));
