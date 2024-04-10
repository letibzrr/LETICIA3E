import React from "react";
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";

const App = () => {

    const [modal, setModal] = React.useState(false)

    return(
        <>
            <ButtonModal setModal={setModal}/>
            <Modal modal={modal} setModal={setModal}/>
        </>
    )
}

export default App;