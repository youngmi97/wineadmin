import React, { useState, useEffect } from "react";
import styled from "styled-components";
import WineNavBar from "./WineNavBar";
import WineSuggestionColumn from "./WineSuggestionColumn";
import { sampleData } from "../data/sample";
import SearchModal from "./SearchModal";

function WineContent() {
  const [showModal, setModalState] = useState(false);
  const [wineList, setWineList] = useState([]);

  const [redList, setRedList] = useState([]);
  const [roseList, setRoseList] = useState([]);
  const [whiteList, setWhiteList] = useState([]);

  let roseWine = [];
  let whiteWine = [];
  let redWine = [];

  useEffect(() => {
    fetch(
      `https://uidlxhemcj.execute-api.ap-northeast-2.amazonaws.com/dev/search-bar?id=${JSON.parse(
        localStorage.getItem("winebar")
      )}`
    ).then((response) => {
      if (response.ok) {
        // console.log("response: ", response);
        response.json().then((json) => {
          if (json.body) {
            localStorage.setItem("barData", JSON.stringify(json.body.Items[0]));

            let rose = JSON.parse(localStorage.getItem("barData"))["ROSE"];
            let white = JSON.parse(localStorage.getItem("barData"))["WHITE"];
            let red = JSON.parse(localStorage.getItem("barData"))["RED"];

            // console.log("ROSE: ", parseStringSet(rose));
            rose = parseStringSet(rose);
            rose.forEach(function (wine, index) {
              const wineInfo = wine.split("_");
              if (wineInfo[0] !== "") {
                roseWine.push({
                  DISPLAY_NAME: wineInfo[0],
                  COUNTRY: wineInfo[1],
                });
              }
            });

            // console.log("RED: ", parseStringSet(red));
            red = parseStringSet(red);
            red.forEach(function (wine, index) {
              const wineInfo = wine.split("_");
              if (wineInfo[0] !== "") {
                redWine.push({
                  DISPLAY_NAME: wineInfo[0],
                  COUNTRY: wineInfo[1],
                });
              }
            });

            // console.log("WHITE: ", parseStringSet(white));
            white = parseStringSet(white);
            white.forEach(function (wine, index) {
              const wineInfo = wine.split("_");
              if (wineInfo[0] !== "") {
                whiteWine.push({
                  DISPLAY_NAME: wineInfo[0],
                  COUNTRY: wineInfo[1],
                });
              }
            });

            // console.log("redWine: ", redWine);
            // console.log("whiteWine: ", whiteWine);
            // console.log("roseWine: ", roseWine);
            setRedList(redWine);
            setWhiteList(whiteWine);
            setRoseList(roseWine);
          }
        });
      }
    });
  }, []);

  function parseStringSet(str) {
    return str.replace(/[^0-9 a-z A-Z _\,\.]+/g, "").split(",");
  }

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
          name={"레드"}
          themeColor={"#58181F"}
          textColor={"white"}
          items={redList}
        />
        <WineSuggestionColumn
          name={"화이트"}
          themeColor={"#EEEDC4"}
          textColor={"black"}
          items={whiteList}
        />
        <WineSuggestionColumn
          name={"로제"}
          themeColor={"#9d5c75"}
          textColor={"white"}
          items={roseList}
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
