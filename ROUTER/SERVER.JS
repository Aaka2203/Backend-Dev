import express from "express";
import userRouter from "./router/userRouter.js"
import registerroute from "./router/registerroute.js"
import reportroute from "./router/reportroute.js"

const port =3000;
const app=express();


app.use('/api',userRouter)
app.use('/api',registerroute)

app.use('/api',reportroute)

app.listen(port,()=>{
    console.log("Server is runnig on port"+port)
})