import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";

import bitsOfCode from "../../Assets/Projects/blog.png";
import one from "../../Assets/Projects/one.jpeg";
import two from "../../Assets/Projects/two.jpeg";
import th from "../../Assets/Projects/th.jpeg";
import kumar from "../../Assets/Projects/kumar.png";

import arnab from "../../Assets/Projects/arnab.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kumar}
              isBlog={false}
              title="Summary_with_AI"
              description="
              
              This is an website made using Vite and React.js which will take url as a input and give you the summary as a result of the link
              
              "
              ghLink="https://github.com/Arnab012/Summary_with_AI"
              demoLink="https://resilient-peony-9c92d5.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={one}
              isBlog={false}
              title="Data_Security_On_HealthCare_Data"
              description="
              This is Web Based Application For Securing the Sensitive Data of the Patient in the Cloud.We have Implemented Secure Stroage and Secure Indexing .I made it Using Node js,Express js,MongoDb Atlas and Hasing and Encryption Techniques."
              ghLink="https://github.com/Arnab012/Data_Security_On_HealthCare_Data"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Online Course Selling Platform Full Stack"
              description="This is Online Course providing Platfrom where student can buy course from There and learn .Teacher can add his course after being a member of this Platfrom.I also implement Payment integration using Razor Pay Subscription Process.I Made it Using Mern Stack and Chakra UI"
              ghLink="https://github.com/Arnab012/Online-Course-providing-Platform"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Doctor AppointMent Systeam"
              description="
              This is an Doctor Appointment taking Application.Here after being an Member of this platfrom a patient can choose her doctor and desire time for the Appointment .I made it Using Node js,MongoDb,Express JS"
              ghLink="https://github.com/Arnab012/Doctor-Appointment"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={two}
              isBlog={false}
              title="ReenTrancy-Attcak-in-BlockChain-Implementation"
              description="About
              Latency refers to the delay or lag in the transfer of data or the execution of tasks within a computer system, where before Upadte the Balance it Call Another Function Automatically therefore the Funds will stolen from the Bank Smart Contract"
              ghLink="https://github.com/Arnab012/ReenTrancy-Attcak-in-BlockChain-Implementation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={th}
              isBlog={false}
              title="Crypto-AirDrop-Hunter-using-BlockChain-AutomAtically"
              description="THis is Backend which is connected to the cloud and cloud isconnected to the BlockChain .They Transfar Currency and swap between Each other and This will give them Air Drop if they are lucky."
              ghLink="https://github.com/Arnab012/Crypto-AirDrop-Hunter-using-BlockChain-AutomAtically"
              demoLink="https://nimble-mooncake-352bb5.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={arnab}
              isBlog={false}
              title="My Crypto"
              description="A sleek and responsive Crypto Trading Advice platform built with React. This application offers real-time trading tips, market analysis, and personalized advice to help users make informed decisions in the cryptocurrency market. Features include a user-friendly interface, live data updates, and interactive charts. Ideal for both novice and experienced traders seeking to optimize their crypto investments.."
              ghLink="https://github.com/Arnab012/my_crypto"
              demoLink="https://app-crypto-henna.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="STUDENT_MANAGEMENT_SYSTEM_USING-.NET-CORE-8-AND-SQL-SERVER
              "
              description="THIS IS AN .NET CORE WEB BASED APPLICATION WHICH TAKE THE STUDNT INFORMATION AND IT WILL STORE IT ON SQL SERVER AND WHEN I AUTHORITY NEED THE DATA IT WILL SHOW THEM AS A TABEL FORM AND THEY CAN UPD…."
              ghLink="https://github.com/Arnab012/STUDENT_MANAGEMENT_SYSTEM_USING-.NET-CORE-8-AND-SQL-SERVER"
              // demoLink="https://app-crypto-henna.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
