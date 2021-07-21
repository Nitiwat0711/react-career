import React, { useState } from "react";
import { Input, Form, AutoComplete, Select } from "antd";
import addressth from "./data/addressth.json";

const { Option } = Select;

const Address = (props) => {
  const [options, setoptions] = useState([]);
  const [subDistrict, setsubDistrict] = useState("test");
  const [district, setdistrict] = useState("test");
  const [province, setprovince] = useState("");
  const [zipCode, setzipCode] = useState("");

  const onSearch = (val) => {
    let filtered = addressth.filter(
      (obj) =>
        obj.id !== 0 &&
        (obj.sub_district_name.toString().toLowerCase().includes(val) ||
          obj.district_name.toString().toLowerCase().includes(val) ||
          obj.province_name.toString().toLowerCase().includes(val) ||
          obj.postal_code.toString().toLowerCase().includes(val))
    );
    // console.log(filtered);
    setoptions(
      filtered.map((item, index) => {
        return {
          key: item.id,
          district_name: item.district_name,
          sub_district_name: item.sub_district_name,
          province_name: item.province_name,
          postal_code: item.postal_code,
          value:
            item.sub_district_name +
            ", " +
            item.district_name +
            ", " +
            item.province_name +
            ", " +
            item.postal_code,
          label:
            item.sub_district_name +
            ", " +
            item.district_name +
            ", " +
            item.province_name +
            ", " +
            item.postal_code,
        };
      })
    );
    // console.log("option is : " + options);
  };

  const onSelect = (val, option) => {
    console.log("onSelect", val, option);
    setsubDistrict(option.sub_district_name);
    setdistrict(option.district_name);
    setprovince(option.province_name);
    setzipCode(option.postal_code);
    console.log(val);
  };

  const handleChange = (event) => {
    console.log(event.target.name);
    // const {name, value} = e.target;
    // if (name === "")
    setsubDistrict(event.target.value);
  };

  return (
    <>
      <Form.Item
        name={["user", "addressDetail"]}
        label="รายละเอียดที่อยู่"
        rules={[{ required: true }]}
        initialValue="86/14 ถนนงามวงศ์วาน 46"
      >
        <Input.TextArea
          placeholder="บ้านเลขที่ ชื่อหมู่บ้าน/คอนโด/อพาร์ทเม้นท์ ถนน ซอย เป็นต้น"
          disabled={props.disabledInputToChild}
        />
      </Form.Item>
      <Form.Item
        name={["user", "search"]}
        label="ที่อยู่"
        rules={[{ required: true }]}
      >
        <AutoComplete
          dropdownClassName="certain-category-search-dropdown"
          // dropdownMatchSelectWidth={500}
          options={options}
          onSelect={onSelect}
          onSearch={onSearch}
          value={subDistrict}
          disabled={props.disabledInputToChild}
        >
          <Input.Search placeholder="กรอกตำบล/แขวง หรืออำเภอ/เขต หรือจังหวัด หรือ รหัสไปรษณีย์" />
        </AutoComplete>
      </Form.Item>
      {/* <Form.Item
        name={["user", "sub_district"]}
        label="ตำบล/แขวง"
        rules={[{ required: true }]}
        initialValue="test"
      >
        <AutoComplete
          dropdownClassName="certain-category-search-dropdown"
          dropdownMatchSelectWidth={350}
          style={{
            width: 250,
          }}
          options={options}
          onSelect={onSelect.bind(this)}
          onSearch={onSearch}
          value={subDistrict}
        >
          <div key={subDistrict}>
            <Input
              defaultValue={subDistrict}
              value={subDistrict}
              onChange={handleChange}
            />
          </div>
        </AutoComplete>
      </Form.Item> */}
      {/* <Form.Item
        name={["user", "district"]}
        label="อำเภอ/เขต"
        rules={[{ required: true }]}
        initialValue="test"
      >
        <AutoComplete
          dropdownClassName="certain-category-search-dropdown"
          dropdownMatchSelectWidth={350}
          style={{
            width: 250,
          }}
          options={options}
          onSelect={onSelect.bind(this)}
          onSearch={onSearch}
          value={district}
        >
          <div key={district}>
            <Input defaultValue={district} value={district} name="district" />
          </div>
        </AutoComplete>
      </Form.Item>
      <Form.Item
        name={["user", "province"]}
        label="จังหวัด"
        rules={[{ required: true }]}
        initialValue="test"
      >
        <AutoComplete
          dropdownClassName="certain-category-search-dropdown"
          dropdownMatchSelectWidth={350}
          style={{
            width: 250,
          }}
          options={options}
          onSelect={onSelect.bind(this)}
          onSearch={onSearch}
          value={province}
        >
          <div key={province}>
            <Input defaultValue={province} value={province} />
          </div>
        </AutoComplete>
      </Form.Item>
      <Form.Item
        name={["user", "zip_code"]}
        label="รหัสไปรษณีย์"
        rules={[{ required: true }]}
        initialValue="test"
      >
        <AutoComplete
          dropdownClassName="certain-category-search-dropdown"
          dropdownMatchSelectWidth={350}
          style={{
            width: 250,
          }}
          options={options}
          onSelect={onSelect.bind(this)}
          onSearch={onSearch}
          value={zipCode}
        >
          <div key={zipCode}>
            <Input defaultValue={zipCode} />
          </div>
        </AutoComplete>
      </Form.Item> */}
    </>
  );
};

export default Address;
