const Router = require('express');//подключаем фреймфорк эспресс
const router = Router(); //создаем обеъект класса роутер
//подключаем контроллер действий при работе с процессами
const processController = require('../controllers/processController');

//выстриваем маршруты по HTTP запросам
//показать все типы процессов get запросом, будут в корневом каталоге типов
router.get('/',processController.view_all);
//post запросом добавляем запись процесса по маршруту /process/add
router.post('/',processController.create);
//delete запросом удаляем запись процесса по маршруту /process/del
router.delete('/',processController.delete);


module.exports = router; //экспортируем скогфигурированный роутер в главный роутер