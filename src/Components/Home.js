import React from "react";

import Main from "./Main/Index";
import TrioBox from "./TrioBox/Index";
import Intro from "./Intro/Index";
import ProjectHero from "./ProjectHero/index";
import Portfolio from "./Portfolio/Index";
import TrioProject from "./TrioProject/Index";

import thai from "../asset/thai.png";
import ey from "../asset/ey.png";

const Home = () => {
  return (
    <div>
      <Main />
      <TrioBox />
      <Intro />
      <ProjectHero
        Header={"@siam Thai Restaurant"}
        Text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
        }
        Image={thai}
      />
      <Portfolio />
      <ProjectHero
        Header={"New employee onboarding system"}
        Text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
        }
        Image={ey}
      />
      <TrioProject />
    </div>
  );
};
export default Home;
