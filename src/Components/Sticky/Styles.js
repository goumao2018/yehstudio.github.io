import styled from "styled-components";
import { css } from "styled-components";

export const StickyWrapper = styled.div`
  height: 200px;
  width: 100px;
  position: -webkit-sticky;
  position: sticky;
  top: 30px;
  padding-right: 70px;
`;

export const GreenBG = styled.div`
  width: 50px;
  height: 206px;
  background-color: rgb(206, 255, 121);
  z-index: -1;
  position: relative;
`;

export const CurrentTab = styled.a`
  text-decoration: none;
  color: black;
`;

export const Tab = styled.div`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  width: 50px;
  height: 200px;
  &.isActive {
    background-color: rgb(206, 255, 121);
  }
`;

// export const isActive = css`
//   backgroundcolor: goldenrod;
// `;

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
