const express = require("express");
const app = express();
const config = require('./config');
const middleware =require("./middleware");

const { port } = config;

app.use(express.json());
app.use(middleware.multiply);

app.post("/webhook", (req, res) => {
    const {arrOfNumber} = req.body
    const { arrMessages } = req.multiply
    arrMessages.forEach((message) => {
        console.log({ middleware: message})
    })
    console.log("")
    let condition = [];
    let result = [];
    arrOfNumber.forEach((number) => {
        if(number %2 === 0){
            condition = { Server: "Recibí un número par"}
        } else {
            condition = { Server: "Recibí un número impar"}
        }
        result.push(condition)
        console.log( {Webhook : `{"mensaje":"${number}"}`})
    })
    res.json(result)
})

app.listen(port, () => {
    console.info(`App listening on port ${port}`);
})
