import React, { useState } from "react";
import styled from "styled-components";
import WineNavBar from "./WineNavBar";
import WineSuggestionColumn from "./WineSuggestionColumn";
import { sampleData } from "../data/sample";
import SearchModal from "./SearchModal";

function WineContent() {
  const [showModal, setModalState] = useState(false);
  const [wineList, setWineList] = useState([]);

  function closeModal() {
    setModalState(false);
    setWineList([]);
  }

  function openModal(items) {
    setModalState(true);
    console.log("OPEN");
    setWineList(items);
  }

  return (
    <Container>
      <WineNavBar openModal={openModal} closeModal={closeModal} />
      {showModal ? (
        <SearchModal closeModal={closeModal} wineList={wineList} />
      ) : null}

      <SubContainer>
        <WineSuggestionColumn
          name={"Red"}
          themeColor={"#58181F"}
          textColor={"white"}
          items={sampleData.RED}
        />
        <WineSuggestionColumn
          name={"Rosé"}
          themeColor={"#9d5c75"}
          textColor={"white"}
          items={sampleData.ROSE}
        />
        <WineSuggestionColumn
          name={"White"}
          themeColor={"#EEEDC4"}
          textColor={"black"}
          items={sampleData.WHITE}
        />
      </SubContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem;
  margin: 1rem 8rem 1rem 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;
const SubContainer = styled.div`
  margin: 0.5rem 0;
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: 100%;
    flex-direction: column;
  }
`;

export default WineContent;
