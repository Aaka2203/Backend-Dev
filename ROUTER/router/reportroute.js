import express from "express"
const router=express.Router();

router.get('/profile',(req,res)=>{
    res.send("Profile is here")
})
router.get('/report',(req,res)=>{
res.send("report is here")
}
)

export default router