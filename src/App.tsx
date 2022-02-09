import React from 'react';
import './App.css';
import { MainContainer } from './containers/MainContainer';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
  <Router>
    <div className="App">
      <header className="App-header">
        <MainContainer/>
      </header>          
    </div>
  </Router>

  );
}

export default App;