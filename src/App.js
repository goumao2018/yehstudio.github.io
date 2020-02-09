import React, { Component } from "react";
import "./App.css";
import Home from "./Components/Home";
import Ecommerce from "./Components/Ecommerce";
import Projects from "./Components/Projects";

import Navbar from "./Components/Navbar/Index";
import Footer from "./Components/Footer/Index";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
      { alert("hello!"); }
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Home} />
          <Route path="/projects" component={Ecommerce} />
          <Route path="/about" component={Projects} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
