import React, { Component } from "react";
import {
  Carousel,
  Typography,
  Layout,
  Row,
  Col,
  Card,
  Button,
  Pagination,
  Skeleton,
  Space,
  Drawer,
} from "antd";
import { Link } from "react-router-dom";
import Filter from "./Filter";
import "../styles/AllJob.css";
import { FilterOutlined, HomeOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
const { Header, Sider, Content } = Layout;

const contentStyle = {
  height: "350px",
  color: "#fff",
  lineHeight: "350px",
  textAlign: "center",
  background: "#00ccbc",
  margin: "0",
};

const siderStyle = {
  paddingTop: "1rem",
  // paddingLeft: "2rem",
  background: "#D8D8D8",
};

const headerStyle = {
  background: "#ffffff",
  paddingTop: "10px",
  paddingLeft: "30px",
};

const contentDetailStyle = {
  paddingLeft: "30px",
  paddingRight: "30px",
  background: "#ffffff",
  paddingBottom: "50px",
};

const jobListStyle = {
  marginTop: 16,
  fontSize: "16px",
  borderRadius: "10px",
  background: "#C1EAF3",
  borderStyle: "solid",
  borderWidth: "1px",
  borderColor: "#41747F",
};

const jobListStyleMobile = {
  marginTop: 16,
  borderRadius: "10px",
  background: "#C1EAF3",
  borderStyle: "solid",
  borderWidth: "1px",
  borderColor: "#41747F",
};

const defaultCheckedList = [
  {
    id: 1,
    value: "ทั้งหมด",
  },
];
const pageSize = 3;

class AllJob extends Component {
  state = {
    checkedList: defaultCheckedList,
    jobsList: [],
    totalPage: 0,
    current: 1,
    minIndex: 0,
    maxIndex: 0,
    isLoading: true,
    Filters: {
      continents: [],
    },
    drawerVisible: false,
  };

  onChange = (checked) => {
    console.log(checked);
    this.setState({
      checkedList: checked,
    });
  };

  handleChange = (page) => {
    this.setState({
      current: page,
      minIndex: (page - 1) * pageSize,
      maxIndex: page * pageSize,
      // isLoading: true,
    });
    document.documentElement.scrollTop = 0;
  };

  async componentDidMount() {
    const url = process.env.REACT_APP_API_URL + "/apis/jobs";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      jobsList: data.jobs,
      totalPage: data.jobs.length / pageSize,
      minIndex: 0,
      maxIndex: pageSize,
      isLoading: false,
    });
    console.log(data.jobs.length);
    console.log(this.state.jobsList);
  }

  render() {
    const { Filters } = this.state;

    const showFilteredResults = async (filters) => {
      console.log(filters.continents);
      const url = process.env.REACT_APP_API_URL + "/apis/jobs";
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.jobs);
      const jobs = data.jobs;
      if (filters.continents.includes(0) || filters.continents.length === 0) {
        this.setState({
          jobsList: jobs,
          totalPage: jobs.length / pageSize,
          minIndex: 0,
          maxIndex: pageSize,
          isLoading: false,
        });
      } else {
        let filtered = jobs.filter(
          (obj) =>
            obj.id !== 0 && filters.continents.includes(obj.department_id)
        );
        this.setState({
          jobsList: filtered,
          totalPage: filtered.length / pageSize,
          minIndex: 0,
          maxIndex: pageSize,
          isLoading: false,
        });
        console.log(filtered);
      }
    };
    const handleFilters = (filters, category) => {
      console.log(filters);

      const newFilters = { ...Filters };
      newFilters[category] = filters;

      showFilteredResults(newFilters);
      this.setState({ Filters: newFilters });
    };

    const clearFilters = () => {
      console.log("clear");
      const newFilters = { ...Filters };
      newFilters["continents"] = [];
      console.log(newFilters);
      showFilteredResults(newFilters);
      this.setState({ Filters: newFilters });
    };
    return (
      <div>
        <Carousel>
          <div>
            <Title level={1} style={contentStyle}>
              ตำแหน่งงานทั้งหมด
            </Title>
          </div>
        </Carousel>

        <Layout>
          <Sider
            className="sidebar"
            theme="light"
            style={siderStyle}
            breakpoint={"lg"}
            collapsedWidth={0}
            trigger={null}
          >
            <div className="listFilter">
              <Row>
                <Text strong>ตัวกรอง</Text>
              </Row>
              <Filter
                handleFilters={(filters) =>
                  handleFilters(filters, "continents")
                }
              />
            </div>
          </Sider>
          <Layout>
            <Header style={headerStyle}>
              {this.state.jobsList.length === 0 ? (
                <Skeleton active />
              ) : (
                <Row align="medium">
                  <Col span={10}>
                    <Text id="resultItem">
                      Result : {this.state.jobsList.length} items
                    </Text>
                  </Col>
                  <Col span={6} offset={6} style={{ textAlign: "right" }}>
                    <Button
                      className="filterButton"
                      icon={<FilterOutlined />}
                      onClick={() => this.setState({ drawerVisible: true })}
                    >
                      ตัวกรอง
                    </Button>
                    <Drawer
                      title="ตัวกรอง"
                      className="drawerFilter"
                      placement="right"
                      onClose={() => this.setState({ drawerVisible: false })}
                      visible={this.state.drawerVisible}
                      width={"90%"}
                      closable={false}
                    >
                      <Filter
                        handleFilters={(filters) =>
                          handleFilters(filters, "continents")
                        }
                      />
                      <div
                        className="filterOption"
                        style={{ textAlign: "center" }}
                      >
                        <Button
                          type="primary"
                          style={{ width: "80%", marginBottom: 10 }}
                          onClick={() =>
                            this.setState({ drawerVisible: false })
                          }
                        >
                          ยืนยัน
                        </Button>
                      </div>
                    </Drawer>
                  </Col>
                </Row>
              )}
            </Header>
            <Content style={contentDetailStyle}>
              {this.state.jobsList.length === 0 ? <Skeleton active /> : null}

              <Skeleton active loading={this.state.isLoading} />
              {this.state.jobsList.map(
                (job, index) =>
                  index >= this.state.minIndex &&
                  index < this.state.maxIndex && (
                    <>
                      <div className="jobList">
                        <Link
                          to={`/job/${job.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <Card
                            hoverable
                            size="small"
                            style={jobListStyle}
                            key={job.id}
                            title={
                              <Title level={4}>
                                {job.job_position.toString()}
                              </Title>
                            }
                            // extra={
                            //   <Link to={`/job/${job.id}`}>
                            //     <Button type="link" style={{ fontSize: "16px" }}>
                            //       ดูรายละเอียด
                            //     </Button>
                            //   </Link>
                            // }
                          >
                            <Text strong>Job Highlights</Text>
                            <br />
                            <div
                              dangerouslySetInnerHTML={{
                                __html: job.job_highlights.toString(),
                              }}
                            ></div>
                          </Card>
                        </Link>
                      </div>

                      <div className="jobListMobile">
                        <Link
                          to={`/job/${job.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <Card
                            hoverable
                            key={job.id}
                            style={jobListStyleMobile}
                            size="small"
                          >
                            <Title level={5}>
                              {job.job_position.toString()}
                            </Title>
                            {/* <Space align="end"> */}
                            <HomeOutlined
                              style={{
                                display: "inline-block",
                                verticalAlign: "middle",
                              }}
                            />
                            &nbsp;
                            <Text>
                              Type : {job.job_type} | Experience : &nbsp;
                              {job.years_of_experience}
                            </Text>
                            {/* </Space> */}
                          </Card>
                        </Link>
                      </div>
                    </>
                  )
              )}
              <div
                className="pagination"
                style={{ textAlign: "right", paddingTop: "2rem" }}
              >
                <Pagination
                  pageSize={pageSize}
                  current={this.state.current}
                  total={this.state.jobsList.length}
                  onChange={this.handleChange}
                  style={{ bottom: "0px", width: "100%" }}
                />
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default AllJob;
