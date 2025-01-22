const express = require("express");
const { addToCart, getCart, deleteItemFromCart } = require("../controllers/cart");
const router = express.Router();

router.post("/", addToCart);

router.get("/", getCart);

router.delete("/", deleteItemFromCart);

