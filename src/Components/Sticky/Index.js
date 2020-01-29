import React from "react";

import { SticklyWrapper, GreenBG, CurrentTab, Tab, Dot } from "./Styles";

const Sticky = () => {
  return (
    <SticklyWrapper>
      <GreenBG />
      <CurrentTab>Branding Design</CurrentTab>
      <Dot />
      <Tab> Design process </Tab>
      <Dot />
      <Tab> Branding package </Tab>
      <Dot />
      <Tab> Graphic design </Tab>
    </SticklyWrapper>
  );
};

export default Sticky;
