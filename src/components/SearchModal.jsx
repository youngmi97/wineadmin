import React from "react";
import WineImage from "../assets/wine_gif.gif";
import styled from "styled-components";
import { colorCode } from "../utils";

function SearchModal(props) {
  return (
    <Modal onClick={props.closeModal}>
      {props.wineList.map((data) => (
        <ModalContent>
          <SubContainer>
            <Avatar>
              <img src={WineImage} alt="" />
            </Avatar>
            <SubContainerColumn>
              <TextContainer>{data.DISPLAY_NAME}</TextContainer>
              <TextContainerOrigin>
                {data.COUNTRY}, {data.REGION}
              </TextContainerOrigin>
              <ColorDiv color={colorCode[data.COLOUR]} />
            </SubContainerColumn>
          </SubContainer>
        </ModalContent>
      ))}
    </Modal>
  );
}

const ColorDiv = styled.div`
  height: 1rem;
  width: 2rem;
  border-radius: 10rem;
  background-color: ${(props) => props.color};
`;

const Modal = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 1rem;
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.7); /* Black w/ opacity */
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  border-radius: 3rem;
  margin: auto;
  margin-bottom: 2rem;
  padding: 20px;
  border: 1px solid #888;
  width: 40%;
  height: 6rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
    padding: 10px;
  }
`;

const Avatar = styled.div`
  img {
    height: 6rem;
    width: 6rem;
    border-radius: 4rem;
    @media screen and (min-width: 320px) and (max-width: 1080px) {
      width: 6rem;
      height: 6rem;
    }
  }
`;

const SubContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: 100%;
  }
`;

const SubContainerColumn = styled.div`
  height: 100%;
  width: 100%;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: 100%;
  }
`;

const TextContainer = styled.div`
  margin-top: 3%;
  font-size: large;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    height: 40%;
    font-size: small;
    padding: 0px;
  }
`;

const TextContainerOrigin = styled.div`
  font-weight: 700;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    height: 30%;
    font-size: small;
    padding: 0px;
  }
`;

export default SearchModal;
