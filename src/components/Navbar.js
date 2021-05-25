import React from 'react';
import styled from 'styled-components'


const Navbarhead = styled.div`
    font-family: Helvetica, Arial, sans-serif;
    font-size: 5rem;
    color: pink;
    text-align: center;

    `

function Navbar() {
    return (
      <div className="Navbar">
          <Navbarhead>Hello</Navbarhead>
       <center> <h1>Navbar</h1></center>
      </div>
    );
  }
  
  export default Navbar;
  
