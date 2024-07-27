import styled from 'styled-components'

const Cores = {
    Branco: '#ffff',
    Marrom: '#3A3132',
    Verde: '#64BA6B'
}
export const SessaoFooter = styled.section`
    display: flex;
    padding: 10px;
`
export const BoxFooter = styled.div`
    color: ${Cores.Branco};
    background-color: ${Cores.Marrom};
    border-radius: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
`
export const TextFooter = styled.h1`
    font-size: 30px;
    text-align: center;
`
export const BoxDevs = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 22px;
`
export const BoxContato = styled.div`
display: flex;
flex-direction: column;
`
export const TextContato = styled.a`
    font-weight: bold;
    margin-bottom: 7px;
    font-size: 18px;
`
export const LinkContato = styled.li`
font-size: 19px;
padding: 0.5px;
`
export const Copyright = styled.p`
    text-align: center;
    font-weight: lighter;
    margin: 5px;
`
