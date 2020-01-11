import React, { Component } from "react";
import footer from "../../asset/footer.png";
import {
  FooterWrapper,
  FooterHeading,
  FooterSubHeading,
  FooterImg,
  Line
} from "./Styles";

class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <FooterHeading>Want to say hello</FooterHeading>
        <FooterSubHeading>
          you can reach us via contact@yehstudio.com.au
        </FooterSubHeading>
        <Line />
        <FooterImg src={footer} alt="why us" />
      </FooterWrapper>
    );
  }
}

export default Footer;
