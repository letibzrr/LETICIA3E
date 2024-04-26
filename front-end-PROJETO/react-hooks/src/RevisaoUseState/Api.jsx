import React from "react";
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
const Api = () => {
    const[tablet, setTablet] = React.useState([])
    const[smartphone, setSmartphone] = React.useState([])
    const[notebook, setNotebook] = React.useState([])
    // function showTablet{
    // }
    // function showSmartphone{
    // }
    // function showNotebook{
    // }
    return(
        <>
        <button onClick={showTablet}>Tablet</button>
        <button onClick={showSmartphone}>Smartphone</button>
        <button onClick={showNotebook}>Notebook</button>
        </>
    )
}
export default Api;