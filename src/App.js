import React from 'react';
import { Route } from 'react-router';
import { GlobalProvider } from './Context/GlobalContext'
//import logo from './logo.svg';
import Home from './Components/Home';
import AllPokemon from './Components/Pokemon/AllPokemon';
//import './App.css';

const App = () => {
  return (
    <GlobalProvider>
      <Route exact path="/" component={Home} />
      <Route path="/pokemon" component={AllPokemon} />
    </GlobalProvider>
  );
}

export default App;
