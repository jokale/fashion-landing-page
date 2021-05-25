import React from 'react';
import styled from 'styled-components'


const Navbarhead = styled.div`
    font-family: Montserrat, sans-serif;
    font-size: 1rem;
    color: white;
    text-align: center;

    `

function Navbar() {
    return (
      <div className="Navbar">
          <Navbarhead></Navbarhead>
       <center> <h1>Navbar</h1></center>
      </div>
    );
  }
  
  export default Navbar;
  