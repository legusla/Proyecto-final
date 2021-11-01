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

//actualiza un producto por su id
const updateProduct = async (id, product) => {
    const productUpdated = await productsContenedor.update(id, product);

    return productUpdated;
};

//borra un producto por su id
const deleteProduct = async (id) => {
    const product = await productsContenedor.deleteById(id);

    return product;
}


module.exports = {
    getAllProducts,
    getIdProduct,
    updateProduct,
    createProduct,
    deleteProduct
};