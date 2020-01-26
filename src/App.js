import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header'

const Home = () => {
  return (
    <h1>Home</h1>
  )
}

const Genres = () => {
  return (
    <h1>Generos</h1>
  )
}

function App() {  
  return (
    <Router >
      <Header />
      {/* Retorna apenas uma unica pagina por rota */}
      <Switch>
        {/* Exact = retorna o componente onde é exatamente esse path */}
        <Route path='/' exact component={Home} />
        <Route path='/genres' component={Genres} />
      </Switch>
    </Router>
  );
}

export default App;
