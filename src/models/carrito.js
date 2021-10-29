const Contenedor = require('../../Contenedor');

const carritoContenedor = new Contenedor('./data/carrito.json');

const crearCarrito = async (carrito) => {
    const idCarritoGuardado = await carritoContenedor.save(carrito);
    return idCarritoGuardado;
};

const 