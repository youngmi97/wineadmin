import "./App.css";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import WineContent from "./components/WineContent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Container>
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/" exact component={MainContent} />
          <Route path="/wines" component={WineContent} />
        </Switch>
      </Router>
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

export default App;
