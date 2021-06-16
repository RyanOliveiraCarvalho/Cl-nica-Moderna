import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Cadastrar from './pages/cadastrar';
import EsqueceuSenha from './pages/esqueceuSenha';
import Login from './pages/login';

export default function App(){

    return(
    <Router>
        <Switch>
            <Route path="/" component={Login} exact/> 
            <Route path="/esqueceuSenha" component={EsqueceuSenha} exact/>
            <Route path="/cadastrar" component={Cadastrar} exact/>      
            <Route path="/" />       
        </Switch>
    </Router>
    );
}