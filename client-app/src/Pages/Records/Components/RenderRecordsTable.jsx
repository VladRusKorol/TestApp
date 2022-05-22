import React from 'react';
import ItemTableProcess from "../../Process/Components/ItemTableProcess";
import ItemTableRecords from "./ItemTableRecords";

const RenderRecordsTable = ({records, eqTypes, typesProcesses, typesProcessesParams, params, processes, models, path, update}) => {
    return (
        <div>
            {/*ОГЛАВЛЕНИЕ*/}
            <h3>Справочник</h3>
            {/*HTML ТАБЛИЦЫ*/}
            <table border="1">
                {/*ОГЛАВЛЕНИЕ ТАБЛИЦЫ*/}
                <caption>Таблица справочных значений</caption>
                <tbody>
                {/*КОЛОНКИ ЗАГАЛОВКОВ ТАБЛИЦЫ*/}
                <tr>
                    <th>Id</th><th>Тип\Процесс\Парметр</th><th>Модель оборудования</th><th>Ед.Измерения</th><th>Значение</th><th>Действие</th>
                </tr>
                {/*ФУНКЦИЯ MAP ПЕРЕДАННОГО PROPS С ПЕРЕДАЧЕЙ КАЖДОГО ЭЛЕМЕНТА МАССИВА В КОМПОНЕНТ РЕНДЕРИНГА ОДНОЙ СТРОКИ */}
                {records.map(record => <ItemTableRecords
                                                        record={record}
                                                         models={models}
                                                         eqTypes={eqTypes}
                                                         typesProcesses={typesProcesses}
                                                         typesProcessesParams={typesProcessesParams}
                                                         params={params}
                                                         processes={processes}
                                                         key={record.id}
                                                        update={update}
                                                        path={path}/>)}
                </tbody>
            </table>
        </div>
    );
};

export default RenderRecordsTable;