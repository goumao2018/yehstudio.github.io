import React from "react";
import { useEffect, useState } from "react";
import Eproject from "./Ecommerce-comp";
import yellowBar from "../asset/yellowBar.png";
import yellowBox from "../asset/ecommerce/yellowBox.png";
import greenBox from "../asset/ecommerce/greenBox.png";
import EcommerceTrio from "./Ecommerce-trioBox/Index";
import GrayBox from "./Ecommerce-gray/Index";
import Sticky from "./Sticky/Index";

// import SomeRandomText from "./SomeRandomText";

// function App() {
//   const fixedText = "I am fixed :)";
//   const whenNotFixed = "I am not a fixed header :(";

//   return (
//     <div>
//       <header className="header">HEADER</header>
//       <SomeRandomText />
//       <header id="myHeader" className="header">
//         {headerText}
//       </header>
//       <SomeRandomText />
//     </div>
//   );
// }

const Ecommerce = () => {
  // const [headerText, setHeaderText] = useState(whenNotFixed);
  //   useEffect(() => {
  //     const header = document.getElementById("myHeader");
  //     const sticky = header.offsetTop;
  //     const scrollCallBack = window.addEventListener("scroll", () => {
  //       if (window.pageYOffset > sticky) {
  //         header.classList.add("sticky");
  //         if (headerText !== fixedText) {
  //           setHeaderText(fixedText);
  //         }
  //       } else {
  //         header.classList.remove("sticky");
  //         if (headerText !== whenNotFixed) {
  //           setHeaderText(whenNotFixed);
  //         }
  //       }
  //     });
  //     return () => {
  //       window.removeEventListener("scroll", scrollCallBack);
  //     };
  //   }, []);
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          position: "relative"
        }}
      >
        <img
          src={yellowBar}
          alt="background-yellow"
          style={{
            height: "300px",
            width: "100%",
            zIndex: "-1"
          }}
        />
        <p
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "60px",
            textAlign: "center",
            margin: "0"
          }}
        >
          Don't you wanna have your own website?
        </p>
      </div>
      <div
        style={{
          marginTop: "30px",
          display: "grid",
          gridTemplateColumns: "1fr 200px",
          backgroudColor: "tomato"
        }}
      >
        <div>
          <Eproject imgSource={greenBox} />
          <Eproject imgSource={yellowBox} />
          <Eproject imgSource={greenBox} />
        </div>
        {/* <Sticky /> */}
      </div>
      <EcommerceTrio />
      <GrayBox />
    </div>
  );
};
export default Ecommerce;
