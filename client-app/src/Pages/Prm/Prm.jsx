import React, {useState} from 'react';
import RenderPrmTable from "./Components/RenderPrmTable";
import axios from "axios";
import FormAddPrm from "./Components/FormAddPrm";

const Prm = () => {

    const PATH = 'http://localhost:3000/api/prm';

    const [params,setParams] = useState([]);

    async function UpdatePrm()
    {
        try
        {
            //НА ЛОКАЛЬНЫЙ АДРЕСС СЕРВЕРА GET ЗАПРСОА ДАННЫХ ТИПОВ ОБОРУДОВАНИЯ
            const response = await axios.get(PATH);
            //ДАННЫЕ ПОЛУЧАЕМ МАССИВОМ JSON ОБЪЕКТОВ И СООТВЕСТВЕННО
            //types ИНИЦИИРУЕТСЯ СОГЛАСНО ПОЛЧЕННОГО JSON
            setParams(response.data)
        }
        catch (e)
        {
            console.log(e.massage);
        }
    }

    async function AddPrm(name, unite)
    {
        try
        {
            const response = await axios.post(PATH, {
                name: name,
                active: true,
                unite: unite,
                status_code: 0,
                sub_status_code: 0
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
            <RenderPrmTable params={params} path={PATH} update={UpdatePrm}/>
            <br/>
            {/*<!-- КНОПКА ЗАПРОСА ДАННЫХ onClick ФУНКЦИЯ С AXIOS-->*/}
            <button onClick={UpdatePrm}>GET-запрос данных на сервер и БД</button>
            <hr style={{margin: '15px' }} />
            {/*КОМПОНЕНТ ФОРМЫ ДОБАВЛЕНИЯ ДАННЫХ ТИПА ОБРУДОВАНИЯ*/}
            <FormAddPrm add={AddPrm} update={UpdatePrm}/>
        </div>
    );
};

export default Prm;