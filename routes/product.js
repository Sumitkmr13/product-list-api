const express = require('express');
const productModel = require('../models/productsModel');

const router = express.Router();

router.post("/add",async function(request, response){
    // console.log('request.body',request.body);
    try{
        const dataBaseCreationResponse = await productModel.create(request.body);
        console.log('dataBaseCreationResponse',dataBaseCreationResponse);
        response.send({result:'Success'}); 
    }catch(error){
        console.log('error occured',error);
    }
});

router.get('/getAll',async function(request, response){
    try{
        const listOfProducts = await productModel.find({},{__v:0,_id:0});
        response.send(listOfProducts); 
    }catch(error){
        console.log('error occured',error);
    }
});

module.exports = router;