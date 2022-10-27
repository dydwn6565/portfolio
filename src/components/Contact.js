import React from "react";
import styled from "styled-components";
import { GrMail } from "react-icons/gr";
import { ImPhone } from "react-icons/im";
const ContactBackground = styled.div`
  width: 100%;
  height: 150px;
  
  display: flex;
  justify-content: center;
  
  background: #f5f5dc;
  
  min-width: 772px;

  @media (max-width: 1900px) {
    height: 450px;
  }
  @media (max-width: 1290px) {
    height: 1350px;
  }
`;
const ContactContainer = styled.div`
  width: 500px;
  height: 150px;
  
  @media (max-width: 1900px) {
    margin-top:300px;
  }
  @media (max-width: 1290px) {
    
    margin-top: 1040px;
    
  }
`;

const ContactTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 22px;
  color: black;
`;

const ContactContent = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  padding: 10px;
  margin-top: 10px;
  & > span {
    margin-left: 20px;
  }
`;
function Contact() {
    const linktoGmail =()=>{
        window.location.href="mailto:ivan.yongju.lee@gmail.com"
    }
  return (
    <div>
      <ContactBackground>
        <ContactContainer>
          <ContactTitle>I have got just what you need </ContactTitle>
          <ContactContent>
            <ImPhone />
            <span>+1 778-870-6251</span>
          </ContactContent>
          <ContactContent>
            <GrMail onClick={linktoGmail} />
            <span>ivan.yongju.lee@gmail.com</span>
          </ContactContent>
        </ContactContainer>
      </ContactBackground>
    </div>
  );
}

export default Contact;
