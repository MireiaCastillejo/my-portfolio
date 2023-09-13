import React from 'react';
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";

import "../css/test.css";

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import FeaturesZigZag from '../partials/FeaturesZigzag';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';
import Academic from '../partials/Academic';

export const ThemeContext = createContext(null);

function Home() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      
      <div className="App" id={theme}>
        <div className="switch">
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
    
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/*  Site header */}
        <Header />
        {/*  Page content */}
        <main className="grow">
          {/*  Page illustration
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div> */}

          {/*  Page sections */}
          <HeroHome />
          <FeaturesBlocks />
          <FeaturesZigZag />
          <Academic/>
          <Newsletter />
        </main>


        {/*  Site footer */}
        <Footer />
      </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default Home;