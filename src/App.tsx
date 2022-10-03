import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/homePage';

function App() {
  return (
    <div className="App">
      <title>bKES</title>
      <HomePage />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
