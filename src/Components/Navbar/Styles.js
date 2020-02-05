import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.div`
  height: 30px;
  background-color: rgb(45, 67, 64);
  padding: 50px 100px 20px 100px;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const MainLogo = styled.img`
  margin: 0;
  height: 40px;
`;

export const Navlink = styled(Link)`
  color: white;
  text-decoration: none;
`;

export const List = styled.ul`
  list-style-type: none;
  float: right;
  height: 30px;
`;

export const Item = styled.li`
  text-transform: uppercase;
  font-family: PingFangTC-Semibold;
  color: white;
  text-decoration: none;
  font-size: 12px;
  display: inline;
  padding-right: 40px;

  &:last-child {
    padding-right: 10px;
  }
`;
