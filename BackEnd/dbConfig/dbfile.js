const express = require('express');
const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1/OrderDb'
const app = express()
mongoose.connect(url, {useNewUrlParser:true})
const connection = mongoose.connection
connection.on('open', ()=>{
    console.log('Connected...');
})
app.use(express.json())






