const request = require("request");
const url = "http://localhost:3200/webhook"

setInterval(() => {
    let dato ={
        id: Math.round(Math.random()*10),
        mensaje:"Hola desde el webhook"
    }
    request({
        method: 'POST',
        uri: url,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dato)
    }, (error, response, body) => {
        if (error) {
            console.log("no se pudo enviar el mensaje")
        }
        let mensaje =JSON.parse(body)
        console.log(mensaje);
    })
}, 5000)