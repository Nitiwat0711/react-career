import React, { Component, useEffect } from "react";
import { Carousel, Typography, Select, Skeleton, Row, Col } from "antd";

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
    address: [],
    // options: null,
    options: [],
    isLoading: true,
    searchTerm: "",
    sub_district: "",
    district: "",
    province: "",
    zip_code: "",
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
        <div
          className="content"
          style={{ padding: "3rem", backgroundColor: "#f0f0f0" }}
        >
          {this.state.isLoading ? (
            <Skeleton active />
          ) : (
            <>
              <Row>
                <Col md={10} style={{ textAlign: "center" }}>
                  <img
                    src="internship.jpg"
                    alt=""
                    style={{ width: "100%", maxWidth: "500px" }}
                  />
                </Col>
                <Col md={12} style={{ paddingLeft: "1rem" }}>
                  <Title level={3}>
                    Est tation latine aliquip id, mea ad tale illud
                    definitiones. Periculis omittantur necessitatibus eum ad,
                    pro eripuit minimum comprehensam ne, usu cu stet prompta
                    reformidans.
                  </Title>
                </Col>
              </Row>
              <Row>
                <Col md={12} style={{ paddingRight: "5rem" }}>
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
                <Col md={12} style={{ paddingRight: "3rem" }}>
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
            <Text style={{ color: "#FFFFFF", fontSize: "30px" }}>
              ติดต่อฝึกงานหรือสหกิจศึกษา และส่ง Resume ได้ที่ คุณ abcd efghijkl
            </Text>
            <br></br>
            <Link
              style={{ color: "#FFFFFF", fontSize: "30px" }}
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
