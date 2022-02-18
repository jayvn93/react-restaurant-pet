import React from "react";
import './footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

const footerQuickLinks = [
    {
        display: "Term & Conditions",
        url:'#'
    },
    {
        display: "Privacy Policy",
        url:'#'
    },
    {
        display: "Return & Refund",
        url:'#'
    },
    {
        display: "Payment Method",
        url:'#'
    }
]

const footerLinks = [
    {
        display: "About",
        url:'#'
    },
    {
        display: "Menu",
        url:'#'
    },
    {
        display: "Recipes",
        url:'#'
    },
    {
        display: "Contact",
        url:'#'
    }
]
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__top">
                <Container>
                    <Row>
                        <Col lg='4' md='4' sm='6'>
                            <div className="logo">
                                <h2 className="d-flex align-items-center gap-1">
                                    <span>
                                        <i class="ri-restaurent-2-line"></i>
                                    </span>{" "}
                                    Chef Food
                                </h2>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, aut!</p>
                        </Col>

                        <Col lg='3' md='4' sm='6'>
                            <h5 className="footer__link-title">
                                Info Links
                            </h5>
                            <ListGroup>
                                {footerQuickLinks.map((item,index) => (
                                    <ListGroupItem key={index} className='link__item'>
                                        <a href={item.url}>{item.display}</a>
                                    </ListGroupItem>
                                    ))}
                            </ListGroup>
                        </Col>


                        <Col lg='2' md='4' sm='6'>
                            <h5 className="footer__link-title">
                                Quick Links
                            </h5>
                            <ListGroup>
                                {footerLinks.map((item,index) => (
                                    <ListGroupItem key={index} className='link__item'>
                                        <a href={item.url}>{item.display}</a>
                                    </ListGroupItem>
                                    ))}
                            </ListGroup>
                        </Col>

                        <Col lg='3' md='4' sm='6'>
                        <h5 className="footer__link-title">
                                Contact
                        </h5>       
                        <ListGroup>
                            <ListGroupItem className="link__item d-flex align-items-center gap-3">
                            <i class="ri-map-pin-fill"></i> Ho Chi Minh, Viet Nam {" "}
                            </ListGroupItem>

                            <ListGroupItem className="link__item d-flex align-items-center gap-3">
                            <i class="ri-map-pin-fill"></i> example@fake.com{" "}
                            </ListGroupItem>

                            <ListGroupItem className="link__item d-flex align-items-center gap-3">
                            <i class="ri-map-pin-fill"></i> +84 000 999 000 
                            </ListGroupItem>
                        </ListGroup>                             
                        </Col>
                    </Row>
                </Container>
            </div>
            
            <div className="footer__bottom">
                <Container>
                    <Row>
                        <Col lg='12'>
                            <p>Copyright 2022. Developed using Create-React-APP</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
}; 

export default Footer;