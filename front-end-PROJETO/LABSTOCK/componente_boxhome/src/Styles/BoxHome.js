import styled from 'styled-components'

const Cores = {
    Branco: '#ffff',
    Marrom: '#3A3132',
    VerdeClaro: '#2D8034',
    VerdeEscuro: '#194D26',
    Sombra: '#0000002d'
}

export const SessaoBoxHome = styled.section`
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
`
export const BoxTrio = styled.div`
    border-radius: 20px;
    width: 75%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`
export const BoxPage = styled.section`
    background-color: ${Cores.Branco};
    width: 100%;
    height: 350px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 8px 1px ${Cores.Sombra};
    border-radius: 10px;
    align-items: center;
`
export const TituloIcon = styled.div`
    display: flex;
    align-items: center;
    padding: 15px;
`
export const IconBox = styled.img`
    width: 25%;
`
export const TituloBox = styled.h1`
    font-size: 28px;
    color: ${Cores.Marrom};
`
export const DescricaoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px;
    height: 60%;
`
export const Descricao = styled.p`
    padding: 5px;
`
export const BotaoBox = styled.button`
    width: 50%;
    padding: 8px;
    transition: background-color 0.3s ease;
    border-radius: 15px;
    border: none ;
    background-color: ${Cores.VerdeEscuro};
    color: ${Cores.Branco};
    margin-bottom: 20px;

    &:hover {
    background-color: ${Cores.VerdeClaro};
  }
`
