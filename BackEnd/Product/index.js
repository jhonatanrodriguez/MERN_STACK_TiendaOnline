
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express()
const productRouter = require('./productRouter');
app.use(cors());
app.use("*",bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use(productRouter)
app.listen(3000,()=>{
    console.log('listening....');
})




