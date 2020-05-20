const request = require("request");
const url = "http://localhost:3200/webhook"

/* 
let arrPares = []
    let arrImpares = []
    for(let i = iterator; i< limit; i++ ) {
        if(i %2 === 0){
            arrPares.push(i)
        } else {
            arrImpares.push(i)
        }
    }
    const arrOfNumber = [...arrPares, ...arrImpares]
    iterator += 20
    limit += 20;
    let data ={ arrOfNumber }
*/
let limit = 20
let iterator = 0;
let condition = false
setInterval(() => {
    let arrPares = []
    let arrImpares = []
    let arrOfNumber = []
    for(let i = iterator; i< limit; i++ ) {
        if(i %2 === 0){
            arrPares.push(i)
        } else {
            arrImpares.push(i)
        }
    }
    if(condition) {
        arrOfNumber = arrImpares
        iterator += 20
        limit += 20;
        condition = !condition;
    } else {
        arrOfNumber = arrPares
        condition = !condition;
    }
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