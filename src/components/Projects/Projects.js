import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";

import bitsOfCode from "../../Assets/Projects/realestate.png";
import one from "../../Assets/Projects/one.jpeg";
import kumar from "../../Assets/Projects/kumar.png";

// import ankit from "../../Assets/Projects/Ankit_Mahato.jpg";

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
              //ghLink="https://github.com/Arnab012/Summary_with_AI"
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
              //ghLink="https://github.com/Arnab012/Data_Security_On_HealthCare_Data"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Online Course Selling Platform Full Stack"
              description="This is Online Course providing Platfrom where student can buy course from There and learn .Teacher can add his course after being a member of this Platfrom.I also implement Payment integration using Razor Pay Subscription Process.I Made it Using Mern Stack and Chakra UI"
              //ghLink="https://github.com/Arnab012/Online-Course-providing-Platform"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Realestate Website static"
              description="I've developed a static website for a real estate project, designed to showcase properties with a clean and professional layout. The site features responsive design, ensuring a seamless experience on all devices. It's built with modern web technologies, offering quick loading times and easy navigation. The website effectively highlights property listings, includes detailed descriptions, and integrates high-quality images to attract potential buyers. "
              demoLink="https://realstate-one-rosy.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Doctor AppointMent Systeam"
              description="
              This is an Doctor Appointment taking Application.Here after being an Member of this platfrom a patient can choose her doctor and desire time for the Appointment .I made it Using Node js,MongoDb,Express JS"
              //ghLink="https://github.com/Arnab012/Doctor-Appointment"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="STUDENT_MANAGEMENT_SYSTEM_USING-.NET-CORE-8-AND-SQL-SERVER
              "
              description="THIS IS AN .NET CORE WEB BASED APPLICATION WHICH TAKE THE STUDNT INFORMATION AND IT WILL STORE IT ON SQL SERVER AND WHEN I AUTHORITY NEED THE DATA IT WILL SHOW THEM AS A TABEL FORM AND THEY CAN UPD…."
              //ghLink="https://github.com/Arnab012/STUDENT_MANAGEMENT_SYSTEM_USING-.NET-CORE-8-AND-SQL-SERVER"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
