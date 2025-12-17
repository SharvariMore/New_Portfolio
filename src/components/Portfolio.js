import React from "react";

import Projects from "./Projects";

const Portfolio = () => {
  return (
    <section id="portfolio" className="section bg-primary min-h-[1400px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">
            My Latest Work
          </h2>
          <p className="subtitle">
            Expert in designing intuitive interfaces and innovative website
            solutions using modern front-end and back-end technologies.
            <br /> Crafting compelling brand identities and immersive gaming
            experiences, combining creative design with advanced development for
            impactful results.
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
