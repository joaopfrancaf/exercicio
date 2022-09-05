import { Routes, Route, Link } from "react-router-dom";
import Consulta from "./pages/Consulta";
import { Incluir } from "./pages/Incluir";
import Welcome from "./pages/Welcome";

export function RoutesDom () {
    return (
        <Routes>
            <Route path="/" element={<Welcome/>}/>
            <Route path="incluir" element={<Incluir/>}/>
            <Route path="consulta" element={<Consulta/>}/>
        </Routes>
    )
}

export default RoutesDom