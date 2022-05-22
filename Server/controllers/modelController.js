const {Eq_Model} = require('../models/models'); //подключаем модель данных
//импортируем обработчик ошибок
const ApiError = require('../error/ApiError');


class modelTypeController{



    //асинхронная функция показать все записи параметров
    async view_all(req,res,next)
    {
        try
        {
            const models = await Eq_Model.findAll();
            return res.json(models);
        }
        catch (e)
        {
            next(ApiError.NotFound(e.message));
        }
    }




    //создать запись нового параемтра
    async create(req,res, next)
    {
        try
        {
            //делаем реструктуризацию через json с клинта
            const {name,s_name,active, EqTypeId} = req.body;
            //с помощью креате в порядке стобцов вставляем
            //реструктуризарованные данные
            const type = await Eq_Model.create({name,s_name,active,EqTypeId});
            return res.json(type);//возвращаем в качесве ответа
            //клиенту джейсон файл сформированной записи как результат
        }
        catch (e)
        {
            next(ApiError.NotFound(e.message));
        }
    }





    //удалить запись существующего параметра
    async delete(req,res,next)
    {
        try
        {
            const {id} = req.body;
            const model = await Eq_Model.destroy({
                where:
                    {id: id}
            });
            return res.status(202).json(model);
        }
        catch (e)
        {
            next(ApiError.NotFound(e.message));
        }

    }
}

module.exports = new modelTypeController(); //экспортируем контрлллер для использования