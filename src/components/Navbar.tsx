import { Routes, Route, Link } from "react-router-dom";

export function Navbar () {
    return (
        <nav>
            <ul>
                <li><Link to='/'>Inicio</Link></li>
                <li><Link to='Incluir'>Incluir</Link></li>
            </ul>
        </nav>
    )
}