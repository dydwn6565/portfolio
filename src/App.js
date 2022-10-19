import "./App.css";
import ReactPlayer from "react-player";

import styled from "styled-components";
import Header from "./components/Header";
import TypeWriter from "./components/TypeWriter";
import Navigation from "./components/Navigation";
import WhoAmI from "./components/WhoAmI";
import sea from "./images/sea.jpg";
import { useEffect, useRef, useState } from "react";
import SpinningCircle from "./components/SpinningCircle";
import EducationAndExperience from "./components/EducationAndExperience";
import Projects from "./components/Projects";

const VideoComponent = styled.div`
  // z-index:-1;

  margin-top: -120px;
`;
const MainComponent = styled.div`
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 420vh;
  background-image: url(${sea});

  background-position: center;
`;

const MaincomponentInner = styled.div`
  width: 100%;
  height: 350vh;
`;
const MainPageBackGround = styled.div`
  width: 100%;
  height: 1100px;
  position: absolute;

  //  background-color: #333;

  opacity: 0.2;
`;
function App() {
  const scrollRef = useRef(null);
  const [hideElement, setHideElement] = useState(false);
  const [centerX, setCenterX] = useState(false);
  const [centerY, setCenterY] = useState(false);
  const [d, setD] = useState(false);
  const [theme, setTheme] = useState();
  useEffect(() => {
    if (!scrollRef.current) return;
    window.addEventListener("scroll", yScrollEvent);
    return () => {
      window.removeEventListener("scroll", yScrollEvent);
    };
  }, [scrollRef.current]);

  useEffect(() => {
    const theme = {
      centerX: centerX,
      centerY: centerY,
      d: d,
    };
    setTheme(theme);
    console.log(centerX / 100, centerY / 100, d / 10);
  }, [centerX, centerY, d]);
  const yScrollEvent = () => {
    const scroll = scrollRef.current.getBoundingClientRect();
    console.log(scroll);
    //  const {x,y,width,height} = scroll
    setHideElement(scroll);
    //  setHideElement(scroll.top <= -100);
  };

  // const mouseMove = (e) => {
  //   console.log(hideElement.left);
  //   const left = e.clientX - hideElement.x;
  //   const top = e.clientY - hideElement.y;

  //   const centerX = left - hideElement.width / 2;
  //   const centerY = top - hideElement.height / 2;
  //   const d = Math.sqrt(centerX ** 2 + centerY ** 2);
  //   setCenterX(left - hideElement.width / 2);
  //   setCenterY(top - hideElement.height / 2);
  //   setD(Math.sqrt(centerX ** 2 + centerY ** 2));
  // };
  return (
    <div className="App">
      {/* <MainComponent ref={scrollRef} onMouseEnter={mouseMove} theme={theme}> */}
      <MainComponent ref={scrollRef} theme={theme}>
        <MaincomponentInner>
          <TypeWriter />

          <VideoComponent></VideoComponent>
          <SpinningCircle />
          <WhoAmI />

          <EducationAndExperience />
          <Projects />
        </MaincomponentInner>
      </MainComponent>

      {/* </div> */}
    </div>
  );
}

export default App;