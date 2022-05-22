const Router = require('express');//
const router = new Router();//создали объект класса роутера
const recordsRouter = require('./recordsRouter');//сопоставляем переменную и файл маршрута
const typeRouter = require('./typeRouter');
const processRouter = require('./processRouter');
const prmRouter = require('./prmRouter');
//const targetTypeRouter = require('./targetTypeRouter');
const modelRouter = require('./modelRouter');
const type_processRouter = require('../routes/type_processRouter');
const type_process_prmRouter = require('../routes/type_process_prmRouter');


//если после /api получаем запись /recordsRouter, то вставляем переводим на файл где прописаны функции
// для работы с запиями
router.use('/records', recordsRouter);

//если получаем после /api запись /type, то вставляем переводим на файл где прописаны функции
// для работы с типом оборудования++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
router.use('/type',typeRouter);

//если получаем после /api запись /process, то вставляем переводим на файл где прописаны функции
// для работы с процессами оборудования++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
router.use('/process',processRouter);

//если получаем после /api запись /prm, то вставляем переводим на файл где прописаны функции
// для работы с параметрами процессов оборудования++++++++++++++++++++++++++++++++++++++++++++++++
router.use('/prm',prmRouter);

//если получаем после /api запись /tagetType, то вставляем переводим на файл где прописаны функции
// для работы с описанием параметров процесса оборудования
//router.use('/targetType',targetTypeRouter);//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//если получаем после /api запись /model, то вставляем переводим на файл где прописаны функции
// для работы с описанием параметров процесса оборудования+++++++++++++++++++++++++++++++++++++++++++
router.use('/model',modelRouter);


router.use('/type_process',type_processRouter);//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

router.use('/type_process_prm',type_process_prmRouter);//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++


module.exports = router; //экспортируем итоговый файл роутера, который буде изначально начинаться с /api