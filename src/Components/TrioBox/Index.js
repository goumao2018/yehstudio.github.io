import React from "react";
import "./Styles.js";
import arrowBox from "../../asset/ecommerce/arrowBox.png";
import {
  TrioBoxWrapper,
  TrioHeader,
  ArrowBox,
  HeadText,
  Trio,
  TrioContainer,
  TrioTitle,
  TrioText,
  ReadMore
} from "../TrioBox/Styles.js";

const TrioBox = () => {
  return (
    <TrioBoxWrapper>
      <TrioHeader>
        <ArrowBox src={arrowBox} alt="arrow"></ArrowBox>
      </TrioHeader>
      <HeadText>
        We provide multiple choices to meet our customer needs
      </HeadText>
      <TrioContainer>
        <Trio>
          <TrioTitle>Website Design</TrioTitle>
          <TrioText>E- Commence website</TrioText>
          <TrioText>Brochure website</TrioText>
          <TrioText>Portfolio website</TrioText>
          <ReadMore>ReadMore</ReadMore>
        </Trio>
        <Trio>
          <TrioTitle>Graphic Design</TrioTitle>
          <TrioText>Promotional material</TrioText>
          <TrioText>Brochure design</TrioText>
          <TrioText>Signboard design</TrioText>
          <TrioText>Package design</TrioText>
          <TrioText>Website layout design</TrioText>
          <TrioText>App Interface design</TrioText>
          <ReadMore>ReadMore</ReadMore>
        </Trio>
        <Trio>
          <TrioTitle>Branding Design</TrioTitle>
          <TrioText>Brand proposal</TrioText>
          <TrioText>Visual identity</TrioText>
          <TrioText>Website layout</TrioText>
          <TrioText>Graphic design</TrioText>
          <ReadMore>ReadMore</ReadMore>
        </Trio>
      </TrioContainer>
    </TrioBoxWrapper>
  );
};

export default TrioBox;
