const Contenedor = require('../../Contenedor');

const cartContenedor = new Contenedor('./data/carrito.json');

const createCart = async (cart) => {
    const idCartSaved = await cartContenedor.save(cart);

    return idCartSaved;
};

const deleteCart = async (idCart) => {
    await cartContenedor.deleteById(idCart);

    return idCart;
};

const getProductsByIdCart = async (id) => {
    const cart = await cartContenedor.getById(id);
    const { products } = cart;

    return products;
};

const addProductsToCart = async (id, update) => {
    const cartUpdated = await cartContenedor.update(id, update);

    return cartUpdated;
};

const deleteProductToCart = async (id, idProduct) => {
    const cart = await cartContenedor.getById(id);
    const { products } = cart;

    products.splice(idProduct, 1);

    const newCart = {
        ...cart,
        products
    }
    const cartUpdated = await cartContenedor.update(id, newCart);
    
    return cartUpdated;
};

module.exports = {
    createCart,
    deleteCart,
    getProductsByIdCart,
    addProductsToCart,
    deleteProductToCart
};