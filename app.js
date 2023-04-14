const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.listen(5000, () => {
  console.log('Servidor iniciado en el puerto 5000');
});

// Ruta principal
app.get('/', (req, res) => {
  res.render('index');
});

// Ruta de clientes
app.get('/clientes', (req, res) => {
  const clientes = [
    { nombre: 'Andreww', Apellido: 'Cuellar' },
    { nombre: 'Kevin', Apellido: 'Maño' },
    { nombre: 'Consuelo', Apellido: 'Villanueva' }
  ];
  res.render('clientes', { clientes });
});

// Ruta de productos
app.get('/productos', (req, res) => {
  const productos = [
    { nombre: 'Iphone', precio: 4400 },
    { nombre: 'Refrigeradora', precio: 5020 },
    { nombre: 'Microondas', precio: 1200 }
  ];
  res.render('productos', { productos });
});