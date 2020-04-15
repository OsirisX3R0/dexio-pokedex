import React from 'react';
import { Switch, Route } from 'react-router';
import { GlobalProvider } from './Context/GlobalContext'
import Home from './Components/Home';
import AllPokemon from './Components/Pokemon/AllPokemon';
import Pokemon from './Components/Pokemon/Pokemon';
import './App.scss';
import 'react-block-ui/style.css';
import AllAbilities from './Components/Abilities/AllAbilities';

const App = () => {
  return (
    <GlobalProvider>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pokemon/list" component={AllPokemon} />
        <Route path="/pokemon/:name" component={Pokemon} />
        <Route path="/ability/list" component={AllAbilities} />
      </Switch>
    </GlobalProvider>
  );
}

export default App;
