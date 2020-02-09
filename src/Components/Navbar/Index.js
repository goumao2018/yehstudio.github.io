import React from "react";
import { Header, HeaderLogo, List, Item, MainLogo, NavLink } from "./Styles";
import logo from "../../asset/logo.png";
import Scrollchor from "react-scrollchor";

const NewItem = NavLink.withComponent(Scrollchor);

const Navbar = () => {
  return (
    <Header>
      <HeaderLogo href="/">
        <MainLogo src={logo} alt="logo" />
      </HeaderLogo>
      <List>
        <Item>
          <NewItem to="#whyus">about us</NewItem>
        </Item>
        <Item>
          <NewItem to="#hero-project">projects</NewItem>
        </Item>
        <Item>
          <NewItem to="#contact-us">contact us</NewItem>
        </Item>
      </List>
    </Header>
  );
};

export default Navbar;
