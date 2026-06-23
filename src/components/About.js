import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import Image from "../assets/img/LinkedIn Profile.jpeg";

const About = () => {
  const [activeTab, setActiveTab] = useState("education");
  const [experiencePage, setExperiencePage] = useState(0);

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  const experiences = [
    {
      title: "Java Full Stack Developer",
      company: "Fiserv",
      location: "Coral Springs, Florida",
      year: "2025 - Present",
      skills: "Java, Spring Boot, Redis, Kafka, Angular",
    },
    {
      title: "AI Engineer",
      company: "Humanitarians AI",
      location: "Boston, Massachusetts",
      year: "2025 - 2025",
      skills: "Next.js, LLM, n8n, Chart.js, Jest",
    },
    {
      title: "Full Stack Developer",
      company: "Raymond James",
      location: "Tampa, Florida",
      year: "2024 - 2025",
      skills: "Angular, ASP.NET, Oracle, Jenkins",
    },
    {
      title: "Frontend Developer",
      company: "Infosys",
      location: "Pune, India",
      year: "2022 - 2023",
      skills: "HTML, CSS, JS, React, Figma, Git, API, Postman",
    },
    {
      title: "Software Engineer",
      company: "Capgemini",
      location: "Pune, India",
      year: "2020 - 2022",
      skills: "React, AWS, Java, Jest",
    },
    {
      title: "Software Developer",
      company: "Polestar",
      location: "Pune, India",
      year: "2019 - 2020",
      skills: "JavaScript, React, Git, REST APIs",
    },
  ];

  const experiencesPerPage = 3;
  const startIndex = experiencePage * experiencesPerPage;
  const visibleExperiences = experiences.slice(
    startIndex,
    startIndex + experiencesPerPage,
  );

  const totalPages = Math.ceil(experiences.length / experiencesPerPage);

  return (
    <section id="about" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt="about_image"
          />

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Sharvari More
              </h2>

              <p className="mb-4 text-accent">Frontend Developer</p>

              <hr className="mb-8 opacity-5" />
            </div>

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

            <div className="w-full">
              {activeTab === "education" ? (
                <div>
                  <div className="mb-4">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                      <h4 className="font-bold text-lg sm:mb-0">
                        Masters in Business Analytics and Information Systems
                      </h4>

                      <h4 className="text-lg ml-2 font-bold text-accent">
                        2023 - 2025
                      </h4>
                    </div>

                    <p className="text-accent">University of South Florida</p>
                    <p>Tampa, Florida</p>
                    <p className="text-md text-gray-500">GPA: 3.9/4</p>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                      <h4 className="font-bold text-lg sm:mb-0">
                        Bachelors in Information Technology
                      </h4>

                      <h4 className="text-lg ml-2 font-bold text-accent">
                        2016 - 2020
                      </h4>
                    </div>

                    <p className="text-accent">Pune University</p>
                    <p>Pune, India</p>
                    <p className="text-md text-gray-500">GPA: 3.3/4</p>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    6+ Years of Experience in Full-Stack Development
                  </h3>

                  {visibleExperiences.map((experience, index) => (
                    <div key={index} className="mb-4">
                      <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                        <h4
                          className="font-bold text-lg sm:mb-0"
                          data-tooltip-id="skills"
                          data-tooltip-content={experience.skills}
                          data-tooltip-place="top"
                        >
                          {experience.title}
                        </h4>

                        <h4 className="text-lg font-bold text-accent">
                          {experience.year}
                        </h4>
                      </div>

                      <p className="text-accent">{experience.company}</p>
                      <p className="text-md text-gray-500">
                        {experience.location}
                      </p>
                    </div>
                  ))}

                  {/* <div className="flex gap-4 mt-6">
                    <button
                      onClick={() =>
                        setExperiencePage((prev) => Math.max(prev - 1, 0))
                      }
                      disabled={experiencePage === 0}
                      className={`btn btn-sm ${
                        experiencePage === 0
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-accent hover:bg-accent-hover"
                      } transition-all`}
                    >
                      Previous
                    </button>

                    <button
                      onClick={() =>
                        setExperiencePage((prev) =>
                          Math.min(prev + 1, totalPages - 1)
                        )
                      }
                      disabled={experiencePage === totalPages - 1}
                      className={`btn btn-sm ${
                        experiencePage === totalPages - 1
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-accent hover:bg-accent-hover"
                      } transition-all`}
                    >
                      Next
                    </button>
                  </div> */}

                  <div className="flex gap-3 mt-6 justify-between">
                    {/* Previous Button */}
                    <button
                      onClick={() =>
                        setExperiencePage((prev) => Math.max(prev - 1, 0))
                      }
                      disabled={experiencePage === 0}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                        experiencePage === 0
                          ? "bg-black/40 cursor-not-allowed opacity-40"
                          : "bg-black hover:bg-accent"
                      }`}
                      aria-label="Previous experience"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="white"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                        />
                      </svg>
                    </button>

                    {/* Next Button */}
                    <button
                      onClick={() =>
                        setExperiencePage((prev) =>
                          Math.min(prev + 1, totalPages - 1),
                        )
                      }
                      disabled={experiencePage === totalPages - 1}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                        experiencePage === totalPages - 1
                          ? "bg-black/40 cursor-not-allowed opacity-40"
                          : "bg-black hover:bg-accent"
                      }`}
                      aria-label="Next experience"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="white"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </button>
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
