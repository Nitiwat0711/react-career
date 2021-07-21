import React, { Component, useEffect } from "react";
import {
  Carousel,
  Typography,
  AutoComplete,
  Button,
  Select,
  Skeleton,
  Input,
} from "antd";
import addressth from "./data/addressth.json";

const { Title, Text } = Typography;
const { Option } = Select;

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
    // const url = "http://localhost:5000/apis/addresses";
    // const response = await fetch(url);
    // const address = await response.json();
    // const newData = address.map(address);
    // console.log(newData);
    this.setState({ address: addressth, isLoading: false });
    // console.log(address.rows[99]);
    console.log(this.state.address);
  }

  render() {
    const onSearch = (val) => {
      let filtered = addressth.filter(
        (obj) =>
          obj.id !== 0 &&
          obj.sub_district_name.toString().toLowerCase().includes(val)
      );
      console.log(filtered);
      this.setState({
        options: filtered.map((item, index) => {
          return {
            key: item.sub_district_id,
            district_name: item.district_name,
            sub_district_name: item.sub_district_name,
            province_name: item.province_name,
            postal_code: item.postal_code,
            value: item.sub_district_name,
            label:
              item.sub_district_name +
              ", " +
              item.district_name +
              ", " +
              item.province_name +
              ", " +
              item.postal_code,
          };
        }),
      });
      console.log(this.state.options);
    };

    const onSelect = (val, option) => {
      console.log("onSelect", val, option);
      this.setState({
        sub_district: option.sub_district_name,
        district: option.district_name,
        province: option.province_name,
        zip_code: option.postal_code,
      });
    };

    return (
      <div>
        <Carousel>
          <div>
            {/* <img
              src={window.location.origin + "/assets/Job2.jpg"}
              alt="ฝึกงานกับเรา"
            ></img> */}
            <Title level={1} style={contentStyle}>
              ฝึกงานกับเรา
            </Title>
          </div>
        </Carousel>

        <AutoComplete
          dropdownClassName="certain-category-search-dropdown"
          dropdownMatchSelectWidth={500}
          style={{
            width: 250,
          }}
          options={this.state.options}
          onSelect={onSelect}
          onSearch={onSearch}
        >
          <Input size="large" placeholder="input here" />
        </AutoComplete>

        {this.state.isLoading ? (
          <div style={{ textAlign: "center", padding: "5rem" }}>
            <Skeleton active />
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "5rem" }}>
            {/* <input
              type="text"
              placeholder="Search..."
              onChange={(event) =>
                this.setState({
                  searchTerm: event.target.value,
                })
              }
            /> */}

            {/* {this.state.address
              .filter((value) => {
                if (this.state.searchTerm === "") {
                  return value;
                } else if (
                  value.sub_district_name
                    .toLowerCase()
                    .includes(this.state.searchTerm.toLocaleLowerCase())
                ) {
                  return value;
                }
              })
              .map((value, key) => {
                return (
                  <div className="subDistrict" key={key}>
                    <Text>{value.sub_district_name}</Text>
                    <br />
                  </div>
                );
              })} */}
          </div>
        )}
      </div>
    );
  }
}

export default Internship;
