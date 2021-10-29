const express = require('express');

const Contenedor = require('../Contenedor');

const carritoContenedor = new Contenedor('./data/carrito.json');

const carritoRouter = express.Router();

carritoRouter.get('/', async (req, res) => {
    const lista = await carritoContenedor.getAll();
    res.send({
        message: 'Operación exitosa',
        data: lista
    });
})

carritoRouter.get('/:id?', async (req, res) => {
    const carritoId = req.params.id;
    const carrito = req.body;
    const idCarrito = await carritoContenedor.getById(carritoId, carrito);

    if (!idCarrito) {
        res.send({
            message: 'producto no encontrado',
            data: idCarrito
        });
    } else {
        res.send({
            message: 'operación exitosa',
            data: idCarrito
        });
    }
});

carritoRouter.post('/', async (req, res) => {
    const nuevoCarrito = req.body;

    const idCarritoGuardado = await carritoContenedor.save(nuevoCarrito);

    res.send({
        message: 'Operación exitosa',
        data: {
            ...nuevoCarrito,
            id: idCarritoGuardado
        }
    });
})

carritoRouter.put('/:id', async (req, res) => {
    const carritoId = req.params.id;
    const carrito = req.body;
    const carritoActualizado = await carritoContenedor.update(carritoId, carrito);

    if (!carritoActualizado) {
        res.send({
            message: 'operación incorrecta',
            data: carritoActualizado
        });
    } else {
        res.send({
            message: 'operación exitosa',
            data: carritoActualizado
        });
    }
});

carritoRouter.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const carrito = req.body;
    const deleteID = await carritoContenedor.deleteById(id, carrito);

    if (!deleteID) {
        res.send({
        message: 'No se pudo eliminar',
        data: deleteID  
    });
    } else {
        res.send({
            message: 'Se elimino exitosamente',
            data: deleteID      
        });  
    }
    console.log(deleteID);
})

module.exports = carritoRouter;

console.log(__dirname);