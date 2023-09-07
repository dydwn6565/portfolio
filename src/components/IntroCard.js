import React from "react";
import styled from "styled-components";
import { GoBrowser } from "react-icons/go";
import { GiServerRack } from "react-icons/gi";
import { GiConversation } from "react-icons/gi";
import react from "../images/icons/react.png";
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

import tailwind from "../images/icons/tailwind.png";
import typescript from "../images/icons/typescript.png";
import mysql from "../images/icons/mysql.png";
import mongodb from "../images/icons/mongodb.png";
import LiquidButton from "./LiquidButton";
const MySkills = styled.div`
  width: 500px;
  height: 250px;
  margin: 0 auto;
  border-radius: 20px;
  padding: 40px;
  background-color: #ffffe0;
  margin-top: 60px;
  @media (max-width: 650px) {
    width: 70vw;
    height: 300px;
    padding: 5vw;
  }
  @media (max-width: 400px) {
    
    height: 70vw;
  
  }
`;
const IntroIcon = styled.div`
  font-size: 50px;
  display: flex;
  justify-content: center;
  margin-right: 20px;
  margin-bottom: 10px;
  @media (max-width: 650px) {
    font-size: 7vw;
    flex-wrap: wrap;
  }
  @media (max-width: 460px) {
  }
`;
const IntroTitle = styled.div`
  font-size: 30px;
  margin-left: 10px;
  display: flex;
  @media (max-width: 650px) {
    font-size: 5vw;
  }
  @media (max-width: 420px) {
  }
`;
const IntroTitleIcons = styled.div`
  display: flex;
  margin-bottom: 10px;
  @media (max-width: 540px) {
    flex-wrap: wrap;
  }
`;
const IntroTitleIconsInside = styled.div`
  display: flex;
`;
const IntroText = styled.div`
  @media (max-width: 650px) {
    font-size: 2.7vw;
  }
`;
function IntroCard({ text, icon, title }) {
  return (
    <div>
      <MySkills>
        <IntroTitle>
          <IntroIcon>
            {icon === "GoBrowser" && <GoBrowser />}
            {icon === "GiServerRack" && <GiServerRack />}
            {icon === "GiConversation" && <GiConversation />}
          </IntroIcon>
          <div>{title}</div>
        </IntroTitle>

        <div>
          <div>
            {title === "frontend" && (
              <IntroTitleIcons>
                <LiquidButton type={react} color="#79BAEC" />
                <LiquidButton type={typescript} color="#79ecb4" />
                <LiquidButton type={html} color="#d7ec79" />
                <LiquidButton type={javascript} />

                <LiquidButton type={nextjs} color="#79BAEC" />
                <LiquidButton type={tailwind} color="#79BAEC" />
                <LiquidButton type={bootstrap} />
                <LiquidButton type={css} color="#ffbc6b" />
              </IntroTitleIcons>
            )}
            {title === "backend" && (
              <IntroTitleIcons>
                <LiquidButton type={nodejs} color="#bdde6a" />
                <LiquidButton type={python} color="#79BAEC" />
                <LiquidButton type={flask} color="#79ecb4" />
                <LiquidButton type={firebase} color="#d7ec79" />

                <LiquidButton type={postgresql} color="#474ed1" />
                <LiquidButton type={mysql} color="#79BAEC" />

                <LiquidButton type={mongodb} color="#79ecb4" />
              </IntroTitleIcons>
            )}
          </div>
          <IntroText>{text}</IntroText>
        </div>
      </MySkills>
    </div>
  );
}

export default IntroCard;
