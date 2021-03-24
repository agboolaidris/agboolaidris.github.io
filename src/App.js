import React from "react";
import "./index.scss";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Content from "./Component/Content/Content";
import Welcome from "./Component/Welcome/Welcome";
import Skills from "./Component/Skill/Skills";
import Project from "./Component/Project/Project";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <Welcome />
      <Skills />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
