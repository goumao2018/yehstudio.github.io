import React from "react";
import Scrollspy from "react-scrollspy";
import Scrollchor from "react-scrollchor";

import { StickyWrapper, GreenBG, CurrentTab, Tab, Dot } from "./Styles";

const Sticky = () => {
  return (
    <StickyWrapper>
      <Scrollspy
        items={["branding-design", "design-process", "branding-package"]}
        currentClassName="isActive"
      >
        {/* <Scrollchor to="#branding-design"> */}
        <Tab>
          <CurrentTab href="#branding-design">Branding Design</CurrentTab>
        </Tab>
        {/* </Scrollchor>
        <Scrollchor to="#design-process"> */}
        <Tab>
          <CurrentTab href="#design-process"> Design process </CurrentTab>
        </Tab>
        {/* </Scrollchor> */}
        {/* <Scrollchor to="#branding-package"> */}
        <Tab>
          <CurrentTab href="#branding-package">Branding package </CurrentTab>
        </Tab>
        {/* </Scrollchor> */}
      </Scrollspy>
    </StickyWrapper>
  );
};

export default Sticky;
