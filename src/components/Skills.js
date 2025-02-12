import React from "react";

import { skills } from "../data";

const Skills = () => {
  return (
    <section id="skills" className="section bg-tertiary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-skills relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block">
            My Skills
          </h2>
          <p className="subtitle">
            Proficient in React, Angular, Figma, and Git for seamless front-end
            development and collaborative project delivery.
            <br /> Skilled in backend technologies such as MySQL, Node.js,
            MongoDB, and AWS cloud for advanced development.
          </p>
        </div>
        <div className="grid grid-cols-4 lg:grid-cols-8 md:grid-flow-row">
          {skills.map((skill, index) => {
            return (
              <div
                className="flex flex-col items-center justify-center transform transition-transform duration-300 hover:-translate-y-3"
                key={index}
              >
                <img src={skill.image} alt="skill_image" />
                <span>{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
