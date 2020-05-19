const express = require("express");
const app = express();
const config = require('./config');

const { port } = config;

app.use(express.json());

app.post('/webhook', (req, res) => {
    const dato = req.body
    console.log(dato)
    res.json({mensaje:"Hola desde el server"})
})

app.listen(port, () => {
    console.info(`App listening on port ${port}`);
})
