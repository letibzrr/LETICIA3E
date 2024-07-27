import { SessaoFooter, BoxFooter, TextFooter, BoxDevs, BoxContato, TextContato, LinkContato, Copyright } from '../Styles/Footer'

const Footer = () => {
    return(
        <SessaoFooter>
            <BoxFooter>
                <TextFooter>Entre em contato com os nossos desenvolvedores</TextFooter>
                <BoxDevs>
                    <BoxContato>
                    <TextContato>GITHUB:</TextContato>
                    <LinkContato>letibzrr</LinkContato>
                    <LinkContato>clarafbr</LinkContato>
                    <LinkContato>Myllennyvic</LinkContato>
                    <LinkContato>arthur972645</LinkContato>
                    </BoxContato>
                    <BoxContato>
                    <TextContato>EMAIL:</TextContato>
                    <LinkContato>leticia.santos18@aluno.senai.br</LinkContato>
                    <LinkContato>maria.barbosa16@aluno.senai.br</LinkContato>
                    <LinkContato>myllenny.araujo@al.estudante.senai.br</LinkContato>
                    <LinkContato>arthur.a.lima7@aluno.senai.br</LinkContato>
                    </BoxContato>
                </BoxDevs>
                <Copyright>&copy; 2024 LABSTOCK - Todos os direitos reservados</Copyright>
            </BoxFooter>
        </SessaoFooter>
    )
}

export default Footer;