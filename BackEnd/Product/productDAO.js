const mongoose = require('mongoose');
require('../dbconfig/dbfile')

async function saveProduct(product, done) {
    const data = await product.save()
    done(undefined, data)
}
async function getProduct(product, done) {
    const data = await product.find()
    done(undefined, data)
}
async function getProductById(product, productId, done) {
    const data = await product.findById(productId)
    done(undefined, data)
}
async function deleteProductById(product, productId, done) {
    const data = await product.findByIdAndDelete(productId)
    done(undefined, data)
}
async function updateProductById(product, productId, updatedData, options, done) {
    const data = await product.findByIdAndUpdate(productId, updatedData, options)
    done(undefined, data)
}
module.exports = { saveProduct, getProductById, getProduct, deleteProductById, updateProductById }
