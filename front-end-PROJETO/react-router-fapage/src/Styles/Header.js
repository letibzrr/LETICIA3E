import styled from 'styled-components';

const Cores = {
    PinkClean: 'hsl(295, 41%, 79%)',
    White: 'hsl(300, 35%, 92%)',
    Black: 'hsla(0, 0%, 0%, 0.5)'
    }

export const Nav = styled.nav`
    background-color: ${Cores.Black};
    text-align: center;
    display: flex;
    justify-content:space-around ;
    height: 25px;
    padding: 20px;
    font-size: 17px;
`

