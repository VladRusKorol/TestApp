import React from 'react';
import {Route, Routes} from "react-router-dom";
import Rules from "../Pages/Rules/rules";
import TypeEquipment from "../Pages/TypeEquipment/typeEquipment";
import Records from "../Pages/Records/Records";
import ModelEquipment from "../Pages/ModelEquipment/ModelEquipment";
import Prm from "../Pages/Prm/Prm";
import Process from "../Pages/Process/Process";
import TypeProcess from "../Pages/Type_Process/TypeProcess";
import TypeProcessPrm from "../Pages/Type_Process_Prm/TypeProcessPrm";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Rules/>}/>//корневой каталог правила использования справочников
                <Route path="/api/type" element={<TypeEquipment/>}/>//работа с типами оборудования
                <Route path="/api/records" element={<Records/>}/>//работы с записями справочников
                <Route path="/api/model" element={<ModelEquipment/>}/>работа с моделями
                <Route path="/api/prm" element={<Prm/>}/>//работа с параметрами
                <Route path="/api/process" element={<Process/>}/>//работа с процессами
                <Route path="/api/type_process" element={<TypeProcess/>}/>//работа со связами типо процесс
                <Route path="/api/type_process_prm" element={<TypeProcessPrm/>}/>
            </Routes>
        </div>
    );
};

export default AppRouter;