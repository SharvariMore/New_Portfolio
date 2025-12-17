import {
  FiInstagram,
  FiGithub,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiLinkedin,
  FiFacebook,
} from "react-icons/fi";

// companies icons
import FreelancerBrandIcon from "./assets/img/brands/freelancer.png";
import UpworkBrandIcon from "./assets/img/brands/upwork.png";
import FiverBrandIcon from "./assets/img/brands/fiverr.png";
import BehanceBrandIcon from "./assets/img/brands/behance.png";
import DribbbleBrandIcon from "./assets/img/brands/dribbble.png";

// projects images
import Project1 from "./assets/img/projects/figma_carousel.png";
import Project2 from "./assets/img/projects/youtube_clone.png";
import Project3 from "./assets/img/projects/movie.png";
import Project4 from "./assets/img/projects/expense_tracker.png";
import Project5 from "./assets/img/projects/dashboard.png";
import Project6 from "./assets/img/projects/vikram_travels.png";
import Project7 from "./assets/img/projects/chat_app.png";
import Project8 from "./assets/img/projects/food_receipe.png";
import Project9 from "./assets/img/projects/tictac_game.png";
import Project10 from "./assets/img/projects/cafe_website.png";
import Project11 from "./assets/img/projects/hangman_game.png";
import Project12 from "./assets/img/projects/colorchange_game.png";
import Project13 from "./assets/img/projects/home_service.png";
import Project14 from "./assets/img/projects/budget_planner.png";
import Project15 from "./assets/img/projects/surveybull.png";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg5 from "./assets/img/skills/nextjs.png";
import SkillImg6 from "./assets/img/skills/nodejs.png";
import SkillImg7 from "./assets/img/skills/git.png";
import SkillImg8 from "./assets/img/skills/figma.png";
import SkillImg9 from "./assets/img/skills/angular.png";
import SkillImg10 from "./assets/img/skills/sql.png";
import SkillImg11 from "./assets/img/skills/mongodb.png";
import SkillImg12 from "./assets/img/skills/oracle.png";
import SkillImg13 from "./assets/img/skills/microsoft.png";
import SkillImg14 from "./assets/img/skills/aws.png";
import SkillImg15 from "./assets/img/skills/net.png";
import SkillImg16 from "./assets/img/skills/typescript.png";

