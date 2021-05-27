// import './App.css';
import styled from 'styled-components'
import React from 'react';
import Countdown from './components/Countdown';
import Navbar from "./components/Navbar";
import background from "./images/background.jpg";

const BackgroundImg = styled.div `
background-image: url(${background});
width: 60%;
  height: 1000px;
 /* background-size: contain; */
  /* border: 1px solid red; */
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  top: -1000px;

`;

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Countdown/>
      <BackgroundImg/>
    </div>
  );
}

export default App;
