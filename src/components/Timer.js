import React from 'react';
import styled from 'styled-components'

const TimerStyle = styled.div ` 
border-radius: 2px;
border: 5px solid #939393;
width: 260px

`

function Timer() {

    
    return (
      <div className="Timer">
          <TimerStyle>The timer</TimerStyle>

      </div>
    );
  }
  
  export default Timer;