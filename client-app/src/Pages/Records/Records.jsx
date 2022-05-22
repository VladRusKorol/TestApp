import React, {useState}from 'react';
import RenderProcessesTable from "../Process/Components/RenderProcessesTable";
import FormAddProcess from "../Process/Components/FormAddProcess";
import RenderRecordsTable from "./Components/RenderRecordsTable";
import axios from "axios";
import FromAddRecords from "./Components/FromAddRecords";

const Records = () => {
    //путь к файлу
    const PATH = 'http://localhost:3000/api/records';
    const [records,setRecords] = useState([]);
    async function UpdateRecords() {
        try
        {
            //НА ЛОКАЛЬНЫЙ АДРЕСС СЕРВЕРА GET ЗАПРСОА ДАННЫХ ТИПОВ ОБОРУДОВАНИЯ
            const response = await axios.get(PATH);
            //ДАННЫЕ ПОЛУЧАЕМ МАССИВОМ JSON ОБЪЕКТОВ И СООТВЕСТВЕННО
            //types ИНИЦИИРУЕТСЯ СОГЛАСНО ПОЛЧЕННОГО JSON
            setRecords(response.data)
            console.log(response.data)
        }
        catch (e)
        {
            console.log(e.massage);
        }
    }


    const [typesProcessesParams, setTypesProcessesParams] = useState([])
    async function UpdateTypesProcessesParams()
    {
        try
        {
            //НА ЛОКАЛЬНЫЙ АДРЕСС СЕРВЕРА GET ЗАПРСОА ДАННЫХ ТИПОВ ОБОРУДОВАНИЯ
            const response = await axios.get('http://localhost:3000/api/type_process_prm');
            //ДАННЫЕ ПОЛУЧАЕМ МАССИВОМ JSON ОБЪЕКТОВ И СООТВЕСТВЕННО
            //types ИНИЦИИРУЕТСЯ СОГЛАСНО ПОЛЧЕННОГО JSON
            setTypesProcessesParams(response.data)
            console.log(response.data)
        }
        catch (e)
        {
            console.log(e.massage);
        }
    }

    const [eqTypes,setEqTypes] = useState([]);
    async function UpdateTypes()
    {
        try
        {
            //НА ЛОКАЛЬНЫЙ АДРЕСС СЕРВЕРА GET ЗАПРСОА ДАННЫХ ТИПОВ ОБОРУДОВАНИЯ
            const response = await axios.get('http://localhost:3000/api/type');
            //ДАННЫЕ ПОЛУЧАЕМ МАССИВОМ JSON ОБЪЕКТОВ И СООТВЕСТВЕННО
            //types ИНИЦИИРУЕТСЯ СОГЛАСНО ПОЛЧЕННОГО JSON
            setEqTypes(response.data)
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

    const [models,setModels] = useState([]);
    //АСИНХРОННАЯ ФУНКЦИЯ ЗАПРОСА ДАННЫХ С СЕРВЕРА ЧЕРЕЗ AXIOS GET ЗАПРОСОМ
    async function UpdateModels() {
        try
        {
            //НА ЛОКАЛЬНЫЙ АДРЕСС СЕРВЕРА GET ЗАПРСОА ДАННЫХ ТИПОВ ОБОРУДОВАНИЯ
            const response = await axios.get('http://localhost:3000/api/model');
            //ДАННЫЕ ПОЛУЧАЕМ МАССИВОМ JSON ОБЪЕКТОВ И СООТВЕСТВЕННО
            //types ИНИЦИИРУЕТСЯ СОГЛАСНО ПОЛЧЕННОГО JSON
            setModels(response.data)
        }
        catch (e)
        {
            console.log(e.massage);
        }
    }

    return (
        <div>
            <RenderRecordsTable
                                records={records}
                                path={PATH}
                                typesProcessesParams={typesProcessesParams}
                                eqTypes={eqTypes}
                                processes={processes}
                                params={params}
                                typesProcesses={typesProcesses}
                                models={models}
                                update={()=>(UpdateRecords(),UpdateTypesProcessesParams(),UpdateTypes(),UpdateProcesses(),UpdatePrm(),UpdateTypesProcesses(),UpdateModels())}/>
            <br/>
            {/*<!-- КНОПКА ЗАПРОСА ДАННЫХ onClick ФУНКЦИЯ С AXIOS-->*/}
            <button
                onClick={()=>(UpdateRecords(),UpdateTypesProcessesParams(),UpdateTypes(),UpdateProcesses(),UpdatePrm(),UpdateTypesProcesses(),UpdateModels())}
            >GET-запрос данных на сервер и БД</button>
            <hr style={{margin: '15px' }} />
            {/*КОМПОНЕНТ ФОРМЫ ДОБАВЛЕНИЯ ДАННЫХ ТИПА ОБРУДОВАНИЯ*/}
            <FromAddRecords
                typesProcessesParams={typesProcessesParams}
                processes={processes}
                models={models}
                eqTypes={eqTypes}
                params={params}
                path={PATH}
                records={records}
                typesProcesses={typesProcesses}
                update={()=>(UpdateRecords(),UpdateTypesProcessesParams(),UpdateTypes(),UpdateProcesses(),UpdatePrm(),UpdateTypesProcesses(),UpdateModels())}/>
        </div>
    );
};

export default Records;