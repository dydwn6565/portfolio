import React from "react";
import { Typewriter } from "react-simple-typewriter";
import styled from "styled-components";

const TypeWriterContainer = styled.div`
  height: 1200px;
  font-size: 2vw;
  
  color: white;
  @media (max-width: 820px) {
    height: 150vw;
  }
`;
const TypeWriterInside = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 820px) {
    font-size: 3.5vw;
    top: 57vw;
  }
`;

function TypeWriter() {
  return (
    <div>
      <TypeWriterContainer>
        <TypeWriterInside>
          <Typewriter
            words={[ "My name is Yongju Lee"]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </TypeWriterInside>
      </TypeWriterContainer>
    </div>
  );
}

export default TypeWriter;
