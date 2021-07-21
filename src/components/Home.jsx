import React, { Component } from "react";
import Slidebar from "./Slidebar";
import "../styles/home.css";
import "antd/dist/antd.css";
import { Row, Col, Card, Typography } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const { Meta } = Card;
const { Title } = Typography;

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Slidebar></Slidebar>
        <div className="Life">
          <h3>LIFE AT COMBUY</h3>
          <Row className="LifeDetail">
            <Col xs={24} xl={6}>
              <Card
                hoverable
                style={{ width: 260 }}
                cover={<img alt="example" src="assets/Job4.jpg" />}
              >
                <Meta
                  title="Ad eos saepe lucilius"
                  description="At eripuit signiferumque sea, vel ad mucius molestie, cu labitur."
                />
              </Card>
            </Col>
            <Col xs={24} xl={6}>
              <Card
                hoverable
                style={{ width: 260 }}
                cover={<img alt="example" src="assets/Job5.jpg" />}
              >
                <Meta
                  title="Ad eos saepe lucilius"
                  description="At eripuit signiferumque sea, vel ad mucius molestie, cu labitur."
                />
              </Card>
            </Col>
            <Col xs={24} xl={6}>
              <Card
                hoverable
                style={{ width: 260 }}
                cover={<img alt="example" src="assets/Job4.jpg" />}
              >
                <Meta
                  title="Ad eos saepe lucilius"
                  description="At eripuit signiferumque sea, vel ad mucius molestie, cu labitur."
                />
              </Card>
            </Col>
            <Col xs={24} xl={6}>
              <Card
                hoverable
                style={{ width: 260 }}
                cover={<img alt="example" src="assets/Job5.jpg" />}
              >
                <Meta
                  title="Ad eos saepe lucilius"
                  description="At eripuit signiferumque sea, vel ad mucius molestie, cu labitur."
                />
              </Card>
            </Col>
          </Row>
        </div>

        <div className="Life">
          <h3>WHY COMBUY?</h3>
          <Row className="LifeDetail">
            <Col xs={24} xl={6}>
              <Card
                className="DetailCard"
                style={{ width: 260, height: 450 }}
                hoverable
              >
                <ion-icon
                  style={{ fontSize: "128px" }}
                  name="people"
                ></ion-icon>
                <Title level={3}>People</Title>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Recusandae enim unde repellat ex at iste voluptatum nostrum,
                  adipisci eius quasi commodi ipsa in dolore deleniti neque
                  soluta est. Possimus, officiis?
                </p>
              </Card>
            </Col>
            <Col xs={24} xl={6}>
              <Card
                className="DetailCard"
                style={{ width: 260, height: 450 }}
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
            <Col xs={24} xl={6}>
              <Card
                className="DetailCard"
                style={{ width: 260, height: 450 }}
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
            <Col xs={24} xl={6}>
              <Card
                className="DetailCard"
                style={{ width: 260, height: 450 }}
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
          <Title level={2}>
            "At eripuit signiferumque sea, vel ad mucius molestie, cu labitur."
          </Title>
        </div>
      </div>
    );
  }
}

export default Home;
