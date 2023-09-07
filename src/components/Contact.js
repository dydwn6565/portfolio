import React from "react";
import styled from "styled-components";
import { GrMail } from "react-icons/gr";
import { ImPhone } from "react-icons/im";
import { useForm } from "react-hook-form";
const ContactBackground = styled.div`
  width: 100%;
  height:100%;

  display: flex;
  justify-content: center;
  background: #f5f5dc;

`;
const ContactContainer = styled.div`
  margin-bottom: 30px;

  @media (max-width: 1900px) {
    margin-top: 300px;
  }
  @media (max-width: 1290px) {
    margin-top: 1140px;
  }
  @media (max-width: 550px) {
    margin-top: 200vw;
  }
  @media (max-width: 400px) {
    margin-top: 220vw;
  }
  @media (max-width: 350px) {
    margin-top: 250vw;
  }
  @media (max-width: 320px) {
    margin-top: 270vw;
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
  @media (max-width: 620px) {
    font-size: 3vw;
    
  }
`;
const NameInput = styled.input`
  width: 200px;
  height: 30px;
  margin: 30px 20px 20px 0px;

  border: none;
  @media (max-width: 900px) {
    width: 25vw;
    margin: 2.2vw 2vw 2vw 0vw ;
  }
`;
const NameInputContainer = styled.div`
  display: flex;
`;
const SubjectInput = styled.input`
  display: flex;
  border: none;
  height: 30px;
  margin: 0px 20px 20px 0px;
  width: 425px;
  @media (max-width: 900px) {
    width: 52.7vw;
  }
`;

const MessageInput = styled.textarea`
  width: 425px;
  height: 30px;
  max-width: 425px;
  max-height: 40px;
  border: none;
  @media (max-width: 900px) {
    width: 52.9vw;
    max-width:52.9vw;
  }
`;
const ContactSubmitButton = styled.button`
  width: 425px;

  margin-top: 20px;
  background-color: #ffdb58;
  height: 40px;
  border: none;
  cursor: pointer;
  @media (max-width: 900px) {
    width: 52.9vw;
  }
`;

const ContactComponent = styled.form`
  display: flex;
  flex-direction: column;
  
`;
const Inputs = {
  name: String,
  email: String,
  subject: String,
  message: String,
};
function Contact() {
  const linktoGmail = () => {
    window.location.href = "mailto:ivan.yongju.lee@gmail.com";
  };
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    window.location.href = `mailto:ivan.yongju.lee@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message} (${data.email})`;
  };
  return (
    <div>
      <ContactBackground>
        <ContactContainer>
          <ContactTitle>More Information </ContactTitle>
          <ContactContent>
            <ImPhone />
            <span>+1 778-870-6251</span>
          </ContactContent>
          <ContactContent>
            <GrMail onClick={linktoGmail} />
            <span>ivan.yongju.lee@gmail.com</span>
          </ContactContent>
          <ContactComponent onSubmit={handleSubmit(onSubmit)}>
            <NameInputContainer>
              <NameInput type="text" placeholder="Name" {...register("name")} />
              <NameInput
                type="email"
                placeholder="Email"
                {...register("email")}
              />
            </NameInputContainer>

            <SubjectInput
              type="text"
              placeholder="Subject"
              {...register("subject")}
            />

            <MessageInput
              type="text"
              placeholder="Message"
              {...register("message")}
            />

            <ContactSubmitButton>Submit</ContactSubmitButton>
          </ContactComponent>
        </ContactContainer>
      </ContactBackground>
    </div>
  );
}

export default Contact;
