//испортируем объект sequelize из файла db.js
const sequelize = require('../db');
//испортируем класс, который импортирует типы того или иного поля
const {DataTypes} = require('sequelize');

//содаем модели данных

//первая модель - тип оборудования
const Eq_Type = sequelize.define('Eq_Type', {
    id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    s_name: {type: DataTypes.STRING,  allowNull: false},
    active: {type: DataTypes.BOOLEAN, allowNull: false}
})

//вторая модель - модели оборудования
const Eq_Model = sequelize.define('Eq_Model', {
    id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    s_name: {type: DataTypes.STRING,  allowNull: false},
    active: {type: DataTypes.BOOLEAN, allowNull: false}
})

//третья модель данных - процессы
const Process = sequelize.define('Process',{
    id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    active: {type: DataTypes.BOOLEAN, allowNull: false}
})

//четвертая модель данных - параметры
const Prm = sequelize.define('Parametr',{
    id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    active: {type: DataTypes.BOOLEAN, allowNull: false},
    unite: {type: DataTypes.STRING, allowNull: false},
    status_code: {type: DataTypes.INTEGER, allowNull: false},
    sub_status_code: {type: DataTypes.INTEGER, allowNull: false}
})

/*
//пятая модель данных - описание
const Target_Type = sequelize.define('Target_Type',{
    id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    active: {type: DataTypes.BOOLEAN, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: false}
})
*/




//сводная таблица
const Target_Trans = sequelize.define('Target_Trans',{
    id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Target: {type: DataTypes.FLOAT, allowNull: false}
})

//Тип оборудования имеет много моделей, но любая модель относится только к одному типу оборудования
Eq_Type.hasMany(Eq_Model);
Eq_Model.belongsTo(Eq_Type);
/*

const Eq_Type_Process = sequelize.define('Eq_Type_Process',{
    id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})
*/

//процесы и оборудование сводная таблицы
const Demo_Eq_Type_Process = sequelize.define('Eq_Type_Process',{
    id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

//Типы оборудования участвуют в различных процессах
//а так же один процесс может быть у разных видов оборудования
Eq_Type.belongsToMany(Process, {through: Demo_Eq_Type_Process});
Process.belongsToMany(Eq_Type, {through: Demo_Eq_Type_Process});



const Demo_Eq_Type_Process_Prm = sequelize.define('Eq_Type_Process_Prm',{
    id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

Demo_Eq_Type_Process.belongsToMany(Prm,{through: Demo_Eq_Type_Process_Prm})
Prm.belongsToMany(Demo_Eq_Type_Process,{through: Demo_Eq_Type_Process_Prm})

/*
Eq_Type.hasMany(Records)
Records.belongsTo(Eq_Type)
*/
//связка типа оборудования-процесс-параметр
Demo_Eq_Type_Process_Prm.hasMany(Target_Trans);
Target_Trans.belongsTo(Demo_Eq_Type_Process_Prm);

Eq_Model.hasMany(Target_Trans)
Target_Trans.belongsTo(Eq_Model)

/*
Process.hasMany(Records)
Records.belongsTo(Process)
*/

/*
Prm.hasMany(Records)
Records.belongsTo(Prm)

 */

/*
Target_Type.hasMany(Records)
Records.belongsTo(Target_Type)
*/

module.exports = {
    Eq_Type,
    Eq_Model,
    Process,
    Prm,
   // Target_Type,
    Target_Trans,
    Demo_Eq_Type_Process,
    Demo_Eq_Type_Process_Prm
    //Process_Prm,
}