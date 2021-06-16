import React from 'react';

import { FaArrowLeft } from 'react-icons/fa';
import Logo from '../../assets/logo2.svg';

import './index.css';

export default function Header(){
    return(
        <div className="Heade">
            <div className="Subgeral">
                <a href="/"><FaArrowLeft/></a>
                <img src={Logo} atl="Logo"/>
            </div>
            <div className="Titulos">
                <text>Cadastro do Profissional</text>
                <h4>O primeiro passo, é preencher esse formulário de inscrição.</h4>
            </div>
        </div>
    );
}