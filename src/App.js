import "./App.css";
import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import WineContent from "./components/WineContent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let validId = ["20210001", "20210002", "20210003", "20210004", "20210005"];
  let textInput = React.createRef();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("winebar")));
  const [barData, setBarData] = useState({});

  console.log("user: ", user);
  fetch(
    `https://uidlxhemcj.execute-api.ap-northeast-2.amazonaws.com/dev/search-bar?id=${user}`
  ).then((response) => {
    if (response.ok) {
      // console.log("response: ", response);
      response.json().then((json) => {
        if (json.body) {
          // console.log(json.body.Items[0]);
          // setBarData(json.body.Items[0]);
          localStorage.setItem("barData", JSON.stringify(json.body.Items[0]));
          setBarData(JSON.stringify(json.body.Items[0]));
        }
      });
    }
  });

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("Input: ", textInput.current.value);
      if (validId.indexOf(textInput.current.value) > -1) {
        console.log("valid input!");
        setUser(textInput.current.value);
        localStorage.setItem("winebar", textInput.current.value);
        //get information for the winebar after login
        console.log("user: ", user);
        fetch(
          `https://uidlxhemcj.execute-api.ap-northeast-2.amazonaws.com/dev/search-bar?id=${textInput.current.value}`
        ).then((response) => {
          if (response.ok) {
            // console.log("response: ", response);
            response.json().then((json) => {
              // console.log(json.body.Items[0]);
              // setBarData(json.body.Items[0]);
              localStorage.setItem(
                "barData",
                JSON.stringify(json.body.Items[0])
              );
              setBarData(JSON.stringify(json.body.Items[0]));
            });
          }
        });
      }
    }
  };

  return (
    <Container>
      {barData ? (
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/" exact component={MainContent} />
            <Route path="/wines" component={WineContent} />
          </Switch>
        </Router>
      ) : (
        <BarSignin>
          아이디를 입력해주세요
          <Input
            type="text"
            placeholder="와인바 아이디"
            ref={textInput}
            onKeyDown={handleKeyDown}
          />
        </BarSignin>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 97vh;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

const BarSignin = styled.div`
  font-weight: 1000;
  align-content: center;
  justify-content: center;
  display: flex;
  height: 97vh;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-radius: 2rem;
  flex-direction: column;
`;

const Input = styled.input`
  border: none;
  background-color: #dce4ff;
  padding-left: 10px;
  color: #464646;
  height: 10vh;
  width: 50vh;
  border-radius: 0.5rem;
  &:focus {
    border: none;
    outline: none;
  }
`;

export default App;
