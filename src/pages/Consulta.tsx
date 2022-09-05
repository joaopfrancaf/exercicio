import axios from "axios";
import { useEffect, useState } from "react"

interface type {
    id:number,
    nome:string,
    sobrenome:string
}

export function Consulta () {
    const [apiData,setapiData] = useState([]);

    useEffect(() => {
        axios.get('/api/clientes')
        .then((getData) => {
            console.log(getData.data) //bota aqui o setapiData dps (e dpos getData.data) (antes tava o consolog.() para estudar)
        })
    })

    return (
        <div>
            <table>
                <tr>
                    <th>id</th>
                    <th>Nome</th>
                    <th>Sobrenome</th>
                </tr>
                    <tbody>
                        {apiData.map((data:type) => {
                            return (
                                <tr>
                                    <th>{data.id}</th>
                                    <th>{data.nome}</th>
                                    <th>{data.sobrenome}</th>
                                </tr>
                            )
                        })}
                    </tbody>
            </table>
        </div>
    )
}

export default Consulta