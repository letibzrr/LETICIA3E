const ButtonModal = ({text, modal, setModal}) => {
    return(
        <button onClick={() => setModal(!modal)}>{text}</button>
    )
}
export default ButtonModal;