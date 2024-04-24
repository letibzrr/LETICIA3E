import React from "react";
import './App.css'

const App = () => {
    const [contar, setContar] = React.useState(0)

    return(
    <>
    <section>
        <button onClick={() => setContar(contar - 1)}>-</button>
        <span>{contar}</span>
        <button onClick={() => setContar(contar + 1)}>+</button>
    </section>
    </>
    )
  }
  
  export default App;