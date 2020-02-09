import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

export const Header = styled.div`
  height: 50px;
  background-color: rgb(45, 67, 64);
  padding: 50px 160px 20px 150px;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const MainLogo = styled.img`
  margin: 0;
  height: 45px;
`;

export const NavLink = styled(HashLink)`
  &:link,
  &:visited {
    text-decoration: none;
  }
  &:hover,
  &:active {
    text-decoration: none;
  }

  color: white;
`;

export const List = styled.div`
  float: right;
  height: 30px;
  padding-top: 18px;
`;

export const HeaderLogo = styled.a`
  display: inline-block;
`;

export const Item = styled.a`
  text-transform: uppercase;
  font-family: PingFangTC-Semibold;
  color: white;
  text-decoration: none;
  font-size: 12px;
  display: inline;
  padding-right: 40px;

  &:last-child {
    padding-right: 0px;
  }
`;
