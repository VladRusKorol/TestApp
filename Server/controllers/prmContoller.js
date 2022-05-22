//создаем класс и  соотвествующие 3 метода клааса по запросам к типам параметров
const {Prm} = require('../models/models');
//импортируем обработчик ошибок
const ApiError = require('../error/ApiError');


class prmController{
    //асинхронная функция показать все записи параметров
    async view_all(req,res,next)
    {
        try
        {
            const prm = await Prm.findAll() ;
            return res.json(prm);
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
            const {name, active, unite, status_code, sub_status_code} = req.body;
            const prm = await Prm.create({name, active, unite, status_code, sub_status_code});
            return res.status(202).json(prm);
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
            const prm = await Prm.destroy({where: {id:id}});
            return res.status(202).json(prm);
        }
        catch (e)
        {
            next(ApiError.NotFound(e.message));
        }

    }
}

module.exports = new prmController(); //экспортируем контрлллер для использования
