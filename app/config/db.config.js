const {Pool} = require('pg')
const dotenv =require('dotenv')
dotenv.config()

const pool = new Pool({
    port:process.env.PORT,
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PWD,
    database: process.env.DB_NAME
    
})
pool.connect(error =>{
    if(error)throw error;
    console.log("DataBase connected succcessully");

})
module.exports=pool