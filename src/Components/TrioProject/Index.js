import React from "react";
import GEVN from "../../asset/project/GEVN.png";
import MobileWhite from "../../asset/project/MobileWhite.png";
import MobilePurple from "../../asset/project/MobilePurple.png";
import {
  TrioProjectWrapper,
  Project,
  ProjectImg,
  ProjectTitle
} from "./Styles";

const TrioProject = () => {
  return (
    <TrioProjectWrapper>
      <Project>
        <ProjectImg src={MobileWhite} alt="business card" />
        <ProjectTitle>Micurae Promotion Material</ProjectTitle>
      </Project>
      <Project>
        <ProjectImg src={GEVN} alt="Branding" />
        <ProjectTitle>Micurae Promotion Material</ProjectTitle>
      </Project>
      <Project>
        <ProjectImg src={MobilePurple} alt="Menu" />
        <ProjectTitle>Micurae Promotion Material</ProjectTitle>
      </Project>
    </TrioProjectWrapper>
  );
};

export default TrioProject;
