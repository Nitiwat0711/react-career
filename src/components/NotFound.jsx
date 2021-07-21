import React, { Component } from "react";
import { Typography } from "antd";
const { Title, Text } = Typography;

const contentStyle = {
  textAlign: "center",
  padding: "5rem",
};

class NotFound extends Component {
  state = {};
  render() {
    return (
      <div style={contentStyle}>
        <ion-icon
          name="alert-circle"
          style={{ fontSize: "250px", color: "#FF4545" }}
        ></ion-icon>
        <Title level={1}>404 Page Not Found</Title>
        <Title level={1}>ไม่พบหน้าที่คุณต้องการค้นหา</Title>
      </div>
    );
  }
}

export default NotFound;
