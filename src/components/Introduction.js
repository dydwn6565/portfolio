import React from "react";
import styled from "styled-components";

const IntroductionContainer = styled.div`
  width: 700px;
  height: 700px;
  border: 1px solid black;
  margin: 0 auto;
  display:flex;
`;

const Picture = styled.div`
  height: 100px;
  width: 100px;
  border:1px solid black;
  margin-left:20px;
`;
const NameContainer = styled.div`
  width: 100px;
  height: 700px;
//   border: 1px solid black;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  font-size: 58px;
  align-items: center;
  justify-content: center;
  font-weight:bold;
`;

const IntroductionPart = styled.div`
    width:400px;
    height:700px;
    border:1px solid black;
    margin:auto;
`
const IntroductionContent = styled.div`
    font-size: 17px;
    margin-top:250px;
`

function Introduction() {
  return (
    <IntroductionContainer>
      
      <Picture />
      <NameContainer>
        <div>Y</div>
        <div>O</div>
        <div>N</div>
        <div>G</div>
        <div>J</div>
        <div>U</div>
        <div>L</div>
        <div>E</div>
        <div>E</div>
      </NameContainer>
      <IntroductionPart>
        <IntroductionContent>

            I'm YongJu Lee. I've been coding for over 2 years now. Even though I don't have that much working experience, I am doing self-study to imporve my coding skills.
        </IntroductionContent>

      </IntroductionPart>
    </IntroductionContainer>
  );
}

export default Introduction;