// testimonial images
import TestiImage1 from "./assets/img/testimonials/testimonial-1.webp";
import TestiImage2 from "./assets/img/testimonials/testimonial-2.webp";
import TestiImage3 from "./assets/img/testimonials/testimonial-3.webp";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "skills",
    href: "skills",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "services",
    href: "services",
  },
  // {
  //   name: 'testimonials',
  //   href: 'testimonials',
  // },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/sharvari-more/",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/SharvariMore",
  },
  {
    icon: <FiInstagram />,
    href: "https://www.instagram.com/sharvari_more_10/",
  },
  {
    icon: <FiFacebook />,
    href: "https://www.facebook.com/sharvari.more.12",
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: "",
  },
  {
    img: UpworkBrandIcon,
    href: "",
  },
  {
    img: FiverBrandIcon,
    href: "",
  },
  {
    img: BehanceBrandIcon,
    href: "",
  },
  {
    img: DribbbleBrandIcon,
    href: "",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: Project1,
    name: "Figma Carousel",
    category: "UI/UX design",
    url: "https://github.com/SharvariMore/Figma-Carousel",
    description:
      "A Figma carousel website to navigate between 3 different types of drinks",
  },
  {
    id: "2",
    image: Project2,
    name: "YouTube Clone",
    category: "web development",
    url: "https://github.com/SharvariMore/Youtube-Clone",
    description:
      "Website features the UI development of YouTube using HTML, CSS and JavaScript",
  },
  {
    id: "3",
    image: Project3,
    name: "Movie App",
    category: "web development",
    url: "https://github.com/SharvariMore/Movie-app",
    description:
      "Dynamic React app displaying list of movies with their rating through API intgeration",
  },
  {
    id: "4",
    image: Project4,
    name: "Expense Tracker",
    category: "web development",
    url: "https://sharvari-expense-tracking.onrender.com/",
    description:
      "Website features finance management alonwgith dashboard for transactions",
  },
  {
    id: "5",
    image: Project5,
    name: "Dashboard",
    category: "web development",
    url: "https://github.com/SharvariMore/React_Dashboard",
    description:
      "Dashboard in React displays various charts by SyncFusion for e-commerce website",
  },
  {
    id: "6",
    image: Project6,
    name: "Vikram Travels",
    category: "branding",
    url: "https://vikram-travels.netlify.app/",
    description:
      "Holistic React website efficiently managing cab services in Maharashtra, India",
  },
  {
    id: "7",
    image: Project7,
    name: "NodeJS Chat App",
    category: "web development",
    url: "https://github.com/SharvariMore/NodeJS-Chat-App",
    description:
      "Real time chat app featuring various features utilising React as UI and NodeJS at backend",
  },
  {
    id: "8",
    image: Project8,
    name: "Food Recipe App",
    category: "web development",
    url: "https://flavor-fiesta.netlify.app/",
    description:
      "Inclusive React app displaying food recipes for selected dish through API integration",
  },
  {
    id: "9",
    image: Project9,
    name: "Tic Tac Toe Game",
    category: "gaming",
    url: "https://github.com/SharvariMore/Tic-Tac-Toe-Game",
    description:
      'JS Game declares "X" or "O" as winner when 3 similar match else declare tie when filled',
  },
  {
    id: "10",
    image: Project10,
    name: "Cafe Website",
    category: "UI/UX design",
    url: "https://github.com/SharvariMore/Simple-website",
    description:
      "Cafe Website showcasing HTML and CSS basics alongwith responsiveness",
  },
  {
    id: "11",
    image: Project11,
    name: "Hanging Man Game",
    category: "gaming",
    url: "https://github.com/SharvariMore/HangingMan-Game-App",
    description:
      "React Game challenge to guess hidden word with wrong letters creating a HangingMan",
  },
  {
    id: "12",
    image: Project12,
    name: "Color Change Game",
    category: "gaming",
    url: "https://github.com/SharvariMore/Color-Change-React-app",
    description:
      "Gaming app built on React to display color name & hex value in square with toggle option",
  },
  {
    id: "13",
    image: Project13,
    name: "Home Service App",
    category: "web development",
    url: "https://home-service-app-drab.vercel.app",
    description:
      "Next.js application for booking home services, utilizing Hygraph CMS for API fetching and Descope for authentication",
  },
  {
    id: "14",
    image: Project14,
    name: "Budget Planner",
    category: "web development",
    url: "https://budget-planner-fxfv.onrender.com",
    description:
      "Angular-based budgeting website for managing income and expenses, featuring a dashboard to track to-do transactions for selected months and review past transaction histories",
  },
  {
    id: "15",
    image: Project15,
    name: "Survey Bull",
    category: "branding",
    url: "https://github.com/SharvariMore/SurveyBull",
    description:
      "Survey Platform for designing various surveys using MVC Framework and Data Visualisation Charts",
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "UI/UX Design",
  },
  {
    name: "web development",
  },
  {
    name: "branding",
  },
  {
    name: "gaming",
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
    name: "HTML",
  },
  {
    image: SkillImg2,
    name: "CSS",
  },
  {
    image: SkillImg3,
    name: "JavaScript",
  },
  {
    image: SkillImg4,
    name: "React",
  },
  {
    image: SkillImg5,
    name: "NextJs",
  },
  {
    image: SkillImg6,
    name: "NodeJs",
  },
  {
    image: SkillImg7,
    name: "Github",
  },
  {
    image: SkillImg8,
    name: "Figma",
  },
  {
    image: SkillImg9,
    name: "Angular",
  },
  {
    image: SkillImg10,
    name: "MySQL",
  },
  {
    image: SkillImg11,
    name: "MongoDB",
  },
  {
    image: SkillImg12,
    name: "Oracle",
  },
  {
    image: SkillImg13,
    name: "Microsoft",
  },
  {
    image: SkillImg14,
    name: "AWS",
  },
  {
    image: SkillImg15,
    name: "ASP.NET",
  },
  {
    image: SkillImg16,
    name: "TypeScript",
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: "UI Design",
    description:
      "UI designer skilled in crafting visually stunning, responsive interfaces that elevate user experiences.",
  },
  {
    icon: <FiSettings />,
    name: "Web Development",
    description:
      "Building dynamic, interactive websites with modern frameworks to deliver custom functionality.",
  },
  {
    icon: <FiPenTool />,
    name: "Version Control",
    description:
      "Proficient in using Git for collaborative development, version tracking and precise project updates.",
  },
  {
    icon: <FiTag />,
    name: "SEO",
    description:
      "Optimizing websites with SEO best practices to enhance visibility and boost search engine rankings.",
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage2,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage3,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Email me at sharvarimore90@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Tampa, Florida",
    description: "Serving clients worldwide",
  },
];
