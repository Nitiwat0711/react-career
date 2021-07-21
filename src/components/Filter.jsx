import React, { useState } from "react";
import { Checkbox, Typography } from "antd";

const { Title, Text } = Typography;

const departmentOptions = [
  {
    id: 0,
    option: "ทั้งหมด",
  },
  {
    id: 1,
    option: "ฝ่ายการตลาด",
  },
  {
    id: 2,
    option: "ฝ่ายบัญชี",
  },
  {
    id: 3,
    option: "ฝ่ายทรัพยากรบุคคล",
  },
  {
    id: 4,
    option: "ฝ่าย IT",
  },
];

const Filter = (props) => {
  const [Checked, setChecked] = useState([0]);

  const handleToggle = (value) => {
    const currentIndex = Checked.indexOf(value);
    const newChecked = [...Checked];

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
    </div>
  );
};

export default Filter;
