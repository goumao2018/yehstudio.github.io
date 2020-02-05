import React from "react";

import { Wrapper, Header, EmptyBox, Para } from "./Styles";

const EcommerceProject = prop => {
  return (
    <Wrapper id={prop.projectId}>
      <Header>{prop.projectTitle} </Header>
      <EmptyBox src={prop.imgSource} alt="green box" />
      <Para>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </Para>
      <Para>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </Para>
    </Wrapper>
  );
};
export default EcommerceProject;
