import React from 'react';
import ItemTableProcess from "./ItemTableProcess";

const RenderProcessesTable = ({processes,path,update}) => {
    return (
        <div>
            {/*ОГЛАВЛЕНИЕ*/}
            <h3>Процессы</h3>
            {/*HTML ТАБЛИЦЫ*/}
            <table border="1">
                {/*ОГЛАВЛЕНИЕ ТАБЛИЦЫ*/}
                <caption>Таблица процессов</caption>
                <tbody>
                {/*КОЛОНКИ ЗАГАЛОВКОВ ТАБЛИЦЫ*/}
                <tr>
                    <th>Id</th>         <th>Название процесса</th>        <th>Действие</th>
                </tr>
                {/*ФУНКЦИЯ MAP ПЕРЕДАННОГО PROPS С ПЕРЕДАЧЕЙ КАЖДОГО ЭЛЕМЕНТА МАССИВА В КОМПОНЕНТ РЕНДЕРИНГА ОДНОЙ СТРОКИ */}
                {processes.map(process => <ItemTableProcess process={process} key={process.id} path={path} update={update}/>)}
                </tbody>
            </table>
        </div>
    );
};

export default RenderProcessesTable;