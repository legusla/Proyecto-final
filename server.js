const express = require('express');
const Contenedor = require('./Contenedor');
const productosRouter = require('./routers/productos');
const carritoRouter = require('./routers/carrito');

const productosContenedor = new Contenedor('./productos.json');
const carritoContenedor = new Contenedor('./carrito.json');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/static', express.static('public'));

//app.get('/', function(req, res) {
  //  res.render('/index')
//});

//app.get('/form', function(req, res) {
//    res.render('/form');
//});

//app.get('/productos',  async function (req,res){
  //  productos = await productosContenedor.getAll();
    //res.render('pages/list-productos', {
      // productos
    //})
//});

//app.post('/productos', function (req,res){
  //  res.render('pages/list-productos')
//});

app.use('/api/productos', productosRouter);
app.use('/api/carrito', carritoRouter);

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Algo salio mal!');
});

const PORT = 8080;
app.listen(8080);
app.on('error', (error) => console.log('Error', error));
console.log(`El puerto ${PORT} se esta ejecutando`);