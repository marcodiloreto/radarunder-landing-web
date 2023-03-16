import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Gallery } from "./components/gallery";
import JsonData from "./data/data.json";
import { AboutProject } from "./components/aboutProject";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [pageData, setPageData] = useState({});
  
  useEffect(() => {
    setPageData(JsonData);
  }, []);


  return (
    <div>

      <Navigation />
      <Header data={pageData.Header} />
      <AboutProject data={pageData.AboutProject}/>
      <Features data={pageData.Features} />
      <Gallery data={pageData.Gallery}/>
      <About data={pageData.About} />
      <Contact data={pageData.Contact} />
    </div>

  );
};

export default App;
