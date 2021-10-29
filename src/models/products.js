const Contenedor = require('../../Contenedor');

const productsContenedor = new Contenedor('./data/products.json');

const getAllProducts = async () => {
    const list = await productsContenedor.getAll();

    return list;
};

const createProduct = async (product) => {
    const idProductSaved = await productsContenedor.save(product);

    return idProductSaved;
};

module.exports = {
    getAllProducts,
    createProduct
};