const Router = require ('express'); //подключаем фреймфорк эспресс
const router = Router(); //создаем обеъект класса роутер
//подключаем контроллер действий при работе с типами оборудования
const typeControllers = require('../controllers/typeControllers');

//выстриваем маршруты по HTTP запросам
//показать все типы оборудования get запросом, будут в корневом каталоге типов
router.get('/',typeControllers.view_all);
//добавить тип оборудования будем post запросом
router.post('/',typeControllers.create);
//добавить тип оборудования будем delete запросом
router.delete('/',typeControllers.delete);

module.exports = router; //экспортируем скогфигурированный роутер в главный роутер