import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
const spin = keyframes`
  to {
        transform: rotate(360deg);
    }
`;

const SpinningContainer = styled.div`
  // width: 800px;
  // height: 800px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 820px) {
    // font-size: 3.5vw;
    top: 57vw;
  }
`;

const SpinningFirstCircleComponent = styled.div`
  margin: 0 auto;
  width: 30vw;
  height: 30vw;
  max-width: 300px;
  max-height: 300px;
  border-radius: 50%;
  position: absolute;
  border: 5px dotted transparent;
  border-color: rgb(242, 224, 201);
  animation: ${spin} 5s ease-in-out infinite;
`;

const SpinningSecondCircleComponent = styled.div`
  margin: 0 auto;
  width: 15vw;
  height: 15vw;
  max-width: 150px;
  max-height: 150px;
  border-radius: 50%;
  position: absolute;
  border: 5px dotted transparent;
  border-left-color: rgb(31, 191, 191);
  border-right-color: rgb(31, 191, 191);
  animation: ${spin} 5s ease-in-out infinite;
`;

const SpinningThirdCircleComponent = styled.div`
  margin: 0 auto;
  width: 10vw;
  height: 10vw;
  max-width: 100px;
  max-height: 100px;
  border-radius: 50%;
  position: absolute;
  border: 5px dotted transparent;
  border-bottom-color: rgb(217, 194, 173);
  border-top-color: rgb(217, 194, 173);
  animation: ${spin} 5s ease-in-out infinite;
`;

function SpinningCircle() {
  return (
    <div>
      <SpinningContainer>
        <SpinningFirstCircleComponent />
        <SpinningSecondCircleComponent />
        <SpinningThirdCircleComponent />
      </SpinningContainer>
    </div>
  );
}

export default SpinningCircle;
