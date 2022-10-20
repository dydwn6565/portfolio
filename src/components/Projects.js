import React from "react";
import styled from "styled-components";
import Card from "./Card";
import musinsa from "../images/musinsa.jpg";
import instagram from "../images/instagram.jpg";
import calendar from "../images/calendar.png";
import spotify from "../images/spotify.jpg";
import starbucks from "../images/starbucks.webp";


const ProjectContainer = styled.div`
  width: 100%;
  height: 1200px;
  background: #f5f5dc;
  min-width: 772px;
`;

const ProjectTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 70px;
  font-family: "Cabin Sketch", cursive;
  margin-bottom:100px;
  
`;

const TopAndBottomCard = styled.div`
  width: 100%;
  height: 200px;

  display: flex;
  justify-content: space-around;
  @media (max-width: 1900px) {
    height: 350px;
  }
  @media (max-width: 1290px) {
    flex-direction: column;
    margin-top: 340px;
    height: 250px;
    
  }
`;
const MiddleCard = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  justify-content: center;
  @media (max-width: 1900px) {
    height: 350px;
  }
  @media (max-width: 1290px) {
    flex-direction: column;
    margin-top: 280px;
    margin-bottom:-40px;
  }
`;
function Projects() {
  return (
    <div>
      <ProjectContainer >
        <ProjectTitle>Projects</ProjectTitle>

        <TopAndBottomCard>
          <Card cardTitle={"Shopping Mall"} image={musinsa} />
          <Card cardTitle={"Instagram Clone"} image={instagram} />
        </TopAndBottomCard>
        <MiddleCard>
          <Card cardTitle={"Calendar Schedule Management"} image={calendar} />
        </MiddleCard>
        <TopAndBottomCard>
          <Card cardTitle={"Spotify Clone"} image={spotify} />
          <Card cardTitle={"Starbucks Landing Page"} image={starbucks} />
        </TopAndBottomCard>
      </ProjectContainer>
    </div>
  );
}

export default Projects;
