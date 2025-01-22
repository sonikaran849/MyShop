const Product = require("../models/product");

async function getAllProducts(req,res){
    try {
        const products = await Product.find();
        res.send(products);
    } catch (err) {
        res.status(500).send(err);
    }
};


async function createProduct(req,res){
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).send(product);
    } catch (err) {
        res.status(400).send(err);
    }

}

async function updateProduct(req,res){
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(product);
    } catch (err) {
        res.status(400).send(err);
    }
}

async function deleteProduct(req,res){
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports = {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct
};