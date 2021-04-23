import './App.css';
import React from 'react';
import Data from './components/Data';
import Error from './components/Error';
import Loading from './components/Loading';

function App() {
  const url = 'http://localhost:7070/';
  const data = 'data';
  const error = 'error';
  const loading = 'loading';
  return (
    <div className="App">
      <div className="container">
        <Data url = { url } opts = { data }/>
        <Error url = { url } opts = { error } />
        <Loading url = { url } opts = { loading } />
      </div>
    </div>
    
  )
}

export default App;
