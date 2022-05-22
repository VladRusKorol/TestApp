//иимпортируем класс ошибки
const ApiError = require('../error/ApiError');

//экспортируем функцию мидлвеар
//в ачестве аргументов ошиба, запрос, ответ, нект на следующую функцию
module.exports = function (err, req, res, next) {
    //если ошибка принадлженит классу ошибки ApiError
    if (err instanceof ApiError){
       return  res.status(err.status).json({massage: err.message})
    }
    //если ошибка принадлженит классу ошибки ApiErrorесли не приналлежит «внутренняя ошибка сервера»
    return res.status(500).json({massage: "Непредвиденная ошибка"})
}