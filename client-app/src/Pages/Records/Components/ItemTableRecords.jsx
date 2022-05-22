import React from 'react';
import axios from "axios";

const ItemTableRecords = ({record, eqTypes, key, models,  typesProcesses, typesProcessesParams, params, processes, path, update}) => {

    function FindTypeName() {
        for (const tpp of typesProcessesParams)
            if (tpp.id === record.EqTypeProcessPrmId) {
                for (const tp of typesProcesses) {
                    if (tpp.EqTypeProcessId === tp.id) {
                        for (const t of eqTypes) {
                            if (tp.EqTypeId === t.id) {
                                return t.name
                            }
                        }
                    }
                }
            }
    }
    const typeName = FindTypeName()

    function FindProcessName() {
        for (const tpp of typesProcessesParams) {

            if (tpp.id === record.EqTypeProcessPrmId) {
                for (const tp of typesProcesses) {
                    if (tpp.EqTypeProcessId === tp.id) {
                        for (const p of processes) {
                            if (tp.ProcessId === p.id) {
                                return p.name
                            }
                        }
                    }
                }
            }
        }
    }
    const processName = FindProcessName()

    function FindParamName(){
        for (const tpp of typesProcessesParams) {

            if (tpp.id === record.EqTypeProcessPrmId) {
                for (const pr of params) {
                    if (tpp.ParametrId === pr.id)
                    {
                                return pr.name

                    }
                    }
                }
            }
        }
    const prmName = FindParamName()

    function FindModel(){
        for(const model of models)
        {
            if(model.id === record.EqModelId)
            {
                return model.name
            }
        }
    }
    const modelName = FindModel()

    function FindUnite() {
        for (const tpp of typesProcessesParams) {

            if (tpp.id === record.EqTypeProcessPrmId) {
                for (const pr of params) {
                    if (tpp.ParametrId === pr.id)
                    {
                        return pr.unite

                    }
                }
            }
        }
    }
    const uniteName = FindUnite()

    async function deleteRecord() {
        await axios.delete(path, {data: {id: record.id}});
        update();
    }

    return (
        <tr><td>{record.id}</td> <td>{typeName}\{processName}\{prmName}</td><td>{modelName}</td><td>{uniteName}</td><td>{record.Target}</td><td><button onClick={deleteRecord}>Удалить</button></td></tr>
    );
};

export default ItemTableRecords;