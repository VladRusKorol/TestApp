const Router = require('express');//подключаем фреймфорк эспресс
const router = Router(); //создаем обеъект класса роутер
//подключаем контроллер действий при работе с описанием
const type_processController = require('../controllers/type_processController');


//выстриваем маршруты по HTTP запросам
//показать все параметры get запросом, будут в корневом каталоге типов
router.get('/',type_processController.view_all);
//post запросом добавляем запись параметра по маршруту /targetType/add
router.post('/', type_processController.create);
//delete запросом удалить запись параметра по маршруту /targetType/del
router.delete('/', type_processController.delete);


module.exports = router; //экспортируем сконфигурирруемы й роутер параметров в главный роут