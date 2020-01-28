import React from "react";
import arrowBox from "../../asset/ecommerce/arrowBox.png";
import {
	Wrapper,
	YellowBoxWrapper,
	Para,
	ArrowBoxWrapper
} from "./Styles";

const TrioShotto = () => {
	return (
		<Wrapper>
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
export default TrioShotto;
