import React, { Component } from "react";
import Branding from "../../asset/project/Branding.png";
import Card from "../../asset/project/business-card.png";
import Flyer from "../../asset/project/Flyer.png";
import Menu from "../../asset/project/Menu.png";
import WineLabel from "../../asset/project/WineLabel.png";
import {
  PortfolioListWrapper,
  Project,
  ProjectImg,
  ProjectTitle
} from "./Styles";

class PortfolioList extends Component {
  render() {
    return (
      <PortfolioListWrapper>
        <Project>
          <ProjectImg src={Card} alt="business card" />
          <ProjectTitle>Graphic design</ProjectTitle>
        </Project>
        <Project>
          <ProjectImg src={Branding} alt="Branding" />
          <ProjectTitle>Branding design</ProjectTitle>
        </Project>
        <Project>
          <ProjectImg src={Menu} alt="Menu" />
          <ProjectTitle>Branding design</ProjectTitle>
        </Project>
        <Project>
          <ProjectImg src={Flyer} alt="Flyer" />
          <ProjectTitle>Flyer design</ProjectTitle>
        </Project>
        <Project>
          <ProjectImg src={Menu} alt="Menu" />
          <ProjectTitle>Menu design</ProjectTitle>
        </Project>
        <Project>
          <ProjectImg src={WineLabel} alt="Wine Label" />
          <ProjectTitle>Wine label design</ProjectTitle>
        </Project>
      </PortfolioListWrapper>
    );
  }
}

export default PortfolioList;
