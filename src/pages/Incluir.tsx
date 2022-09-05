import axios from "axios"
import { useState } from "react"

export function Incluir () {
    const [nome,setNome] = useState ("")
    const [sobrenome,setSobrenome] = useState ("")

    const sendToApi = () => {
        axios.post('/api/clientes' , {
        nome,
        sobrenome
        })
    }

    return (
        <form>
            <div>
                <label>
                    Nome:
                    <input type="text" name="name" onChange={(e) => setNome(e.target.value)} />
                </label>
                <input type="submit" value="Enviar" />
            </div>
            <div>
                <label>
                    Sobrenome:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Enviar" onChange={(e) => setSobrenome(e.target.value)} />
            </div>
            <button type="submit" onClick={sendToApi}></button>
        </form>
    )
}