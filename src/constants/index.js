import shop from '../assets/projects/shop.webp'
import data from '../assets/projects/data.webp'
import mange from '../assets/projects/mange.webp'
import music from '../assets/projects/music.webp'
import sport from '../assets/projects/sport.webp'

export const HERO_CONTENT = `I’m a passionate Junior Software Engineer focused on building engaging digital experiences, scalable systems, and seamless solutions. Driven by innovation and continuous growth, I create products that solve real problems and deliver meaningful user impact.`;

export const ABOUT_TEXT = `Hi! I’m Lokesh, a passionate Junior Software Developer at Socialbytes. I focus on building scalable, responsive, and high-performing web and mobile applications, along with data-driven dashboards that turn complex data into actionable insights. I enjoy bridging clean design with robust functionality across products.

With hands-on experience in React, React Native, Tailwind CSS, Django, the MERN ecosystem, and dashboarding tools like Apache Superset and Looker Studio, I create seamless digital experiences that emphasize usability, performance, and clarity.

I thrive on solving challenging problems, continuously learning new technologies, and transforming innovative ideas into real-world applications. Beyond coding, I actively explore UI/UX trends, mobile development advancements, analytics platforms, and open-source contributions to stay ahead in the evolving tech landscape.

`;

export const EDUCATION = [
  {
    institution: "Socialbytes",
    degree: "Software Engineer",
    fieldOfStudy: "Junior Fullstack Developer",
    duration: "2025",
   
  },
  
  
 
];

export const PROJECTS = [
   {
    title: "Taskix",
    image: data,
    description: "FormaX is a dual-UI, single-backend role-based management platform. The admin panel lets you create users, set roles, permissions, projects, and activities with dynamic forms. Admins can assign tasks, collect and manage submissions, and view data in interactive tables and dashboard. The user panel allows users to login, complete assigned forms, edit submissions.",
    technologies: ["React","Tailwindcss", "Django","Postgresql"],
  },
  {
    title: "ShopSphere",
    image: shop,
    description: "An advanced e-commerce platform with admin panel, product management, secure Razorpay payments, category filters, cart, orders, and feedback system for seamless shopping and management.",
    technologies: ["React","Tailwindcss", "Django",],
  },

   {
    title: "ProManageX",
    image: mange,
    description: "Advanced project management system with dashboards, assignments, progress tracking, and internal email—styled with elegant glassmorphism for admin, team leader, and employee collaboration.",
    technologies:["React","Tailwindcss", "Django",],
  },

    {
    title: "OlympiViz",
    image: sport,
    description: "OlympiViz is an interactive 2024 Olympics dashboard powered by a third-party REST API. It visualizes player stats, country-wise winners,media, boardcast and athlete overviews through dynamic graphs, 3D visualized charts, pie charts, delivering a rich, engaging Olympic data experience.",
    technologies: [ "TyeScript","Reactjs", "Tailwindcss"],
  },

   {
    title: "TuneStream",
    image: music,
    description: "TuneStream is a music streaming platform featuring playlists, search, and personalized recommendations, delivering a seamless audio experience similar to Spotify.",
    technologies: ["JavaScript","Reactjs","Tailwindcss"],
  },

];

export const CONTACT = {
  address: "Srikakulam, India",
  phoneNo: "+91 6301562173",
  email: "lokeshdesilla038@gmail.com",
};

