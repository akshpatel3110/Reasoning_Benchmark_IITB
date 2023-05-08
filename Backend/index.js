const dotenv = require('dotenv');
var bodyParser = require('body-parser')
const express = require("express");
const cors=require('cors');
const upload = require('./router/upload');
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

require("./db/connection");
app.use(upload);
const port=process.env.PORT || 5000 ;

app.listen(port, 
    () => console.log(`Server Start at the Port ${port}`));
    
  


