const {Demo_Eq_Type_Process_Prm} = require('../models/models'); //подключаем модель данных
//импортируем обработчик ошибок
const ApiError = require('../error/ApiError');

class type_process_prmController {
    //асинхронная функция показать все записи параметров
    async view_all(req,res,next)
    {
        try
        {
            const tpp = await  Demo_Eq_Type_Process_Prm.findAll();
            return res.json(tpp);
        }
        catch (e)
        {
            next(ApiError.NotFound(e.message));
        }

    }




    //создать запись нового параемтра
    async create(req,res,next)
    {
        try
        {
            //делаем реструктуризацию через json с клинта
            const {EqTypeProcessId, ParametrId} = req.body;
            //с помощью креате в порядке стобцов вставляем
            //реструктуризарованные данные
            const tpp = await Demo_Eq_Type_Process_Prm.create({EqTypeProcessId, ParametrId});
            return res.json(tpp);//возвращаем в качесве ответа
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
            const model = await Demo_Eq_Type_Process_Prm.destroy({
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

module.exports = new type_process_prmController(); //экспортируем контрлллер для использования