import React from "react";
import { Typewriter } from "react-simple-typewriter";
import styled from "styled-components";

const TypeWriterContainer = styled.div`
  min-height: 600px;
  width: 100%;
  height: 1200px;
  font-size: 30px;
  color: white;
`;
const TypeWriterInside = styled.div`
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
            words={["Welcome to my Web page", "My name is Yongju Lee"]}
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
