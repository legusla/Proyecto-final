const Contenedor = require('../../Contenedor');

const cartContenedor = new Contenedor('./data/cart.json');

//crea un carrito y te da su id
const createCart = async (cart) => {
    const idCartSaved = await cartContenedor.save(cart);
    return idCartSaved;
};

//borra un carrito por id
const deleteCart = async (id) => {
    const deleteCart = await cartContenedor.deleteById(id);
    return deleteCart;
};

//te muestra un producto dentro de un carrito por id
const getProductsByIdCart = async (id) => {
    const cart = await cartContenedor.getById(id);
    const  { products }  = cart;
    return products;
};

//agrega un producto a un carrito por id
const addProductsToCart = async (id, update) => {
    const cartUpdated = await cartContenedor.update(id , update)
    return cartUpdated;
};

//borra un producto de un carrito por id
const deleteProductToCart = async (id, idProduct) => {
    const cart = await cartContenedor.getById(id);

    cart.products = cart.products.filter(products => products.id != idProduct);
    const cartUpdated = await cartContenedor.update(id, idProduct);
    console.log(cartUpdated)
    //return cartUpdated;
};

module.exports = {
    createCart,
    deleteCart,
    getProductsByIdCart,
    addProductsToCart,
    deleteProductToCart
};