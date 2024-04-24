import React from "react";
import './App.css'
// estado: representa as caracteristicas dela naquele momento
const App = () => {
    const [ativo, setAtivo] = React.useState(true)
    const [contar, setContar] = React.useState(0)

    // outro método
    // function handlerClick() {
    //     setContar(contar + 1)
    // }

    return(
    <>
    <h1>CLIQUE NO BOTÃO ABAIXO PARA OBTER O NÚMERO DESEJADO</h1>
    <section>
      <button disabled={!ativo} onClick={() => setAtivo(false)}>Button</button>
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </section>
    </>
    )
  }
  
  export default App;