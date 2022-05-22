import React from 'react';
import axios from "axios";

const ItemTablePrm = ({param, path, update}) => {

    async function delParam()
    {
        console.log(param)
        await axios.delete(path, {data: {id: param.id}});
        update()
    }

    return (
        <tr><td>{param.id}</td><td>{param.name}</td><td>{param.unite}</td><td><button onClick={delParam}>Удалить</button></td></tr>
    );
};

export default ItemTablePrm;