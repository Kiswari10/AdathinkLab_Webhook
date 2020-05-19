const express = require("express");
const app = express();
const config = require('./config');

const { port } = config;

app.post('/webhook', (req, res) => {
    res.json({mensaje:"Bienvenido"})
})

app.use(express.json());

app.listen(port, () => {
    console.info(`App listening on port ${port}`);
})
