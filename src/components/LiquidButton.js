import React from 'react'
import styled from 'styled-components';

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
    
    background: ${props=>props.theme};
    box-shadow: inset 0 0 50px rgba(0, 0, 0, .5);
    transition: .5s

    &:after{
 content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 30%;
    transform: translate(-50%, -75%);
    background: #000;
     border-radius: 40%;
    background: rgba(20, 20, 20, .5);
    animation: ${animate} 10s linear infinite;
    }

    &:before{
 content: '';
    width: 200%;
    height: 200%;
    position: absolute;
    top: 0;
    left: 20%;
    transform: translate(-50%, -75%);
    background: #000;
     border-radius: 45%;
    
    background-color:black;
    animation: ${animate} 5s linear infinite;
    }
`;
const LiquidButtonContainer = styled.div`
  position: relative;
    margin-left:10px;
    display:flex;
    justify-content:center;
    align-items:center;
    
    width: 60px;
    height:60px;
    overflow: hidden;
    border-radius: 80px;

    &:hover{
        ${LiquidSection}{
            top: -95px;
             transition: 2s
        }
    }
}
`;
const LiquidButtonText =styled.span`
 position: relative;
    color: #fff;
    fot-size: 20px;
    font-family: Arial;
    letter-spacing: 8px;
    z-index: 1;
`


function LiquidButton({type,color}) {
  return (
    <div>
      
      <LiquidButtonContainer>
        
        <LiquidButtonText>
          
          <img src={type} alt="" width={"30px"} />
        </LiquidButtonText>
    
        <LiquidSection theme={color}></LiquidSection>
      </LiquidButtonContainer>
      
    </div>
  );
}

export default LiquidButton

