import React, {useState} from 'react';
import RenderModelEquipmentTable from "./Components/RenderModelEquipmentTable";
import axios from "axios";
import FormAddModelEquipment from "./Components/FormAddModelEquipment";


const ModelEquipment = () => {

    //путь к файлу
    const PATH = 'http://localhost:3000/api/model';

    //СОСТОЯНИЕ ХРАНЕНИЯ ДАННЫХ С СЕРВЕРА ПО МОДЕЛЯМ ОБОРУДОВАНИЯ
    const [models,setModels] = useState([]);
    //АСИНХРОННАЯ ФУНКЦИЯ ЗАПРОСА ДАННЫХ С СЕРВЕРА ЧЕРЕЗ AXIOS GET ЗАПРОСОМ
    async function UpdateModels()
    {
        try
        {
            //НА ЛОКАЛЬНЫЙ АДРЕСС СЕРВЕРА GET ЗАПРСОА ДАННЫХ ТИПОВ ОБОРУДОВАНИЯ
            const response = await axios.get(PATH);
            //ДАННЫЕ ПОЛУЧАЕМ МАССИВОМ JSON ОБЪЕКТОВ И СООТВЕСТВЕННО
            //types ИНИЦИИРУЕТСЯ СОГЛАСНО ПОЛЧЕННОГО JSON
            setModels(response.data)
        }
        catch (e)
        {
            console.log(e.massage);
        }
    }

    //СОСТОЯНИЕ ХРАНЕНИЯ ДАННЫХ С СЕРВЕРА ПО ТИПАМ ОБОРУДОВАНИЯ
    const [types,setTypes] = useState([]);
    //АСИНХРОННАЯ ФУНКЦИЯ ЗАПРОСА ДАННЫХ С СЕРВЕРА ЧЕРЕЗ AXIOS GET ЗАПРОСОМ
    async function RequestTypes() {
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

   async function AddModel(name, s_name, EqTypeId)
    {
        try
        {
            const response = await axios.post(PATH, {
                name: name,
                s_name: s_name,
                active: true,
                EqTypeId: EqTypeId
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
            <RenderModelEquipmentTable models={models} path={PATH} types={types} update={UpdateModels}/>
            <br/>
            {/*<!-- КНОПКА ЗАПРОСА ДАННЫХ onClick ФУНКЦИЯ С AXIOS-->*/}
            <button onClick={() => {UpdateModels();RequestTypes();}}>GET-запрос данных на сервер и БД</button>
            <hr style={{margin: '15px' }} />
            <FormAddModelEquipment types={types} add={AddModel}/>
        </div>
    );
};

export default ModelEquipment;