import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Rules from "./Pages/Rules/rules";
import TypeEquipment from "./Pages/TypeEquipment/typeEquipment";
import Records from "./Pages/Records/Records";
import ModelEquipment from "./Pages/ModelEquipment/ModelEquipment";
import Prm from "./Pages/Prm/Prm";
import Process from "./Pages/Process/Process";
import TypeProcess from "./Pages/Type_Process/TypeProcess";
import TypeProcessPrm from "./Pages/Type_Process_Prm/TypeProcessPrm";
import './Style/Style.css';
import NavBar from "./Common Component/NavBar";
import AppRouter from "./Common Component/AppRouter";
//отслеживание движения пути и перерисовка компонентов

const App = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    );
};

export default App;