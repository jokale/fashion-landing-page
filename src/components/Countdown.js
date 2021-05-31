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
  /* z-index: 1; */
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
left: -65px;

@media (max-width: 1440px) {
 left: -50px;
  }
`

const Form = styled.form `
 border: none;
 color: #939393;
 background-color: transparent;
 width: 300px;
 font-size: 6rem;
 position: relative;
 top: -60px;
 fill: none;
 outline:none;
 background: transparent;
`

const Input = styled.input `background: none;
border: none;
font-size: 1.9rem;
text-align: center;
font-family: 'Bebas Neue', cursive;
position: relative;
top: -20px;
border-bottom: 2px solid #939393;
width: 295px;


`
const Submit = styled.button `
position: relative;
top: -40px;
font-family: 'Bebas Neue', cursive;
font-size: 1.2rem;
width: 300px;
background-color: #939393;
border: none;
height: 50px;

@media (max-width: 1440px) {
  top: -50px;
  }
`

const SubText = styled.h4 ` 
 font-family: 'Roboto', sans-serif;
 text-align: justify;
 font-size: 1.3rem;
 line-height: 1.8;
 position: relative;
 left: -35px;

 @media (max-width: 1440px) {
 font-size: 1rem;
 left: -5px;
 top: -10px;

  }

`

function Countdown() {
    return (
      <div className="Countdown">


        <Countdowner>
          <CountText>

                   <HeaderOne>THE:STUDIO OPENS IN </HeaderOne>
            <Timer>The timer</Timer>

            <SubText>We are so excited for you all to experience <br></br> our  amazing organic vegan clothing.
       <br></br>To get exclusive access to the store before <br></br>general realease open  sign up to our waitlist <br></br> by entering your email below: 
       </SubText>
       
      
         <form> 
           
           {/* <label>Enter your email</label>  */}
           <Form> <Input placeholder="Write your email" required></Input></Form>
           <Submit type="submit">SIGN UP </Submit>
          </form>
     
       
                 </CountText>

          </Countdowner> 
      
      </div>
    );
  }
  
  export default Countdown;
  