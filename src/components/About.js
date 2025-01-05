import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import Image from "../assets/img/LinkedIn Profile.jpeg";

const About = () => {
  const [activeTab, setActiveTab] = useState("education");

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt="about_image"
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before::opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Sharvari More
              </h2>
              <p className="mb-4 text-accent">Frontend Developer</p>
              <hr className="mb-8 opacity-5"></hr>
              {/* <p className="mb-8">
                Dynamic Frontend Developer skilled in designing dynamic
                websites, optimizing email services, and enhancing client
                experiences. <br /> Pursuing a Master's in Business Analytics,
                eager to contribute expertise to innovative projects.
              </p> */}
            </div>
            {/* <button className="btn btn-md bg-accent hover:bg-accent-hover transition-all">Contact Me</button> */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={() => handleClick("education")}
                className={`btn btn-md ${
                  activeTab === "education" ? "bg-accent" : "bg-gray-300"
                } hover:bg-accent-hover transition-all`}
              >
                Education
              </button>
              <button
                onClick={() => handleClick("experience")}
                className={`btn btn-md ${
                  activeTab === "experience" ? "bg-accent" : "bg-gray-300"
                } hover:bg-accent-hover transition-all`}
              >
                Experience
              </button>
            </div>
            <div>
              {activeTab === "education" ? (
                <div>
                  {/* <h3 className="text-xl font-semibold mb-4">Education</h3> */}
                  <div className="mb-4">
                    <h4 className="font-bold text-lg">
                      Masters' in Computer System Analysis
                      <span className="text-md m-11 text-accent">
                        2023 - 2025
                      </span>
                    </h4>
                    <p className="text-accent">University of South Florida</p>
                    <p>Tampa, Florida</p>
                    <p className="text-md text-gray-500">GPA: 3.9/4</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">
                      Bachelors' in Information Technology
                      <span className="text-md m-11 text-accent">
                        2016 - 2020
                      </span>
                    </h4>
                    <p className="text-accent">Pune University</p>
                    <p>Pune, India</p>
                    <p className="text-md text-gray-500">GPA: 3.3/4</p>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    3+ Year's Experience on UI Designing
                  </h3>
                  <div className="mb-4">
                    <div className="flex justify-between items-center">
                      <h4
                        className="font-bold text-lg"
                        data-tooltip-id="skills"
                        data-tooltip-content="Angular, TS, ASP.NET, Oracle"
                        data-tooltip-place="top"
                      >
                        Student Assistant (PCP)
                      </h4>
                      <h4 className="text-lg font-bold text-accent">
                        2024 - 2025
                      </h4>
                    </div>
                    <p className="text-accent">Raymond James</p>
                    <p className="text-md text-gray-500">Tampa, Florida</p>
                  </div>
                  <div className="mb-4">
                    
                    <div className="flex justify-between items-center">
                      <h4
                        className="font-bold text-lg"
                        data-tooltip-id="skills"
                        data-tooltip-content="HTML, CSS, JS, React, GIT, API"
                        data-tooltip-place="top"
                      >
                        Frontend Developer (React)
                      </h4>
                      <h4 className="text-lg font-bold text-accent">
                        2022 - 2023
                      </h4>
                    </div>

                    <p className="text-accent">Infosys</p>
                    <p className="text-md text-gray-500">Pune, India</p>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between items-center">
                      <h4
                        className="font-bold text-lg"
                        data-tooltip-id="skills"
                        data-tooltip-content="Microsoft, AWS, IAM"
                        data-tooltip-place="top"
                      >
                        Software Engineer
                      </h4>
                      <h4 className="text-lg font-bold text-accent">
                        2020 - 2022
                      </h4>
                    </div>
                    <p className="text-accent">Capgemini</p>
                    <p className="text-md text-gray-500">Pune, India</p>
                  </div>
                  
                  <Tooltip
                    id="skills"
                    place="bottom"
                    type="dark"
                    effect="solid"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
