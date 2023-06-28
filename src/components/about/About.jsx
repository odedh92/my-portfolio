/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ year Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>10+ Private Clients</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
            ● 1+ year of experience as a Full Stack Developer using Angular,
            Javascript, Typescript, SQL, PHP, and IOS ● E2E development
            experience from SaaS companies ● Developed, debugged, delivered, and
            maintained a highly-complex system ● Experience with React, Laravel,
            Node.js, Express.js, Rest-API Bootstrap, MongoDB, FireBase,
            Bitbucket, and Jira ● Working in Agile methodologies and
            collaborating effectively with cross-functional teams ● Strong
            experience in Scrum, Git, and Task management ● Deep understanding
            of HTML5/CSS3 (LESS/SCSS); Hands-on experience with UI&UX ● English:
            Full-professional proficiency
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
 