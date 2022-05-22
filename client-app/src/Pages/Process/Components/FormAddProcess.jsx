import React, {useState} from 'react';

const FormAddProcess = ({add}) => {

    const [processName, setProcessName] = useState();

    function createProcess() {
        add(processName)
    }

    return (
        <form>
                {/*ОГЛАВЛЕНИЕ*/}
                <h3>Добавление нового процесса</h3>
                {/*ДВА ИНПУТА*/}
                <div>
                    <input
                        type="text"
                        placeholder="Название процесса"
                        value = {processName}
                        onChange={event => setProcessName(event.target.value)}
                        style={{width:"100%"}}
                    />
                </div>
                {/*ПУСТАЯ СТРОКА*/}
                <br/>
                {/*КНОПКА*/}
                <button onClick={createProcess}>Добавить</button>
            </form>
    );
};

export default FormAddProcess;