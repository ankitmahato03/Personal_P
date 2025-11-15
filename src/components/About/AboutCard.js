import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ankit Mahato</span>
            -from <span className="purple"> Kolkata, India.</span>
            <br />
            "Currently, i am working as a Devops Engineer Intern  at Adani Ai Labs."
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />Devloping Web Applications
            </li>
            <li className="about-activity">
              <ImPointRight /> Gathering Knowldge About Stockmarket{" "}
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ankit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
