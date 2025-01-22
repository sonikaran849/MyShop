const express = require("express");
const { getAllProducts, createProduct, updateProduct, deleteProduct } = require("../controllers/product");
const router = express.Router();


router.get("/", getAllProducts);

router.post("/create", createProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

module.exports = router;