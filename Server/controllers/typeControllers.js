//импортируем модель данных типа оборудования
const {Eq_Type} = require('../models/models');
//импортируем обработчик ошибок
const ApiError = require('../error/ApiError');
//const e = require("express");





//создаем класс и  соотвествующие 3 метода клааса по запросам к типам оборудования
class typeControllers{




    //асинхронная функция показать все записи типов оборудований
    async view_all(req,res,next) {
        try{
            let types = await Eq_Type.findAll();
            return res.json(types);
        } catch (e) {
            next(ApiError.NotFound(e.message));
        }
    }



    //создать запись нового типа оборудования
    async create(req,res,next) {
        //так как возможны ошибки, делаем через try catch
        try {
            //делаем реструктуризацию через json с клинта
            const {name,s_name,active} = req.body;
            //с помощью креате в порядке стобцов вставляем
            //реструктуризарованные данные
            const type = await Eq_Type.create({name,s_name,active});
            return res.json(type);//возвращаем в качесве ответа
            //клиенту джейсон файл сформированной записи как результат
        } catch (e) {
            next(ApiError.NotFound(e.message));
        }
    }








    //удалить запись существующего типа оборудования
    async delete(req,res,next) {
        //так как возможны ошибки, делаем через try catch
        try {
            //делаем реструктуризацию через json с клинта
           // const {s_name} = req.body;
            const {id} = req.body;
            //с помощью креате в порядке стобцов вставляем
            //реструктуризарованные данные
           const type = await Eq_Type.destroy({
                where:
                    { id: id }
        });
            return res.json(type);
        } catch (e) {
            next(ApiError.NotFound(e.message));
        }
    }
}
module.exports = new typeControllers(); //экспортируем объект класса