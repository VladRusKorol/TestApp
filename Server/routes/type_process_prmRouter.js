const Router = require('express');//подключаем фреймфорк эспресс
const router = Router(); //создаем обеъект класса роутер
//подключаем контроллер действий при работе с описанием
const type_process_prmController = require('../controllers/type_process_prmController');


//выстриваем маршруты по HTTP запросам
//показать все параметры get запросом, будут в корневом каталоге типов
router.get('/',type_process_prmController.view_all);
//post запросом добавляем запись параметра по маршруту /targetType/add
router.post('/', type_process_prmController.create);
//delete запросом удалить запись параметра по маршруту /targetType/del
router.delete('/', type_process_prmController.delete);


module.exports = router; //экспортируем сконфигурирруемы й роутер параметров в главный роут