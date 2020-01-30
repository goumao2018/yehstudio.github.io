import React from "react";
import { Header, List, Item, MainLogo, Navlink } from "./Styles";
import logo from "../../asset/logo.png";

const Navbar = () => {
  return (
    <Header>
      <MainLogo src={logo} alt="logo" />
      <List>
        <Item>
          <Navlink to="/about">about us</Navlink>
        </Item>
        <Item>
          <Navlink to="/projects">projects</Navlink>
        </Item>
        <Item>
          <Navlink to="/contact">contact us</Navlink>
        </Item>
      </List>
    </Header>
  );
};

export default Navbar;
