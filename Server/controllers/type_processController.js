const {Demo_Eq_Type_Process} = require('../models/models');
//импортируем обработчик ошибок
const ApiError = require('../error/ApiError');


class type_processController{
    //асинхронная функция показать все записи параметров
    async view_all(req,res,next)
    {
        try
        {
            const type_processes = await Demo_Eq_Type_Process.findAll() ;
            return res.json(type_processes);
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
            const {EqTypeId,ProcessId} = req.body;
            const type_process = await Demo_Eq_Type_Process.create({EqTypeId,ProcessId});
            return res.status(202).json(type_process);
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
            const type_process = await Demo_Eq_Type_Process.destroy({where: {id:id}});
            return res.status(202).json(type_process);
        }
        catch (e)
        {
            next(ApiError.NotFound(e.message));
        }

    }
}

module.exports = new type_processController(); //экспортируем контрлллер для использования