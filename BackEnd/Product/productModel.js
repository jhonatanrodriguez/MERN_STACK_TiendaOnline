const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    productId:{
        type:String,
        requiere:true
    },
    referencia : {
        type:String,
        requiere:true
    },
    nombreProducto : {
        type:String,
        requiere:true
    },
    caracteristicasProducto : {
        type:String,
        requiere:true
    },
    unidadProducto : {
        type:String,
        requiere:true
    },
    precioProducto : {
        type:Number,
        requiere:true
    },
    categoriaProducto : {
        type: String,
        require:true
    },
    porcentajeDescuento : {
        type: Number,
        require:true
    },
    imageUrl : {
        type: String,
        require:true
    }
})
const Product = mongoose.model('product', productSchema)
module.exports= Product
