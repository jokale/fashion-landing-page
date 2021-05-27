import React from 'react';
import styled from 'styled-components'

const Countdowner = styled.div `
background-color: #746363;
opacity: 65%;
text-align: center;
object-position: right;
height: 1000px;
width: 50%;
position: relative;
left: 1000px;
`
function Countdown() {
    return (
      <div className="Countdown">

        <Countdowner>
       <h2>THE J.K STUDIO OPENS IN </h2>
       <h3>Counter goes here </h3>
       <h4>We are so excited for you to able to experience <br></br> our amazing organic vegan products </h4>
       <h4>To get exclusive access to the store before general realease open <br></br> sign up to our waitlist <br></br> by entering your email</h4>
       <form>
           <input placeholder="Write your email email" required></input>
           <button type="submit">submit</button>
       </form>
       <h5>Already a member? <a href="www.github.com/jokale">Sign in here</a></h5>
          </Countdowner> 
      
      </div>
    );
  }
  
  export default Countdown;
  