import React from "react";
import "./index.css";
import { Card } from 'antd';
const ResumeComponent = () => {
  return (
    <Card className="about-container">
      <h1 className="paragraph-about5"> Resume</h1>
      <div className="resume">
        <h2 className="personal-projects">PERSONAL PROJECTS</h2>
        <h4 className="resume-title">MoneyWatch</h4>
        <p>
          MoneyWatch project was developed in React.js, Node.js and MongoDB which will be a tool that will be helping people to settle a budget and sticking on it.
          It gives a clear report of how money is used  and as well as how to save.
         
        </p>
   
        <h4>Fetch USA</h4>
        <p>
          created search engine which is made in CSS , HTML and JavaScript and
          is able to fetch in API the state and cities in USA and display their
          population latitude, longitude ,etc.
        </p>
        <h4>blogPost</h4>
        <p>
          Created back end Blogpost which enable users to create blogs and
          enables anyone to add comment in Node.js and MongoDb.
        </p>
      </div>

      <div className="resume-languages">
        <h2 className="personal-projects">LANGUAGES</h2>
        <h4>English</h4>
        <h1>Full professional profeciency</h1>

        <h4>Kinyarwanda </h4>
      </div>
      <div className="resume-education">
        <h2 className="personal-projects">EDUCATION</h2>
        <h4>Undergraduate</h4>
        <h5>
          University of Rwanda/college of Science and Technolog/Department of
          Computer & software Engineering
        </h5>
       
      </div>
      <div className="resume-experience">
        <h2 className="personal-projects">WORK EXPERIENCE</h2>
        <h3>She Can Code/ Igire Rwanda Organisation</h3>
        <h4>Trainee/Full-stack Developer</h4>
        <h5>Achievements/Task</h5>
        <p>MoneyWatch, Fetch USA, Blogpost.</p>
       
      </div>
      </Card>
    
  );
};
export default ResumeComponent;