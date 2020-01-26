import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  const [ data, setData ] = useState({});

  useEffect(() => {
    axios.get('/api').then(res => {
      setData(res.data)
    })
  }, []);

  return (
    <Router >
      <Header />
      {/* Retorna apenas uma unica pagina por rota */}
      <Switch>
        {/* Exact = retorna o componente onde é exatamente esse path */}
        <Route path='/' exact component={Home} />
        <Route path='/genres' component={Genres} />
        <pre>{JSON.stringify(data)}</pre>
      </Switch>
    </Router>
  );
}

export default App;
