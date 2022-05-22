//создаем класс и  соотвествующие 3 метода клааса по запросам к типам оборудования,
const {Process} = require('../models/models');
//импортируем обработчик ошибок
const ApiError = require('../error/ApiError');

class processController {
    //асинхронная функция показать все записи процессов
    async view_all(req,res,next)
    {
        try
        {
            const processes = await Process.findAll() ;
            return res.json(processes);
        }
        catch (e)
        {
            next(ApiError.NotFound(e.message));
        }
    }



    //создать запись нового процесса
    async create(req,res, next)
    {
        try
        {
            const {name,active} = req.body;
            const process = await Process.create({name,active});
            return res.status(202).json(process);
        }
        catch (e)
        {
            next(ApiError.NotFound(e.message));
        }
    }



    //удалить запись процесса
    async delete(req,res,next)
    {
        try
        {
            const {id} = req.body;
            const process = await Process.destroy({where: {id:id}});
            return res.status(202).json(process);
        }
        catch (e)
        {
            next(ApiError.NotFound(e.message));
        }

    }
}

module.exports = new processController();//экспортируем контрлллер для использования