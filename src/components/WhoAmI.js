import React from 'react'
import styled from 'styled-components'
import Envolpe from './Envolpe';
import Introduction from './Introduction';
import surf from "../images/surf.gif"
import html from "../images/html.png";
import { keyframes } from "styled-components";
const WhoAmIContainer = styled.div`
  width: 100%;
  height: 1100px;
  // margin-top: 20%;
  border: 2px solid black;
  
  // position: absolute;

  
`;

const WhoAmIInner = styled.div`
  width: 100%;
  height: 700px;
  
  border: 2px solid black;
  background-color: #f4d34a;
  
`;

const breatheAnimation = keyframes`
 0% {left: 0px; }
 100% { left:100%; }
 
`;

const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  position: absolute;
  margin-top:345px;
  border: 1px solid black;
  animation-name: ${breatheAnimation};
  animation-duration: 25s;
  animation-iteration-count: infinite;
`;




const Cloud = styled.div`
  //   margin: 0 auto;
  //   margin-top: 300px;
  width: 350px;
  height: 120px;

  background: #f2f9fe;
  background: linear-gradient(top, #f2f9fe 5%, #d6f0fd 100%);
  background: -webkit-linear-gradient(top, #f2f9fe 5%, #d6f0fd 100%);
  background: -moz-linear-gradient(top, #f2f9fe 5%, #d6f0fd 100%);
  background: -ms-linear-gradient(top, #f2f9fe 5%, #d6f0fd 100%);
  background: -o-linear-gradient(top, #f2f9fe 5%, #d6f0fd 100%);

  border-radius: 100px;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;

  position: relative;
  margin: 120px auto 20px;

  &::after {
    content: "";
    position: absolute;
    background: #f2f9fe;
    z-index: -1;
    width: 100px;
    height: 100px;
    top: -50px;
    left: 50px;

    border-radius: 100px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
  }

  &::before {
    content: "";
    position: absolute;
    background: #f2f9fe;
    z-index: -1;
    width: 180px;
    height: 180px;
    top: -90px;
    right: 50px;
    border-radius: 200px;
    -webkit-border-radius: 200px;
    -moz-border-radius: 200px;
  }
`;

function WhoAmI() {
  return (
    <div>
      <WhoAmIContainer>

      <WhoAmIInner>
        <Envolpe />
        {/* <Cloud /> */}
        {/* <div class="container">
        <div class="coffee-header">
          <div class="coffee-header__buttons coffee-header__button-one"></div>
          <div class="coffee-header__buttons coffee-header__button-two"></div>
          <div class="coffee-header__display"></div>
          <div class="coffee-header__details"></div>
        </div>
        <div class="coffee-medium">
          <div class="coffe-medium__exit"></div>
          <div class="coffee-medium__arm"></div>
          <div class="coffee-medium__liquid"></div>
          <div class="coffee-medium__smoke coffee-medium__smoke-one"></div>
          <div class="coffee-medium__smoke coffee-medium__smoke-two"></div>
          <div class="coffee-medium__smoke coffee-medium__smoke-three"></div>
          <div class="coffee-medium__smoke coffee-medium__smoke-for"></div>
          <div class="coffee-medium__cup"></div>
        </div>
        <div class="coffee-footer"></div>
      </div> */}
        {/* <div class="ocean">
  <div class="wave"></div>
  <div class="wave"></div>
</div> */}
        <ImageContainer>
          <img src={surf} alt="" style={{ width: "150px", height: "150px" }} />
        </ImageContainer>
        <Introduction />
        <img src={html} alt="" />
        </WhoAmIInner>
      </WhoAmIContainer>
    </div>
  );
}

export default WhoAmI