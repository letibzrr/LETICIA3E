import styled from 'styled-components';

const Cores = {
    PinkClean: 'hsl(295, 41%, 79%)',
    White: 'hsl(300, 35%, 92%)'
    }

export const Section404 = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: absolute;
`
export const H1404 = styled.h1`
    font-size: 75px;
    color: ${Cores.PinkClean};
`
export const H1Pagina404 = styled.h3`
    font-size: 45px;
    color: ${Cores.PinkClean};
`
export const H3404 = styled.h3`
    font-size: 20px;
    color: ${Cores.PinkClean};
`
export const PAssEvelyn = styled.p`
    font-size: 27px;
    color: ${Cores.PinkClean};
`
export const Img404 = styled.img`
    width: 750px;
    padding: 10px;
`