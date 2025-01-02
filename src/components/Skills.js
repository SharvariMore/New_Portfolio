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
            Experienced UI designer skilled in crafting responsive, visually
            stunning interfaces that enhance user experiences.
            <br />
            Proficient in React, NodeJS, ExpressJS, and Git for cutting-edge
            development and seamless collaboration.
          </p>
        </div>
        <div className="grid grid-cols-8 md:grid-flow-row">
          {skills.map((skill, index) => {
            return (
              <div
                className="flex flex-col items-center justify-center"
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
