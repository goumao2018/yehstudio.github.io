import styled from "styled-components";

export const MainWrapper = styled.div`
  height: 650px;
`;
export const Header = styled.div`
  height: 30px;
  background-color: rgb(45, 67, 64);
  padding: 50px 100px 20px 100px;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const Hero = styled.div`
  background-color: rgb(45, 67, 64);
  width: 100%;
  height: 300px;
`;

export const HeroWrapper = styled.div`
  height: 300px;
`;

export const HeroImg = styled.img`
  display: block;
  margin: auto;
  height: 700px;
  width: 80%;
`;

export const MainLogo = styled.img`
  margin: 0;
  height: 40px;
`;

export const List = styled.ul`
  list-style-type: none;
  float: right;
  height: 30px;
`;

export const Item = styled.li`
  text-transform: uppercase;
  font-family: PingFangTC-Semibold;
  font-size: 12px;
  display: inline;
  padding-right: 40px;

  &:last-child {
    padding-right: 10px;
  }
`;
