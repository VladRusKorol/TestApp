import React from 'react';
import axios from "axios";

const ItemTableProcess = ({process, path, update}) => {

    async function delProcess()
    {
        console.log(process)
        await axios.delete(path, {data: {id: process.id}});
        update()
    }

    return (
        <tr><td>{process.id}</td><td>{process.name}</td><td><button onClick={delProcess}>Удалить</button></td></tr>
    );

};

export default ItemTableProcess;