import React from "react";

import YellowBar from "./YellowBar/Index";
import FirstBlock from "./FirstBlock/Index";
import TrioShotto from "./TrioShotto/Index";
import GrayBox from "./Ecommerce-gray/Index";
import BrandPackageBlock from "./BrandPackageBlock/Index";
import ProjectPageImg from "./ProjectPageImg/Index";

class Projects extends React.Component {
  render() {
    return (
      <div>
        <YellowBar />
        <FirstBlock />
        <TrioShotto />
        <GrayBox />
        <BrandPackageBlock />
        <ProjectPageImg />
      </div>
    );
  }
}

export default Projects;
