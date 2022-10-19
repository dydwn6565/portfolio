import React from "react";
import { Typewriter } from "react-simple-typewriter";
import styled from "styled-components";

const TypeWriterContainer = styled.div`
  min-height:600px;
  width: 100%;
  height: 1200px;

  
  font-size: 40px;
  color: white;
`;
const TypeWriterInside = styled.div`
  
  margin-top: 5%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
`;

function TypeWriter() {
  return (
    <div>
      <TypeWriterContainer>
        <TypeWriterInside>
          <Typewriter
            words={["Thank you for coming to my Web page"]}
            // loop={5}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
        </TypeWriterInside>
      </TypeWriterContainer>
        
    </div>
  );
}

export default TypeWriter;
