const Contenedor = require('../../Contenedor');

const cartContenedor = new Contenedor('./data/carrito.json');

const getAllCart = async (products) => {
    const cart = await cartContenedor.getAll(products);

    return cart;
};

//crea un carrito y te da su id
const createCart = async (cart) => {
    const idCartSaved = await cartContenedor.save(cart);

    return idCartSaved;
};

//borra un carrito por id
const deleteCart = async (idCart) => {
    await cartContenedor.deleteById(idCart);

    return idCart;
};

//te muestra un producto dentro de un carrito por id
const getProductsByIdCart = async (id) => {
    const cart = await cartContenedor.getById(id);
    const { products } = cart;

    return products;
};

//agrega un producto a un carrito por id
const addProductsToCart = async (id, update) => {
    const cartUpdated = await cartContenedor.update(id, update);

    return cartUpdated;
};

//borra un producto de un carrito por id
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
    getAllCart,
    createCart,
    deleteCart,
    getProductsByIdCart,
    addProductsToCart,
    deleteProductToCart
};