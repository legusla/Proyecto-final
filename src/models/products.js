const Contenedor = require('../../Contenedor');

const productsContenedor = new Contenedor('./data/products.json');

//muestra todos los productos
const getAllProducts = async () => {
    const list = await productsContenedor.getAll();

    return list;
};

//muestra un producto por su id
const getIdProduct = async (id) => {
    const productId = await productsContenedor.getById(id);

    return productId;
};

//crea un produto y te da su id
const createProduct = async (product) => {
    const idProductSaved = await productsContenedor.save(product);

    return idProductSaved;
};

module.exports = {
    getAllProducts,
    getIdProduct,
    createProduct
};