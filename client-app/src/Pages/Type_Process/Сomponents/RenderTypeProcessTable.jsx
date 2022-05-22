import React from 'react';
import ItemTableTypeProcess from "./ItemTableTypeProcess";

const RenderTypeProcessTable = ({typesProcesses, processes, types, path, update}) => {
    return (
        <div>
            {/*ОГЛАВЛЕНИЕ*/}
            <h3>Связка Типов Оборудования и Процессов</h3>
            {/*HTML ТАБЛИЦЫ*/}
            <table border="1">
                {/*ОГЛАВЛЕНИЕ ТАБЛИЦЫ*/}
                <caption>Таблица</caption>
                {/*КОЛОНКИ ЗАГАЛОВКОВ ТАБЛИЦЫ*/}
                <tr>
                    <th>Id</th>         <th>Тип Оборудования/Процессы</th>     <th>Действие</th>
                </tr>
                {/*ФУНКЦИЯ MAP ПЕРЕДАННОГО PROPS С ПЕРЕДАЧЕЙ КАЖДОГО ЭЛЕМЕНТА МАССИВА В КОМПОНЕНТ РЕНДЕРИНГА ОДНОЙ СТРОКИ */}
                {typesProcesses.map(typeProcess => <ItemTableTypeProcess typeProcess={typeProcess} key={typeProcess.id} processes={processes} types={types} path={path} update={update}/>)}
            </table>
        </div>
    );
};

export default RenderTypeProcessTable;