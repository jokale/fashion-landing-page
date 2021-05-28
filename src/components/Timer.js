import React from 'react';
import styled from 'styled-components'
import Countdown from 'react-countdown';


const TimerStyle = styled.div ` 
border-radius: 2px;
border: 5px solid #939393;
padding-left: 21px;
width: 260px;
font-size: 3rem;
letter-spacing: 3px;
font-family: 'Bebas Neue', cursive;
`

const TimeHfour = styled.h6 `
word-spacing: 1em;
font-size: smaller;
position: relative;
left: 53px;
top: -10px;
`

function Timer() {


    return (
      <div className="Timer">
          <TimerStyle><Countdown date={Date.now() + 50000000000} /> </TimerStyle>
            <TimeHfour>DAYS HOURS MINS SECS</TimeHfour>
      </div>
    );
  }
  
  export default Timer;