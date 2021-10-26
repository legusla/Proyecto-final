const express = require('express');
const Contenedor = require('./Contenedor');
const productosRouter = require('./routers/productos');

const productosContenedor = new Contenedor('./productos.json');

const app = express();

const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/static', express.static('public'));

app.get('/productos',  async function (req,res){
    productos = await productosContenedor.getAll();
    res.render('pages/list-productos', {
       productos
    })
});

app.post('/productos', function (req,res){
    res.render('pages/list-productos')
});

app.use('/api/productos', productosRouter);

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Algo salio mal!');
});

app.listen(PORT, () => console.log(`Servidor corriendo en : ${PORT}`));

app.on('error', (error) => console.log('Error: ', error));

console.log(__dirname);