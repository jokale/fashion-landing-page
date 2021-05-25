// import './App.css';
import React from 'react';
import Countdown from './components/Countdown';
import Navbar from "./components/Navbar";
import background from "./images/background.jpg";

function App() {
  return (
    <div className="App">
      <Navbar/>
     <center> <h1>App</h1></center>
     <Countdown/>
     <img src={background} className="backgroundimg" alt="clothing hanging" />

    </div>
  );
}

export default App;
