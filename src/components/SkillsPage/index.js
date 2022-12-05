import "./SkillsPage.css";
import js from "../../skill-icons/javascript.svg";
import python from "../../skill-icons/python.svg";
import react from "../../skill-icons/react.svg";
import redux from "../../skill-icons/redux.svg";
import html from "../../skill-icons/html.svg";
import css from "../../skill-icons/css.svg";
import postgresql from "../../skill-icons/postgresql.svg";
import express from "../../skill-icons/express.svg";
import git from "../../skill-icons/git.svg";
import docker from "../../skill-icons/docker.svg";
import heroku from "../../skill-icons/heroku.svg";
import sequelize from "../../skill-icons/sequelize.svg";
import flask from "../../skill-icons/flask.png";
import sqlalchemy from "../../skill-icons/sqlalchemy.png";
import typescript from "../../skill-icons/typescript.svg";
import rails from "../../skill-icons/rails.png";
import ruby from "../../skill-icons/ruby.png";
import graphql from "../../skill-icons/graphql.png";

function SkillsPage() {
  const skills = [
    { name: "JavaScript", img: js },
    { name: "TypeScript", img: typescript },
    { name: "Python", img: python },
    { name: "React", img: react },
    { name: "Redux", img: redux },
    { name: "Ruby", img: ruby },
    { name: "Rails", img: rails },
    { name: "GraphQL", img: graphql },
    { name: "PostgreSQL", img: postgresql },
    { name: "Flask", img: flask },
    { name: "Express", img: express },
    { name: "SQLAlchemy", img: sqlalchemy },
    { name: "Sequelize", img: sequelize },
    { name: "HTML", img: html },
    { name: "CSS", img: css },
    { name: "Git", img: git },
    { name: "Docker", img: docker },
    { name: "Heroku", img: heroku },
  ];

  return (
    <div>
      <div className="skills-header">Skills</div>
      <div className="skills-container">
        {skills.map((skill) => (
          <div key={skill.name} className="skills-img">
            <div className="img-container">
              <img src={skill.img} alt="skill logo" />
            </div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsPage;
