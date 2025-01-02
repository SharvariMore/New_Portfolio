import React from "react";
import TestimonialSlider from "./TestimonialSlider";

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block">
            What Other People Say?
          </h2>
          <p className="subtitle">
            Experienced UI designer skilled in crafting responsive, visually
            stunning interfaces that enhance user experiences.
            <br />
            Proficient in React, NodeJS, ExpressJS, and Git for cutting-edge
            development and seamless collaboration.
          </p>
        </div>
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default Testimonials;
