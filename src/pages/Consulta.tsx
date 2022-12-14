import axios from "axios";
import { useEffect, useState } from "react"

interface Cliente {
    id:number,
    name:string,
    type:string
}

export function Consulta () {
    const [apiData,setapiData] = useState<Cliente[]>([]);

    useEffect(() => {
        axios.get('http://dragonsguto.herokuapp.com/dragons/find')
        .then((getData) => {
            setapiData(getData.data) //bota aqui o setapiData dps (e dpos getData.data) (antes tava o consolog.() para estudar)
        })
    },[])

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>id</th>
                        <th>Nome</th>
                        <th>type</th>
                    </tr>
                    {apiData.map(i => (
                        <tr key={i.id}> {/* key props para cada elemento*/}
                            <th>{i.id}</th>
                            <th>{i.name}</th>
                            <th>{i.type}</th>
                        </tr>
                    ))} 
                </tbody>
            </table>
        </div>
    )
}

export default Consulta