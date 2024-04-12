
const Modal = ({text, modal}) => {
    if(modal === true)
    return(
        <p>{text}</p>
    )
    return null
}

export default Modal;