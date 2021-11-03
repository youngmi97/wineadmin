import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { RiHomeLine, RiFileCopyLine } from "react-icons/ri";

import { FaWallet, FaWineBottle } from "react-icons/fa";
import { AiOutlinePieChart } from "react-icons/ai";
import AvatarImage from "../assets/profileAvatar.jpeg";
import { darkThemeColor } from "../utils";

import { Link as Linking } from "react-router-dom";

function Sidebar() {
  return (
    <Container>
      <ProfileContainer>
        <Avatar src={AvatarImage} />
        <Name>
          {JSON.parse(localStorage.getItem("barData"))
            ? JSON.parse(localStorage.getItem("barData"))["NAME"]
            : "와인바"}
        </Name>
      </ProfileContainer>
      <LinksContainer>
        <Links>
          <Link>
            <RiHomeLine />
            <Linking to="/" style={{ textDecoration: "none", color: "white" }}>
              <h3>대시보드</h3>
            </Linking>
          </Link>
          <Link>
            <FaWineBottle />
            <Linking
              to="/wines"
              style={{ textDecoration: "none", color: "white" }}
            >
              <h3>내 와인들</h3>
            </Linking>
          </Link>
          <Link>
            <FaWallet />
            <h3>통계</h3>
          </Link>
        </Links>
        <ContactContainer>
          <span>궁금한게 있으신가요?</span>
          <a href="#">문의하기 </a>
        </ContactContainer>
      </LinksContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 20%;
  height: 100% !important;
  border-radius: 2rem;
  background-color: #091322;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    height: max-content !important;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Avatar = styled.img`
  height: 7rem;
  border-radius: 6rem;
  margin-top: 20%;
`;

const Name = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0.8rem 0 0.5rem 0;
`;

const LinksContainer = styled.div`
  background-color: ${darkThemeColor};
  height: 100%;
  width: 100%;
  border-radius: 2rem;
`;

const Links = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  height: 60%;
`;

const Link = styled.li`
  margin-left: 25%;
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  color: #e4e4e4;
  cursor: pointer;
  h3 {
    font-weight: 300;
  }
  svg {
    font-size: 1.1rem;
    margin-top: 3%;
  }
`;

const ContactContainer = styled.div`
  width: 60%;
  background-color: #091322;
  color: #c4c4c4;
  height: 15%;
  margin: auto auto;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  a {
    color: white;
    text-decoration: none;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 2rem;
  }
`;

export default Sidebar;
