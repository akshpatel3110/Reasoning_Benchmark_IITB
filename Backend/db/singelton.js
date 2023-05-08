const mongoose = require('mongoose');
const DB=process.env.DATABASE;

const MongoSingelton = (()=>{
    let instance;
    const createConnection=async()=>{
        try{
        mongoose.set("strictQuery",true);
        const connection  =mongoose.connect(DB,{useNewUrlParser:true,useUnifiedTopology:true});
        console.log("Connection Established");
        return connection;
        }catch(e){
            console.error(e);
        }
    }
    const getConnection =()=>{
        if(!instance){
            instance=createConnection();
        }
        return instance;
    }
    return {
        getConnection
    }
})();
module.exports = MongoSingelton;