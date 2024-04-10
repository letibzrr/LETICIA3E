/* eslint-disable react/prop-types */
const Modal = ({modal, setModal}) => {
    if(modal === true)
        return(
            <div>
                Este é um modal!
                <button onClick={() => setModal(false)}>Fechar</button>
            </div>
        )
    return null
}

export default Modal;