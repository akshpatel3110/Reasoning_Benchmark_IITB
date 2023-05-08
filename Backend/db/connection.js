const mongoose = require('mongoose');
const DB=process.env.DATABASE;

const conn=require("./singelton");
conn.getConnection();

mongoose.connection.on("error",(err)=>{
    console.error("Failed to connect to "+DB+"on startup" +err);
})
