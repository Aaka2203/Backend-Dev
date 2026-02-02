import express from "express"
const router =express.Router();

router.get('/',(req,res)=>{
    res.send("Server is running")
})
router.get('/user',(req,res)=>{
    res.send("user route")
})
export default router;