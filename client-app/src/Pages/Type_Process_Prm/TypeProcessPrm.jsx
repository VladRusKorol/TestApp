import React ,{useState}from 'react';
import RenderTypeProcessPrmTable from "./Components/RenderTypeProcessPrmTable";
import FormAddTypeProcessPrm from "./Components/FormAddTypeProcessPrm";
import axios from "axios";

const TypeProcessPrm = () => {
    const PATH = 'http://localhost:3000/api/type_process_prm'

    const [typesProcessesParams, setTypesProcessesParams] = useState([])
     async function UpdateTypesProcessesParams()
     {
         try
         {
             //НА ЛОКАЛЬНЫЙ АДРЕСС СЕРВЕРА GET ЗАПРСОА ДАННЫХ ТИПОВ ОБОРУДОВАНИЯ
             const response = await axios.get(PATH);
             //ДАННЫЕ ПОЛУЧАЕМ МАССИВОМ JSON ОБЪЕКТОВ И СООТВЕСТВЕННО
             //types ИНИЦИИРУЕТСЯ СОГЛАСНО ПОЛЧЕННОГО JSON
             setTypesProcessesParams(response.data)
         }
         catch (e)
         {
             console.log(e.massage);
         }
     }

    const [types,setTypes] = useState([]);
    async function UpdateTypes()
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
    };

    const [processes,setProcesses] = useState([]);
    async function UpdateProcesses()
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

    const [params,setParams] = useState([]);
    async function UpdatePrm()
    {
        try
        {
            //НА ЛОКАЛЬНЫЙ АДРЕСС СЕРВЕРА GET ЗАПРСОА ДАННЫХ ТИПОВ ОБОРУДОВАНИЯ
            const response = await axios.get('http://localhost:3000/api/prm');
            //ДАННЫЕ ПОЛУЧАЕМ МАССИВОМ JSON ОБЪЕКТОВ И СООТВЕСТВЕННО
            //types ИНИЦИИРУЕТСЯ СОГЛАСНО ПОЛЧЕННОГО JSON
            setParams(response.data)
        }
        catch (e)
        {
            console.log(e.massage);
        }
    }

    const [typesProcesses, setTypesProcesses] = useState([]);
    async function UpdateTypesProcesses() {
        try
        {
            //НА ЛОКАЛЬНЫЙ АДРЕСС СЕРВЕРА GET ЗАПРСОА ДАННЫХ ТИПОВ ОБОРУДОВАНИЯ
            const response = await axios.get('http://localhost:3000/api/type_process');
            //ДАННЫЕ ПОЛУЧАЕМ МАССИВОМ JSON ОБЪЕКТОВ И СООТВЕСТВЕННО
            //types ИНИЦИИРУЕТСЯ СОГЛАСНО ПОЛЧЕННОГО JSON
            setTypesProcesses(response.data)
        }
        catch (e)
        {
            console.log(e.massage);
        }
    }



    return (
        <div>
            <RenderTypeProcessPrmTable
                typesProcessesParams={typesProcessesParams}
                types={types}
                processes={processes}
                params={params}
                typesProcesses={typesProcesses}
                path={PATH}
                update={UpdateTypesProcessesParams}
            />
            <br/>
            {/*<!-- КНОПКА ЗАПРОСА ДАННЫХ onClick ФУНКЦИЯ С AXIOS-->*/}
            <button onClick={()=>(UpdateTypesProcessesParams(),UpdateTypes(),UpdateProcesses(),UpdatePrm(),UpdateTypesProcesses())}>GET-запрос данных на сервер и БД</button>
            <hr style={{margin: '15px' }} />
            <FormAddTypeProcessPrm
                typesProcessesParams={typesProcessesParams}
                types={types}
                processes={processes}
                params={params}
                typesProcesses={typesProcesses}
                update={UpdateTypesProcessesParams}
                path={PATH}
            />
        </div>
    );
};

export default TypeProcessPrm;