import React from 'react';
import ItemTableTypeProcessPrm from "./ItemTableTypeProcessPrm";

const RenderTypeProcessPrmTable = ({typesProcessesParams, processes, types, params, typesProcesses, path, update}) => {
    return (
        <div>
            {/*ОГЛАВЛЕНИЕ*/}
            <h3>Связка Типов Оборудования и Процессов</h3>
            {/*HTML ТАБЛИЦЫ*/}
            <table border="1">
                {/*ОГЛАВЛЕНИЕ ТАБЛИЦЫ*/}
                <caption>Таблица</caption>
                {/*КОЛОНКИ ЗАГАЛОВКОВ ТАБЛИЦЫ*/}
                <tbody>
                <tr><th>Id</th><th>Тип Оборудования\Процессы</th><th>Параметр</th><th>Единицы измерения</th><th>Действие</th>
                </tr>
                {/*ФУНКЦИЯ MAP ПЕРЕДАННОГО PROPS С ПЕРЕДАЧЕЙ КАЖДОГО ЭЛЕМЕНТА МАССИВА В КОМПОНЕНТ РЕНДЕРИНГА ОДНОЙ СТРОКИ */}
                {typesProcessesParams.map(typeProcessParam => <ItemTableTypeProcessPrm
                    typeProcessParam={typeProcessParam}
                    processes={processes}
                    types={types}
                    params={params}
                    typesProcesses={typesProcesses}
                    key={typeProcessParam.id}
                    path={path}
                    update={update}
                />)}
                </tbody>
            </table>
        </div>
    );
};

export default RenderTypeProcessPrmTable;