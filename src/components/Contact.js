import React from "react";
import styled from "styled-components";
import { GrMail } from "react-icons/gr";
import { ImPhone } from "react-icons/im";
import { useForm } from "react-hook-form";
const ContactBackground = styled.div`
  width: 100%;
  height: 1550px;

  display: flex;
  justify-content: center;

  background: #f5f5dc;

  min-width: 772px;

  @media (max-width: 1900px) {
    height: 750px;
  }
  @media (max-width: 1290px) {
    height: 1550px;
  }
`;
const ContactContainer = styled.div`
  width: 500px;
  height: 150px;

  @media (max-width: 1900px) {
    margin-top: 300px;
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
const NameInput = styled.input`
  width: 200px;
  height: 30px;
  margin: 30px 20px 20px 0px;
  
  border:none;
  
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
`;

const MessageInput = styled.textarea`
  width: 425px;
  height: 30px;
  max-width:425px;
  max-height:40px;
  border:none;
`;
const ContactSubmitButton = styled.button`
  width: 200px;

  margin-top: 20px;
  background-color: #ffdb58;
  height: 40px;
  border: none;
  cursor: pointer;
  margin-left: 110px;
`;

const ContactComponent = styled.form`
  display: flex;
  flex-direction: column;
  margin-left:40px;
  
`;
 const Inputs ={
  name :String,
  email:String,
  subject:String,
  message:String

 }
function Contact() {
  const linktoGmail = () => {
    window.location.href = "mailto:ivan.yongju.lee@gmail.com";
  };
 const { register, handleSubmit } = useForm();
  
  const onSubmit  = (data) => {
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
