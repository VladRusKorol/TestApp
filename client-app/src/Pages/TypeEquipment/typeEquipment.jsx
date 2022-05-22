import React, {useState} from 'react';
import axios from "axios";
import RenderTypeEquipmentTable from "./Components/RenderTypeEquipmentTable";
import FormAddTypeEquipment from "./Components/FormAddTypeEquipment";

const TypeEquipment = () => {

    const PATH = 'http://localhost:3000/api/type';

    //СОСТОЯНИЕ ХРАНЕНИЯ ДАННЫХ С СЕРВЕРА ПО ТИПАМ ОБОРУДОВАНИЯ
    const [types,setTypes] = useState([]);

    //АСИНХРОННАЯ ФУНКЦИЯ ЗАПРОСА ДАННЫХ С СЕРВЕРА ЧЕРЕЗ AXIOS GET ЗАПРОСОМ
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

    //АСИНХРОННАЯ ФУНКЦИЯ ДОБАВЛЕНИЯ ДАННЫХ НА СЕРВЕР ЧЕРЕЗ AXIOS POST ЗАПРОСОМ
    async function AddType( name, s_name)
    {
        try
        {
            const response = await axios.post(PATH, {
                name: name,
                s_name: s_name,
                active: true
            });
            console.log(response);
            await UpdateTypes();
        }
        catch (e)
        {
            console.log(e.massage);
        }
    };

    return (
        <div>
            {/*КОМПОНЕНТ ОТОБРАЖЕНИЯ ТАБЛИЦЫ ТИПОВ ОБОРУДОВАНИЯ С PROPS-->*/}
            <RenderTypeEquipmentTable types={types} path={PATH} update={UpdateTypes}/>
            {/*<!-- Пустая строка-->*/}
            <br/>
            {/*<!-- КНОПКА ЗАПРОСА ДАННЫХ onClick ФУНКЦИЯ С AXIOS-->*/}
            <button onClick={UpdateTypes}>GET-запрос данных на сервер и БД</button>
            {/*<!-- ЛИНИЯ РАЗГРАНИЧЕНИЯ-->*/}
            <hr style={{margin: '15px' }} />
            {/*КОМПОНЕНТ ФОРМЫ ДОБАВЛЕНИЯ ДАННЫХ ТИПА ОБРУДОВАНИЯ*/}
            <FormAddTypeEquipment   add={AddType}/>
        </div>
    );


};

export default TypeEquipment;