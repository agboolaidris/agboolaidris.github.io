import React from "react";
import "./index.scss";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Content from "./Component/Content/Content";
import Welcome from "./Component/Welcome/Welcome";
import Services from "./Component/services/services";
import Project from "./Component/Project/Project";
import Skills from "./Component/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <Welcome />
      <Services />
      <Skills />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
