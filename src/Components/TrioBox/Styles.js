import styled from "styled-components";

export const TrioBoxWrapper = styled.div`
  height: 900px;
`;

export const TrioHeader = styled.div`
  height: 40px;
  margin-top: 20px;
  /* position: relative; */
`;
export const Line = styled.hr`
  display: block;
  width: 350px;
  border: 0;
  border-top: 2px solid black;
  margin-top: 80px;
  /* margin: auto;
    padding: 15px; */
  z-index: 100;
`;

export const TrioContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 100px;
  margin-top: 150px;
`;

export const HeadText = styled.p`
  text-align: center;
  font-size: 15px;
`;

export const Trio = styled.div`
  height: 590px;
  width: 395px;
  background-color: rgb(199, 199, 199);
  margin-right: 30px;
  text-align: center;
  position: relative;
  float: left;
`;

export const TrioTitle = styled.h1`
  font-size: 40px;
`;

export const TrioText = styled.p`
  font-size: 20px;
`;

export const ReadMore = styled.p`
  font-size: 25px;
  position: absolute;
  text-align: center;
  bottom: 0;
  left: 110px;
`;
