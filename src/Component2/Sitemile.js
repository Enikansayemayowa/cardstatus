import React from "react";
import styled from "styled-components";
import Landingpage from "./Landingpage";
import Navbar from "./Navbar";
import GameScreen from "../Component/SimpleGame/GameScreen";
import Count from "../Component/count";
import GithubHome from "../Component/Github/GithubApp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import img from "./img/landing.jpeg";
import WorkHome from "../Component/WorkHome";

const Sitemile = () => {
  return (
    <Container>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Landingpage}></Route>
          <Route path="/Game" exact component={GameScreen}></Route>
          <Route path="/Counter" exact component={Count}></Route>
          <Route path="/WorkHome" exact component={WorkHome}></Route>
          <Route path="/Github_Desktop" exact component={GithubHome}></Route>
        </Switch>
      </Router>
    </Container>
  );
};

export default Sitemile;
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-image: url(${img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;