import React, {useState} from 'react';
import Select from "react-select";
import axios from "axios";

const FromAddRecords = ({typesProcessesParams, processes, models, eqTypes, params, path, records, typesProcesses, update}) => {

    const [target,setTarget] = useState()
    const [newTypeProcessPrm, setNewTypeProcessPrm] = useState()
    const [newModel, setNewModel] = useState()

    function FindType(TPP) {
        for(const TP of typesProcesses)
        {
            if(TPP.EqTypeProcessId === TP.id)
            {
                for(const t of eqTypes)
                {
                    if(TP.EqTypeId === t.id)
                    {

                        return t.name
                    }
                }
            }
        }
    }
    function FindProcess(TPP) {
        for(const TP of typesProcesses)
        {
            if(TPP.EqTypeProcessId === TP.id)
            {
                for(const p of processes)
                {
                    if(TP.ProcessId === p.id)
                    {
                        return p.name
                    }
                }
            }
        }
    }
    function FindPrm(TPP) {
        for(const P of params)
        {
            if(TPP.ParametrId=== P.id)
            {
                        return P.name
                }
            }
        }
    function Comparison(TPP) {
        for (const o of optionsTypeProcessPrm)
        {
            if(o.value === TPP.id)
            {
                return false
            }
        }
        return true

    }

    const optionsTypeProcessPrm = []
    function CreateOptionsTypeProcessPrm(e)
    {
        e.preventDefault()
        console.log('start')
        console.log(typesProcessesParams)
        for(const TPP of typesProcessesParams)
        {
            console.log('startstart')
            if(optionsTypeProcessPrm.length === 0)
            {
                console.log('0 в списке')
                optionsTypeProcessPrm.push({value: TPP.id, label:FindType(TPP)+'|'+FindProcess(TPP)+'|'+FindPrm(TPP)})
            }
            else if (Comparison(TPP)===true)
            {
                console.log('НЕ 0 в списке')
                optionsTypeProcessPrm.push({value: TPP.id, label:FindType(TPP)+'|'+FindProcess(TPP)+'|'+FindPrm(TPP)})
            }
        }
    }

    const optionsModels = []
    function CreateOptionsModels(e) {
        e.preventDefault()
        console.log(newTypeProcessPrm)
        console.log(FindIdTypes(newTypeProcessPrm))
        for(const model of models)
        {
            if(optionsModels.length === 0)
            {
                console.log('0 в списке')
                if(model.EqTypeId === FindIdTypes(newTypeProcessPrm))
                {
                    optionsModels.push({value: model.id, label:model.name})
                }
            }
            else if (ComparisonModel(model) ===true)
            {
                console.log('НЕ 0 в списке')
                if(model.EqTypeId === FindIdTypes(newTypeProcessPrm))
                {
                    optionsModels.push({value: model.id, label:model.name})
                }
            }
        }
    }
    function FindIdTypes(newTypeProcessPrm) {
        for(const TPP of typesProcessesParams)
        {
            if(TPP.id === newTypeProcessPrm)
            {
                for(const TP of typesProcesses)
                {
                    if(TPP.EqTypeProcessId === TP.id)
                    {
                        for(const T of eqTypes)
                        {
                            if(TP.EqTypeId === T.id)
                            {
                                return T.id
                            }
                        }
                    }
                }
            }
        }
    }
    function ComparisonModel(model) {
        for (const o of optionsModels)
        {
            if(o.value === model.id)
            {
                return false
            }
        }
        return true
    }

    async function CreateRecords() {

            try
            {
                const response = await axios.post(path, {
                    EqTypeProcessPrmId: newTypeProcessPrm,
                    EqModelId: newModel,
                    Target: target
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
            <h3>Добавление новой записи</h3>
            {/*ДВА ИНПУТА*/}
            <button onClick={CreateOptionsTypeProcessPrm}>Обновить</button>
            <Select options={optionsTypeProcessPrm}
                    placeholder='Укажите ТипОборудовния \ Процесс \  Параметр'
                    onChange={value => setNewTypeProcessPrm(value.value)}
            />
            <br/>
            <button onClick={CreateOptionsModels}>Обновить</button>
            <Select options={optionsModels}
                    placeholder='Укажите модель оборудования'
                    onChange={value => setNewModel(value.value)}/>
            <br/>
            <input
                type="text"
                placeholder="Значение параметра"
                value = {target}
                onChange={event => setTarget(event.target.value)}
                style={{width:"100%"}}
            />
            {/*ПУСТАЯ СТРОКА*/}
            <br/>
            <br/>
            {/*КНОПКА*/}
            <button onClick={CreateRecords}>Добавить</button>

        </form>
    );
};

export default FromAddRecords;