const Router = require('express');//подключаем фреймфорк эспресс
const router = Router(); //создаем обеъект класса роутер
//подключаем контроллер действий при работе с параметрами
const prmController = require('../controllers/prmContoller');


//выстриваем маршруты по HTTP запросам
//показать все параметры get запросом, будут в корневом каталоге типов
router.get('/', prmController.view_all);
//post запросом добавляем запись параметра по маршруту /prm/add
router.post('/',prmController.create);
//delete запросом удалить запись параметра по маршруту /prm/del
router.delete('/',prmController.delete);


module.exports = router; //экспортируем сконфигурирруемы й роутер параметров в главный роут