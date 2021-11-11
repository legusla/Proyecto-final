const Contenedor = require('../../Contenedor');

const cartContenedor = new Contenedor('./data/cart.json');

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
const addProductsToCart = async (id, products) => {
    try{
        const idProducts = products.map( products =>
             products.id);

            const productsFound = [];
            
            for(const idProduct of idProducts) {

                if( !idProduct) return {
                    status: 400,
                    error: 'no se recibio un id de un producto'
                }
                const product = await 
                    cartContenedor.getById(idProduct);

                    if( product.error) return {
                        status: 404,
                        error: `el producto con el id ${
                            idProduct} no existe`
                    }

                    productsFound.push(product);
            }
            if(!productsFound.length) return {
                 status: 404,
                 error: 'no se encontraron productos'
            };
            console.log(productsFound)
            return productsFound;
             
    }   catch(error) {
        //throw new Error('ocurrio un error al obtener los productos:', error)
    }
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