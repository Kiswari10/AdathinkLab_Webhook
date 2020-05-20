module.exports.multiply = (req, res, next) => {
    console.log("")
    console.log("Middleware Global");
    let arrMessages = [];
    const {arrOfNumber} = req.body
    arrOfNumber.forEach(number => {
       const obj = {
           resultado: number * 89
       };
       arrMessages.push(obj)
    });
    req.multiply= {arrMessages}
    next()
};
