const express = require('express');
const db =require('./app/config/db.config.js')
const appRouter =require('./app/routes/router.js')
const app = express();
app.use('/api',appRouter);
app.use(express.json());
app.use(express.urlencoded({extended:true}))
// app.use("/api",getrouter)
app.get("/",(req,res)=>{
    res.send("open to project")
})
const dotenv = require('dotenv');
dotenv.config()
const PORT = process.env.Api_PORT

app.listen(PORT,()=>{
    console.log("running on port :"+PORT);
})