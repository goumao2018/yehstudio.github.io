import React from "react";

import {
  ProjectHeroWrapper,
  ThaiImgContainer,
  ThaiImg,
  Line,
  ProjectDetail,
  ProjectDetailText,
  WhyUsContainer,
  ProjectDetailHeader,
  More
} from "./Styles";

const ProjectHero = ({ Header, Text, Image }) => {
  return (
    <ProjectHeroWrapper id="hero-project">
      <Line />
      <WhyUsContainer>
        <ThaiImgContainer>
          <ThaiImg src={Image} alt="why us"></ThaiImg>
        </ThaiImgContainer>

        <ProjectDetail>
          <ProjectDetailHeader>{Header}</ProjectDetailHeader>
          <ProjectDetailText>{Text}</ProjectDetailText>
          <More href="/projects">More</More>
        </ProjectDetail>
      </WhyUsContainer>
    </ProjectHeroWrapper>
  );
};

export default ProjectHero;
