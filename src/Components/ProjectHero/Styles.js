import styled from "styled-components";

export const ProjectHeroWrapper = styled.div`
  height: 800px;
`;

export const Line = styled.hr`
  display: block;
  width: 350px;
  border: 0;
  border-top: 2px solid black;
  margin-top: 200px;
  margin-bottom: 80px;
`;

export const ProjectDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 50%;
  color: black;
  position: relative;
`;

export const ProjectDetailText = styled.p`
  font-size: 22px;
`;

export const ProjectDetailHeader = styled.h1`
  font-size: 40px;
  margin: 0;
  // margin: 0 0 145px 0;
`;

export const WhyUsContainer = styled.div`
  display: flex;
  margin: 20px;
`;
export const ThaiImgContainer = styled.div`
  flex: 50%;
  width: 100%;
`;

export const ThaiImg = styled.img`
  width: inherit;
  height: inherit;
  margin: 0;
  position: relative;
`;

export const More = styled.a`
  text-decoration: none;
  color: black;
  width: 180px;
  height: 44px;
  padding-top: 20px;
  font-weight: bold;
  font-size: 15px;
  text-align: center;
  border: 3px solid black;
  position: absolute;
  bottom: 0;
  margin: 0;
`;
