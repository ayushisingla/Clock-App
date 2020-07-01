import React from 'react';
import './App.css';
import Date from './components/Date';
import Header from './components/Header';
function App() {
  setInterval(Date,1000);
  return (
    <div className="App">
      <header className="App-header">
      <Header />
        <Date />
      </header>
    </div>
  );
}

export default App;
