import React from 'react';

import Banner from '../../assets/svg.svg';

import './index.css';

export default function Baner(){
    return(
        <div className="Geral">
            <div className="Banner">
                <h3 className="Titulo">Todos os especialidades que você precisa em um só lugar.</h3>
                <img src={Banner} atl="Banner"/>
            </div>
        </div> 
    );
}