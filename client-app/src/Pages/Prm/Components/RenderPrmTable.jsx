import React from 'react';
import ItemTablePrm from "./ItemTablePrm";

const RenderPrmTable = ({params, path, update}) => {
    return (
        <div>
            {/*ОГЛАВЛЕНИЕ*/}
            <h3>Параметры</h3>
            {/*HTML ТАБЛИЦЫ*/}
            <table border="1">
                {/*ОГЛАВЛЕНИЕ ТАБЛИЦЫ*/}
                <caption>Таблица параметров</caption>
                {/*КОЛОНКИ ЗАГАЛОВКОВ ТАБЛИЦЫ*/}
                <tbody>
                <tr>
                    <th>Id</th>         <th>Название параметра</th>     <th>Единицы измерения</th>   <th>Действие</th>
                </tr>
                {/*ФУНКЦИЯ MAP ПЕРЕДАННОГО PROPS С ПЕРЕДАЧЕЙ КАЖДОГО ЭЛЕМЕНТА МАССИВА В КОМПОНЕНТ РЕНДЕРИНГА ОДНОЙ СТРОКИ */}
                {params.map(param => <ItemTablePrm param={param} key={param.id} path={path} update={update}/>)}
                </tbody>
            </table>
        </div>
    );
};

export default RenderPrmTable;