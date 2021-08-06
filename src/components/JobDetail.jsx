import React, { Component } from "react";
import { Carousel, Typography, Button, Skeleton } from "antd";
import { Link, withRouter } from "react-router-dom";
import "../styles/jobDetail.css";
const { Title, Text } = Typography;

const contentStyle = {
  height: "350px",
  color: "#fff",
  textAlign: "center",
  background: "#00ccbc",
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
    const url = process.env.REACT_APP_API_URL + "/apis/job/" + jobId;
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
  }

  render() {
    return (
      <div>
        <div className="headerDetail" style={contentStyle}>
          <Carousel>
            <div>
              <Title level={1} id="jobDetailTitle">
                {this.state.jobPosition}
              </Title>
            </div>
          </Carousel>
        </div>

        {this.state.isLoading ? (
          <div className="container">
            <Skeleton
              className="jobContent"
              active
              loading={this.state.isLoading}
            />
          </div>
        ) : (
          <div className="container">
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
                      width: 180,
                    }}
                  >
                    Apply Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(JobDetail);
