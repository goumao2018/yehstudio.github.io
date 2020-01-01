import React, { Component } from 'react';
import logo from "../../asset/logo.png";
import hero from "../../asset/hero.png";
import one from "../../asset/one.png"
import { MainWrapper, 
  Header, 
  List, 
  Item, 
  HeroImg, 
  OneImg,
  Hero,
  MainLogo } from './Styles'

class Main extends Component {
  render() {
    return (
      <MainWrapper>
        <Header>
          <List>
            <Item>about us</Item>
            <Item>projects</Item>
            <Item>contact us</Item>
          </List>
          <MainLogo src={logo} alt="logo"></MainLogo>
        </Header>
        <Hero>
          <HeroImg src={hero} alt="main"></HeroImg>
          <OneImg src = {one} alt="one icon"></OneImg>
        </Hero>
      </MainWrapper>
    )
 }
}

export default Main;