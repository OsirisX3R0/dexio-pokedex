import React from 'react';
import { Switch, Route } from 'react-router';
import { GlobalProvider } from './Context/GlobalContext'
import Home from './Components/Home';
import AllPokemon from './Components/Pokemon/AllPokemon';
import Pokemon from './Components/Pokemon/Pokemon';
import AllAbilities from './Components/Abilities/AllAbilities';
import Ability from './Components/Abilities/Ability';
import AllMoves from './Components/Moves/AllMoves';
import Move from './Components/Moves/Move';
import TypeChart from './Components/Types/TypeChart';
import './App.scss';
import 'react-block-ui/style.css';
import 'react-placeholder/lib/reactPlaceholder.css';

const App = () => {
  return (
    <GlobalProvider>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pokemon/list" component={AllPokemon} />
        <Route path="/pokemon/:name" component={Pokemon} />
        <Route path="/ability/list" component={AllAbilities} />
        <Route path="/ability/:name" component={Ability} />
        <Route path="/move/list" component={AllMoves} />
        <Route path="/move/:name" component={Move} />
        <Route path="/type/chart" component={TypeChart} />
      </Switch>
    </GlobalProvider>
  );
}

export default App;
