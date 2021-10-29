const express = require('express');
const isAdmin = require('../middlewares/isAdmin');
const { getAllProducts, createProduct } = require('../models/products');

const productsRouter = express.Router();

productsRouter.get('/', async (req, res) => {
    const data = await getAllProducts();

    res.send({ data });
});

//isAdmin
productsRouter.post('/', isAdmin, async (req, res) => {
    const newProduct = req.body;
    const idProductSaved = await createProduct(newProduct);

    res.send({ data: idProductSaved });
});


module.exports = productsRouter;

