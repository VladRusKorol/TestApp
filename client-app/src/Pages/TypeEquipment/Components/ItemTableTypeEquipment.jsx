import React from 'react';
import axios from "axios";

const ItemTableTypeEquipment = ({type, path, update}) => {
    
    async function deleteType() {
        console.log(type)
        await axios.delete(path, {data: {id: type.id}});
        update();
    }
    
    return (
                /*СТРОКА ТРИ КОЛОНКИ И ИЗ ДЕСРУКТУРИЗИРОВАННОГО ПРОПСА - ЭЛЕМЕНТА МАССИВА ВЫЧЛЕНИЯЕМ НАЗВАНИЕ И S_НАЗВАНИЕ*/
            <tr><td>{type.id}</td><td>{type.name}</td><td>{type.s_name}</td><td><button onClick={deleteType}>Удалить</button></td></tr>
    );
};

export default ItemTableTypeEquipment;