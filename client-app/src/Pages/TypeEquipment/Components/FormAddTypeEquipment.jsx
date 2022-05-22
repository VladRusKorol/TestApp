import React, {useState} from 'react';
const FormAddTypeEquipment = ({add}) => {

    const [typeEqName,setTypeEqName] = useState('');
    const [typeEqSName,setTypeEqSName] = useState('');

    function createTypeEq ()
    {
        console.log("createTypeEq вошли")
       add(typeEqName,typeEqSName);
    }

    return (
        <div>
            <form>
                {/*ОГЛАВЛЕНИЕ*/}
                <h3>Добавление нового типа оборудования</h3>
                {/*ДВА ИНПУТА*/}
                <div>
                    <input
                        type="text"
                        placeholder="Полное название типа обордования"
                        value = {typeEqName}
                        onChange={event => setTypeEqName(event.target.value)}
                        style={{width: "100%"}}
                    />
                </div>
                <br/>
                <div>
                    <input
                        type="text"
                        placeholder="Аббревиатура названия типа оборудования"
                        value = {typeEqSName}
                        onChange={event => setTypeEqSName(event.target.value)}
                        style={{width: "100%"}}
                    />
                </div>
                {/*ПУСТАЯ СТРОКА*/}
                <br/>
                {/*КНОПКА*/}
                <button onClick={createTypeEq}>Добавить</button>
            </form>
        </div>
    );
};

export default FormAddTypeEquipment;