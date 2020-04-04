import React from 'react';
import { Switch, Route } from 'react-router';
import { GlobalProvider } from './Context/GlobalContext'
import Home from './Components/Home';
import AllPokemon from './Components/Pokemon/AllPokemon';
import Pokemon from './Components/Pokemon/Pokemon';
import './App.scss';

const App = () => {
  return (
    <GlobalProvider>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pokemon/list" component={AllPokemon} />
        <Route path="/pokemon/:id" component={Pokemon} />
      </Switch>
    </GlobalProvider>
  );
}

export default App;
