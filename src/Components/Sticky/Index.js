import React from "react";
import Scrollspy from "react-scrollspy";

import { StickyWrapper, GreenBG, CurrentTab, Tab, Dot } from "./Styles";

const Sticky = () => {
  return (
    <StickyWrapper>
      <Scrollspy
        items={["branding-design", "design-process", "branding-package"]}
        currentClassName="isActive"
      >
        <Tab>
          <a href="#branding-design">Branding Design</a>
        </Tab>
        <Tab>
          <a href="#design-process"> Design process </a>
        </Tab>
        <Tab>
          <a href="#branding-package">Branding package </a>
        </Tab>
      </Scrollspy>
    </StickyWrapper>
  );
};

export default Sticky;
