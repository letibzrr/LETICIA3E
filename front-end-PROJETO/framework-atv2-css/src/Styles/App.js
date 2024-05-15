import styled from 'styled-components' //importa a função do node

const Cores = {
DarkCyan: 'hsl(158, 36%, 37%)',
Cream: 'hsl(30, 38%, 92%)',
VeryDarkBlue: 'hsl(212, 21%, 14%)',
DarkGrayishBlue: 'hsl(228, 12%, 48%)',
White: 'hsl(0, 0%, 100%)'
}

export const Container = styled.section`
    width: 650px;
    height: 500px;
    background-color: ${Cores.White};
    border-radius: 15px;
    display: flex;
    // responsividade
    //@media (max-width: 800px){
    //    flex-direction: columm;
    //}
`
export const Imagem = styled.img`
    width: 50%;
    height: 100%;
    border-radius: 15px 0 0 15px;
`
export const BoxInfos = styled.div`
    margin: 30px;
`
export const TextPerfum = styled.p`
    color: ${Cores.DarkGrayishBlue};
    font-size: 14px;
    letter-spacing: 3px;
    padding-bottom: 15px;
    font-family: "Montserrat", sans-serif;
`
export const NamePerfum = styled.h1`
    color: ${Cores.VeryDarkBlue};
    font-size: 40px;
    padding-bottom: 15px;
    font-family: "Fraunces", serif;
`
export const DescriptionPerfum = styled.p`
    color: ${Cores.DarkGrayishBlue};
    font-size: 17px;
    padding-bottom: 15px;
    font-family: "Montserrat", sans-serif;
`
export const Pricebox = styled.div`
    display: flex;
`
export const PriceNew = styled.h1`
    color: ${Cores.DarkCyan};
    font-size: 40px;
    font-family: "Fraunces", serif;
`
export const PriceOld = styled.p`
    color: ${Cores.DarkGrayishBlue};
    font-size: 15px;
    text-decoration: line-through;
    font-family: "Fraunces", serif;
    margin: 15px;
`
export const ButtonBuy = styled.button`
    background-color: ${Cores.DarkCyan};
    color: ${Cores.White};
    width: 270px;
    height: 50px;
    border-radius: 10px;
    border-style: none;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 15px;
    font-family: "Montserrat", sans-serif;

    &:hover{
        filter: brightness(0.8);
    }
`

