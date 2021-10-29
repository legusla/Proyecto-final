const express = require('express');
const { createCart, deleteCart , addProductsToCart, getProductsByIdCart, deleteProductToCart } = require('../models/cart')

const cartRouter = express.Router();

//Crea un carrito y devuelve si id.
cartRouter.post('/', async (req, res) => {
    const cart = req.body;
    const idCartSaved = await createCart(cart);

    res.send({ data: idCartSaved });
});

//Vacia un carrito y lo elimina.
cartRouter.delete('/:id', async (req, res) => {
    const cart = req.body;
    const idCartDeleted = await deleteCart(cart);

    res.send({ data: idCartDeleted });
});

//Me permite listar todos los productos guardados en el carrito.
cartRouter.get('/:id/productos', async (req, res) => {
    const cartId = req.params.id;
    console.log({cartId})
    const list = await getProductsByIdCart(cartId);
    console.log({list})

    res.send({ data: list });
});

//Para incorporar productos al carrito por su id de producto
cartRouter.post('/:id/productos', async (req, res) => {
    const cartId = req.params.id;
    const cartUpdate = req.body;

    const cart = await addProductsToCart.apply(cartId, cartUpdate);

    res.send({ data: cart });
});

//Elimar un producto del carrito por su id de carrito y de producto
cartRouter.delete('/:id/productos/:id_prod', async (req, res) => {
    const cartId = req.params.id;
    const productId = req.params.id_prod;

    const cart = await deleteProductToCart(cartId, productId);

    res.send({ data: cart });
});

module.exports = cartRouter;
