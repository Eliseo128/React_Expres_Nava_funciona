const express = require('express');
const app = express();
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:5173', // Cambia esto al origen de tu frontend

};

app.use(cors(corsOptions));

app.get('/api', (req, res) => {
  res.json({ frutas: ['pera', 'pina','platano'] });
});

app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});

