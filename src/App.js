import React from 'react';
import { Route } from 'react-router';
import { GlobalProvider } from './Context/GlobalContext'
import logo from './logo.svg';
import Home from './Components/Home';
//import './App.css';

const App = () => {
  return (
    <GlobalProvider>
      <Route exact path="/" component={Home} />
    </GlobalProvider>
  );
}

export default App;
