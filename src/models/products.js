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
const updateProduct = async (id, prodcut) => {
    const productUpdated = await productsContenedor.update(id, prodcut);

    return productUpdated;
};

//borra un producto por su id
const deleteProduct = async (id) => {
    const prodcut = await productsContenedor.deleteById(id);

    return prodcut;
}


module.exports = {
    getAllProducts,
    getIdProduct,
    updateProduct,
    createProduct,
    deleteProduct
};