import React from "react";
import styled from "styled-components";
import WineImage from "../assets/bottle_example.png";
import { cardShadow, hoverEffect, themeColor } from "../utils";
import { Link as Linking } from "react-router-dom";

function Suggestions() {
  return (
    <YourProjects>
      <Project>
        {/* <Avatar>
          <img src={WineImage} alt="" />
        </Avatar>
        <Detail>
          <Title>Schieferkopf, Riesling Grand Cru, Altenberg de Bergheim</Title>
          <SubTitle>Schieferkopf</SubTitle>
        </Detail>
      </Project>
      <Project>
        <Avatar>
          <img src={WineImage} alt="" />
        </Avatar>
        <Detail>
          <Title>Balgownie Estate, Shiraz, Bendigo</Title>
          <SubTitle>Balgownie Estate</SubTitle>
        </Detail> */}
      </Project>
      <Linking to="/wines" style={{ textDecoration: "none", color: "white" }}>
        <AllProjects>보러가기</AllProjects>
      </Linking>
    </YourProjects>
  );
}

const YourProjects = styled.div`
  height: 70%;
  background-color: white;
  margin: 0;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 75%;
    margin-top: 1rem;
  }
`;

const Project = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
`;
const Avatar = styled.div`
  img {
    height: 4rem;
    width: 4rem;
    border-radius: 4rem;
  }
`;
const Detail = styled.div`
  margin-left: 1rem;
`;
const Title = styled.h3`
  font-weight: 500;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1rem;
  }
`;
const SubTitle = styled.h5`
  font-weight: 300;
`;
const AllProjects = styled.h5`
  text-align: end;
  color: ${themeColor};
  cursor: pointer;
`;

export default Suggestions;
