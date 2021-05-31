import React from 'react';
import logo from "../images/logo.png";
import styled from 'styled-components'


const Logo = styled.img`
position: relative;
top: 40px;
left: 1400px;
width: 8%;

@media (max-width: 1440px) {
  top: -1340px;
  left: 980px;
  width: 6%;
  }
`;

const FooterDiv = styled.div `
position: relative;
top: -1400px;
left: 370px;
@media (max-width: 1440px) {
  top: -150px;
  }
`

function Footer() {
    return (
      <div className="Footer">
          <FooterDiv>
                <a href="https://joannathedeveloper.netlify.app/" target="_blank"><Logo src={logo}/></a>  
          </FooterDiv>
          <h1>hello header</h1>
        
      </div>
    );
  }
  
  export default Footer;
  