import React, { Component } from 'react';
import logoWhite from "../../asset/logoWhite.png";
import whyUsImg from "../../asset/whyUsImg.png";
import { TrioBoxWrapper, 
         Para, 
         BoxContainer, 
         IntroBox, 
         WhyUsContainer, 
         WhyUsImgContainer,
         WhyUsImg,
         WhiteLogo,
         WhyUsText } from './Styles'

class TrioBox extends Component {
  render() {
    return (
      <TrioBoxWrapper>
        <BoxContainer>
            <IntroBox>
                <WhyUsContainer>
                    <WhyUsText> 
                        <h1>Why us?</h1>
                        <Para>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam nulla porttitor massa id. Risus quis varius quam quisque id diam vel quam elementum. Augue eget arcu dictum varius duis at. Fermentum odio eu feugiat pretium nibh. Vitae nunc sed velit dignissim sodales ut eu sem. Placerat duis ultricies lacus sed. Praesent tristique magna sit amet purus gravida quis blandit. Tincidunt vitae semper quis lectus nulla at volutpat diam.</Para>
                    </WhyUsText>
                    <WhyUsImgContainer>
                      <WhyUsImg src={whyUsImg} alt="why us"></WhyUsImg>
                    </WhyUsImgContainer>
                </WhyUsContainer>
            </IntroBox>
            <WhiteLogo src={logoWhite} alt="white logo"></WhiteLogo>
        </BoxContainer>
      </TrioBoxWrapper>
    )
 }
}

export default TrioBox;