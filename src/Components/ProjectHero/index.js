import React, { Component } from "react";
import thai from "../../asset/thai.png";
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

class ProjectHero extends Component {
  render() {
    return (
      <ProjectHeroWrapper>
        <Line />
        <WhyUsContainer>
          <ThaiImgContainer>
            <ThaiImg src={thai} alt="why us"></ThaiImg>
          </ThaiImgContainer>

          <ProjectDetail>
            <ProjectDetailHeader>@siam Thai Restaurant</ProjectDetailHeader>
            <ProjectDetailText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam
              nulla porttitor massa id. Risus quis varius quam quisque id diam
              vel quam elementum. Augue eget arcu dictum varius duis at.
              Fermentum odio eu feugiat pretium nibh. Vitae nunc sed velit
              dignissim sodales ut eu sem. Placerat duis ultricies lacus sed.
              Praesent tristique magna sit amet purus gravida quis blandit.
              Tincidunt vitae semper quis lectus nulla at volutpat diam.
            </ProjectDetailText>
          </ProjectDetail>
        </WhyUsContainer>
      </ProjectHeroWrapper>
    );
  }
}

export default ProjectHero;
