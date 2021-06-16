import React, {useState} from 'react';

import {FaEye, FaEyeSlash} from 'react-icons/fa';

import { Button } from '@material-ui/core';

import {Link} from 'react-router-dom';

import Baner from '../../components/Banner';
import Logo from '../../assets/logo.svg';
import './index.css';

export default function Login(){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [show, setShow] = useState(false);

    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show);
    }

    return (
        <div className="Container">
            <Baner/>
            <div className="Login">

                <img src={Logo} atl="Logo"/>

                <h3>Entrar</h3>

                <div className="Email">
                    <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="Senha">
                    <input type={show ? "text" : "password"} placeholder="Senha" value={senha} onChange={s => setSenha(s.target.value)} />
                    <div className="Revelar">
                        {show ? (<FaEye onClick={handleClick} />) : (<FaEyeSlash onClick={handleClick} />)}
                    </div>
                </div>
                    <a className="Esqueceu" href="/esqueceuSenha">Esqueceu a senha?</a>

                <div className="Botoes">

                <Link to="/cadastrar" className="Cadastrar">
                    Cadastre-se
                </Link>

                <h4>ou</h4>

                <Link href="/painel" className="Entrar" type="submit">
                    Entrar
                </Link>

                </div>
                
            </div>
        </div>
    );
}