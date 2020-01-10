import React from "react";

import {
  ProjectHeroWrapper,
  ThaiImgContainer,
  ThaiImg,
  Line,
  ProjectDetail,
  ProjectDetailText,
  WhyUsContainer,
  ProjectDetailHeader
} from "./Styles";

const ProjectHero = ({ Header, Text, Image }) => {
  return (
    <ProjectHeroWrapper>
      <Line />
      <WhyUsContainer>
        <ThaiImgContainer>
          <ThaiImg src={Image} alt="why us"></ThaiImg>
        </ThaiImgContainer>

        <ProjectDetail>
          <ProjectDetailHeader>{Header}</ProjectDetailHeader>
          <ProjectDetailText>{Text}</ProjectDetailText>
        </ProjectDetail>
      </WhyUsContainer>
    </ProjectHeroWrapper>
  );
};

export default ProjectHero;
