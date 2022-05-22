const Router = require('express');//подключаем фреймфорк эспресс
const router = new Router();//создаем обеъект класса роутер
//подключаем коннтроллер действий при выборе того или иного маршрута в записях
const recordsControllers = require('../controllers/recordsControllers');


router.get('/', recordsControllers.view_all);//маршрут,функция показа записей
router.post('/',recordsControllers.create);//маршрут,функция добавление записи
router.delete('/',recordsControllers.delete);//маршрут,функция удаление записи

module.exports = router;//экспорт сконфигурированного роутера в главный файл роутинга