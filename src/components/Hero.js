import React, { useEffect, useState } from "react";
import MyImg from "../assets/img/side.png";
// import Resume from "../assets/img/Sharvari More - Resume (Best).pdf";

const Hero = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const texts = [
    "I'm a Frontend <br /> Developer.",
    "I'm a Software <br /> Engineer.",
    "I'm a Full-Stack <br />  Developer.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const typingSpeed = 60;
  const pauseTime = 2000; // Pause time before switching to the next text

  useEffect(() => {
    // Typing effect logic
    if (charIndex < texts[currentIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + texts[currentIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      // Pause before clearing text and switching to the next one
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length); // Cycle to the next text
      }, pauseTime);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentIndex, texts]);

  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="text-lg text-accent mb-[15px]">
              Hey, I'm Sharvari ✌🏻
            </p>
            <h1
              className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]"
              dangerouslySetInnerHTML={{
                __html: displayedText + '<span class="text-accent">|</span>',
              }}
            >
              {/* I Build & Design <br /> Web Interfaces. */}
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
              Passionate Software Developer skilled in designing dynamic
              websites, optimizing email services, and enhancing client
              experiences. Pursuing a Master's in Computer System Analysis,
              eager to contribute expertise to innovative projects.
            </p>
            <button
              className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all"
              onClick={() =>
                window.open(
                  require("../assets/img/Sharvari More - Resume (Best).pdf"),
                  "_blank"
                )
              }
            >
              View My Resume
            </button>
          </div>
          <div className="hidden lg:flex flex-1 justify-end items-end h-full">
            <img src={MyImg} alt="My_Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
