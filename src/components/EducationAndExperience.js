import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { keyframes } from "styled-components";
import flag from "../images/flag.png";
import { RiFootprintFill } from "react-icons/ri";
const dash = keyframes`
  from {
    stroke-dashoffset: 3750;
  }
  to {
    stroke-dashoffset: 0;
  }
`;

const EducationAndExperienceContainer = styled.div`
  width: 100%;
  height: 1100px;
  min-width: 875px;
`;

const EducationAndExperienceTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 50px;
`;
const CircleSvgContainer = styled.path`
  stroke-dasharray: 4500;
  stroke-dashoffset: 0;
  animation: ${dash} 0.8s linear alternate;

  display: flex;
  margin-top: -260px;
  margin-right: 170px;

  justify-content: center;
`;
const EducationAndExperienceLeft = styled.div`
  height: 1000px;
  margin-top: -200px;
`;

const EducationAndExperienceContent = styled.div`
  display: flex;
  justify-content: center;
`;
const FlagContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  margin-top: 200px;
  width: 300px;
  margin-left: 50px;
`;

const FirstFlagContainer = styled.img`
  width: 100px;
  height: 100px;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;
const SecondFlagContainer = styled.img`
  width: 100px;
  height: 100px;
  margin-left: 200px;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

const LeftDiagonal = styled.div`
  
  transform: skewY(45deg);
  width: 150px;
  display: flex;
  justify-content: space-evenly;
  margin-top: 50px;
  margin-left: 70px;
`;

const RightDiagonal = styled.div`
  transform: skewY(-45deg);
  width: 150px;
  display: flex;
  justify-content: space-evenly;
  margin-top: 50px;
  margin-left: 70px;
`;
const FootPrintTurnLeft = styled.div`
  transform: rotate(90deg);
`;

const FootPrintTurnRight = styled.div`
  transform: rotate(-90deg);
`;

const ContentContainer = styled.div`
  width: 500px;
  height: 500px;
  margin-left: 100px;
  background: rgba(255, 255, 255, 0.29);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  border: 1px solid rgba(255, 255, 255, 0.24);
`;

const ContentTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-size: 25px;
  font-weight: bold;
`;
const Content = styled.div`
width:400px
padding:20px;
margin-left:30px;
`;
const ContentLi = styled.li`
  padding: 10px;
`;

const ContentLiTitle = styled.li`
  padding: 10px;
  font-weight: bold;
  font-size: 18px;
`;

const LookingForCareer = styled.div`
  font-size: 35px;
  display: flex;
  justify-content: center;
  margin-top: 220px;
