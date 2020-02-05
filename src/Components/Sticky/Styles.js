import styled from "styled-components";

export const StickyWrapper = styled.div`
  height: 200px;
  width: 100px;
  position: -webkit-sticky;
  position: sticky;
  top: 30px;
  padding-right: 70px;
  margin-top: 40px;
`;

export const GreenBG = styled.div`
  width: 50px;
  height: 206px;
  background-color: rgb(206, 255, 121);
  z-index: -1;
  position: relative;
`;

export const CurrentTab = styled.p`
  font-size: 18px;
  position: absolute;
  width: 200px;
  left: -40px;
  top: 80px;
  margin: 0;
`;

export const Tab = styled.p`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  margin-top: 10px;
  height: 170px;

  &.isActive {
    background-color: goldenrod;
  }
`;
export const ProjectImg = styled.img`
  font-size: 22px;
  width: 100%;
  height: 292px;
`;

export const Dot = styled.span`
  height: 5px;
  width: 5px;
  margin-left: 25px;
  background-color: black;
  border-radius: 50%;
  display: inline-block;
`;
