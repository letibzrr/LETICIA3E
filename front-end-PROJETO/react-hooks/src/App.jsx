import React from "react";
// ESTADO
// o estado de uma aplicação representa as caracteristicas dela naquele momento

/** 
const App = () => {
  const ativo = true 
  return(
    <button disabled={!ativo}> // estado do componente = disabled
      {ativo ? "Botão Ativo" : "Botão Inativo"}
    </button>
    )
}
export default App;
*/

// HOOKS
// os hooks são funções especiais do react que permitem controlarmos o estado e o ciclo de vida de componentes funcionais

const App = () => {
  const [ativo, setAtivo] = React.useState(true)
  const [contar, setContar] = React.useState(0)
  // React.useState => função que retorna um array com 2 valores.
  // primeiro valor => guarda o dado do estado atual (strings, arrays, numbers, boolean, null, undefined, objects).
  // segundo valor => modificação do estado do primeiro valor.
  // modificação ativada = todos os componentes depende do estado, serão renderizados (e seus filhos também).
  // garante a raetividade de componentes funcionais no React.  
  return(
    <>
    <button onClick={() => setAtivo(!ativo)}>
      {ativo ? "Botão Ativo" : "Botão Inativo"}
      </button>
    <button onClick={() => setContar(contar + 1)}>
      {contar}
      </button>
    </>
    )
}
export default App; 