import { SectionHome, ImgHome, H1Home, H3Home, PHome }  from '../Styles/Home'

const Home = () => {
    return(
        <>
        <SectionHome>
            <ImgHome src="https://www.taglivros.com/blog/wp-content/uploads/2019/04/PA_S_ABRIL-_INA_DITOS-09042019-DSC_4352-1-1200x900.jpg" alt="" height="500px"/>
            <H1Home>Os Sete Maridos de Evelyn Hugo</H1Home>
            <H3Home>Livro por Taylor Jenkins Reid</H3Home>
            <PHome>Os Sete Maridos de Evelyn Hugo é um livro de ficção histórica, escrito por Taylor Jenkins Reid e publicado pela Atria Books em 2017. O romance conta a história da estrela fictícia da ‘Antiga Hollywood’, Evelyn Hugo, que, aos 79 anos, dá uma última entrevista a uma jornalista desconhecida, Monique Grant.</PHome>
        </SectionHome>
        <footer>
            <p>Todos os direitos reservados &copy;</p>
        </footer>
        </>
    )
}
export default Home;