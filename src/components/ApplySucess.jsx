import React, { Component } from "react";
import {
  CheckCircleFilled,
  CheckCircleTwoTone,
  HomeOutlined,
} from "@ant-design/icons";
import { Typography, message, Button } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

class ApplySucess extends Component {
  state = {};

  componentDidMount() {}
  render() {
    return (
      <div style={{ textAlign: "center", height: "42rem", padding: 60 }}>
        <CheckCircleTwoTone
          twoToneColor="#52c41a"
          style={{ fontSize: "150px", marginBottom: 50, marginTop: 20 }}
        />
        <Title level={2}>
          บันทึกข้อมูลเสร็จสิ้น เราจะติดต่อคุณกลับอย่างรวดเร็วที่สุด
        </Title>
        <Link to="/">
          <Button
            size="large"
            style={{
              borderRadius: 20,
              width: 180,
              fontWeight: "bold",
              backgroundColor: "#00ccbc",
              borderColor: "#00ccbc",
              color: "#FFFFFF",
            }}
          >
            กลับสู่หน้าหลัก
          </Button>
        </Link>
      </div>
    );
  }
}

export default ApplySucess;
