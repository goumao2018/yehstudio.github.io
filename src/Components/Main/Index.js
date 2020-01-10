import React, { Component } from "react";
import logo from "../../asset/logo.png";
import hero from "../../asset/hero.png";
import {
  MainWrapper,
  Header,
  List,
  Item,
  HeroImg,
  Hero,
  MainLogo,
  HeroWrapper
} from "./Styles";

class Main extends Component {
  render() {
    return (
      <MainWrapper>
        <Header>
          <MainLogo src={logo} alt="logo" />
          <List>
            <Item>about us</Item>
            <Item>projects</Item>
            <Item>contact us</Item>
          </List>
        </Header>
        <Hero>
          <HeroWrapper>
            <HeroImg src={hero} alt="main" />
          </HeroWrapper>
        </Hero>
      </MainWrapper>
    );
  }
}

export default Main;
