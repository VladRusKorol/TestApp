
//подключаем фреймворк
const {Sequelize}= require('sequelize');
//импртируем модуль с настройками к подключению базы
module.exports = new Sequelize(
    'DEMO',            //название базы данных
    'sa',            //имя пользователя
    '123',       // пароль для входа
    {
       dialect: 'mssql',    //диалект SQL
        host: 'localhost',             //расположение базы
        port: '1433'              //порт
    }
);