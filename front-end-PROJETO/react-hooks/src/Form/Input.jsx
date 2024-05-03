import React from "react";

const Input = () => {
    const [nome, setNome] = React.useState('')
    function clickSubmit(event){
        event.preventDefault()
    }
    return(
        <form onSubmit={clickSubmit}>
            <label htmlFor="nome">Nome</label>
            <input
                type="text" id="nome" value={nome} onChange={({target}) => setNome(target.value)}/>
                <p>{nome}</p>
                <button>Enviar</button>
        </form>
    )
}

export default Input;
