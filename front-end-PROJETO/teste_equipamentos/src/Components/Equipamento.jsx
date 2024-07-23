import { EquipamentosContainer, TituloEquipamento, DescricaoEquipamento, BoxTrioEquipamentos, CardEquipamento, ImgEquipamento, NomeEquipamento, FuncaoEquipamento, DisponibilidadeEquipamento} from '../Styles/Equipamento'

const Equipamento = () => {
    return(
        <EquipamentosContainer>
            <TituloEquipamento>EQUIPAMENTOS</TituloEquipamento>
            <DescricaoEquipamento>EQUIPAMENTOS é uma página direcionada aos equipamentos encontrados no laboratório, além de descrever sua funcionalidade e quais estão disponiveis.</DescricaoEquipamento>
            <BoxTrioEquipamentos>
                <CardEquipamento>
                    <ImgEquipamento src='../../img/imagem01.png' alt=""/>
                    <NomeEquipamento>Agitador Magnético</NomeEquipamento>
                    <FuncaoEquipamento>Utilizado para aquecer e agitar soluções químicas, usando um peixinho magnético no recipiente.</FuncaoEquipamento>
                    <DisponibilidadeEquipamento>DISPONIVEL: 2</DisponibilidadeEquipamento>
                </CardEquipamento>
                <CardEquipamento>
                    <ImgEquipamento src='../../img/imagem02.png' alt=""/>
                    <NomeEquipamento>Autoclave</NomeEquipamento>
                    <FuncaoEquipamento>Utilizada para a esterilização de materiais através de calor e pressão por um determinado período.</FuncaoEquipamento>
                    <DisponibilidadeEquipamento>DISPONIVEL: 2</DisponibilidadeEquipamento>
                </CardEquipamento>
                <CardEquipamento>
                    <ImgEquipamento src='../../img/imagem03.png' alt=""/>
                    <NomeEquipamento>Balança Analítica</NomeEquipamento>
                    <FuncaoEquipamento>Utilizada para medição de massas com alta precisão, geralmente miligramas ou menos.</FuncaoEquipamento>
                    <DisponibilidadeEquipamento>DISPONIVEL: 2</DisponibilidadeEquipamento>
                </CardEquipamento>
            </BoxTrioEquipamentos>
            <BoxTrioEquipamentos>
            <CardEquipamento>
                    <ImgEquipamento src='../../img/imagem04.png' alt=""/>
                    <NomeEquipamento>Balança de Precisão</NomeEquipamento>
                    <FuncaoEquipamento>Utilizada para medição de amostras pequenas e determina o peso do material de maneira rápida e simples.</FuncaoEquipamento>
                    <DisponibilidadeEquipamento>DISPONIVEL: 3</DisponibilidadeEquipamento>
                </CardEquipamento>
                <CardEquipamento>
                    <ImgEquipamento src='../../img/imagem05.png' alt=""/>
                    <NomeEquipamento>Balão Volumétrico</NomeEquipamento>
                    <FuncaoEquipamento>Utilizado para preparar soluções e diluições que necessitam de medidas extremamente precisas.</FuncaoEquipamento>
                    <DisponibilidadeEquipamento>DISPONIVEL: 20</DisponibilidadeEquipamento>
                </CardEquipamento>
                <CardEquipamento>
                    <ImgEquipamento src='../../img/imagem06.png' alt=""/>
                    <NomeEquipamento>Barra Magnética </NomeEquipamento>
                    <FuncaoEquipamento>Utilizada para agitar soluções junto ao equipamento de agitação magnética.</FuncaoEquipamento>
                    <DisponibilidadeEquipamento>DISPONIVEL: 2</DisponibilidadeEquipamento>
                </CardEquipamento>
            </BoxTrioEquipamentos>
            <BoxTrioEquipamentos>
                <CardEquipamento>
                    <ImgEquipamento src='../../img/imagem07.png' alt=""/>
                    <NomeEquipamento>Bastão de Vidro</NomeEquipamento>
                    <FuncaoEquipamento>Utilizado para agitar soluções e direcionar um líquido na transferência de recipientes.</FuncaoEquipamento>
                    <DisponibilidadeEquipamento>DISPONIVEL: 30</DisponibilidadeEquipamento>
                </CardEquipamento>
                <CardEquipamento>
                    <ImgEquipamento src='../../img/imagem08.png' alt=""/>
                    <NomeEquipamento>Becker</NomeEquipamento>
                    <FuncaoEquipamento>Utilizado para medição de volumes e na realização de misturas em experimentos.</FuncaoEquipamento>
                    <DisponibilidadeEquipamento>DISPONIVEL: 40</DisponibilidadeEquipamento>
                </CardEquipamento>
                <CardEquipamento>
                    <ImgEquipamento src='../../img/imagem09.png' alt=""/>
                    <NomeEquipamento>Funil de Vidro</NomeEquipamento>
                    <FuncaoEquipamento>Utilizado no processo de filtração de misturas e na transferência de recipientes, evitando perdas</FuncaoEquipamento>
                    <DisponibilidadeEquipamento>DISPONIVEL: 20</DisponibilidadeEquipamento>
                </CardEquipamento>
            </BoxTrioEquipamentos>
            <BoxTrioEquipamentos>
            <CardEquipamento>
                    <ImgEquipamento src='../../img/imagem10.png' alt=""/>
                    <NomeEquipamento>Microscópio</NomeEquipamento>
                    <FuncaoEquipamento>Utilizado para ampliar amostras para que possam ser observadas com mais detalhes.</FuncaoEquipamento>
                    <DisponibilidadeEquipamento>DISPONIVEL: 2</DisponibilidadeEquipamento>
                </CardEquipamento>
                <CardEquipamento>
                    <ImgEquipamento src='../../img/imagem11.png' alt=""/>
                    <NomeEquipamento>Placa de Petri</NomeEquipamento>
                    <FuncaoEquipamento>Utilizada para cultivar e observar o comportamento ou secagem de amostras.</FuncaoEquipamento>
                    <DisponibilidadeEquipamento>DISPONIVEL: 30</DisponibilidadeEquipamento>
                </CardEquipamento>
                <CardEquipamento>
                    <ImgEquipamento src='../../img/imagem12.png' alt=""/>
                    <NomeEquipamento>Proveta</NomeEquipamento>
                    <FuncaoEquipamento>Utilizada para medição e transferência de volumes de líquidos ou soluções.</FuncaoEquipamento>
                    <DisponibilidadeEquipamento>DISPONIVEL: 15</DisponibilidadeEquipamento>
                </CardEquipamento>
            </BoxTrioEquipamentos>
            <BoxTrioEquipamentos>
            <CardEquipamento>
                    <ImgEquipamento src='../../img/imagem13.png' alt=""/>
                    <NomeEquipamento>Pisseta</NomeEquipamento>
                    <FuncaoEquipamento>Utilizado para alocar soluções e reagentes, como a água destilada ou deionizada, entre outros.</FuncaoEquipamento>
                    <DisponibilidadeEquipamento>DISPONIVEL: 5</DisponibilidadeEquipamento>
                </CardEquipamento>
                <CardEquipamento>
                    <ImgEquipamento src='../../img/imagem14.png' alt=""/>
                    <NomeEquipamento>Swab</NomeEquipamento>
                    <FuncaoEquipamento>Utilizado para coletar amostras para análise laboratorial.</FuncaoEquipamento>
                    <DisponibilidadeEquipamento>DISPONIVEL: 0</DisponibilidadeEquipamento>
                </CardEquipamento>
                <CardEquipamento>
                    <ImgEquipamento src='../../img/imagem15.png' alt=""/>
                    <NomeEquipamento>Tubo de Ensaio</NomeEquipamento>
                    <FuncaoEquipamento>Utilizados para realizar reações químicas em pequenas quantidades.</FuncaoEquipamento>
                    <DisponibilidadeEquipamento>DISPONIVEL: 10</DisponibilidadeEquipamento>
                </CardEquipamento>
            </BoxTrioEquipamentos>
        </EquipamentosContainer>
    )
}

export default Equipamento;