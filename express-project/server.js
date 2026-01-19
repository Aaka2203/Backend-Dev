const express=require("express")
const app=express();
app.get("/",(req,res)=>{
    res.send("hellodone")
})
app.get("/user",(req,res)=>{
    res.send("User route")
})
app.get("/userdetail", (req, res) => {
  res.status(400).json({
    name: "Aakarsh",
    age: 22,
    course: "B.Tech",
    skills: ["Java", "DSA", "Node.js"]
  })
})
app.get("/class",(req,res)=>{
    res,send("3H-MERN-3Y")
})
app.get("/about", (req, res) => {
  res.send("This is About Route");
})
app.get("/search", (req, res) => {
  const name = req.query.name || "Guest";
  res.send(`Searching for ${name}`);
});
app.post("/login", (req, res) => {
  res.send("Login Successful (Dummy Route)");
});
app.get("/home", (req, res) => {
  res.send("Welcome Home");
});
app.get("/contact", (req, res) => {
  res.send("Contact us at support@example.com");
});
app.get("/hello", (req, res) => {
  res.send("Hello Aakarsh 👋");
});
app.get("/uniROLLNO",(req,res)=>{
    res.send("2315000003")
})
app.listen(3000,()=>{
    console.log("server is running")
})