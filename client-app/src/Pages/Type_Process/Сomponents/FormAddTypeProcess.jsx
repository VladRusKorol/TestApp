import React, {useState} from 'react';
import {Combobox} from "react-widgets/cjs";
import axios from "axios";
import Select from "react-select";

const FormAddTypeProcess = ({types, processes, path, update}) => {

    const [type,setType] = useState([]);
    const [process,setProcess] = useState([]);



    const optType = []
    function ComparisonType(type) {
        for(const oT of optType)
        {
            if(oT.value === type.id)
            {return false}
        }
        return true
    }
    function createOptionsType (e)
    {
        e.preventDefault()
        for (const type of types)
        {
            if(optType.length === 0)
            {
                optType.push({value:type.id, label:type.name})
            }
            else if(ComparisonType(type))
            {
                optType.push({value:type.id, label:type.name})
            }
        }

    }

    const optProcess = []
    function createOptionsProcess (e) {
        e.preventDefault()
        for (const process of processes)
        {
            if(optProcess.length === 0)
            {
                optProcess.push({value:process.id, label:process.name})
            }
            else if(ComparisonProcess(process))
            {
                optProcess.push({value:process.id, label:process.name})
            }
        }
    }
    function ComparisonProcess(process) {
        for(const oP of optProcess)
        {
            if(oP.value === process.id)
            {return false}
        }
        return true
    }


    async function CreateTypeProcess() {
        try
        {
            const response = await axios.post(path, {
                EqTypeId: type.id,
                ProcessId:process.id
            });
            console.log(response);
            update()
        }
        catch (e)
        {
            console.log(e.massage);
        }
    }

    return (
        <form>
            {/*ОГЛАВЛЕНИЕ*/}
            <h3>Добавление новой связки Тип Оборудования / Процесс</h3>
            {/*ДВА ИНПУТА*/}
            <button onClick={createOptionsType}>Обновить</button>
            <Select options={optType}
                    placeholder='Укажите Тип оборудования'
                    onChange={value => setType(value.value)}
            />
            <br/>
            <button onClick={createOptionsProcess}>Обновить</button>
            <Select options={optProcess}
                    placeholder='Укажите Процесс'
                    onChange={value => setProcess(value.value)}
            />


            {/*ПУСТАЯ СТРОКА*/}
            <br/>
            {/*КНОПКА*/}
            <button onClick={CreateTypeProcess}>Добавить</button>
        </form>
            );
};

export default FormAddTypeProcess;