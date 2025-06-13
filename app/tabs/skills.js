"use client";
import { useState } from "react";

const skills = [
    {
      name: "HTML5",
      icon: "/icons/icons8-html-5-50.png",
      hoverIcon: "/icons/icons8-html.gif",
    },
    {
      name: "CSS3",
      icon: "/icons/icons8-css3-50.png",
      hoverIcon: "/icons/css3.gif",
    },
    {
      name: "Bootstrap",
      icon: "/icons/icons8-bootstrap-50.png",
      hoverIcon: "/icons/icons8-bootstrap-50-noir.png",
    },
    {
      name: "Tailwind",
      icon: "/icons/icons8-tailwindcss-50.png",
      hoverIcon: "/icons/tailwindcss2.gif",
    },
    {
      name: "CodeIgniter",
      icon: "/icons/icons8-codeigniter-50.png",
      hoverIcon: "/icons/icons8-codeigniter-50-noir.png",
    },
    {
      name: "React",
      icon: "/icons/icons8-react-50.png",
      hoverIcon: "/icons/icons8-react.gif",
    },
    {
      name: "Nextjs",
      icon: "/icons/icons8-nextjs-50.png",
      hoverIcon: "/icons/icons8-nextjs-50-colored.png",
    },
    {
      name: "Javascript",
      icon: "/icons/icons8-javascript-50.png",
      hoverIcon: "/icons/icons8-javascript.gif",
    },
    {
      name: "Laravel",
      icon: "/icons/icons8-laravel-50.png",
      hoverIcon: "/icons/icons8-laravel-50-noir.png",
    },
    {
      name: "MySql",
      icon: "/icons/icons8-mysql-50.png",
      hoverIcon: "/icons/icons8-database-50.png",
    },
  ];
  const tools = [
    {
      name: "VS Code",
      icon: "/icons/icons8-visual-studio-code-50.png",
      hoverIcon: "/icons/icons8-programming.gif",
    },
    {
      name: "Jira",
      icon: "/icons/icons8-jira-50.png",
      hoverIcon: "/icons/icons8-to-do.gif",
    },
    {
      name: "Selenium",
      icon: "/icons/icons8-selenium-50.png",
      hoverIcon: "/icons/icons8-automation.gif",
    },
    {
      name: "Postman",
      icon: "/icons/icons8-postman-inc-50.png",
      hoverIcon: "/icons/icons8-testing.gif",
    },
    {
      name: "Github",
      icon: "/icons/icons8-github-50.png",
      hoverIcon: "/icons/icons8-github.gif",
    },
  ];

export default function Skills () {
  const [hoveredSkill, setHoveredSkill] = useState(null);

    return(
        <div className="w-full max-w-4xl mx-auto px-4">
          <div
          className="overflow-y-auto h-[400px] sm:h-[300px] scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent"
          style={{ 
             display: "flex",
             flexDirection: "column",
             gap: "2rem",
           }}
           >
            {/* {Skills Section} */}
            <div>
              <h2 className="text-xl font-semibold text-white text-center mb-4">Skills</h2>
              <div
              className="grid gap-8"
              style={{ 
                gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
                justifyItems: "center",
                alignItems: "center",
               }}
               >
                {skills.map((skills, index) => (
              <div
              key={index}
              className="flex flex-col items-center p-4 bg-gray-100 rounded-xl shadow hover:shadow-md transition relative"
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="w-12 h-12 mb-2 flex justify-center items-center relative">
                <img
                src={hoveredSkill === index ? skills.hoverIcon : skills.icon}
                alt={skills.name}
                className="max-w-full max-h-full object-contain"/>
                </div>
                <span className="absolute top-full mt-2 text-sm font-medium text-center text-white w-max left-1/2 -translate-x-1/2">{skills.name}</span>
              </div>
            ))}
               </div>
            </div>

            {/* {Tools Section} */}
            <div>
              <h2 className="text-xl font-semibold text-white text-center mb-4">Tools</h2>
              <div
              className="grid gap-8"
              style={{ 
                gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
                justifyItems: "center",
                alignItems: "center",
               }}
               >
                {tools.map((tools, index) => (
              <div
              key={index}
              className="flex flex-col items-center p-4 bg-gray-100 rounded-xl shadow hover:shadow-md transition relative"
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="w-12 h-12 mb-2 flex justify-center items-center">
                <img
                src={hoveredSkill === index ? tools.hoverIcon : tools.icon}
                alt={tools.name}
                className="max-w-full max-h-full object-contain"/>
                </div>
                <span className="absolute top-full mt-2 text-sm font-medium text-center text-white w-max left-1/2 -translate-x-1/2">{tools.name}</span>
              </div>
            ))}
               </div>
            </div>         
           </div>
        </div>
  );
}