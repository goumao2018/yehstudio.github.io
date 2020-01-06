import React, { Component } from "react";
import "./App.css";
import Main from "./Components/Main/Index";
import TrioBox from "./Components/TrioBox/Index";
import Intro from "./Components/Intro/Index";
import ProjectHero from "./Components/ProjectHero/index";

class App extends Component {
  render() {
    return (
      <div>
        <Main />
        <TrioBox />
        <Intro />
        <ProjectHero />
      </div>
    );
  }
}
export default App;
