import React from "react";
import { Row, Button } from "react-bootstrap";
import "./Footer.css";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
export const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <Row md={12} className="home-about-social">
      
          <ul className="home-about-social-links">
        <li className="social-icons">
          <a
            href="https://github.com/mdArifulIslam12?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
          >
            <AiFillGithub />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://www.linkedin.com/in/md-arif-ba2198241/"
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
          >
            <FaLinkedinIn />
          </a>
        </li>
       

      </ul>
      <p>Copy &copy; {year} Md Arif. All Rights</p>
    </Row>
  );
};
