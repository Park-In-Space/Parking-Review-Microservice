require('dotenv').config();
const express = require('express');
require('./db/sequelize');
const app = express();
const {review: ReviewModel} = require('./db/sequelize');
app.route('/').get(async(req,res)=>{
    try{
        const reviews = await ReviewModel.findAll({logging:console.log});
        res.send(reviews)
    }catch(e){
        throw e;
    }
});

const port = process.env.NODE_JS_LOCAL_PORT || 3002;
app.listen(port, ()=>{
    console.log(`Worker: process ${process.pid} is up on port ${port}`);
})