import { Container, TituloEquipamento, DescricaoEquipamento,
    Box01, CardEq01, CardEq02, CardEq03, ImgEquipamento1,  ImgEquipamento2,  ImgEquipamento3, TituloEq01, TituloEq02, TituloEq03, DescricaoEq01, DescricaoEq02, DescricaoEq03, Disponibilidadeeq01, Disponibilidadeeq02, Disponibilidadeeq03,
    Box02, CardEq04, CardEq05, CardEq06, ImgEquipamento4,  ImgEquipamento5,  ImgEquipamento6, TituloEq04, TituloEq05, TituloEq06, DescricaoEq04, DescricaoEq05, DescricaoEq06, Disponibilidadeeq04, Disponibilidadeeq05, Disponibilidadeeq06,
    Box03, CardEq07, CardEq08, CardEq09, ImgEquipamento7,  ImgEquipamento8,  ImgEquipamento9, TituloEq07, TituloEq08, TituloEq09, DescricaoEq07, DescricaoEq08, DescricaoEq09, Disponibilidadeeq07, Disponibilidadeeq08, Disponibilidadeeq09,
    Box04, CardEq10, CardEq11, CardEq12, ImgEquipamento10, ImgEquipamento11,  ImgEquipamento12, TituloEq10, TituloEq11, TituloEq12, DescricaoEq10, DescricaoEq11, DescricaoEq12, Disponibilidadeeq10, Disponibilidadeeq11, Disponibilidadeeq12,
    Box05, CardEq13, CardEq14, CardEq15, ImgEquipamento13,  ImgEquipamento14, ImgEquipamento15, TituloEq13, TituloEq14, TituloEq15, DescricaoEq13, DescricaoEq14, DescricaoEq15, Disponibilidadeeq13, Disponibilidadeeq14, Disponibilidadeeq15
 } from '../Styles/Equipamento'

import imgEq01 from '../../img/imagem01.png'
import imgEq02 from '../../img/imagem02.png'
import imgEq03 from '../../img/imagem03.png'
import imgEq04 from '../../img/imagem04.png'
import imgEq05 from '../../img/imagem05.png'
import imgEq06 from '../../img/imagem06.png'
import imgEq07 from '../../img/imagem07.png'
import imgEq08 from '../../img/imagem08.png'
import imgEq09 from '../../img/imagem09.png'
import imgEq10 from '../../img/imagem10.png'
import imgEq11 from '../../img/imagem11.png'
import imgEq12 from '../../img/imagem12.png'
import imgEq13 from '../../img/imagem13.png'
import imgEq14 from '../../img/imagem14.png'
import imgEq15 from '../../img/imagem15.png'

