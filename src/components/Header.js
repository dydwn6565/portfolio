import React from "react";
import styled from "styled-components";

import { FaPersonSwimming } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
const HeaderConainer = styled.div`
  width: 100%;
  height: 90px;
  
  position: absolute;
`;
const ImageContainer = styled.div`
  justify-content: space-evenly;
  display: flex;
  color: white;
  cursor: pointer;
  margin-top: 20px;
  margin-left: 20px;
  font-size: 30px;
  @media (max-width: 820px) {
    display:none;
  }
`;

function Header(targetRef) {
  const MoveTointroPage = () => {
    

      window.scrollTo({
        top: 1100,
        behavior: "smooth",
      
    })
  };
  const MoveToCarrer = () => {
    window.scrollTo({
      top: 2300,
      behavior: "smooth",
    });
  };
  const MoveToProject = () => {
    window.scrollTo({
      top: 3350,
      behavior: "smooth",
    });
  };
  const MoveToContact = () => {
    window.scrollTo({
      top: 5200,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <HeaderConainer>
        <ImageContainer>
          <FaPersonSwimming
            onClick={() => {
              MoveTointroPage();
            }}
          />

          <FaUserGraduate
            onClick={() => {
              MoveToCarrer();
            }}
          />

          <AiOutlineFolderOpen
            onClick={() => {
              MoveToProject();
            }}
          />
          <GiSkills
            onClick={() => {
              MoveToContact();
            }}
          />
        </ImageContainer>
      </HeaderConainer>
    </div>
  );
}

export default Header;
