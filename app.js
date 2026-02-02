// Importar la librería Express
const express = require('express');

// Crear una instancia de la aplicación Express
const app = express();

// Definir el puerto en el que escuchará el servidor
const PORT = 3000;

// Definir una ruta para la raíz (/) que responde a peticiones GET
app.get('/', (req, res) => {
  res.send('¡Hola Mundo!');
});

// Iniciar el servidor y escuchar en el puerto definido
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log('✨ Presiona Ctrl+C para detener el servidor');
});