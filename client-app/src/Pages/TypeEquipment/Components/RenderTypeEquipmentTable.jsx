import React from 'react';
import ItemTableTypeEquipment from "./ItemTableTypeEquipment";

const RenderTypeEquipmentTable = ({types, path, update}) => {
    return (
        <div>
            {/*ОГЛАВЛЕНИЕ*/}
            <h3>Типы оборудования</h3>
            {/*HTML ТАБЛИЦЫ*/}
            <table border="1">
                {/*ОГЛАВЛЕНИЕ ТАБЛИЦЫ*/}
                <caption>Таблица типов оборудования</caption>
                <tbody>
                {/*КОЛОНКИ ЗАГАЛОВКОВ ТАБЛИЦЫ*/}
                <tr><th>Id</th><th>Имя</th><th>Аббревиатура</th><th>Действие</th></tr>
                {/*ФУНКЦИЯ MAP ПЕРЕДАННОГО PROPS С ПЕРЕДАЧЕЙ КАЖДОГО ЭЛЕМЕНТА МАССИВА В КОМПОНЕНТ РЕНДЕРИНГА ОДНОЙ СТРОКИ */}
                {types.map(type => <ItemTableTypeEquipment type={type} key={type.id} path={path} update={update}/>)}
                </tbody>
            </table>
        </div>
    );
};

export default RenderTypeEquipmentTable;