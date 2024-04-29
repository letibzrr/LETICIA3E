const Produto = ({data}) => {
    return(
        <>
        <section className="produtos-details">
            <h1>{data.nome}</h1>
            <h2>R$ {data.preco}</h2>
            <img src={data.fotos[0].src} alt={data.fotos[0].titulo}/>
        </section>
        </>
    )
}
export default Produto;