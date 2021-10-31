const Contenedor = require('../../Contenedor');

const cartContenedor = new Contenedor('./data/cart.json');

//muestra todos los productos dentro del carrito
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
const deleteCart = async (id) => {
    const deleteProduct = await cartContenedor.deleteById(id);
    const cartUpdated = await cartContenedor.update(id, deleteProduct);
    
    return cartUpdated;
};

//te muestra un producto dentro de un carrito por id
const getProductsByIdCart = async (id) => {
    const cart = await cartContenedor.getById(id);
    const  { products }  = cart;

    return products;
};

//agrega un producto a un carrito por id
const addProductsToCart = async (id, idProduct) => {
    const cart = await cartContenedor.getById(id);
    const { products } = cart;

    products.splice(idProduct, 1);


    const cartUpdated = await cartContenedor.update(id, products);

    return cartUpdated;
};

//borra un producto de un carrito por id
const deleteProductToCart = async (id, idProduct) => {
    const cart = await cartContenedor.getById(id);
    const  { products }  = cart;

    products.splice(idProduct, 1);

    const newCart = {
        ...cart,
        products
    }
    console.log(newCart);
    console.log(cart);
    console.log(products);

    const deleteProduct = await cartContenedor.deleteById(id.products);

    const cartUpdated = await cartContenedor.update(id, deleteProduct);
    
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