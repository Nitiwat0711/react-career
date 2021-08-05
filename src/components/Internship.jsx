import React, { Component } from "react";
import { Carousel, Typography, Skeleton, Row, Col } from "antd";
import "../styles/internship.css";

const { Title, Text, Link } = Typography;

const contentStyle = {
  height: "350px",
  color: "#fff",
  lineHeight: "350px",
  textAlign: "center",
  background: "#00ccbc",
  margin: "0",
};

class Internship extends Component {
  state = {
    loadingImage: true,
  };

  async componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);
  }

  render() {
    return (
      <div>
        <Carousel>
          <div>
            <Title level={1} style={contentStyle}>
              ฝึกงานกับเรา
            </Title>
          </div>
        </Carousel>
        <div className="InternshipContent">
          {this.state.isLoading ? (
            <Skeleton active />
          ) : (
            <>
              <Row>
                <Col md={10} style={{ textAlign: "center" }}>
                  <img
                    src="internship.jpg"
                    alt=""
                    style={
                      this.state.loadingImage
                        ? { display: "none" }
                        : { width: "100%", maxWidth: "500px" }
                    }
                    onLoad={() => this.setState({ loadingImage: false })}
                  />
                  {this.state.loadingImage && (
                    <Skeleton.Image
                      style={{ width: 350, height: 175, maxWidth: "500px" }}
                    />
                  )}
                </Col>
                <Col md={12} className="InternImageDetail">
                  <Title level={3} id="InternshipImageTitle">
                    Est tation latine aliquip id, mea ad tale illud
                    definitiones. Periculis omittantur necessitatibus eum ad,
                    pro eripuit minimum comprehensam ne, usu cu stet prompta
                    reformidans.
                  </Title>
                </Col>
              </Row>
              <Row>
                <Col className="InternshipReceive" md={12}>
                  <Title level={3}>ฝึกงานที่นี่ได้อะไรบ้าง</Title>
                  <Text>
                    At eripuit signiferumque sea, vel ad mucius molestie, cu
                    labitur.At eripuit signiferumque sea, vel ad mucius
                    molestie, cu labitur.At eripuit signiferumque sea, vel ad
                    mucius molestie, cu labitur.At eripuit signiferumque sea,
                    vel ad mucius molestie, cu labitur.At eripuit signiferumque
                    sea, vel ad mucius molestie, cu labitur.At eripuit
                    signiferumque sea, vel ad mucius molestie, cu labitur.At
                    eripuit signiferumque sea, vel ad mucius molestie, cu
                    labitur.At eripuit signiferumque sea, vel ad mucius
                    molestie, cu labitur.At eripuit signiferumque sea, vel ad
                    mucius molestie, cu labitur.At eripuit signiferumque sea,
                    vel ad mucius molestie, cu labitur.At eripuit signiferumque
                    sea, vel ad mucius molestie, cu labitur.At eripuit
                    signiferumque sea, vel ad mucius molestie, cu labitur.At
                    eripuit signiferumque sea, vel ad mucius molestie, cu
                    labitur.At eripuit signiferumque sea, vel ad mucius
                    molestie, cu labitur.
                  </Text>
                </Col>
                <Col md={12} className="InternshipSpecification">
                  <Title level={3}>คุณสมบัติผู้มาฝึกงาน</Title>
                  <ul>
                    <li>
                      <Text>
                        signiferumque sea, vel ad mucius molestie, cu labitur.At
                        eripuit signiferumque sea
                      </Text>
                    </li>
                    <li>
                      <Text>
                        signiferumque sea, vel ad mucius molestie, cu labitur.At
                        eripuit signiferumque sea
                      </Text>
                    </li>
                    <li>
                      <Text>
                        signiferumque sea, vel ad mucius molestie, cu labitur.At
                        eripuit signiferumque sea
                      </Text>
                    </li>
                    <li>
                      <Text>
                        signiferumque sea, vel ad mucius molestie, cu labitur.At
                        eripuit signiferumque sea
                      </Text>
                    </li>
                    <li>
                      <Text>
                        signiferumque sea, vel ad mucius molestie, cu labitur.At
                        eripuit signiferumque sea
                      </Text>
                    </li>
                  </ul>
                </Col>
              </Row>
            </>
          )}
        </div>

        {this.state.isLoading ? (
          <Skeleton active />
        ) : (
          <div
            className="InternContact"
            style={{
              backgroundColor: "#373F41",
              textAlign: "center",
              height: "100%",
              maxHeight: "200px",
            }}
          >
            <Text style={{ color: "#FFFFFF" }} id="InternContactDetail">
              ติดต่อฝึกงานหรือสหกิจศึกษา และส่ง Resume ได้ที่ คุณ abcd efghijkl
            </Text>
            <br></br>
            <Link
              id="IternContactMail"
              style={{ color: "#FFFFFF" }}
              href="mailto:abcd_hr@mycombuy.com"
            >
              abcd_hr@mycombuy.com
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default Internship;
