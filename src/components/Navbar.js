import React from 'react';
import styled from 'styled-components'


const Navbarhead = styled.div`
    font-family: Helvetica, Arial, sans-serif;
    font-size: 5rem;
    color: #939393;
    text-align: center;
    `

function Navbar() {
    return (
      <div className="Navbar">
          <Navbarhead> J.K STUDIO</Navbarhead>
      </div>
    );
  }
  
  export default Navbar;
  
