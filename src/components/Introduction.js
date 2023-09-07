import React from "react";
import styled from "styled-components";
import mypicture from "../images/mypicture.jpg";
// import LiquidButton from "./LiquidButton";
// import bootstrap from "../images/icons/bootstrap.png";
// import html from "../images/icons/html.png";
// import css from "../images/icons/css.png";
// import firebase from "../images/icons/firebase.png";
// import flask from "../images/icons/flask.png";

// import javascript from "../images/icons/javascript.png";
// import nextjs from "../images/icons/nextjs-icon.png";
// import nodejs from "../images/icons/nodejs.png";
// import postgresql from "../images/icons/postgresql.png";
// import python from "../images/icons/python.png";
// import react from "../images/icons/react.png";
// import tailwind from "../images/icons/tailwind.png";
// import typescript from "../images/icons/typescript.png";
// import mysql from "../images/icons/mysql.png";
// import mongodb from "../images/icons/mongodb.png";
import IntroCard from "./IntroCard";



const IntroductionContainer = styled.div`
  width: 100%;
  // height: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  // flex-wrap:wrap;
  justify-content: center;
  align-items: center;
`;

const Picture = styled.img`
  height: 200px;
  width: 150px;
  display: flex;
  justify-content:center;
  border-radius:50%;
`;
const NameContainer = styled.div`
  margin-top:20px;
  display: flex;
  flex-direction: row;
  font-size: 38px;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

// const IntroductionPart = styled.div`
//   width: 400px;
//   height: 200px;
//   margin-top: 50px;
//   margin-left: 90px;
// `;
const IntroductionContent = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 50px;
`;
const Skills = styled.div`
  width: 400px;
  height: 400px;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
`;

const IntroDetailContent = styled.div`
margin-top:20px;
width:100%;
  display: flex;
  justify-content: space-evenly;
`;

const frontend = "I possess strong proficiency in frontend development, particularly in working with React.js, which enables me to create dynamic and responsive user interfaces.My expertise extends to JavaScript, enabling me to write clean and efficient code for frontend functionalities, adding interactivity and enhancing user experiences.I am well-versed in TypeScript, which allows me to bring type safety and improved code quality to my React.js projects, ensuring robust and maintainable applications."
// My skills also encompass CSS, enabling me to craft visually appealing and well-structured stylesheets that enhance the overall design and layout of web applications.  With my comprehensive knowledge of these technologies, I am well-equipped to tackle frontend development challenges and contribute to the creation of user-friendly and performant web applications.";
const backend = "My proficiency in backend development is exemplified by my extensive experience with Node.js, a versatile and efficient runtime that empowers me to build scalable and high-performance server-side applications. I have a deep understanding of PostgreSQL, which allows me to design and manage relational databases, ensuring data integrity and efficient data retrieval for backend processes."
//  My expertise extends to Firebase, a cloud-based platform, which enables me to rapidly develop backend solutions, manage authentication, and provide real-time data synchronization for web and mobile applications. I am well-versed in MongoDB, a NoSQL database, which gives me the capability to handle unstructured data and design flexible database schemas for diverse backend requirements. With my comprehensive knowledge of these backend technologies, I am well-prepared to architect, develop, and maintain robust server-side systems that deliver data-driven and secure functionalities for various applications.";
const communication = "Effective communication is a cornerstone of success in both personal and professional relationships. It involves not only speaking and expressing thoughts clearly but also actively listening to others' perspectives. Communication skills play a vital role in building strong teams and fostering collaboration within organizations. Clear and open communication channels encourage creativity, problem-solving, and innovation. In the digital age, communication has evolved to include various platforms such as email, instant messaging, and video conferencing. Adapting to these technologies is essential for staying connected in our interconnected world. Effective communication goes beyond words; it also includes non-verbal cues like body language, facial expressions, and tone of voice. These elements can significantly impact the message being conveyed. Cultivating strong communication skills is an ongoing process that requires practice and self-awareness. Investing in improving one's ability to communicate effectively can lead to better relationships, increased productivity, and personal growth.";

function Introduction() {
  return (
    <IntroductionContainer>
      <div>
        <NameContainer>
          <div>YongJu Lee</div>
        </NameContainer>
        <Picture src={mypicture} />
      </div>

      {/* <IntroductionPart> */}
      {/* <IntroductionContent>
          Hello, I'm YongJu Lee. I've been passionate about coding for over 2
          years now. While I may not have extensive working experience, I am
          committed to continuous self-study and self-improvement to enhance my
          coding skills. I believe in the power of learning and look forward to
          taking on new challenges in the world of programming.
        </IntroductionContent> */}
      {/* <Skills>
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
        </Skills> */}
      {/* </IntroductionPart> */}
      <IntroDetailContent>
        <IntroCard icon={"GoBrowser"} text={frontend} title={"frontend"} />
        <IntroCard icon={"GiServerRack"} text={backend} title={"backend"} />
        {/* <IntroCard
        icon={"GiConversation"}
        text={communication}
        title={"communication"}
      /> */}
      </IntroDetailContent>
    </IntroductionContainer>
  );
}

export default Introduction;
