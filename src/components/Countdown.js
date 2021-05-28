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

@media (max-width: 1440px) {
  position: relative;
  left: 600px;
  z-index: 1;
  width: 100%;
  }
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

@media (max-width: 1440px) {
 left: -60px;
  }
`

const Form = styled.form `
 border: none;
 border-bottom: 2px solid #939393;
 width: 170px;
 color: #939393;
 background-color: transparent;
 width: 300px;
 font-size: 6rem;
 position: relative;
 top: -60px;
`
const Submit = styled.button `
position: relative;
top: -20px;
font-family: 'Bebas Neue', cursive;
font-size: 1.2rem;
width: 300px;
background-color: #939393;
border: none;
`

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
           <Form> <input placeholder="Write your email" required></input>  </Form>
           <Submit type="submit">SIGN UP </Submit>
          </form>
     
       
       
       <h5>Already a member? <a href="www.github.com/jokale">Sign in here</a></h5>
          </CountText>

          </Countdowner> 
      
      </div>
    );
  }
  
  export default Countdown;
  