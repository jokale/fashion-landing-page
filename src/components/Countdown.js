import React from 'react';
import styled from 'styled-components'
import Timer from './Timer';

const Countdowner = styled.div `
background-color: #746363;
opacity: 65%;
object-position: right;
height: 1000px;
width: 50%;
position: relative;
left: 1000px;
`

const CountText = styled.div `
position: relative;
left: 25em;
text-align: justify;
`

const HeaderOne = styled.h1 `
font-family: 'Bebas Neue', cursive;
font-size: 4rem;
position: relative;
left: -90px;
border: 1px solid red;
`


// const laterDate = new Date("Jan 3, 2022 15:30:45").getTime();

// const nowDate = new Date().getTime();

// const difference = laterDate - nowDate;

// let days = Math.floor(distance / (1000 * 60 * 60 * 24));
// let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
// let seconds = Math.floor((distance % (1000 * 60)) / 1000);


function Countdown() {
    return (
      <div className="Countdown">


        <Countdowner>
          <CountText>

                   <HeaderOne>THE:STUDIO OPENS IN </HeaderOne>
<Timer>The timer</Timer>
       <h4>We are so excited for you to able to experience <br></br> our amazing organic vegan clothing brand </h4>
       <h4>To get exclusive access to the store before <br></br>general realease open  sign up to our waitlist <br></br> by entering your email below</h4>
       <form>
           <input placeholder="Write your email email" required></input>
           <button type="submit">submit</button>
       </form>
       <h5>Already a member? <a href="www.github.com/jokale">Sign in here</a></h5>
          </CountText>

          </Countdowner> 
      
      </div>
    );
  }
  
  export default Countdown;
  