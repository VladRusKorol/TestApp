import React from 'react';
import axios from "axios";

const ItemTableTypeProcess = ({typeProcess, processes, types, path, update}) => {

    function FindType() {
        for(const type of types)
        {
            if(type.id===typeProcess.EqTypeId)
            {
                return type.name
            }
        }
    }
    const typeName = FindType()

    function FindProcess() {
        for(const process of processes)
        {
            if(process.id===typeProcess.ProcessId)
            {
                return process.name
            }
        }
    }
    const processName = FindProcess()

    async function deleteTypeProcess() {
        console.log(typeProcess)
        await axios.delete(path, {data: {id: typeProcess.id}});
        update();
    }



    return (
        <tr><td>{typeProcess.id}</td><td>{typeName}\{processName}</td><td><button onClick={deleteTypeProcess}>Удалить</button></td></tr>
    );
};

export default ItemTableTypeProcess;