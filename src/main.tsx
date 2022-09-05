import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import { createServer } from "miragejs"

export default function () {
  createServer({
    routes() {
      this.get("/api/clientes", () => ({
        clientes: [
          { id: 1, name: "jpoao" , sobrenome: "asd"},
          { id: 2, name: "gabbs", sobrenome: "hhh" },
          { id: 3, name: "asdasgg", sobrenome: "1234" },
        ],
      }))
    },
  })
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
