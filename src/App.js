import React from 'react';
import BootstrapComp from './Component/Class/BootstrapComp';
import Parent from './Component/Class/Parent';
import AboutComp from './Component/Fungsional/AboutComp';
import HomePage from './Component/Fungsional/HomePage';
import NavbarComp from './Component/Fungsional/NavbarComp';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from './Component/Fungsional/AboutComp'
import DetailComp from './Component/Fungsional/DetailComp';
//import Home from './Component/Fungsional/Home';
//import Beranda from './Component/Class/Beranda';

const App = () => {
  return (
    <BrowserRouter>
      <NavbarComp/>
      <Switch>
        <Route exact path = '/' component ={HomePage} />
        <Route exact path = '/about' component ={About} />
        <Route exact path = '/detail/:id' component ={DetailComp} />
      </Switch>
    </BrowserRouter>
     
   
  );
}

export default App;
