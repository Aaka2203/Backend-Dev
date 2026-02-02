import express from "express"
const router=express.Router();


let validation =(req,res,next)=>{
    const token = req.query.token;
    if(token=='admin123'){
        next();
    }else{
        res.send("acess denied")
    }
}
router.get("/login",validation,(req,res)=>{
    res.send("login here")
})
router.get("/signup",(req,res)=>{
    res.send("signup here")
})
export default router ;