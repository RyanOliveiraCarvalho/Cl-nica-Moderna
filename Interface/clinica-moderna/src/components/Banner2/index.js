import React from 'react';

import { FaArrowLeft } from 'react-icons/fa';
import Banner from '../../assets/svg.svg';

import './index.css';

export default function Baner2(){
    return(
        <div className="Tudo">
            <a href="/"><FaArrowLeft/></a>
            <div className="Banner">
                <h3 className="Titulo">Todos os especialidades que você precisa em um só lugar.</h3>
                <img src={Banner} atl="Banner"/>
            </div>
        </div> 
    );
}