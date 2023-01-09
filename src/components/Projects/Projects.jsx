import React from "react";
import Item from "./Item";
import "./Projects.css";

const data = [
  {
    name: "Editor realtime",
    desc: "Basic realtime colab code editor.",
    tool: ["mongodb", "react", "nodejs", "socket.io"],
    link: "https://editor-realtime.herokuapp.com/"
  },
  {
    name: "E-learning",
    desc: "Basic e-learning for online education.",
    tool: ["mongodb", "react", "nodejs", "MUI"],
  },
  {
    name: "UI Admin dashboard",
    desc: "Admin managent dashborad ui",
    tool: ["react"],
    link: "https://react-dashboard-ui-seven.vercel.app/"
  },
];


const Projects = () => {

  const hanldeOpenLink = (url) => {
    if(url) window.open(url)
  }


  return (
    <div className="projects-container">
      <div className="title">
        <p>My project</p>
        <h1>Personal Projects</h1>
      </div>
      <div className="projects-items">
        {data.map((item, i) => (
          <Item  key={i} {...item} openLink={() => {
            hanldeOpenLink(item.link)
          }}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
