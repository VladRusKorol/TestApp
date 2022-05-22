
const {Target_Trans} = require('../models/models'); //подключаем модель данных
//импортируем обработчик ошибок
const ApiError = require('../error/ApiError');



class recordsControllers{
    //асинхронная функция показать все записи
    async view_all(req,res,next)
    {

            try
            {
                const ttrans = await Target_Trans.findAll();
                return res.json(ttrans);
            }
            catch (e)
            {
                next(ApiError.NotFound(e.message));
            }

    }



    //создать запись
    async create(req,res,next)
    {
        try
        {
            //делаем реструктуризацию через json с клинта
            const {Target,EqTypeProcessPrmId,EqModelId} = req.body;
            //с помощью креате в порядке стобцов вставляем
            //реструктуризарованные данные
            const ttrans = await Target_Trans.create({Target:Target, EqTypeProcessPrmId:EqTypeProcessPrmId,  EqModelId: EqModelId});
            return res.json(ttrans);//возвращаем в качесве ответа
            //клиенту джейсон файл сформированной записи как результат
        }
        catch (e)
        {
            next(ApiError.NotFound(e.message));
        }
    }




   // удалить запись
    async delete(req,res,next)
    {
        try
        {
            const {id} = req.body;
            const ttrans = await Target_Trans.destroy({
                where:
                    {id: id}
            });
            return res.status(202).json(ttrans);
        }
        catch (e)
        {
            next(ApiError.NotFound(e.message));
        }
    }

}
module.exports = new recordsControllers();