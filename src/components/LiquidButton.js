import React from "react";
import styled from "styled-components";

import { keyframes } from "styled-components";

const animate = keyframes`
  0% {
        transform: translate(-50%, -75%) rotate(0deg);
    }
    100% {
        transform: translate(-50%, -75%) rotate(360deg);
    }
`;

const LiquidSection = styled.div`
  position: absolute;
  top: -70px;
  left: 0;
  width: 170px;
  height: 170px;

  background: ${(props) => props.theme};
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
  transition: 0.5s @media (max-width: 650px) {
    width: 100px;
    height: 100px;
  }
 
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 30%;
    transform: translate(-50%, -75%);
    background: #000;
    border-radius: 40%;
    background: rgba(20, 20, 20, 0.5);
    animation: ${animate} 10s linear infinite;
  }

  &:before {
    content: "";
    width: 200%;
    height: 200%;
    position: absolute;
    top: 0;
    left: 20%;
    transform: translate(-50%, -75%);
    background: #000;
    border-radius: 45%;
    background-color: black;
    animation: ${animate} 5s linear infinite;
  }
`;
const LiquidButtonContainer = styled.div`
  position: relative;
    margin-left:10px;
    display:flex;
    justify-content:center;
    align-items:center;
    width: 50px;
    height:50px;
    overflow: hidden;
    border-radius: 80px;
     @media (max-width: 650px) {
    width: 40px;
    height: 40px;
  } @media (max-width: 430px) {
    width: 10vw;
    height: 10vw;
  }
    
  
    &:hover{
        ${LiquidSection}{
            top: -95px;
             transition: 2s
        }
    }
}
`;
const LiquidButtonText = styled.span`
  position: relative;
  color: #fff;
  
  font-family: Arial;
  letter-spacing: 8px;
  z-index: 1;
`;

const LiquidImage = styled.img`
  width: 30px;
  @media (max-width: 650px) {
    width:22px;
    
  }
`;
function LiquidButton({ type, color }) {
  return (
    <div>
      <LiquidButtonContainer>
        <LiquidButtonText>
          {/* <img src={type} alt="" style={{width:"30px"}} /> */}
          <LiquidImage src={type}/>
        </LiquidButtonText>

        <LiquidSection theme={color}></LiquidSection>
      </LiquidButtonContainer>
    </div>
  );
}

export default LiquidButton;
