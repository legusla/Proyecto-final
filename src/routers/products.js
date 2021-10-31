const express = require('express');
const isAdmin = require('../middlewares/isAdmin');
const { getAllProducts, createProduct, getIdProduct, updateProduct, deleteProduct } = require('../models/products');

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

//ACCESO PARA ADMIN

//crea un producto nuevo
productsRouter.post('/', isAdmin, async (req, res) => {
    const newProduct = req.body;
    const idProductSaved = await createProduct(newProduct);

    res.send({ data: idProductSaved });
});

//actualiza un producto por su id
productsRouter.put('/:id', isAdmin, async (req, res) => {
    const idUpdatedProduct = req.params.id;
    const updatedProduct = req.body;
    const idProductUpdated = await updateProduct(idUpdatedProduct, updatedProduct);

    res.send({ data: idProductUpdated });
});

//Borra un producto por su id
productsRouter.delete('/:id', isAdmin, async (req, res) => {
    const idDelete = req.params.id;
    const idDeleteProduct = await deleteProduct(idDelete);

    res.send({ data: idDeleteProduct});
});


module.exports = productsRouter;

