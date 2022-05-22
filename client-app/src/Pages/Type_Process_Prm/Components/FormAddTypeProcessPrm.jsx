import React, { useState} from 'react';
import Select from "react-select";
import axios from "axios";




const FormAddTypeProcessPrm = ({update, typesProcesses, params,  processes, types, path}) => {

    //Конструирование человекочитаемых селектов для выбора оборудования/процесса
    const opt = []
    function FindTypeName(typeProcess) {
        for(const type of types)
        {
            if(type.id === typeProcess.EqTypeId)
            {
                return type.name
            }
        }
    }
    function FindProcessName(typeProcess) {
        for(const process of processes)
        {
            if(process.id === typeProcess.ProcessId)
            {
                return process.name
            }
        }
    }
    function Comparison(typeProcess) {
        for (const o of opt)
        {
            if(o.value === typeProcess.id)
            {
                return false
            }
        }
        return true

   }

    //Конструирование человекочитаемых селектов для выбора процесса
    const optParams = []
    function ComparisonParam(param) {
        for (const op of optParams) {
            if (op.value === param.id) {
                return false
            }
        }
        return true

    }


    function createOption(e) {
        e.preventDefault()
        for(const typeProcess of typesProcesses )
        {
            /*ели массив в принципе пустой*/
            if(opt.length === 0)
            {
                console.log('0 элементов в массиве')
                opt.push({value: typeProcess.id, label: FindTypeName(typeProcess)+' | '+FindProcessName(typeProcess)})
            }
            else if (Comparison(typeProcess)===true)
            {
                console.log('Возвращается true')
                opt.push({value: typeProcess.id, label: FindTypeName(typeProcess)+' | '+FindProcessName(typeProcess)})
            }

        }
        console.log(opt)
    }
    function createOptionsParams(e) {
        e.preventDefault()
        for (const param of params) {
            /*ели массив в принципе пустой*/
            if (optParams.length === 0) {
                console.log('0 элементов в массиве')
                optParams.push({value: param.id, label: param.name})
            } else if (ComparisonParam(param) === true) {
                console.log('Возвращается true')
                optParams.push({value: param.id, label: param.name})
            }

        }
        console.log(optParams)
    }



    const [newTypeProcess, setNewTypeProcess] = useState();
    const [newParam, setNewParam] = useState();

    async function CreateTypeProcessPrm() {
        try
        {
            const response = await axios.post(path, {
                EqTypeProcessId: newTypeProcess,
                ParametrId: newParam
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
            <h3>Добавление новой связки (Тип оборудования\Процесс) + Параметр</h3>
            {/*ДВА ИНПУТА*/}
            <button onClick={createOption}>Обновить</button>
            <Select options={opt}
                    placeholder='Укажите ТипОборудовния \ Процесс'
                    onChange={value => setNewTypeProcess(value.value)}
            />
            <br/>
            <button onClick={createOptionsParams}>Обновить</button>
            <Select options={optParams}
                    placeholder='Укажите Параметр'
                    onChange={value => setNewParam(value.value)}
            />
            {/*ПУСТАЯ СТРОКА*/}
            <br/>
            {/*КНОПКА*/}
            <button onClick={CreateTypeProcessPrm}>Добавить</button>
        </form>
    );
};
export default FormAddTypeProcessPrm;