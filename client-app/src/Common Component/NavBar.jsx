import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <h3>Навигация по Web-приложению</h3>
            <div>
                <ul>
                    <li><Link to="/">Правила</Link></li>
                    <li><Link to="/api/type">Работа с типами оборудования</Link></li>
                    <li><Link to="/api/model">Работа с моделями оборудования</Link></li>
                    <li><Link to="/api/process">Работа с процессами</Link></li>
                    <li><Link to="/api/prm">Работа с параметрами</Link></li>
                    <li><Link to="/api/type_process">Связка оборудование/процессы</Link></li>
                    <li><Link to="/api/type_process_prm">Связка оборудование/процессы/параметры</Link></li>
                    <li><Link to="/api/records">Работа со справочником</Link></li>
                </ul>
            </div>
            <hr style={{margin: '15px' }} />
        </div>
    );
};

export default NavBar;