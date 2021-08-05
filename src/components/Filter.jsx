import React, { useState } from "react";
import { Checkbox, Typography, Button, Row, Col, Space } from "antd";
import "../styles/filter.css";

const { Text } = Typography;

const departmentOptions = [
  {
    id: 1,
    option: "การตลาด",
  },
  {
    id: 2,
    option: "บัญชี",
  },
  {
    id: 3,
    option: "ทรัพยากรบุคคล",
  },
  {
    id: 4,
    option: "IT",
  },
  {
    id: 5,
    option: "จัดซื้อ",
  },
  {
    id: 6,
    option: "ประชาสัมพันธ์",
  },
];

const Filter = (props) => {
  const [Checked, setChecked] = useState([]);

  const handleToggle = (value) => {
    const currentIndex = Checked.indexOf(value);
    const newChecked = [...Checked];
    console.log("value", value);
    console.log("check", Checked);
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    props.handleFilters(newChecked);
  };

  return (
    <div>
      <Space align="baseline">
        <Text>ฝ่ายงาน</Text>
      </Space>
      <br />
      {departmentOptions.map((value, index) => (
        <React.Fragment key={index}>
          <Checkbox
            onChange={() => handleToggle(value.id)}
            type="checkbox"
            checked={Checked.indexOf(value.id) === -1 ? false : true}
          />
          <Text style={{ marginLeft: "5px" }}>{value.option}</Text>
          <br />
        </React.Fragment>
      ))}

      <div className="clearFilterfull" style={{ textAlign: "right" }}>
        <Button
          type="link"
          onClick={() => {
            setChecked([]);
            props.handleFilters([]);
          }}
          style={{ color: "#C20000" }}
        >
          ล้างทั้งหมด
        </Button>
      </div>

      <div className="clearFilterMobile" style={{ textAlign: "center" }}>
        <Button
          danger
          style={{ marginBottom: 10, marginTop: 10, width: "80%" }}
          onClick={() => {
            setChecked([]);
            props.handleFilters([]);
          }}
        >
          ล้างทั้งหมด
        </Button>
      </div>
    </div>
  );
};

export default Filter;
