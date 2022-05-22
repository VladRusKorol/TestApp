import React, {useState} from 'react';

const FormAddPrm = ({add, update}) => {

    const[paramName, setParamName] = useState();
    const [unite, setUnite] = useState();

    function createPem() {
        add(paramName,unite)
        update()
    }

    return (
        <form>
            {/*ОГЛАВЛЕНИЕ*/}
            <h3>Добавление параметра</h3>
            {/*ДВА ИНПУТА*/}
            <div>
                <input
                    type="text"
                    placeholder="Название параметра"
                    value = {paramName}
                    onChange={event => setParamName(event.target.value)}
                    style={{width:"100%"}}
                />
            </div>
            <br/>
            <div>
                <input
                    type="text"
                    placeholder="Единица измерения"
                    value = {unite}
                    onChange={event => setUnite(event.target.value)}
                    style={{width:"100%"}}
                />
            </div>
            {/*ПУСТАЯ СТРОКА*/}
            <br/>
            {/*КНОПКА*/}
            <button onClick={createPem}>Добавить</button>
        </form>
    );
};

export default FormAddPrm;