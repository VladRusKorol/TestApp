import React, {useState} from 'react';
import {Combobox} from "react-widgets/cjs";
import Select from "react-select";

const FormAddModelEquipment = ({types,add}) => {

    const [nameModel,setNameModel] = useState();
    const [sNameModel,setSNameModel] = useState();
    const [typeModel,setTypeModel] = useState();

    function createModel() {
        console.log(nameModel)
        console.log(sNameModel)
        console.log(typeModel)
        add(nameModel,sNameModel,typeModel)
    }

    const optionsType = []
    function ComparisonType(type) {
        for(const oT of optionsType)
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
           if(optionsType.length === 0)
           {
               optionsType.push({value:type.id, label:type.name})
           }
           else if(ComparisonType(type))
           {
               optionsType.push({value:type.id, label:type.name})
           }
       }

   }


    return (
            <form>
                {/*ОГЛАВЛЕНИЕ*/}
                <h3>Добавление новой модели оборудования</h3>
                {/*ДВА ИНПУТА*/}
                <div>
                    <input
                        type="text"
                        placeholder="Полное название модели обордования"
                        value = {nameModel}
                        onChange={event => setNameModel(event.target.value)}
                        style={{width: "100%"}}
                    />
                </div>
                <br/>
                <div>
                    <input
                        type="text"
                        placeholder="Короткое название модели оборудования"
                        value = {sNameModel}
                        onChange={event => setSNameModel(event.target.value)}
                        style={{width: "100%"}}
                    />
                </div>
                <br/>
                <button onClick={createOptionsType}>Обновить</button>
                <Select options={optionsType}
                        placeholder='Укажите Тип оборудования'
                        onChange={value => setTypeModel(value.value)}
                />





                {/*ПУСТАЯ СТРОКА*/}
                <br/>
                {/*КНОПКА*/}
                <button onClick={createModel}>Добавить</button>

            </form>
    );
};

export default FormAddModelEquipment;