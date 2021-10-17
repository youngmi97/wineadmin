import React, { useState } from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
// import { wineAPI } from "../utils";
import SearchModal from "./SearchModal";

function objToQueryString(obj) {
  const keyValuePairs = [];
  for (const key in obj) {
    keyValuePairs.push(
      encodeURIComponent(key) + "=" + encodeURIComponent(obj[key])
    );
  }
  return keyValuePairs.join("&");
}

function WineNavBar(props) {
  //props.showModal not working here?
  let textInput = React.createRef();

  const getWines = () => {
    // console.log(textInput.current.value);
    const queryString = objToQueryString({
      name: textInput.current.value,
    });

    fetch(
      `https://79jx2bj9ed.execute-api.ap-northeast-2.amazonaws.com/dev/search-wine?${queryString}`
    ).then((response) => {
      if (response.ok && textInput.current.value != "") {
        response.json().then((json) => {
          console.log(json.body.Items);
          props.openModal(json.body.Items);
          // return json.body.Items;
          // return array of result json data
        });
      }
    });
  };

  return (
    <NavbarContainer>
      <Text>My Wines</Text>
      <InputContainer>
        <Icon onClick={getWines}>
          <FiSearch />
        </Icon>
        <Input ref={textInput} type="text" placeholder="Search for wines" />
      </InputContainer>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;

const Text = styled.h1`
  span {
    font-weight: 500;
    color: #484258;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-top: 1rem;
  }
`;
const InputContainer = styled.div`
  display: flex;
`;

const Icon = styled.div`
  height: 3rem;
  width: 3rem;
  background-color: #dce4ff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  svg {
    color: #555555;
  }
`;
const Input = styled.input`
  border: none;
  background-color: #dce4ff;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  color: #464646;
  &:focus {
    border: none;
    outline: none;
  }
`;

export default WineNavBar;
