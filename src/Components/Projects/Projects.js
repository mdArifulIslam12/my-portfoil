import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Projects.css";
import ManufactuerComputer from '../Assets/computer.png'
import Computer from '../Assets/computer2.png'
import Travel from '../Assets/tarvel.png'
import { DiReact, DiJavascript, DiGithubBadge, DiHtml5,DiNodejs,
  DiMongodb, } from "react-icons/di";
import { FaLink, FaCss3 } from "react-icons/fa";
import  {FaBootstrap} from 'react-icons/fa';
import  {SiTailwindcss} from 'react-icons/si';
export const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <Card className="project-card-view" style={{ textAlign: "center" }}>
              <Card.Img variant="top" src={ManufactuerComputer} alt="Manunfacturer Computer" />
              <Card.Body>
                <Card.Title style={{ fontWeight: "800" }}>
                  Manufacturer Computer
                </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                It's a CRUD operation-based website that includes several user dashboards.Authorized people can manage orders, products data, and review  Login with firebase Google authentication features and Stripe payment gateway system
                </Card.Text>
                <div className="Techstacks">
                  <DiReact className="Techstacks-icons" />
                  <DiJavascript className="Techstacks-icons" />
                  <FaCss3 className="Techstacks-icons" />
                  <DiHtml5 className="Techstacks-icons" />
                  <DiNodejs className="Techstacks-icons" />
                  <DiMongodb className="Techstacks-icons" />
                  <SiTailwindcss className="Techstacks-icons" />
                </div>
                <Button
                  variant="primary"
                  style={{ marginTop: "5%" }}
                  href="https://github.com/mdArifulIslam12/manufacture-client"
                  target="_blank"
                >
                  {" "}
                  <DiGithubBadge /> Client Code
                </Button>
                <Button
                  variant="primary"
                  style={{ marginTop: "5%",marginLeft: "5%", }}
                  href="https://github.com/mdArifulIslam12/manufacturer-server"
                  target="_blank"
                >
                  {" "}
                  <DiGithubBadge /> Server Code
                </Button>
                <Button
                  variant="primary"
                  style={{ marginLeft: "5%", marginTop: "5%" }}
                  href="https://superb-youtiao-8ad723.netlify.app/"
                  target="_blank"
                >
                  {" "}
                  <FaLink /> Link
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="project-card">
            <Card className="project-card-view" style={{ textAlign: "center" }}>
              <Card.Img variant="top" src={Computer} alt="Electronics Wearhouse" />
              <Card.Body>
                <Card.Title style={{ fontWeight: "800" }}>
                  Electronics Wearhouse
                </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                It's a CRUD operation-based website that includes several user dashboards.User manages the Email-based and Google authentication login system and some protected route

                </Card.Text>
                <div className="Techstacks">
                  <DiReact className="Techstacks-icons" />
                  <DiJavascript className="Techstacks-icons" />
                  <FaCss3 className="Techstacks-icons" />
                  <DiHtml5 className="Techstacks-icons" />
                  <DiNodejs className="Techstacks-icons" />
                  <DiMongodb className="Techstacks-icons" />
                  <FaBootstrap className="Techstacks-icons" />
                </div>
                <Button
                  variant="primary"
                  style={{ marginTop: "5%" }}
                  href="https://github.com/mdArifulIslam12/electronics-warehouse-client"
                  target="_blank"
                >
                  {" "}
                  <DiGithubBadge /> Client Code
                </Button>
                <Button
                  variant="primary"
                  style={{ marginTop: "5%",marginLeft: "5%", }}
                  href="https://github.com/mdArifulIslam12/electronics-warehouse-server"
                  target="_blank"
                >
                  {" "}
                  <DiGithubBadge /> Server Code
                </Button>
                <Button
                  variant="primary"
                  style={{ marginLeft: "5%", marginTop: "5%" }}
                  href="https://inventory-electronics.web.app/"
                  target="_blank"
                >
                  {" "}
                  <FaLink /> Link
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="project-card">
            <Card className="project-card-view" style={{ textAlign: "center" }}>
              <Card.Img
                variant="top"
                src={Travel}
                alt="Travel"
              />
              <Card.Body>
                <Card.Title style={{ fontWeight: "800" }}>Tour Travel</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                It's a individual based travel agency	The home page describes the tourist service Social login has been used is this project.
                </Card.Text>
                <div className="Techstacks">
                  <DiJavascript className="Techstacks-icons" />
                  <FaCss3 className="Techstacks-icons" />
                  <DiHtml5 className="Techstacks-icons" />
                  <FaBootstrap className="Techstacks-icons" />
                </div>
                <Button
                  variant="primary"
                  style={{ marginTop: "5%" }}
                  href="https://github.com/mdArifulIslam12/travel"
                  target="_blank"
                >
                  {" "}
                  <DiGithubBadge /> Github
                </Button>
                <Button
                  variant="primary"
                  style={{ marginLeft: "5%", marginTop: "5%" }}
                  href="https://travel-115f2.web.app/"
                  target="_blank"
                >
                  {" "}
                  <FaLink /> Link
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}></Col> 
        </Row>
      </Container>
    </Container>
  );
};
