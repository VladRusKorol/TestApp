//создаем класс и  соотвествующие 3 метода клааса по запросам к типам параметров
const {Target_Type, Prm} = require('../models/models');
//импортируем обработчик ошибок
const ApiError = require('../error/ApiError');


class targetTypeController{
    //асинхронная функция показать все записи параметров
    async view_all(req,res,next)
    {
        try
        {
            const tt = await Target_Type.findAll() ;
            return res.json(tt);
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
            const {name, active,description} = req.body;
            const tt = await Target_Type.create({name, active,description});
            return res.status(202).json(tt);
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
            const tt = await Target_Type.destroy({where: {id:id}});
            return res.status(202).json(tt);
        }
        catch (e)
        {
            next(ApiError.NotFound(e.message));
        }

    }
}

module.exports = new targetTypeController(); //экспортируем контрлллер для использования