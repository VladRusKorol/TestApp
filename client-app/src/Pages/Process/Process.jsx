import React,{useState}from 'react';
import axios from "axios";
import RenderProcessesTable from "./Components/RenderProcessesTable";
import FormAddTypeEquipment from "../TypeEquipment/Components/FormAddTypeEquipment";
import FormAddProcess from "./Components/FormAddProcess";

const Process = () => {

   //путь к файлу
    const PATH = 'http://localhost:3000/api/process';

    //СОСТОЯНИЕ ХРАНЕНИЯ ДАННЫХ С СЕРВЕРА ПО Процессам
    const [processes,setProcesses] = useState([]);
    //АСИНХРОННАЯ ФУНКЦИЯ ЗАПРОСА ДАННЫХ С СЕРВЕРА ЧЕРЕЗ AXIOS GET ЗАПРОСОМ
    async function UpdateProcesses()
    {
        try
        {
            //НА ЛОКАЛЬНЫЙ АДРЕСС СЕРВЕРА GET ЗАПРСОА ДАННЫХ ТИПОВ ОБОРУДОВАНИЯ
            const response = await axios.get(PATH);
            //ДАННЫЕ ПОЛУЧАЕМ МАССИВОМ JSON ОБЪЕКТОВ И СООТВЕСТВЕННО
            //types ИНИЦИИРУЕТСЯ СОГЛАСНО ПОЛЧЕННОГО JSON
            setProcesses(response.data)
        }
        catch (e)
        {
            console.log(e.massage);
        }
    }

    async function createProcess(name) {
        try
        {
            const response = await axios.post(PATH, {
                name: name,
                active: true
            });
            console.log(response);
        }
        catch (e)
        {
            console.log(e.massage);
        }
    }

    return (
        <div>
            <RenderProcessesTable processes={processes} path={PATH} update={UpdateProcesses}/>
            <br/>
            {/*<!-- КНОПКА ЗАПРОСА ДАННЫХ onClick ФУНКЦИЯ С AXIOS-->*/}
            <button onClick={UpdateProcesses}>GET-запрос данных на сервер и БД</button>
            <hr style={{margin: '15px' }} />
            {/*КОМПОНЕНТ ФОРМЫ ДОБАВЛЕНИЯ ДАННЫХ ТИПА ОБРУДОВАНИЯ*/}
            <FormAddProcess   add={createProcess}/>
        </div>
    );
};

export default Process;