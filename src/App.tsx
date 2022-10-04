import React from 'react';
import './App.css';

import NavBar from './pages/NavBar';
import AppRouter from './Router';

function App() {
  return (
    <div className="App">
      <title>bKES</title>
      <NavBar />
      <AppRouter />
    </div>
  );
}

export default App;
