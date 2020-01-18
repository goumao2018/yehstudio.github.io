import React from "react";
import checkProjectBox from "../../asset/ecommerce/checkProjectBox.png";
import arrowBox from "../../asset/ecommerce/arrowBox.png";
import {
  Wrapper,
  CheckProject,
  YellowBoxWrapper,
  Para,
  ArrowBoxWrapper
} from "./Styles";

const EcommerceTrio = () => {
  return (
    <Wrapper>
      <CheckProject src={checkProjectBox} alt="check project" />
      <YellowBoxWrapper>
        <Para>Wanna start your website with us?</Para>
        <Para>Scroll down to see our design process</Para>
      </YellowBoxWrapper>
      <ArrowBoxWrapper>
        <img
          src={arrowBox}
          alt="arrow box"
          style={{
            height: "130px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        />
      </ArrowBoxWrapper>
    </Wrapper>
  );
};
export default EcommerceTrio;
