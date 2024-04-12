import React from "react";
import ButtonModal from '../ButtonModal/ButtonModal';
import Modal from '../Modal/Modal';

const ContainerModal = ({textButton, textModal}) => {
    const [modal, setModal] = React.useState(false)
    return(
        <>
        <ButtonModal
            text={textButton}
            setModal={setModal}
            modal={modal}/>
        <Modal
            modal={modal}
            text={textModal}/>
        </>
    )
}

export default ContainerModal;