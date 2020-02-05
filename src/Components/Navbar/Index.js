import React from "react";
import { Header, List, Item, MainLogo, Navlink } from "./Styles";
import logo from "../../asset/logo.png";
import Scrollchor from "react-scrollchor";

const Navbar = () => {
  return (
    <Header>
      <MainLogo src={logo} alt="logo" />
      <List>
        <Scrollchor to="#whyus">
          <Item>about us</Item>
        </Scrollchor>
        <Scrollchor>
          <Item>
            <Navlink to="/projects">projects</Navlink>
          </Item>
        </Scrollchor>
        <Scrollchor>
          <Item>
            <Navlink to="/contact">contact us</Navlink>
          </Item>
        </Scrollchor>
      </List>
    </Header>
  );
};

export default Navbar;
