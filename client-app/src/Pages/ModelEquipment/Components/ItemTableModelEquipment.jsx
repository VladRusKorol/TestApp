import React from 'react';
import axios from "axios";


const ItemTableModelEquipment = ({model, types, path, update}) => {

    async function deleteType() {
        console.log(model)
        await axios.delete(path, {data: {id: model.id}});
        update();
    }

    function FindType()
    {
            for (const type of types)
            {
                if (type.id === model.EqTypeId)
                {
                    return type.name
                }
            }
    }

    const typeModel = FindType()

    return (
            <tr><td>{model.id}</td><td>{model.name}</td><td>{model.s_name}</td><td>{typeModel}</td><td><button onClick={deleteType}>Удалить</button></td></tr>
    );
};

export default ItemTableModelEquipment;