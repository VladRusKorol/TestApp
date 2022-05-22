import React from 'react';
import ItemTableModelEquipment from "./ItemTableModelEquipment";

const RenderModelEquipmentTable = ({models, path, types, update}) => {
    return (
        <div>
            {/*ОГЛАВЛЕНИЕ*/}
            <h3>Модели оборудования</h3>
            {/*HTML ТАБЛИЦЫ*/}
            <table border="1">

                {/*ОГЛАВЛЕНИЕ ТАБЛИЦЫ*/}
                <caption>Таблица моделей оборудования</caption>
                <tbody>
                {/*КОЛОНКИ ЗАГАЛОВКОВ ТАБЛИЦЫ*/}
                <tr>
                    <th>Id</th>         <th>Название модели</th>        <th>Краткое название</th>       <th>Тип оборудования</th>       <th>Действие</th>
                </tr>
                {/*ФУНКЦИЯ MAP ПЕРЕДАННОГО PROPS С ПЕРЕДАЧЕЙ КАЖДОГО ЭЛЕМЕНТА МАССИВА В КОМПОНЕНТ РЕНДЕРИНГА ОДНОЙ СТРОКИ */}
                {models.map(model => <ItemTableModelEquipment model={model} key={model.id} path={path} types={types} update={update}/>)}
                </tbody>
            </table>
        </div>
    );
};

export default RenderModelEquipmentTable;