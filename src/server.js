const express = require('express');
const productsRouter = require('./routers/products');
const cartRouter = require('./routers/cart');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => 
    res.send({ data: Date.now() }))

app.use('/api/productos', productsRouter);
app.use('/api/carrito', cartRouter);

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Algo salio mal!');
});

const PORT = 8080;
app.listen(8080);
app.on('error', (error) => console.log('Error', error));
console.log(`El puerto ${PORT} se esta ejecutando`);