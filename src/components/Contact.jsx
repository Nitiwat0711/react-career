import React, { Component } from "react";
import { Row, Col, Carousel, Typography } from "antd";
import "../styles/contact.css";
const { Title, Text, Link } = Typography;

const contentStyle = {
  height: "350px",
  color: "#fff",
  lineHeight: "350px",
  textAlign: "center",
  background: "#00ccbc",
  margin: 0,
};

const socialTextStyle = {
  marginLeft: "1rem",
  fontSize: "18px",
  fontWeight: "bold",
};

class Contact extends Component {
  state = {};
  render() {
    return (
      <div>
        <Carousel>
          <div>
            <Title level={1} style={contentStyle}>
              ติดต่อเรา
            </Title>
          </div>
        </Carousel>
        <div className="ParentDetail">
          <Row className="Detail">
            <Col
              className="ColumnDetail"
              md={12}
              style={{ paddingRight: "5rem", paddingLeft: "3rem" }}
            >
              <Title level={3}>ที่อยู่</Title>
              <Title level={5}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Title>
              <Title level={5}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Title>
            </Col>
            <Col
              className="ColumnDetail"
              md={12}
              style={{ paddingLeft: "3rem" }}
            >
              <Title level={3}>Social Media</Title>
              <Row className="SocialMediaList">
                <ion-icon name="logo-facebook" size="large"></ion-icon>
                <Link
                  className="Socialtext"
                  href="https://www.facebook.com/Combuy-TH-100188871645902/"
                  target="_blank"
                  style={socialTextStyle}
                >
                  Combuy TH
                </Link>
              </Row>
              <Row className="SocialMediaList">
                <img src="line-icon_2.png" height="36px" alt="Line" />
                <Link
                  className="Socialtext"
                  href="https://line.me/R/ti/p/%40combuy"
                  target="_blank"
                  style={socialTextStyle}
                >
                  @combuy
                </Link>
              </Row>
              <Row className="SocialMediaList">
                <ion-icon name="logo-instagram" size="large"></ion-icon>
                <Link
                  className="Socialtext"
                  href="https://www.instagram.com/combuy_th/"
                  target="_blank"
                  style={socialTextStyle}
                >
                  combuy_th
                </Link>
              </Row>
              <Row className="SocialMediaList">
                <ion-icon name="mail" size="large"></ion-icon>
                <Link
                  className="Socialtext"
                  href="mailto:hello@mycombuy.com"
                  style={socialTextStyle}
                >
                  hello@mycombuy.com
                </Link>
              </Row>
              <Row className="SocialMediaList">
                <ion-icon name="call" size="large"></ion-icon>
                <Link
                  className="Socialtext"
                  href="tel:+6620880668"
                  style={socialTextStyle}
                >
                  0-2088-0668
                </Link>
              </Row>
            </Col>
          </Row>
          <div className="map">
            <Row>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.9883474580747!2d100.52042611464158!3d13.719155201745854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29984fe8d2f41%3A0x74369a6e287cb07e!2zQ29tYnV5IEhRIHwg4Lia4Lij4Li04Lip4Lix4LiXIOC4hOC4reC4oeC4muC4suC4oiDguIHguKPguLjguYrguJsg4LiI4Liz4LiB4Lix4LiUICjguKrguLPguJnguLHguIHguIfguLLguJnguYPguKvguI3guYgp!5e0!3m2!1sen!2sth!4v1626094709046!5m2!1sen!2sth"
                //   width="600"
                height="450"
                style={{
                  border: 1,
                  width: "90%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginBottom: "5rem",
                }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
