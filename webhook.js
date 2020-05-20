const request = require("request");
const url = "http://localhost:3200/webhook"

let arrPares = []
for(let i =0; i< 20; i+=2 ) {
    arrPares.push(i)
}
let arrImpares = []
for(let i =1; i< 20; i+=2 ) {
    arrImpares.push(i)
}
const arrOfNumber = [...arrPares, ...arrImpares]
setInterval(() => {
    let data ={ arrOfNumber }
    request({
        method: 'POST',
        uri: url,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }, (error, response, body) => {
        if (error) {
            console.log("no se pudo enviar el mensaje")
        }
        let mensajes =JSON.parse(body)
        mensajes.forEach((mensaje) => {
            console.log(mensaje);
        })
    })
}, 5000)