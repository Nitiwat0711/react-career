import React, { Component } from "react";
import {
  Carousel,
  Typography,
  Layout,
  Checkbox,
  Row,
  Col,
  Card,
  Button,
  Skeleton,
} from "antd";
import { Link, withRouter } from "react-router-dom";
import "../styles/jobDetail.css";
const { Title, Text } = Typography;

const contentStyle = {
  height: "350px",
  color: "#fff",
  lineHeight: "350px",
  textAlign: "center",
  background: "#00ccbc",
  margin: "0",
};

class JobDetail extends Component {
  state = {
    jobPosition: "Loading...",
    jobId: null,
    jobHighlight: null,
    jobDescription: null,
    jobQualification: null,
    careerLevel: null,
    yearOfExperience: null,
    jobType: null,
    isLoading: true,
  };

  async componentDidMount() {
    const jobId = this.props.match.params.jobId;
    const url = "http://localhost:5000/apis/job/" + jobId;
    // const response = await fetch(url);
    await fetch(url)
      .then((response) => {
        if (!response.ok) {
          this.props.history.push("/404");
          throw Error("Could not fetch the data from that resource!");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({
          jobPosition: data[0].job_position,
          jobId: data[0].id,
          jobHighlight: data[0].job_highlights,
          jobDescription: data[0].job_description,
          jobQualification: data[0].job_qualifications,
          careerLevel: data[0].career_level,
          jobType: data[0].job_type,
          yearOfExperience: data[0].years_of_experience,
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
    // const data = await response.json();

    // console.log(data[0].job_position);
    // console.log(url);
    // console.log(this.state.job);
  }

  render() {
    return (
      <div>
        <Carousel>
          <div>
            <Title level={1} style={contentStyle}>
              {this.state.jobPosition}
            </Title>
          </div>
        </Carousel>
        {this.state.isLoading ? (
          <Skeleton
            className="jobContent"
            active
            loading={this.state.isLoading}
          />
        ) : (
          <div className="jobContent">
            <div className="highlight">
              <Title level={3}>Job Highlights</Title>
              <div
                dangerouslySetInnerHTML={{
                  __html: this.state.jobHighlight,
                }}
              ></div>
            </div>
            <div className="description">
              <Title level={3}>Job Descriptions</Title>
              <div
                dangerouslySetInnerHTML={{
                  __html: this.state.jobDescription,
                }}
              ></div>
            </div>
            <div className="qualification">
              <Title level={3}>Qualifications</Title>
              <div
                dangerouslySetInnerHTML={{
                  __html: this.state.jobQualification,
                }}
              ></div>
            </div>
            <div className="addition">
              <Title level={3}>Additional Information </Title>
              <ul>
                <li>
                  <Text strong>Career Level: </Text> {this.state.careerLevel}
                </li>
                <li>
                  <Text strong>Years of Experience: </Text>
                  {this.state.yearOfExperience}
                </li>
                <li>
                  <Text strong>Job Type: </Text> {this.state.jobType}
                </li>
              </ul>
            </div>
            <div
              className="link"
              style={{
                textAlign: "center",
                margin: "3rem",
              }}
            >
              <Link to={`/apply/${this.state.jobId}#`}>
                <Button
                  type="primary"
                  size="large"
                  style={{
                    backgroundColor: "#00ccbc",
                    borderColor: "#00ccbc",
                    borderRadius: 20,
                    width: 180,
                    fontWeight: "bold",
                  }}
                >
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(JobDetail);
