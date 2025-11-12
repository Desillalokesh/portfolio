import shop from '../assets/projects/shop.jpg'
import data from '../assets/projects/data.jpg'
import mange from '../assets/projects/mange.jpg'
import music from '../assets/projects/music.jpg'
import sport from '../assets/projects/sport.jpg'

export const HERO_CONTENT = `I’m a passionate Junior Fullstack Developer dedicated to crafting engaging digital experiences, scalable systems, and seamless solutions. With a strong focus on innovation and growth, I build products that not only solve problems but also create meaningful connections between technology and users.`;

export const ABOUT_TEXT = `Hi! I’m Lokesh, a passionate Junior Fullstack Developer at Socialbytes. I specialize in building scalable, responsive, and high-performing applications that bridge clean design with robust functionality.

With expertise in React, React Native, TailwindCSS, Django, and MERN Stack, I enjoy crafting seamless digital experiences that prioritize user engagement. I thrive on solving challenging problems, learning new technologies, and turning innovative ideas into real-world applications.

When I’m not coding, I explore UI/UX trends, mobile development innovations, and open-source contributions to stay at the forefront of the tech world.

💡 Core Skills: React | React Native | TailwindCSS | Django | MERN Stack | REST APIs | PostgreSQL | Mobile App Development

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

