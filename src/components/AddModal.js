import React from "react";
import WineImage from "../assets/bottle_example.png";
import styled from "styled-components";
import { colorCode } from "../utils";

function AddModal(props) {
  let nameInput = React.createRef();
  let countryInput = React.createRef();

  return (
    <Modal>
      <ModalContent>
        <Input type="text" placeholder="와인 이름" ref={nameInput} />
        <Input
          type="text"
          placeholder="와인 원산지"
          ref={countryInput}
          //   onKeyDown={}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "1rem",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <div
            style={{ width: "100%", textAlign: "center", fontWeight: "800" }}
            onClick={props.closeModal}
          >
            취소
          </div>
          <div
            style={{
              width: "100%",
              justifyContent: "center",
              fontWeight: "800",
              color: "purple",
            }}
          >
            추가하기
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
}

const Input = styled.input`
  border: none;
  background-color: #dce4ff;
  padding-left: 10px;
  margin-top: 1rem;
  color: #464646;
  height: 10vh;
  width: 50vh;
  border-radius: 0.5rem;
  &:focus {
    border: none;
    outline: none;
  }
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
  border-radius: 1rem;
  margin: auto;
  align-content: center;

  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  padding: 20px;
  border: 1px solid #888;
  width: 55vh;
  height: 35vh;
  margin-top: 10rem;
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

export default AddModal;
