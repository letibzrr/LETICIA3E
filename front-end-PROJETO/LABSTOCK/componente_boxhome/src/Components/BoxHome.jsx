import { SessaoBoxHome, BoxTrio, TituloIcon, BoxPage, IconBox, TituloBox, DescricaoBox, Descricao, BotaoBox } from '../Styles/BoxHome'
import icon01 from '../../img/iconAgendamento.png'
import icon02 from '../../img/iconEquipamento.png'
import icon03 from '../../img/iconRegistro.png'

const BoxHome = () => {
    return(
        <SessaoBoxHome>
            <BoxTrio>
                    <BoxPage>
                        <TituloIcon>
                            <IconBox src={icon01}/>
                            <TituloBox>Agendamento</TituloBox>
                        </TituloIcon>
                        <DescricaoBox> 
                            <Descricao>Deseja realizar um agendamento para utilizar os laboratórios?</Descricao>
                            <Descricao>Clique abaixo para mais informações sobre a solicitação de utilização dos nosso laboratórios!</Descricao>
                        </DescricaoBox>
                        <BotaoBox>SAIBA MAIS</BotaoBox>
                    </BoxPage>
                    <BoxPage>
                    <TituloIcon>
                        <IconBox src={icon02}/>
                        <TituloBox>Equipamentos</TituloBox>
                    </TituloIcon>
                    <DescricaoBox>
                        <Descricao>Deseja saber quais equipamentos são presente nos laboratórios?</Descricao>
                        <Descricao>Clique abaixo para mais informações sobre os materiais encontrados em nossos laboratórios!</Descricao>
                    </DescricaoBox>
                    <BotaoBox>SAIBA MAIS</BotaoBox>
                    </BoxPage>
                    <BoxPage>
                    <TituloIcon>
                        <IconBox src={icon03}/>
                        <TituloBox>Registro</TituloBox>
                    </TituloIcon>
                    <DescricaoBox>
                        <Descricao>Encontrou um objeto quebrado ou em uso nos laboratórios?</Descricao>
                        <Descricao>Clique abaixo para registrar as atividades realizadas no laboratório pós uso!</Descricao>
                    </DescricaoBox>
                        <BotaoBox>SAIBA MAIS</BotaoBox>
                    </BoxPage>
            </BoxTrio>
        </SessaoBoxHome>
    )
}

export default BoxHome;