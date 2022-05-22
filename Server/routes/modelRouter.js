const Router = require('express');//подключаем фреймфорк эспресс
const router = Router(); //создаем обеъект класса роутер
//подключаем контроллер действий при работе с описанием
const modelTypeController = require('../controllers/modelController');


//выстриваем маршруты по HTTP запросам
//показать все параметры get запросом, будут в корневом каталоге типов
router.get('/',modelTypeController.view_all);
//post запросом добавляем запись параметра по маршруту /targetType/add
router.post('/', modelTypeController.create);
//delete запросом удалить запись параметра по маршруту /targetType/del
router.delete('/', modelTypeController.delete);


module.exports = router; //экспортируем сконфигурирруемы й роутер параметров в главный роут