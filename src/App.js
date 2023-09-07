import "./App.css";
import styled from "styled-components";
import TypeWriter from "./components/TypeWriter";
import WhoAmI from "./components/WhoAmI";
import sea from "./images/sea.jpg";
import { useEffect, useRef } from "react";
import SpinningCircle from "./components/SpinningCircle";
import EducationAndExperience from "./components/EducationAndExperience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";

const VideoComponent = styled.div`
  margin-top: -120px;
`;
const MainComponent = styled.div`
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 3500px;
  background-image: url(${sea});
  
  background-position: center;
`;

const MaincomponentInner = styled.div`
  width: 100%;
  
`;

function App() {
  const targetRef = useRef(null);
  //scroll event 

  // const scrollRef = useRef(null);
  // const [hideElement, setHideElement] = useState(false);
  // const [centerX, setCenterX] = useState(false);
  // const [centerY, setCenterY] = useState(false);
  // const [d, setD] = useState(false);
  // const [theme, setTheme] = useState();
  // useEffect(() => {
  //   if (!scrollRef.current) return;
  //   window.addEventListener("scroll", yScrollEvent);
  //   return () => {
  //     window.removeEventListener("scroll", yScrollEvent);
  //   };
  // }, [scrollRef.current]);

  // useEffect(() => {
  //   const theme = {
  //     centerX: centerX,
  //     centerY: centerY,
  //     d: d,
  //   };
  //   setTheme(theme);
  //   console.log(centerX / 100, centerY / 100, d / 10);
  // }, [centerX, centerY, d]);
  // const yScrollEvent = () => {
  //   const scroll = scrollRef.current.getBoundingClientRect();
  //   console.log(scroll);
    
  //   setHideElement(scroll);
    
  // };

  return (
    <div className="App">
      {/* <MainComponent ref={scrollRef} theme={theme}> */}
      <MainComponent>
        <MaincomponentInner>
          <Header targetRef={targetRef} />
          <TypeWriter />
          <VideoComponent></VideoComponent>
          <SpinningCircle />
          <WhoAmI  />
          <EducationAndExperience />
          <Projects />
          <Contact />
        </MaincomponentInner>
      </MainComponent>
    </div>
  );
}

export default App;
