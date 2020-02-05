import React, { Component } from "react";
import whyUsImg from "../../asset/whyUsImg.png";
import {
  IntroWrapper,
  WhyUsParaTwo,
  IntroBox,
  WhyUsContainer,
  WhyUsImgContainer,
  WhyUsHeader,
  WhyUsImg,
  WhyUsText,
  WhyUsParaOne,
  WhyUsPara
} from "./Styles";

class TrioBox extends Component {
  render() {
    return (
      <IntroWrapper id="whyus">
        <IntroBox>
          <WhyUsContainer>
            <WhyUsText>
              <WhyUsHeader>Why us?</WhyUsHeader>
              <WhyUsPara>
                <WhyUsParaOne>
                  YEH is a innovative and creative design studio. We have an
                  international team for making good design and cultural
                  products that bring more values for brands.
                </WhyUsParaOne>
                <WhyUsParaTwo>
                  Our previous projects based on different self awareness. We
                  set up our roles as graphic designers, brand makers,
                  researchers and users for better design outcomes. Funny,
                  Beautiful, Welcomable, Different, our designs are made from a
                  passion of joy and professional knowledge. We have spend 3
                  years to creating playful, cultural and narrative branding
                  projects for catering, retailing, medical and educational
                  clients in Melbourne and around the state.
                </WhyUsParaTwo>
              </WhyUsPara>
            </WhyUsText>
            <WhyUsImgContainer>
              <WhyUsImg src={whyUsImg} alt="why us"></WhyUsImg>
            </WhyUsImgContainer>
          </WhyUsContainer>
        </IntroBox>
      </IntroWrapper>
    );
  }
}

export default TrioBox;
