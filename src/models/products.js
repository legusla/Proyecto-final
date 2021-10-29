const Contenedor = require('../../Contenedor');

const productsContenedor = new Contenedor('./data/products.json');

//muestra todos los productos
const getAllProducts = async () => {
    const list = await productsContenedor.getAll();

    return list;
};

//crea un produto y te da su id
const createProduct = async (product) => {
    const idProductSaved = await productsContenedor.save(product);

    return idProductSaved;
};

module.exports = {
    getAllProducts,
    createProduct
};