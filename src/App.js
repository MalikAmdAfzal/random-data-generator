import React from 'react';
import './App.css';
import ButtonPanel from './components/ButtonPanel';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Data Generator</h1>
      </header>
      <ButtonPanel />
      <Footer />
    </div>
  );
}

export default App;
