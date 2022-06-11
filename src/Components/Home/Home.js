import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Type } from "./Type";
import homeLogo from "../Assets/home-main.svg";
import { CgFileDocument } from "react-icons/cg";
import "./Home.css";
export const Home = () => {
  return (
    <>
        <Container fluid className="home-section" id="home">
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There! <span className="wave">👋🏻</span>
                </h1>
                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> &nbsp;MD Arif</strong>
                </h1>
                <div style={{ textAlign: "left",paddingLeft:49 }} className='mt-4'>
                  <Type />
                </div>
                <a className="text-white text-decoration-none" href="https://drive.google.com/file/d/12nB0Ut4l4Z4FD-Fi-R4NZYEjb4wmWmVs/view" target='_blank' style={{marginLeft:49 }} >
                 
                < button className="btn text-white resume mt-5 border">
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                </button>
                </a>
              </Col>
              <Col md={5} style={{ paddingBottom: 20 }}>
                <img src={homeLogo} alt="home pic" className="img-fluid" />
              </Col>
            </Row>
          </Container>
        </Container>
    </>
  );
};
