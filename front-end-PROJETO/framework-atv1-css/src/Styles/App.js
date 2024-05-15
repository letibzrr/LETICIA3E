import styled from 'styled-components'

const Cores = {
    white: '#ffff',
    cyan: 'hsl(179, 62%, 43%)',
    brightYellow: 'hsl(71, 73%, 54%)',
    lightGray: 'hsl(204, 43%, 93%)',
    grayishBlue: 'hsl(218, 22%, 67%)'
}

export const Container = styled.div`
    border-radius: 15px;
`
export const TituloIntro = styled.h1`
    color: ${Cores.cyan};
    font-size: 25px;
`
export const ParagrafoIntro1 = styled.h2`
    color:${Cores.brightYellow}; 
    font-size: 16px;
    padding-top: 9px;
    padding-bottom: 7px;
`
export const ParagrafoIntro2 = styled.h3`
    color: ${Cores.grayishBlue};
    font-size: 16px
`
export const BoxIntro = styled.div`   
    background-color: ${Cores.white};
    text-align: left;
    padding: 30px;
    width: 600px;
    height: 130px;
`
export const BoxInfos = styled.div`   
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
`
export const Box01 = styled.div`   
    background-color: ${Cores.cyan};
    width: 330px;
` 
export const H2box1 = styled.h2`
    color: ${Cores.white};
    font-size: 20px;
    padding-top: 30px;
    padding-left: 30px;
    padding-bottom: 20px;
`
export const H1box1 = styled.h1`
    color: ${Cores.white};
    padding-left: 30px;
    padding-bottom: 5px;
`
export const H3box1 = styled.h3`
    color: ${Cores.lightGray};
    font-size: 14px;
    padding-left: 30px;
`
export const Buttonbox01 = styled.button`   
    background-color: ${Cores.brightYellow};
    width: 250px;
    height: 45px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: bold;
    color: ${Cores.white};
    border-style: none;
    margin: 30px;
`
export const Box02 = styled.div`   
    background-color: ${Cores.cyan};
    width: 330px;
    padding-bottom: 40px;
`
export const H1box02 = styled.h1`
    color: ${Cores.white};
    font-size: 20px;
    padding: 25px;
`
export const Pbox02 = styled.p`
    color: ${Cores.lightGray};
    font-size: 14px;
    padding-left: 25px;
`

