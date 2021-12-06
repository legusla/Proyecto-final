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
const addProductsToCart = async (id, idProduct) =>  {
    const cart = await cartContenedor.getById(id);
    const { products } = cart;
  
    products.push(idProduct);
  
    const newCart = {
      ...cart,
      products
    }
    const cartUpdated = await cartContenedor.update(id, newCart);
    return cartUpdated;
  };

//borra un producto de un carrito por id
const deleteProductToCart = async (id, idProduct) =>  {
    const cart = await cartContenedor.getById(id);
    const { products } = cart;

    products.cart = await cartContenedor.deleteById(idProduct);

    const newCart = {
      ...cart,
      products  
    }


    const cartUpdated = await cartContenedor.update(id, newCart, idProduct);
    return cartUpdated;
  };

module.exports = {
    createCart,
    deleteCart,
    getProductsByIdCart,
    addProductsToCart,
    deleteProductToCart
};