import React from "react";
import styled from "styled-components";

import css from "../images/icons/css.png";
import firebase from "../images/icons/firebase.png";
import flask from "../images/icons/flask.png";

import javascript from "../images/icons/javascript.png";
import nextjs from "../images/icons/nextjs-icon.png";
import nodejs from "../images/icons/nodejs.png";
import postgresql from "../images/icons/postgresql.png";
import python from "../images/icons/python.png";
import react from "../images/icons/react.png";
import tailwind from "../images/icons/tailwind.png";
import typescript from "../images/icons/typescript.png";
import pushPin from "../images/push-pin.png"


const CardContainer = styled.div`
  
  position: relative;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-warp: warp;
  padding: 30px;
`;

const PushPin = styled.img`
  width:60px;
  height:60px;
  
  margin-top:-200px;
`
const Content = styled.div`
  position: relative;
  
  padding: 10px 15px;
  color: #111;
  text-align: center;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s ease-in-out;
`;
const Cards = styled.div`
  position: relative;
  max-width: 550px;
  height: 215px;
  background-color: #f0fff0;
  margin: 30px 10px;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  transition: 0.3s ease-in-out;
  border-radius: 15px;

  &:hover {
    height: 370px;
    ${Content} {
      margin-top: 30px;
      visibility: visible;
      opacity: 1;
      transition-delay: 0.2s;
    }
  }
`;
const ImageContainer = styled.div`
  position: relative;
  width: 250px;
  height: 140px;
  top: -40%;
  left: 140px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const Image = styled.img`
  // max-width: 100%;
  width: 250px;
  height: 140px;
  border-radius: 15px;
`;
const Button = styled.button`
margin-top:20px;
margin-left:10px;
  width: 140px;
  height: 45px;
  font-family: "Roboto", sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #2ee59d;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }
`;

function Card({cardTitle,image}) {



  return (
    <div>
      <CardContainer>
        <Cards>
          <ImageContainer>
            <Image src={image} alt=""></Image>
          </ImageContainer>

          <PushPin src={pushPin} />
          <Content>
            <h3>{cardTitle}</h3>
            <div>
              {cardTitle === "Shopping Mall" && (
                <>
                  <img src={nodejs} alt="" width="40px" />
                  <img src={react} alt="" width="40px" />
                  <img src={css} alt="" width="40px" />
                  <img src={firebase} alt="" width="40px" />
                </>
              )}

              {cardTitle === "Instagram Clone" && (
                <>
                  <img src={nodejs} alt="" width="40px" />
                  <img src={react} alt="" width="40px" />
                  <img src={css} alt="" width="40px" />
                  <img src={postgresql} alt="" width="40px" />
                </>
              )}
              {cardTitle === "Calendar Schedule Management" && (
                <>
                  <img src={react} alt="" width="40px" />

                  <img src={flask} alt="" width="40px" />
                  <img src={python} alt="" width="40px" />
                </>
              )}
              {cardTitle === "Spotify Clone" && (
                <>
                  <img src={nextjs} alt="" width="40px" />
                  <img src={typescript} alt="" width="40px" />
                  <img src={tailwind} alt="" width="40px" />
                </>
              )}
              {cardTitle === "Starbucks Landing Page" && (
                <>
                  <img src={javascript} alt="" width="40px" />
                  <img src={css} alt="" width="40px" />
                </>
              )}

              {cardTitle === "Shopping Mall" && (
                <ul>
                  <div>
                    Implemented Log-in and Sign-up feature with validation check
                    using Formik and Material-Ui library
                  </div>
                  <div>
                    Used google provider to Log-in and Sign-up with google
                    account and also change the user's account password.
                  </div>
                  <div>
                    Created a search feature with a ranking system and
                    recommended keywords to help users choose keywords.
                  </div>
                  <div>
                    Implemented an E-commerce payment process system with
                    Stripe.js
                  </div>
                </ul>
              )}
              {cardTitle === "Instagram Clone" && (
                <ul>
                  <div>
                    Created images posting with comments and likes also chatting
                    function(seach and add a friend to chatting room)
                  </div>
                  <div>
                    Implemented Log-in and Sign-up with logined in location to
                    verify their account is hacked or not.
                  </div>
                  <div>Created user’s profile components.</div>
                  <div>
                    Designed user, comment, like, post schema to create Restful
                    API.
                  </div>
                </ul>
              )}
              {cardTitle === "Calendar Schedule Management" && (
                <ul>
                  <div>
                    Implemented multiple colors calendar to manage day and
                    dates’ schedule visually.
                  </div>
                  <div>Created Graphql API to manage users and schedules.</div>
                </ul>
              )}
              {cardTitle === "Spotify Clone" && (
                <ul>
                  <div>
                    Fetching data to the Spotify server to retrieve API to
                    display user(my account)’s playlists, favorite songs lists,
                    likeable songs list and trendy songs list.
                  </div>
                  <div>
                    {" "}
                    Implemented search function and playable playlist component(
                    now my playlist can not play a song because only premium
                    user can use this service)
                  </div>
                </ul>
              )}
              {cardTitle === "Starbucks Landing Page" && (
                <ul>
                  <div>
                    Fetching data to the Spotify server to retrieve API to
                    display user(my account)’s playlists, favorite songs lists,
                    likeable songs list and trendy songs list.
                  </div>
                  <div>
                    {" "}
                    Implemented search function and playable playlist component(
                    now my playlist can not play a song because only premium
                    user can use this service)
                  </div>
                </ul>
              )}
            </div>
            <Button>Web Site</Button>
            <Button>Git Repo</Button>
          </Content>
        </Cards>
      </CardContainer>
    </div>
  );
}

export default Card;
