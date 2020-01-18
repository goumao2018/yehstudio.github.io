import styled from "styled-components";

export const SticklyWrapper = styled.div`
  height: 200px;
  position: -webkit-sticky;
  position: sticky;
  top: 30px;
  font-size: 20px;
`;

export const GreenBG = styled.div`
  width: 50px;
  height: 206px;
  background-color: rgb(206, 255, 121);
  margin: auto;
  z-index: -1;
  position: relative;
`;

export const CurrentTab = styled.p`
  font-size: 20px;
  position: absolute;
  top: 80px;
  margin: 0;
`;

export const ProjectImg = styled.img`
  font-size: 22px;
  width: 100%;
  height: 292px;
`;
