import styled from "styled-components";

export const PortfolioListWrapper = styled.div`
  height: 750px;
  display: grid;
  grid-template-columns: auto auto auto;
  margin: 0 30px;
  grid-column-gap: 15px;
`;

export const Project = styled.div`
  height: 300px;
  margin-bottom: 10px;
`;

export const ProjectTitle = styled.p`
  font-size: 22px;
  margin-top: 3px;
`;

export const ProjectImg = styled.img`
  font-size: 22px;
  width: 100%;
  height: 292px;
`;
