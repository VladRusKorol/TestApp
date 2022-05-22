import React from 'react';
import axios from "axios";

const ItemTableTypeProcessPrm = ({typeProcessParam, processes, types, params, typesProcesses, path, update}) => {

    function FindType()    {
        for(const typeProcess of typesProcesses)
        {
            if(typeProcessParam.EqTypeProcessId === typeProcess.id)
            {
                for(const type of types)
                {
                    if(type.id === typeProcess.EqTypeId)
                    {
                        return type.name
                    }
                }
            }
        }
    }
    const typeName = FindType()

    function FindProcess() {
        for(const typeProcess of typesProcesses)
        {
            if(typeProcessParam.EqTypeProcessId === typeProcess.id)
            {
                for(const process of processes)
                {
                    if(process.id === typeProcess.ProcessId)
                    {
                        return process.name
                    }
                }
            }
        }
    }
    const processName = FindProcess()

    function FindParam() {
        for(const param of params)
        {
            if(typeProcessParam.ParametrId === param.id)
            {
                return param.name
            }
        }
    }
    const paramName=FindParam()

    function FindUniteParam() {
        for(const param of params)
        {
            if(typeProcessParam.ParametrId === param.id)
            {
                return param.unite
            }
        }
    }
    const paramUnite = FindUniteParam()

    async function deleteTypeProcessPrm() {
        console.log(typeProcessParam)
        await axios.delete(path, {data: {id: typeProcessParam.id}});
        update();
    }

    return (
        <tr><td>{typeProcessParam.id}</td><td>{typeName}\{processName}</td><td>{paramName}</td><td>{paramUnite}</td><td><button onClick={deleteTypeProcessPrm}>Удалить</button></td></tr>
    );
};

export default ItemTableTypeProcessPrm;