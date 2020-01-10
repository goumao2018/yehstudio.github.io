import React, { Component } from "react";
import "./App.css";
import Main from "./Components/Main/Index";
import TrioBox from "./Components/TrioBox/Index";
import Intro from "./Components/Intro/Index";
import ProjectHero from "./Components/ProjectHero/index";
import Portfolio from "./Components/Portfolio/Index";

import thai from "./asset/thai.png";
import ey from "./asset/ey.png";

class App extends Component {
  render() {
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
      </div>
    );
  }
}
export default App;
