import { Container, Imagem, BoxInfos,
    TextPerfum, NamePerfum, DescriptionPerfum, Pricebox,
    PriceNew, PriceOld, ButtonBuy } from '../Styles/App'
import imageProduct from '../../images/image-product-desktop.jpg'
import iconCard from '../../images/icon-cart.svg'

const App = () => {
    return(
        <Container>
            <Imagem src={imageProduct} alt=""/>
            <BoxInfos>
                <TextPerfum>PERFUME</TextPerfum>
                <NamePerfum>Gabrielle Essence Eau De Parfum</NamePerfum>
                <DescriptionPerfum>A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL.</DescriptionPerfum>
                    <Pricebox>
                        <PriceNew>$149.99</PriceNew>
                        <PriceOld>$169.99</PriceOld>
                    </Pricebox>
                <ButtonBuy><img src={iconCard} alt="" /> Add to Cart</ButtonBuy>
            </BoxInfos>
        </Container>
    )
}
export default App;