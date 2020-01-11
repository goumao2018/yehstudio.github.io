import React from "react";
import { Header, List, Item, MainLogo, Navlink } from "./Styles";
import logo from "../../asset/logo.png";

const Navbar = () => {
  return (
    <Header>
      <MainLogo src={logo} alt="logo" />
      <List>
        <Item>
          <Navlink href="/about">about us</Navlink>
        </Item>
        <Item>
          <Navlink href="/projects">projects</Navlink>
        </Item>
        <Item>
          <Navlink href="/contact">contact us</Navlink>
        </Item>
      </List>
    </Header>
  );
};

export default Navbar;
