import React from 'react';
import styled from 'styled-components'



const HeaderOne = styled.h1 `
font-family: 'Bebas Neue', cursive;
font-size: 5rem;
    color: #939393;
    text-align: center;

`


function Navbar() {
    return (
      <div className="Navbar">
          <HeaderOne>The:STUDIO </HeaderOne> 
      </div>
    );
  }
  
  export default Navbar;
  