const Equipamento = () => {
    return(
        <Container>
            <TituloEquipamento className='TituloEquipamento'>EQUIPAMENTOS</TituloEquipamento>
            <DescricaoEquipamento className='DescricaoEquipamento'>EQUIPAMENTOS é uma página direcionada aos equipamentos encontrados no laboratório, além de descrever sua funcionalidade e quais estão disponiveis.</DescricaoEquipamento>
            <Box01 className='Box01'>
                <CardEq01 className='CardBox01'>
                    <ImgEquipamento1 className='ImgBox01' src={imgEq01} alt=""/>
                    <TituloEq01 className='TituloEqBox01'>Agitador Magnético</TituloEq01>
                    <DescricaoEq01 className='DescricaoEqBox01'>Utilizado para aquecer e agitar soluções químicas, usando um peixinho magnético no recipiente.</DescricaoEq01>
                    <Disponibilidadeeq01 className='DisponibilidadeEqBox01'>DISPONIVEL: 2</Disponibilidadeeq01>
                </CardEq01>
                <CardEq02 className='CardBox01'>
                    <ImgEquipamento2 className='ImgBox01' src={imgEq02} alt=""/>
                    <TituloEq02 className='TituloEqBox01'>Autoclave</TituloEq02>
                    <DescricaoEq02 className='DescricaoEqBox01'>Utilizada para a esterilização de materiais através de calor e pressão por um determinado período.</DescricaoEq02>
                    <Disponibilidadeeq02 className='DisponibilidadeEqBox01'>DISPONIVEL: 2</Disponibilidadeeq02>
                </CardEq02>
                <CardEq03 className='CardBox01'>
                    <ImgEquipamento3 className='ImgBox01' src={imgEq03} alt=""/>
                    <TituloEq03 className='TituloEqBox01'>Balança Analítica</TituloEq03>
                    <DescricaoEq03 className='DescricaoEqBox01'>Utilizada para medição de massas com alta precisão, geralmente miligramas ou menos.</DescricaoEq03>
                    <Disponibilidadeeq03 className='DisponibilidadeEqBox01'>DISPONIVEL: 2</Disponibilidadeeq03>
                </CardEq03>
            </Box01>
            <Box02 className='Box02'>
            <CardEq04 CardEq01 className='CardBox02'>
                    <ImgEquipamento4 className='ImgBox02' src={imgEq04} alt=""/>
                    <TituloEq04 className='TituloEqBox02'>Balança de Precisão</TituloEq04>
                    <DescricaoEq04 className='DescricaoEqBox02'>Utilizada para medição de amostras pequenas e determina o peso do material de maneira rápida e simples.</DescricaoEq04>
                    <Disponibilidadeeq04 className='DisponibilidadeEqBox02'>DISPONIVEL: 3</Disponibilidadeeq04>
                </CardEq04>
                <CardEq05 CardEq01 className='CardBox02'>
                    <ImgEquipamento5 className='ImgBox02' src={imgEq05} alt=""/>
                    <TituloEq05 className='TituloEqBox02'>Balão Volumétrico</TituloEq05>
                    <DescricaoEq05 className='DescricaoEqBox02'>Utilizado para preparar soluções e diluições que necessitam de medidas extremamente precisas.</DescricaoEq05>
                    <Disponibilidadeeq05 className='DisponibilidadeEqBox02'>DISPONIVEL: 20</Disponibilidadeeq05>
                </CardEq05>
                <CardEq06 CardEq01 className='CardBox02'>
                    <ImgEquipamento6 className='ImgBox02' src={imgEq06} alt=""/>
                    <TituloEq06 className='TituloEqBox02'>Barra Magnética </TituloEq06>
                    <DescricaoEq06 className='DescricaoEqBox02'>Utilizada para agitar soluções junto ao equipamento de agitação magnética.</DescricaoEq06>
                    <Disponibilidadeeq06 className='DisponibilidadeEqBox02'>DISPONIVEL: 2</Disponibilidadeeq06>
                </CardEq06>
            </Box02>
            <Box03 className='Box03'>
                <CardEq07 CardEq01 className='CardBox03'>
                    <ImgEquipamento7 className='ImgBox03' src={imgEq07} alt=""/>
                    <TituloEq07 className='TituloEqBox03'>Bastão de Vidro</TituloEq07>
                    <DescricaoEq07 className='DescricaoEqBox03'>Utilizado para agitar soluções e direcionar um líquido na transferência de recipientes.</DescricaoEq07>
                    <Disponibilidadeeq07 className='DisponibilidadeEqBox03'>DISPONIVEL: 30</Disponibilidadeeq07>
                </CardEq07>
                <CardEq08 CardEq01 className='CardBox03'>
                    <ImgEquipamento8 className='ImgBox03' src={imgEq08} alt=""/>
                    <TituloEq08 className='TituloEqBox03'>Becker</TituloEq08>
                    <DescricaoEq08 className='DescricaoEqBox03'>Utilizado para medição de volumes e na realização de misturas em experimentos.</DescricaoEq08>
                    <Disponibilidadeeq08 className='DisponibilidadeEqBox03'>DISPONIVEL: 40</Disponibilidadeeq08>
                </CardEq08>
                <CardEq09 CardEq01 className='CardBox03'>
                    <ImgEquipamento9 className='ImgBox03' src={imgEq09} alt=""/>
                    <TituloEq09 className='TituloEqBox03'>Funil de Vidro</TituloEq09>
                    <DescricaoEq09 className='DescricaoEqBox03'>Utilizado no processo de filtração de misturas e na transferência de recipientes, evitando perdas</DescricaoEq09>
                    <Disponibilidadeeq09 className='DisponibilidadeEqBox03'>DISPONIVEL: 20</Disponibilidadeeq09>
                </CardEq09>
            </Box03>
            <Box04 className="Box04">
            <CardEq10 CardEq01 className='CardBox04'>
                    <ImgEquipamento10 className='ImgBox04' src={imgEq10} alt=""/>
                    <TituloEq10 className='TituloEqBox04'>Microscópio</TituloEq10>
                    <DescricaoEq10 className='DescricaoEqBox04'>Utilizado para ampliar amostras para que possam ser observadas com mais detalhes.</DescricaoEq10>
                    <Disponibilidadeeq10 className='DisponibilidadeEqBox03'>DISPONIVEL: 2</Disponibilidadeeq10>
                </CardEq10>
                <CardEq11 CardEq01 className='CardBox04'>
                    <ImgEquipamento11 className='ImgBox04' src={imgEq11} alt=""/>
                    <TituloEq11 className='TituloEqBox04'>Placa de Petri</TituloEq11>
                    <DescricaoEq11 className='DescricaoEqBox04'>Utilizada para cultivar e observar o comportamento ou secagem de amostras.</DescricaoEq11>
                    <Disponibilidadeeq11 className='DisponibilidadeEqBox03'>DISPONIVEL: 30</Disponibilidadeeq11>
                </CardEq11>
                <CardEq12 CardEq01 className='CardBox04'>
                    <ImgEquipamento12 className='ImgBox04' src={imgEq12} alt=""/>
                    <TituloEq12 className='TituloEqBox04'>Proveta</TituloEq12>
                    <DescricaoEq12 className='DescricaoEqBox04'>Utilizada para medição e transferência de volumes de líquidos ou soluções.</DescricaoEq12>
                    <Disponibilidadeeq12 className='DisponibilidadeEqBox03'>DISPONIVEL: 15</Disponibilidadeeq12>
                </CardEq12>
            </Box04>
            <Box05 className='Box05'>
            <CardEq13 CardEq01 className='CardBox05'>
                    <ImgEquipamento13 className='ImgBox05' src={imgEq13} alt=""/>
                    <TituloEq13 className='TituloEqBox05'>Pisseta</TituloEq13>
                    <DescricaoEq13 className='DescricaoEqBox05'>Utilizado para alocar soluções e reagentes, como a água destilada ou deionizada, entre outros.</DescricaoEq13>
                    <Disponibilidadeeq13 className='DisponibilidadeEqBox05'>DISPONIVEL: 5</Disponibilidadeeq13>
                </CardEq13>
                <CardEq14 CardEq01 className='CardBox05'>
                    <ImgEquipamento14 className='ImgBox05' src={imgEq14} alt=""/>
                    <TituloEq14 className='TituloEqBox05'>Swab</TituloEq14>
                    <DescricaoEq14 className='DescricaoEqBox05'>Utilizado para coletar amostras para análise laboratorial.</DescricaoEq14>
                    <Disponibilidadeeq14 className='DisponibilidadeEqBox05'>DISPONIVEL: 0</Disponibilidadeeq14>
                </CardEq14>
                <CardEq15 CardEq01 className='CardBox05'>
                    <ImgEquipamento15 className='ImgBox05' src={imgEq15} alt=""/>
                    <TituloEq15 className='TituloEqBox05'>Tubo de Ensaio</TituloEq15>
                    <DescricaoEq15 className='DescricaoEqBox05'>Utilizados para realizar reações químicas em pequenas quantidades.</DescricaoEq15>
                    <Disponibilidadeeq15 className='DisponibilidadeEqBox05'>DISPONIVEL: 10</Disponibilidadeeq15>
                </CardEq15>
            </Box05>
        </Container>
    )
}
export default Equipamento;