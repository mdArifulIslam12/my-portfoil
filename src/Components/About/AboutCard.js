import React from "react";
import "./About.css";
import { Card } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";
export const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"></span>
            from <span className="purple"> Cumilla,Bangladesh.</span>
            <br />I am a student and H.S.C examine 2022 Student from I am a student and H.S.C examine 2022 Student from Harishchar union high school & college.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Box cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning React Navgitve
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
};