`;

function EducationAndExperience() {
  
  const [contentNumber, setContentNumber] = useState(1);
  useEffect(() => {
    if (circleRef.current) {
    }
  });
  const circleRef = useRef(null);

  const showingContent = (e) => {

    setContentNumber(e);
  };
  return (
    <div>
      <EducationAndExperienceContainer>
        <EducationAndExperienceTitle>
          Education With Work Experience
        </EducationAndExperienceTitle>
        <CircleSvgContainer>
          <svg
            ref={circleRef}
            width="150"
            height="479"
            viewBox="0 0 615 479"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M481.501 345.133C471.822 345.477 461.714 350.742 452.748 353.534C418.23 364.283 383.041 370.275 346.772 370.268C297.24 370.257 237.301 365.291 192.089 343.676C153.613 325.281 104.838 286.255 96.8184 241.444C88.7728 196.489 148.048 155.732 179.945 136.672C234.509 104.069 297.802 91.2414 360.852 92.3445C415.287 93.2969 476.714 102.287 522.703 133.82C587.427 178.199 582.641 258.525 534.087 313.404C457.942 399.469 322.12 429.489 212.653 409.127C160.657 399.456 101.128 378.27 76.1301 327.297C49.3255 272.642 67.8071 214.089 102.38 168.246C186.688 56.4529 351.606 6.58861 481.065 67.4841C561.155 105.157 616.256 192.169 576.024 279.445C565.994 301.204 548.132 322.534 530.986 338.507C487.922 378.623 436.498 412.083 381.659 433.546C315.601 459.398 237.177 466.565 169.62 441.797C70.6708 405.52 4.42484 300.843 48.7969 197.789C79.7624 125.873 152.341 80.7246 221.608 51.1057C291.201 21.3479 374.299 4.01618 449.105 23.1066C543.105 47.0957 622.573 130.062 606.776 231.555C588.551 348.65 490.672 431.278 380.127 458.948C252.269 490.951 79.7705 473.821 19.1346 336.776C-13.8461 262.235 22.4955 181.654 76.8464 128.315C131.012 75.1573 200.055 41.513 266.049 6.04314"
              stroke="orange"
              stroke-width="17"
              stroke-linecap="round"
            />
          </svg>
        </CircleSvgContainer>
        <EducationAndExperienceContent>
          <EducationAndExperienceLeft>
            <FlagContainer>
              <FirstFlagContainer
                src={flag}
                alt=""
                onClick={() => showingContent(1)}
              />
              <LeftDiagonal>
                <FootPrintTurnLeft>
                  <RiFootprintFill />
                </FootPrintTurnLeft>
                <FootPrintTurnLeft>
                  <RiFootprintFill />
                </FootPrintTurnLeft>
                <FootPrintTurnLeft>
                  <RiFootprintFill />
                </FootPrintTurnLeft>
                <FootPrintTurnLeft>
                  <RiFootprintFill />
                </FootPrintTurnLeft>
                <FootPrintTurnLeft>
                  <RiFootprintFill />
                </FootPrintTurnLeft>
                <FootPrintTurnLeft>
                  <RiFootprintFill />
                </FootPrintTurnLeft>
              </LeftDiagonal>
              <SecondFlagContainer
                src={flag}
                alt=""
                onClick={() => showingContent(2)}
              />
              <RightDiagonal>
                <FootPrintTurnRight>
                  <RiFootprintFill />
                </FootPrintTurnRight>
                <FootPrintTurnRight>
                  <RiFootprintFill />
                </FootPrintTurnRight>
                <FootPrintTurnRight>
                  <RiFootprintFill />
                </FootPrintTurnRight>
                <FootPrintTurnRight>
                  <RiFootprintFill />
                </FootPrintTurnRight>
                <FootPrintTurnRight>
                  <RiFootprintFill />
                </FootPrintTurnRight>
              </RightDiagonal>
              <FirstFlagContainer
                src={flag}
                alt=""
                onClick={() => showingContent(3)}
              />
            </FlagContainer>
          </EducationAndExperienceLeft>
          {contentNumber === 1 && (
            <ContentContainer>
              <ContentTitle>Education</ContentTitle>
              <Content>
                <ul>
                  <ContentLiTitle>
                    British Columbia Institute of Technology{" "}
                  </ContentLiTitle>
                  <ContentLiTitle>Computer Systems Technology</ContentLiTitle>
                  <ContentLi>Sep 2019 - June 2021 </ContentLi>
                  <ContentLi>
                    Attended computer lanuages courses in BCIT (Python, Java,
                  </ContentLi>
                  <ContentLi>
                    Javascript, C, C++, C#,Firsebase, MongoDB,SQL)
                  </ContentLi>
                  <ContentLi>
                    Worked with a lot of projects with my classmates to develop
                    my coding skills and teamwork.
                  </ContentLi>
                  <ContentLi>
                    Studied the structure of the computer and related math
                    lectures.
                  </ContentLi>
                  <ContentLi>
                    Leaned the algorithms for program to optimize a application.
                  </ContentLi>
                </ul>
              </Content>
            </ContentContainer>
          )}

          {contentNumber === 2 && (
            <ContentContainer>
              <ContentTitle>Work Experience</ContentTitle>
              <Content>
                <ul>
                  <ContentLiTitle>Web Developer </ContentLiTitle>
                  <ContentLiTitle>Tekworthy</ContentLiTitle>
                  <ContentLi>Jan 2021 - May 2021 </ContentLi>
                  <ContentLi>
                    Implemented customized widgets to link to our registed
                    user's webpage.
                  </ContentLi>
                  <ContentLi>
                    Implemented two-step verification (confirm email and phone
                    number).
                  </ContentLi>
                  <ContentLi>
                    Created components can manage our registered user's profit.
                  </ContentLi>
                </ul>
              </Content>
            </ContentContainer>
          )}

          {contentNumber === 3 && (
            <ContentContainer>
              <LookingForCareer>Looking for a next career</LookingForCareer>
            </ContentContainer>
          )}
        </EducationAndExperienceContent>
      </EducationAndExperienceContainer>
    </div>
  );
}

export default EducationAndExperience;
