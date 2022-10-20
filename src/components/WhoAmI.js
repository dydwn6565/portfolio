import React from "react";
import styled from "styled-components";

import Introduction from "./Introduction";

const WhoAmIContainer = styled.div`
  width: 100%;
  height: 1100px;

  // border: 2px solid black;
`;

const WhoAmIInner = styled.div`
  width: 100%;
  height: 700px;

  // border: 2px solid black;
  background-color: #f4d34a;
`;

function WhoAmI() {
  return (
    <div>
      <WhoAmIContainer>
        <WhoAmIInner>
        
          <Introduction />
          
        </WhoAmIInner>
      </WhoAmIContainer>
    </div>
  );
}

export default WhoAmI;
