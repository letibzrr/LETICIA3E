import React from "react"

const Listar = () => {
    const[items, setItems] = React.useState([])

    function HandleClick () {
        setItems([...items, `Item ${items.length}`])
    }
    function DeleteClick () {
        const novoItem = [...items];
        novoItem.pop();
        setItems(novoItem);
    }

    return(
        <>
        {items.map((item, index) => (
        <li key={index}>{item}</li>
        ))}
        <button onClick={HandleClick}>Adicionar Item</button>
        <button onClick={DeleteClick}>Remover Item</button>
        </>
    )
}
export default Listar;