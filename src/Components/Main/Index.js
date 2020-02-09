import React from "react";

import hero from "../../asset/hero.png";
import yellowBar from "../../asset/yellowBar.png";

import { MainWrapper, HeroImg, Hero, HeroWrapper } from "./Styles";

const Main = () => {
  return (
    <MainWrapper>
      <Hero>
        <HeroWrapper>
          <HeroImg src={hero} alt="main" />
        </HeroWrapper>
      </Hero>
      <img
        src={yellowBar}
        alt="background-yellow"
        style={{
          height: "400px",
          width: "100%",
          zIndex: "-1",
          position: "absolute"
        }}
      />
    </MainWrapper>
  );
};

export default Main;
