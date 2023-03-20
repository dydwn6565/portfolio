import React from "react";
import styled from "styled-components";
import mypicture from "../images/mypicture.jpg";
import LiquidButton from "./LiquidButton";
import bootstrap from "../images/icons/bootstrap.png";
import html from "../images/icons/html.png";
import css from "../images/icons/css.png";
import firebase from "../images/icons/firebase.png";
import flask from "../images/icons/flask.png";

import javascript from "../images/icons/javascript.png";
import nextjs from "../images/icons/nextjs-icon.png";
import nodejs from "../images/icons/nodejs.png";
import postgresql from "../images/icons/postgresql.png";
import python from "../images/icons/python.png";
import react from "../images/icons/react.png";
import tailwind from "../images/icons/tailwind.png";
import typescript from "../images/icons/typescript.png";
import mysql from "../images/icons/mysql.png";
import mongodb from "../images/icons/mongodb.png";
const IntroductionContainer = styled.div`
  width: 800px;
  height: 700px; 
  margin: 0 auto;
  display: flex;
`;

const Picture = styled.img`
  height: 250px;
  width: 150px;
  display: flex;
  margin-top: 200px;
`;
const NameContainer = styled.div`
  margin-left: 90px;
  display: flex;
  flex-direction: column;
  font-size: 58px;
  align-items: center;
  justify-content: center;
  font-weight: bold;
 
`;

const IntroductionPart = styled.div`
  width: 400px;
  height: 200px;
  margin-top: 50px;
  margin-left: 90px;
`;
const IntroductionContent = styled.div`
  font-size: 20px;
  font-weight:bold;
  margin-top:50px;
`;
const Skills = styled.div`
  width: 400px;
  height: 400px;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
`;

function Introduction() {
  return (
    <IntroductionContainer>
      <Picture src={mypicture} />
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
          I'm YongJu Lee. I've been coding for over 2 years now. Even though I
          don't have that much working experience, I am doing self-study to
          improve my coding skills.
        </IntroductionContent>
        <Skills>
          <LiquidButton type={react} color="#79BAEC" />
          <LiquidButton type={typescript} color="#79ecb4" />
          <LiquidButton type={html} color="#d7ec79" />
          <LiquidButton type={css} color="#ffbc6b" />
          <LiquidButton type={nextjs} color="#79BAEC" />
          <LiquidButton type={javascript} />
          <LiquidButton type={nodejs} color="#bdde6a" />
          <LiquidButton type={python} color="#79BAEC" />
          <LiquidButton type={flask} color="#79ecb4" />
          <LiquidButton type={firebase} color="#d7ec79" />
          <LiquidButton type={postgresql} color="#474ed1" />
          <LiquidButton type={tailwind} color="#79BAEC" />
          <LiquidButton type={bootstrap} />
          <LiquidButton type={mysql} color="#79BAEC" />
          <LiquidButton type={mongodb} color="#79ecb4" />
        </Skills>
      </IntroductionPart>
    </IntroductionContainer>
  );
}

export default Introduction;
