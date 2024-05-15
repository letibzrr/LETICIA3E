import { Container, TituloIntro, ParagrafoIntro1, ParagrafoIntro2, BoxIntro,
    BoxInfos, Box01, H2box1, H1box1, H3box1, Buttonbox01,  Box02, H1box02, Pbox02} from '../Styles/App'

const App = () => {
    return(
        <>
        <Container>
            <BoxIntro>
                <TituloIntro>Join our community</TituloIntro>
                <ParagrafoIntro1>30-day, hassle-free money back guarantee</ParagrafoIntro1>
                <ParagrafoIntro2>Gain access to our full library of tutorials along with expert code reviews.</ParagrafoIntro2>
                <ParagrafoIntro2>Perfect for any developers who are serious about honing their skills.</ParagrafoIntro2>
            </BoxIntro>
            <BoxInfos>
                    <Box01>
                        <H2box1>Monthly Subscription</H2box1>
                        <H1box1>$29 <small>per month</small></H1box1>
                        <H3box1>Full access for less than $1 a day</H3box1>
                        <Buttonbox01>Sign Up</Buttonbox01>
                    </Box01>
                    <Box02>
                        <H1box02>Why Us</H1box02>
                        <Pbox02>Tutorials by industry experts</Pbox02>
                        <Pbox02>Perr & expert code review</Pbox02>
                        <Pbox02>Coding exercises</Pbox02>
                        <Pbox02>Access to our GitHub repos</Pbox02>
                        <Pbox02>Community forum</Pbox02>
                        <Pbox02>Flashcard decks</Pbox02>
                        <Pbox02>New videos every week</Pbox02>
                    </Box02>
                </BoxInfos>
            </Container>
        </>
    )
}
export default App;