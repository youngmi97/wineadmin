import React from "react";
import styled from "styled-components";

function SearchModal(props) {
  return (
    <Modal onClick={props.closeModal}>
      {props.wineList.map((data) => (
        <ModalContent>{data.DISPLAY_NAME}</ModalContent>
      ))}
    </Modal>
  );
}

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
  }
`;

export default SearchModal;
