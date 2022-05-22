import React, {useState} from 'react';
import RenderTypeProcessTable from "./Сomponents/RenderTypeProcessTable";
import FormAddTypeProcess from "./Сomponents/FormAddTypeProcess";
import axios from "axios";

const TypeProcess = () => {

    const PATH = 'http://localhost:3000/api/type_process'

    const [typesProcesses, setTypesProcesses] = useState([]);
    async function UpdateTypesProcesses()
    {
        try
        {
            //НА ЛОКАЛЬНЫЙ АДРЕСС СЕРВЕРА GET ЗАПРСОА ДАННЫХ ТИПОВ ОБОРУДОВАНИЯ
            const response = await axios.get(PATH);
            //ДАННЫЕ ПОЛУЧАЕМ МАССИВОМ JSON ОБЪЕКТОВ И СООТВЕСТВЕННО
            //types ИНИЦИИРУЕТСЯ СОГЛАСНО ПОЛЧЕННОГО JSON
            setTypesProcesses(response.data)
        }
        catch (e)
        {
            console.log(e.massage);
        }
    }

    const [types,setTypes] = useState([])
    async function GetTypes()
    {
        try
        {
            //НА ЛОКАЛЬНЫЙ АДРЕСС СЕРВЕРА GET ЗАПРСОА ДАННЫХ ТИПОВ ОБОРУДОВАНИЯ
            const response = await axios.get('http://localhost:3000/api/type');
            //ДАННЫЕ ПОЛУЧАЕМ МАССИВОМ JSON ОБЪЕКТОВ И СООТВЕСТВЕННО
            //types ИНИЦИИРУЕТСЯ СОГЛАСНО ПОЛЧЕННОГО JSON
            setTypes(response.data)
        }
        catch (e)
        {
            console.log(e.massage);
        }
    }

    const [processes, setProcesses] = useState([])
    async function GetProcesses()
    {
        try
        {
            //НА ЛОКАЛЬНЫЙ АДРЕСС СЕРВЕРА GET ЗАПРСОА ДАННЫХ ТИПОВ ОБОРУДОВАНИЯ
            const response = await axios.get('http://localhost:3000/api/process');
            //ДАННЫЕ ПОЛУЧАЕМ МАССИВОМ JSON ОБЪЕКТОВ И СООТВЕСТВЕННО
            //types ИНИЦИИРУЕТСЯ СОГЛАСНО ПОЛЧЕННОГО JSON
            setProcesses(response.data)
        }
        catch (e)
        {
            console.log(e.massage);
        }
    }


    return (
        <div>
            <RenderTypeProcessTable typesProcesses={typesProcesses} types={types} processes={processes} path={PATH} update={()=>(UpdateTypesProcesses(),GetTypes(),GetProcesses())}/>
            <br/>
            {/*<!-- КНОПКА ЗАПРОСА ДАННЫХ onClick ФУНКЦИЯ С AXIOS-->*/}
            <button onClick={()=>(UpdateTypesProcesses(),GetTypes(),GetProcesses())}>GET-запрос данных на сервер и БД</button>
            <hr style={{margin: '15px' }} />
            <FormAddTypeProcess types={types} processes={processes} path={PATH} update={()=>(UpdateTypesProcesses(),GetTypes(),GetProcesses())}/>
        </div>
    );
};
export default TypeProcess;