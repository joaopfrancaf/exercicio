import axios from "axios"
import { useState } from "react"

export function Incluir () {
    const [name,setName] = useState ("")
    const [type,setType] = useState ("")

    const sendToApi = () => {
        axios.post('http://dragonsguto.herokuapp.com/dragons/' , {
        name,
        type
        })
    }

    return (
        <form>
            <div>
                <label>
                    Nome:
                    <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Sobrenome:
                    <input type="text" name="name" onChange={(e) => setType(e.target.value)} />
                </label>
            </div>
            <button type="submit" onClick={sendToApi}>Salvar</button>
        </form>
    )
}