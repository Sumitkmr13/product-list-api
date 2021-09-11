const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({
    "productName": String,
    "price": String
},{
    collection:'productsList'
});

const productsModel = mongoose.model('productsModel',productsSchema);
module.exports = productsModel;