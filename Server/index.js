//импорт настроек
require('dotenv').config();
//импортируем экспресс
const express = require('express');
//создадим переменную, которая будет хранить номер порта из переменной окружения
const PORT = process.env.PORT;
// импортируем объект из файла DB
const sequelize = require('./db');
//создадим объект приложение, с коротого будет начинаться наше приложение
const app = express();
//испортируем cors что бы можно было отправлят запросы с браузера
const cors = require('cors');
//импортируем модели данных для работы с БД
const model = require('../Server/models/models');
// подключаем модуль работы с путями
const path = require('path');
//обработчик ошибок
const errorHandler = require('../Server/middleware/ErrorHandlingMiddleware');
const router = require('./routes/index.js');
const {request, response} = require("express");


app.use(cors());
app.use(express.json());

const start = async () =>{
    try {

        await sequelize.authenticate(); // установка подключения к базе данных
        await sequelize.sync();//сверяет состояние базы данных
        //начинаем прослушивать подключения на 3000 порту, и добавляем callback если ошибка
        //информируем либо говорим что сервер запустился

        app.listen(PORT,function(err){
            if(err){
                console.log('[Server dont working on port '+ PORT+'...]'+err);

            } else {
                console.log('[Server working on port '+ PORT+'...]');



                app.use('/api', router);//подключили обработчик при работе



                //на главную страницу
               // app.get('/', function (request, response){
                    //response.sendFile(__dirname+'/views/index.html');
                //});




                //обработка ошибка последний мидлвеар
                app.use(errorHandler);
            }
        });
    } catch (e) {
        console.log(e);
    }
};

start();//вызов функции











