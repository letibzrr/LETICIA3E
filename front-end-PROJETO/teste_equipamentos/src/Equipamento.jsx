import './Equipamento.css';

const Equipamento = () => {
    return(
        <container className='equipamentos-container'>
            <h1 className='TituloEquipamento'>Equipamentos</h1>
            <p className='DescricaoEquipamento'>Equipamentos é uma página direcionada aos equipamentos encontrados no laboratório, além de descrever sua funcionalidade e quais estão disponiveis.</p>
            <section className='Box01'>
                <div className='CardBox01'>
                    <img className='ImgBox01' src="../../img/imagem01.png" alt=""/>
                    <h1 className='TituloEqBox01'>Agitador Magnético</h1>
                    <p className='DescricaoEqBox01'>Utilizado para aquecer e agitar soluções químicas, usando um peixinho magnético no recipiente.</p>
                    <section className='DisponibilidadeEqBox01'>DISPONIVEL: 2</section>
                </div>
                <div className='CardBox01'>
                    <img className='ImgBox01' src="../../img/imagem02.png" alt=""/>
                    <h1 className='TituloEqBox01'>Autoclave</h1>
                    <p className='DescricaoEqBox01'>Utilizada para a esterilização de materiais através de calor e pressão por um determinado período.</p>
                    <section className='DisponibilidadeEqBox01'>DISPONIVEL: 2</section>
                </div>
                <div className='CardBox01'>
                    <img className='ImgBox01' src="../../img/imagem03.png" alt=""/>
                    <h1 className='TituloEqBox01'>Balança Analítica</h1>
                    <p className='DescricaoEqBox01'>Utilizada para medição de massas com alta precisão, geralmente miligramas ou menos.</p>
                    <section className='DisponibilidadeEqBox01'>DISPONIVEL: 2</section>
                </div>
            </section>
            <section className='Box02'>
            <div className='CardBox02'>
                    <img className='ImgBox02' src="../../img/imagem04.png" alt=""/>
                    <h1 className='TituloEqBox02'>Balança de Precisão</h1>
                    <p className='DescricaoEqBox02'>Utilizada para medição de amostras pequenas e determina o peso do material de maneira rápida e simples.</p>
                    <section className='DisponibilidadeEqBox02'>DISPONIVEL: 3</section>
                </div>
                <div className='CardBox02'>
                    <img className='ImgBox02' src="../../img/imagem05.png" alt=""/>
                    <h1 className='TituloEqBox02'>Balão Volumétrico</h1>
                    <p className='DescricaoEqBox02'>Utilizado para preparar soluções e diluições que necessitam de medidas extremamente precisas.</p>
                    <section className='DisponibilidadeEqBox02'>DISPONIVEL: 20</section>
                </div>
                <div className='CardBox02'>
                    <img className='ImgBox02' src="../../img/imagem06.png" alt=""/>
                    <h1 className='TituloEqBox02'>Barra Magnética </h1>
                    <p className='DescricaoEqBox02'>Utilizada para agitar soluções junto ao equipamento de agitação magnética.</p>
                    <section className='DisponibilidadeEqBox02'>DISPONIVEL: 2</section>
                </div>
            </section>
            <section className='Box03'>
                <div className='CardBox03'>
                    <img className='ImgBox03' src="../../img/imagem07.png" alt=""/>
                    <h1 className='TituloEqBox03'>Bastão de Vidro</h1>
                    <p className='DescricaoEqBox03'>Utilizado para agitar soluções e direcionar um líquido na transferência de recipientes.</p>
                    <section className='DisponibilidadeEqBox03'>DISPONIVEL: 30</section>
                </div>
                <div className='CardBox03'>
                    <img className='ImgBox03' src="../../img/imagem08.png" alt=""/>
                    <h1 className='TituloEqBox03'>Becker</h1>
                    <p className='DescricaoEqBox03'>Utilizado para medição de volumes e na realização de misturas em experimentos.</p>
                    <section className='DisponibilidadeEqBox03'>DISPONIVEL: 40</section>
                </div>
                <div className='CardBox03'>
                    <img className='ImgBox03' src="../../img/imagem09.png" alt=""/>
                    <h1 className='TituloEqBox03'>Funil de Vidro</h1>
                    <p className='DescricaoEqBox03'>Utilizado no processo de filtração de misturas e na transferência de recipientes, evitando perdas</p>
                    <section className='DisponibilidadeEqBox03'>DISPONIVEL: 20</section>
                </div>
            </section>
            <section className="Box04">
            <div className='CardBox04'>
                    <img className='ImgBox04' src="../../img/imagem10.png" alt=""/>
                    <h1 className='TituloEqBox04'>Microscópio</h1>
                    <p className='DescricaoEqBox04'>Utilizado para ampliar amostras para que possam ser observadas com mais detalhes.</p>
                    <section className='DisponibilidadeEqBox03'>DISPONIVEL: 2</section>
                </div>
                <div className='CardBox04'>
                    <img className='ImgBox04' src="../../img/imagem11.png" alt=""/>
                    <h1 className='TituloEqBox04'>Placa de Petri</h1>
                    <p className='DescricaoEqBox04'>Utilizada para cultivar e observar o comportamento ou secagem de amostras.</p>
                    <section className='DisponibilidadeEqBox03'>DISPONIVEL: 30</section>
                </div>
                <div className='CardBox04'>
                    <img className='ImgBox04' src="../../img/imagem12.png" alt=""/>
                    <h1 className='TituloEqBox04'>Proveta</h1>
                    <p className='DescricaoEqBox04'>Utilizada para medição e transferência de volumes de líquidos ou soluções.</p>
                    <section className='DisponibilidadeEqBox03'>DISPONIVEL: 15</section>
                </div>
            </section>
            <section className='Box05'>
            <div className='CardBox05'>
                    <img className='ImgBox05' src="../../img/imagem13.png" alt=""/>
                    <h1 className='TituloEqBox05'>Pisseta</h1>
                    <p className='DescricaoEqBox05'>Utilizado para alocar soluções e reagentes, como a água destilada ou deionizada, entre outros.</p>
                    <section className='DisponibilidadeEqBox05'>DISPONIVEL: 5</section>
                </div>
                <div className='CardBox05'>
                    <img className='ImgBox05' src="../../img/imagem14.png" alt=""/>
                    <h1 className='TituloEqBox05'>Swab</h1>
                    <p className='DescricaoEqBox05'>Utilizado para coletar amostras para análise laboratorial.</p>
                    <section className='DisponibilidadeEqBox05'>DISPONIVEL: 0</section>
                </div>
                <div className='CardBox05'>
                    <img className='ImgBox05' src="../../img/imagem15.png" alt=""/>
                    <h1 className='TituloEqBox05'>Tubo de Ensaio</h1>
                    <p className='DescricaoEqBox05'>Utilizados para realizar reações químicas em pequenas quantidades.</p>
                    <section className='DisponibilidadeEqBox05'>DISPONIVEL: 10</section>
                </div>
            </section>
        </container>
    )
}
export default Equipamento;