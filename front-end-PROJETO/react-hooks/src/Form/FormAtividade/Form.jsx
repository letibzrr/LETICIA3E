import React from "react";
import './Form.css'
const Input = () => {
    const [nome, setNome] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [senha, setSenha] = React.useState('')
    const [cep, setCep] = React.useState('')
    const [rua, setRua] = React.useState('')
    const [numero, setNumero] = React.useState('')
    const [bairro, setBairro] = React.useState('')
    const [cidade, setCidade] = React.useState('')
    const [estado, setEstado] = React.useState('')
    
    function clickSubmit(event){
        event.preventDefault()
    }
    return(
        <form onSubmit={clickSubmit}>
            <h1>Formulário</h1>
            <h2>Preencha o formulário abaixo com suas informações:</h2>
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" value={nome} onChange={({target}) => setNome(target.value)}/><p>{nome}</p>

            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={({target}) => setEmail(target.value)}/><p>{email}</p>

            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" value={senha} onChange={({target}) => setSenha(target.value)}/><p>{senha}</p>

            <label htmlFor="cep">CEP</label>
            <input type="number" id="cep" value={cep} onChange={({target}) => setCep(target.value)}/><p>{cep}</p>

            <label htmlFor="rua">Rua</label>
            <input type="text" id="rua" value={rua} onChange={({target}) => setRua(target.value)}/><p>{rua}</p>

            <label htmlFor="numero">Número</label>
            <input type="number" id="numero" value={numero} onChange={({target}) => setNumero(target.value)}/><p>{numero}</p>

            <label htmlFor="bairro">Bairro</label>
            <input type="text" id="bairro" value={bairro} onChange={({target}) => setBairro(target.value)}/><p>{bairro}</p>

            <label htmlFor="cidade">Cidade</label>
            <input type="text" id="cidade" value={cidade} onChange={({target}) => setCidade(target.value)}/><p>{cidade}</p>

            <label htmlFor="estado">Estado</label>
            <input type="text" id="estado" value={estado} onChange={({target}) => setEstado(target.value)}/><p>{estado}</p>

            <button>Enviar</button>
        </form>
    )
}

export default Input;