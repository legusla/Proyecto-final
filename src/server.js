const express = require('express');
const Contenedor = require('../Contenedor');

const productsRouter = require('./routers/products');
const cartRouter = require('./routers/cart');

const productsContenedor = new Contenedor('./products.json');
const cartContenedor = new Contenedor('./cart.json');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/carrito', async function(req, res) {
    const cart = await cartContenedor.getAll();
    res.render('pages/carrito', {
        cart
    })
});

app.get('/productos',  async function (req,res){
  const products = await productsContenedor.getAll();
    res.render('pages/lista-productos', {
       products
    })
});

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