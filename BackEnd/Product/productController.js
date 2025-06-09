const productService = require('./productService')
function saveProduct(product, done){
    productService.saveProduct(product, done)
}
function getProduct(product, done){
    productService.getProduct(product,done)
}
function getProductById(product, productId, done){
    productService.getProductById(product, productId, done)
}
function deleteProductById(product, productId, done){
    productService.deleteProductById(product, productId, done)
}
function updateProductById(product, productId, updatedData, options, done){
    productService.updateProductById(product, productId, updatedData, options, done)
}

module.exports = { saveProduct, getProductById, getProduct, deleteProductById, 
    updateProductById }