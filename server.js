const express = require("express");
const app = express();
const config = require('./config');
const middleware =require("./middleware");

const { port } = config;

app.use(express.json());

app.post("/webhook", (req, res) => {
    const {arrOfNumber} = req.body
    /* console.log(arrOfNumber) */
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
    /* console.log('result', result) */
    res.json(result)
})

app.listen(port, () => {
    console.info(`App listening on port ${port}`);
})
