import React from "react";
import styled from "styled-components";
import surfboard from "../images/surfboard.png";
import { FaPersonSwimming } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
const HeaderConainer = styled.div`
  width: 100%;
  height: 90px;
  // background-color: #333;
  position: absolute;
`;
const ImageContainer = styled.div`
  justify-content: center;
  display: flex;
  
`;

function Header() {
  const MoveTointroPage = () => {
    window.scrollTo({
      top: 1100,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <HeaderConainer>
        <div>
          <ImageContainer>
            <FaPersonSwimming onClick={()=>{MoveTointroPage()}}/>
            <FaUserGraduate/>
            <AiOutlineFolderOpen/>
            <GiSkills/>
          </ImageContainer>
        </div>
      </HeaderConainer>
    </div>
  );
}

export default Header;
