import React, { Component } from 'react'
import Education from "./components/Education"
import Experience from "./components/Experience"
import Header from "./components/Header"
import PersonalProfile from "./components/PersonalProfile"
import Skills from "./components/Skills"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      personInfo: {
        name: "Anthony Dvorsky",
        field: "Computer Scientist"
      },
      contactInfo: {
        email: "ajd99@njit.edu",
        website: "https://github.com/tony2-5",
        mobile: "973-271-0339"
      },
      personalProfile: `Computer Science student and Cross Country/Track and Field athlete at the New Jersey Institute of Technology with a passion for learning and technology.
        Recently served as a Software Development Intern at Redhawk Research LLC, contributing to Jonah Direct,
        the flagship real estate management web application.
        I am looking for opportunities to gain experience and reinforce skills I have learned.`
      ,
      education: {
        education1: {
          school: "New Jersey Institute of Technology",
          info: ["BS in Computer Science","2021-2025","GPA: 3.87"]
        },
        education2: {
          school: "New Jersey Institute of Technology",
          info: ["MS in Computer Science","2025-2026"]
        }
      },
      skills: {
        group1: ["Python","Javascript/HTML/CSS","PostgreSQL"],
        group2: ["GraphQL","React","NextJS"],
        group3: ["Cypress Testing","Git","Linux"]
      },
      jobs: {
        job1: {
          title: "Software Engineer Intern at Redhawk Research LLC (May 2024-August 2024)",
          bullet1: "Revamped the Cypress testing system using JavaScript for Redhawk’s loan processing application, Jonah Direct.",
          bullet2: "Implemented email verification testing through Cypress using the Gmail-tester plugin with Google Cloud Platform.",
          bullet3: "Integrated Cypress tests into CircleCI.",
          bullet4: "Investigated the React Flow library to enhance the building of Real Estate Owned (REO) workflows in Jonah Direct.",
          bullet5: "Built a custom project using Next.js, GraphQL, Apollo, Prisma, and Dagster to showcase the capabilities of React Flow.",
          bullet6: "Demonstrated the feasibility of implementing Dagster for running data pipelines through React Flow using the Dagster GraphQL API."
        },
        job2: {
          title: "Course Assistant at New Jersey Institute of Technology (September 2023-January 2023)",
          bullet1: "Aided 20 hours weekly in a course focused on introducing programming and problem-solving techniques using Java.",
          bullet2: `Minimized professor workload by grading exams/homework, assisting lectures, and conducting two weekly recitation
          classes for a section of 40 students.`,
        },
        job3: {
          title: "Intern at Packaging Effeciency Solutions (June 2022-August 2022)",
          bullet1: "Increased workplace efficiency by creating a part testing scheduler using Visual Basic for Applications in Excel.",
          bullet2: "Assisted in creating Excel workbooks and data entry based on inventory data from Sage 100.",
        },
      }

    }
  }
  render() {
    return (
      <div>
        <Header personInfo={this.state.personInfo} contactInfo={this.state.contactInfo}></Header>
         <div id="body-div">
          <PersonalProfile personalProfile={this.state.personalProfile}></PersonalProfile>
          <Experience jobs={this.state.jobs}></Experience>
          <Skills skills={this.state.skills}></Skills>
          <Education education={this.state.education}></Education>
         </div>
      </div>
    );
  }
}

export default App;
