import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/Header";
import { Works } from "./components/Works";
import { About } from "./components/Joblinxs";
// import { Services } from "./components/services";
import { Review} from "./components/Review";
import { Features } from "./components/Features";
// import { Team } from "./components/Team";
import {AboutUs} from "./components/AboutUs";
import { Contact } from "./components/Contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <AboutUs data={landingPageData.AboutUs} />
      <Works data={landingPageData.Works} />
      <About data={landingPageData.About} />
      {/* <Services data={landingPageData.Services} /> */}
      <Features data={landingPageData.Features} />
      <Review data={landingPageData.Portfolio}/>
      {/* 
      <Team data={landingPageData.Team} /> */}
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
