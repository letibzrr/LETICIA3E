/* eslint-disable react/prop-types */
const ButtonModal = ({setModal}) => {
    return(
        <button onClick={() => setModal(true)}>Abrir Modal</button>
    )
}

export default ButtonModal;