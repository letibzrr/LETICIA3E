import { Link } from "react-router-dom";
import {Nav}  from '../Styles/Header'

const Header = () => {
    return(
        <Nav>
            <Link className="LinkPages" to="/">HOME</Link>
            <Link className="LinkPages" to="sobre">SOBRE O LIVRO</Link>
            <Link className="LinkPages" to="personagens">PERSONAGENS</Link>
        </Nav>
    )
}
export default Header;