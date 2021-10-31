const express = require('express');
const isAdmin = require('../middlewares/isAdmin');
const { getAllProducts, createProduct, getIdProduct } = require('../models/products');

const productsRouter = express.Router();

productsRouter.get('/', async (req, res) => {
    const data = await getAllProducts();

    res.send({ data });
});

productsRouter.get('/:id?', async (req, res) => {
    const productId = req.params.id;
    const list = await getIdProduct(productId);

    res.send({ data: list });   
});

//isAdmin
productsRouter.post('/', isAdmin, async (req, res) => {
    const newProduct = req.body;
    const idProductSaved = await createProduct(newProduct);

    res.send({ data: idProductSaved });
});


module.exports = productsRouter;

