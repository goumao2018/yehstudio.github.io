import React, { Component } from 'react';
import './Styles.js';
import { TrioBoxWrapper,
         TrioHeader,
         Line,
         HeadText,
         Trio,
         TrioContainer } from '../TrioBox/Styles.js';

class TrioBox extends Component {
  render() {
    return (
      <TrioBoxWrapper>
        <TrioHeader>
          <Line/>
        </TrioHeader>
        <HeadText>We provide multiple choices to meet our customer needs</HeadText>
        <TrioContainer>
            <Trio/>
            <Trio/>
            <Trio/>
        </TrioContainer>
      </TrioBoxWrapper>
    )
 }
}

export default TrioBox;