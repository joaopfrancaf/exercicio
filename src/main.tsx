import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import { createServer } from "miragejs"

<<<<<<< HEAD

=======
/*createServer({ //aqui antes tava errado ()
  routes() {
    this.get("/api/clientes", () => {
      return [ 
        { id: 1, name: "jpoao" , sobrenome: "asd"},
        { id: 2, name: "gabbs", sobrenome: "hhh" },
        { id: 3, name: "asdasgg", sobrenome: "1234" },
      ]
    })
  },
})*/
>>>>>>> 4bf5e55dcdfb2e45705e701eb6eeffb75e98ec26

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
