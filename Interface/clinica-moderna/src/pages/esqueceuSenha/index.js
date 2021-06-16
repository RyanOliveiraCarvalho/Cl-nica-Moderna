import React from 'react';
import './index.css';

import Baner2 from '../../components/Banner2';
import Logo from '../../assets/logo.svg';

export default function EsqueceuSenha(){
    return(
        <div className="Container">
            <Baner2/>
            <div className="Login">

                <img src={Logo} atl="Logo"/>

                <h3>Esqueceu a Senha?</h3>
                <h4>Receba agora sua senha no email cadastrado na plataforma!</h4>

                <div className="Email">
                    <input type="text" placeholder="E-mail"/>
                </div>

                <div className="Botoes">

                <button className="Enviar" type="submit">
                    Enviar o Link de Redefinição
                </button>

                </div>
                
            </div>
        </div>
    );
}