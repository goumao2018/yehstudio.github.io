import styled from "styled-components";

export const MainWrapper = styled.div`
  height: 700px;
`;
export const Header = styled.div`
  height: 60px;
  background-color: rgb(45, 67, 64);
  color: white;
  display: flex;
  position: relative;
`;

export const Hero = styled.div`
  background-color: rgb(45, 67, 64);
  width: 100%;
  height: 300px;
`;

export const HeroWrapper = styled.div`
  height: 300px;
`;

export const OneImg = styled.img`
  position: absolute;
  top: 120px;
  left: 35px;
  margin: 0;
`;

export const HeroImg = styled.img`
  display: block;
  margin: auto;
  height: 600px;
  width: 80%;
`;

export const MainLogo = styled.img`
  height: 60px;
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 20px;
  height: 30px;
`;
export const Item = styled.li`
  display: inline;
  padding: 10px;
`;
