import React, { Component } from "react";
import Slidebar from "./Slidebar";
import "../styles/home.css";
import "antd/dist/antd.css";
import { Row, Col, Card, Typography, Skeleton } from "antd";

const { Meta } = Card;
const { Title } = Typography;

class Home extends Component {
  state = {
    loadingImage1: true,
    loadingImage2: true,
    loadingIcon: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loadingIcon: false });
    }, 1000);
  }
  render() {
    const { loadingImage1 } = this.state;
    return (
      <div>
        <Slidebar></Slidebar>
        <div className="Life">
          <h3 id="LifeAtTitle">LIFE AT COMBUY</h3>
          <Row
            className="LifeDetail"
            justify="space-around"
            style={{ paddingTop: "5px" }}
          >
            <Col lg={6} md={12} xs={24}>
              <Card
                hoverable
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: 300,
                }}
                cover={
                  <>
                    <img
                      style={loadingImage1 ? { display: "none" } : null}
                      alt="example"
                      src="Job4_small.jpg"
                      onLoad={() => this.setState({ loadingImage1: false })}
                    />
                    {loadingImage1 && (
                      <Skeleton.Image style={{ width: 260, height: 175 }} />
                    )}
                  </>
                }
              >
                <Skeleton
                  active
                  paragraph={{ rows: 2 }}
                  loading={this.state.loadingImage1}
                >
                  <Meta
                    title="Ad eos saepe lucilius"
                    description="At eripuit signiferumque sea, vel ad mucius molestie, cu labitur."
                  />
                </Skeleton>
              </Card>
            </Col>
            <Col lg={6} md={12} xs={24}>
              <Card
                hoverable
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: 300,
                }}
                cover={
                  <>
                    <img
                      style={
                        this.state.loadingImage2 ? { display: "none" } : null
                      }
                      alt="example"
                      src="Job5_small.jpg"
                      onLoad={() => this.setState({ loadingImage2: false })}
                    />
                    {this.state.loadingImage2 && (
                      <Skeleton.Image style={{ width: 260, height: 175 }} />
                    )}
                  </>
                }
              >
                {this.state.loadingImage2 ? (
                  <Skeleton active paragraph={{ rows: 2 }} />
                ) : (
                  <Meta
                    title="Ad eos saepe lucilius"
                    description="At eripuit signiferumque sea, vel ad mucius molestie, cu labitur."
                  />
                )}
              </Card>
            </Col>
            <Col lg={6} md={12} xs={24}>
              <Card
                hoverable
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: 300,
                }}
                cover={
                  <>
                    <img
                      style={loadingImage1 ? { display: "none" } : null}
                      alt="example"
                      src="Job4_small.jpg"
                      onLoad={() => this.setState({ loadingImage1: false })}
                    />
                    {this.state.loadingImage1 ? (
                      <Skeleton.Image style={{ width: 260, height: 175 }} />
                    ) : null}
                  </>
                }
              >
                {this.state.loadingImage1 ? (
                  <Skeleton active paragraph={{ rows: 2 }} />
                ) : (
                  <Meta
                    title="Ad eos saepe lucilius"
                    description="At eripuit signiferumque sea, vel ad mucius molestie, cu labitur."
                  />
                )}
              </Card>
            </Col>
            <Col lg={6} md={12} xs={24}>
              <Card
                hoverable
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: 300,
                }}
                cover={
                  <>
                    <img
                      style={
                        this.state.loadingImage2 ? { display: "none" } : null
                      }
                      alt="example"
                      src="Job5_small.jpg"
                      onLoad={() => this.setState({ loadingImage2: false })}
                    />
                    {this.state.loadingImage2 ? (
                      <Skeleton.Image style={{ width: 260, height: 175 }} />
                    ) : null}
                  </>
                }
              >
                {this.state.loadingImage2 ? (
                  <Skeleton active paragraph={{ rows: 2 }} />
                ) : (
                  <Meta
                    title="Ad eos saepe lucilius"
                    description="At eripuit signiferumque sea, vel ad mucius molestie, cu labitur."
                  />
                )}
              </Card>
            </Col>
          </Row>
        </div>

        <div className="Life">
          <h3 id="WhyTitle">WHY COMBUY?</h3>
          <Row className="LifeDetail" style={{ paddingTop: "5px" }}>
            <Col lg={6} md={12} xs={24}>
              <Card
                id="DetailCard"
                style={{
                  width: 260,
                  height: 450,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                hoverable
              >
                {this.state.loadingIcon ? (
                  <Skeleton.Avatar active style={{ width: 120, height: 120 }} />
                ) : (
                  <ion-icon
                    style={{ fontSize: "128px" }}
                    name="people"
                  ></ion-icon>
                )}
                {this.state.loadingIcon ? (
                  <Skeleton active paragraph={{ rows: 6 }} />
                ) : (
                  <>
                    <Title level={3}>People</Title>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Recusandae enim unde repellat ex at iste voluptatum
                      nostrum, adipisci eius quasi commodi ipsa in dolore
                      deleniti neque soluta est. Possimus, officiis?
                    </p>
                  </>
                )}
              </Card>
            </Col>
            <Col lg={6} md={12} xs={24}>
              <Card
                id="DetailCard"
                style={{
                  width: 260,
                  height: 450,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                hoverable
              >
                <ion-icon style={{ fontSize: "128px" }} name="heart"></ion-icon>
                <Title level={3}>Benefit</Title>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Assumenda id ea quia maiores cumque inventore cupiditate quas
                  officiis, labore aperiam tempora ut ratione aliquid ipsum
                  atque temporibus aspernatur odio? Modi.
                </p>
              </Card>
            </Col>
            <Col lg={6} md={12} xs={24}>
              <Card
                id="DetailCard"
                style={{
                  width: 260,
                  height: 450,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                hoverable
              >
                <ion-icon
                  style={{ fontSize: "128px" }}
                  name="american-football"
                ></ion-icon>
                <Title level={3}>Lifestyle</Title>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam ex quisquam soluta consequatur dolores rem,
                  possimus itaque laudantium quidem odit aspernatur! Alias,
                  praesentium! Laboriosam odit dicta officia quis voluptatum
                  fugiat!
                </p>
              </Card>
            </Col>
            <Col lg={6} md={12} xs={24}>
              <Card
                id="DetailCard"
                style={{
                  width: 260,
                  height: 450,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                hoverable
              >
                <ion-icon
                  style={{ fontSize: "128px" }}
                  name="analytics"
                ></ion-icon>
                <Title level={3}>Development</Title>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis distinctio incidunt similique optio, earum
                  possimus? Debitis exercitationem similique magni impedit
                  molestias quo ipsum doloribus odit voluptatibus dignissimos,
                  harum, voluptatem illo?
                </p>
              </Card>
            </Col>
          </Row>
        </div>

        <div className="Quote">
          <Title id="QuoteText" level={2}>
            "At eripuit signiferumque sea, vel ad mucius molestie, cu labitur."
          </Title>
        </div>
      </div>
    );
  }
}

export default Home;
