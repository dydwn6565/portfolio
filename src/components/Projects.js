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
  margin-bottom:100px;
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

const shoppingMallUrl = "https://myshoppingmall.vercel.app";
const shoppingMallGithub = " https://github.com/dydwn6565/myshoppingmall";
const InstagramClone = "https://instagramclone-nine.vercel.app";
const InstagramGithub = "https://github.com/dydwn6565/instagramclone";
const scheduleManagementCalendar = "https://schedulemanager.vercel.app";
const scheduleManagementCalendarGithub =
  "https://github.com/dydwn6565/schedulemanager"; 
const spotifyGithub = "https://github.com/dydwn6565/spotifyclone";
const spotifyClone = "https://spotifyclone1-tau.vercel.app";
const starbucksLandingPage = "https://starbuckslandingpage-umber.vercel.app"; 
const starbucksLandingPageGithub =
  "https://github.com/dydwn6565/starbucksLandingPage";
function Projects() {
  return (
    <div>
      <ProjectContainer>
        <ProjectTitle>Projects</ProjectTitle>

        <TopAndBottomCard>
          <Card
            cardTitle={"Shopping Mall"}
            image={musinsa}
            url={shoppingMallUrl}
            github={shoppingMallGithub}
          />
          <Card
            cardTitle={"Instagram Clone"}
            image={instagram}
            url={InstagramClone}
            github={InstagramGithub}
          />
        </TopAndBottomCard>
        <MiddleCard>
          <Card
            cardTitle={"Calendar Schedule Management"}
            image={calendar}
            url={scheduleManagementCalendar}
            github={scheduleManagementCalendarGithub}
          />
        </MiddleCard>
        <TopAndBottomCard>
          <Card
            cardTitle={"Spotify Clone"}
            image={spotify}
            url={spotifyClone}
            github={spotifyGithub}
          />
          <Card
            cardTitle={"Starbucks Landing Page"}
            image={starbucks}
            url={starbucksLandingPage}
            github={starbucksLandingPageGithub}
          />
        </TopAndBottomCard>
      </ProjectContainer>
    </div>
  );
}

export default Projects;
