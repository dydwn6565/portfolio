import React from "react";
import styled from "styled-components";
import Introduction from "./Introduction";

const WhoAmIContainer = styled.div`
  width: 100%;
  height: 1250px;
  @media (max-width: 400px) {
    height: 310vw;
  }
`;

const WhoAmIInner = styled.div`
  width: 100%;
  height: 1200px;
  background-color: #f4d34a;
  @media (max-width: 400px) {
    height: 300vw;
  }
`;

function WhoAmI(ref) {
  return (
    <div>
      <WhoAmIContainer>
        <WhoAmIInner>
        
          <Introduction  />
          
        </WhoAmIInner>
      </WhoAmIContainer>
    </div>
  );
}

export default WhoAmI;
