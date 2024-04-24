import React from "react"

const Listar = () => {
    const[items, setItems] = React.useState(['Item 1'])

    function HandleClick () {
        setItems([...items, 'Novo Item'])
    }

    return(
        <>
        {items.map((item, index) => (
        <li key={index}>{item}</li>
        ))}
        <button onClick={HandleClick}>Adicionar Item</button>
        </>
    )
}
export default Listar;