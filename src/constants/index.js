import shop from '../assets/projects/shop.jpg'
import data from '../assets/projects/data.jpg'
import mange from '../assets/projects/mange.jpg'
import music from '../assets/projects/music.jpg'
import sport from '../assets/projects/sport.jpg'

export const HERO_CONTENT = `I’m a passionate Full Stack Developer  with hands-on experience in React,
 Tailwind CSS, and Django REST APIs. Passionate about building responsive UIs, scalable backends, 
 and seamless API integrations.`;

export const ABOUT_TEXT = `I craft robust, scalable web applications, blending modern
 frontend design with powerful backend logic. Skilled in React, Django,MERN Stack, REST APIs, 
 and databases, I turn ideas into high-performing, user-focused digital solutions.

`;

export const EDUCATION = [
  {
    institution: "Social Bytes",
    degree: "Software Engineer",
    fieldOfStudy: "React Developer",
    duration: "2025",
   
  },
  {
    institution: "Sri Venkateswara College Of Engineering & Technology",
    degree: "Bachelor of Technology",
    fieldOfStudy: "Electrical & Electronics Engineering",
    duration: "2024",
    cgpa: 8.1
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

