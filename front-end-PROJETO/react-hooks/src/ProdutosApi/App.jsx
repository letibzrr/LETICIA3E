import React from "react"
import Produto from "./Produto"
import './App.css'

const App = () => {
    const [data, setData] = React.useState(null)
    async function getData(event){
        const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)
        const json = await response.json()
        setData(json)
    }
    return(
        <>
        <h1>SELECIONE UM PRODUTO </h1>
        <section className="produtos-buttons">
            <button onClick={getData}>tablet</button>
            <button onClick={getData}>smartphone</button>
            <button onClick={getData}>notebook</button>
        </section>
        {data && <Produto data={data}/>}
        </>
    )
}
export default App;
