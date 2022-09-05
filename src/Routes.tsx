import { Routes, Route, Link } from "react-router-dom";
import { Incluir } from "./pages/Incluir";

export function RoutesDom () {
    <Routes>
        <Route path="incluir" element={<Incluir/>}/>
    </Routes>
}

export default RoutesDom