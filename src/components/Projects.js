import React from 'react'
import styled from 'styled-components'
import Card from './Card';
import musinsa from "../images/musinsa.jpg"
import instagram from "../images/instagram.jpg";
import calendar from "../images/calendar.png";
import spotify from "../images/spotify.jpg";
import starbucks from "../images/starbucks.webp";
const ProjectContainer = styled.div`
  width: 100%;
  height: 1200px;
  border: 5px solid white;
  background-color:lightgrey;
  
`;

const ProjectTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 50px;
  
`;

const TopAndBottomCard = styled.div`
  display:flex;
`
const MiddleCard = styled.div`
display:flex;
justify-content:center;
`
function Projects() {
  return (
    <div>
      <ProjectContainer>
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

export default Projects