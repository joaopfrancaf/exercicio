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
            setapiData(getData.data) //bota aqui o setapiData dps (e dpos getData.data)
        })
    })

    return (
        <div>
            <table>
                <tr>
                    <th>Nome</th>
                    <th>Sobrenome</th>
                </tr>
                    {apiData.map((data:type) => {
                        return (
                            <tr>
                                <th>{data.id}</th>
                                <th>{data.nome}</th>
                                <th>{data.sobrenome}</th>
                            </tr>
                        )
                    })}
            </table>
        </div>
    )
}

export default Consulta