import React, { useState } from 'react';
import Imagem_Logo from "../../assets/Login/LOGO-LABSTOCK (1).png";
import Buttons from "../Buttons/Buttons.jsx";
import {
  Img_Fundo,
  Sessao_Login,
  Box_Login,
  Box_Logo,
  Logo,
  Box_Inputs,
  Box_Input_Senha,
  Input,
  Paragrafo,
} from "./Login.js";

const Login_componensts = () => {
  const [usuario, setUser] = useState('');
  const [senha, setPassword] = useState('');
  const [error, alert] = useState('');

  const data = [
    { id: 1, usuario: 'adm@labstock.dev.com', senha: 'labstockdev'},
    { id: 2, usuario: 'jeannynneleite@labstock.prof.com', senha: 'labstock11' },
    { id: 3, usuario: 'adeliavertano@labstock.prof.com', senha: 'labstock22' },
    { id: 4, usuario: 'marcoscesar@labstock.prof.com', senha: 'labstock33' },
    { id: 5, usuario: 'marcosalves@labstock.prof.com', senha: 'labstock44' },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    const login = data.find((obj) => obj.usuario === usuario && obj.senha === senha);

    if (login) {
        //window.location.href = '' // passar aqui o caminho da pagina home
        alert('Login bem-sucedido! Redirecionando...'); // apagar esse alerte
    } else {
        alert('Usuário não identificado! Por favor, tente novamente.');
    }
  };
    return (
        <Img_Fundo className="Img-Fundo">
          <Sessao_Login className="Sessao-Login" onSubmit={handleSubmit}>
            <Box_Login className="Box-Login">
              <Box_Logo className="Box-Logo">
                <Logo
                  className="Logo"
                  src={Imagem_Logo}
                  alt="Link da imagem<a href=https://br.freepik.com/psd-gratuitas/design-de-borda-de-ondas-gradientes_64807566.htm>Imagem de freepik</a>"
                />
              </Box_Logo>
              <Box_Inputs className="Box-Inputs">
                <Paragrafo>Usuarios:</Paragrafo>
                <Input
                className="Inout-User"
                type="text"
                id="usuario"
                value={usuario}
                onChange={(e) => setUser(e.target.value)}
                required/>
                <Box_Input_Senha className="Box-Input-Senha">
                  <Paragrafo>Senha: </Paragrafo>
                  <Input
                  type="text"
                  id="senha"
                value={senha}
                onChange={(e) => setPassword(e.target.value)}
                required/>
                </Box_Input_Senha>
              </Box_Inputs>
              {error && <p className="error-message">{error}</p>}
              <Buttons type="submit" Texto="Login" />
            </Box_Login>
          </Sessao_Login>
        </Img_Fundo>
      );
};

export default Login_componensts;
