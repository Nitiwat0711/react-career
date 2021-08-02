import React, { Component } from "react";
import {
  Carousel,
  Typography,
  Layout,
  Row,
  Card,
  Button,
  Pagination,
  Skeleton,
} from "antd";
import { Link } from "react-router-dom";
import Filter from "./Filter";

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
  paddingLeft: "2rem",
  background: "#D8D8D8",
  width: "10rem !importtant",
};

const headerStyle = {
  background: "#ffffff",
  paddingTop: "1rem",
  paddingLeft: "3rem",
};

const contentDetailStyle = {
  paddingLeft: "3rem",
  paddingRight: "3rem",
  background: "#ffffff",
  paddingBottom: "5rem",
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
      // console.log(filters);

      const newFilters = { ...Filters };
      newFilters[category] = filters;

      if (category === "price") {
      }

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

        {/* <p>{JSON.stringify(this.state.jobsList)}</p> */}
        <Layout>
          <Sider
            theme="light"
            style={siderStyle}
            breakpoint="lg"
            collapsedWidth="0"
          >
            <Row>
              <Text strong>ตัวกรอง</Text>
            </Row>
            <Filter
              handleFilters={(filters) => handleFilters(filters, "continents")}
            />
          </Sider>
          <Layout>
            <Header style={headerStyle}>
              {this.state.jobsList.length === 0 ? (
                <Skeleton active />
              ) : (
                <Title level={3}>
                  Result: {this.state.jobsList.length} items
                </Title>
              )}
            </Header>
            <Content style={contentDetailStyle}>
              {this.state.jobsList.length === 0 ? <Skeleton active /> : null}

              <Skeleton active loading={this.state.isLoading} />
              {this.state.jobsList.map(
                (job, index) =>
                  index >= this.state.minIndex &&
                  index < this.state.maxIndex && (
                    <Card
                      hoverable
                      size="small"
                      style={jobListStyle}
                      key={job.id}
                      title={
                        <Title level={4}>{job.job_position.toString()}</Title>
                      }
                      extra={
                        <Link to={`/job/${job.id}`}>
                          <Button type="link" style={{ fontSize: "16px" }}>
                            ดูรายละเอียด
                          </Button>
                        </Link>
                      }
                    >
                      <Text strong>Job Highlights</Text>
                      <br />
                      <div
                        dangerouslySetInnerHTML={{
                          __html: job.job_highlights.toString(),
                        }}
                      ></div>
                    </Card>
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
