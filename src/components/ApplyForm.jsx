import React, { useEffect } from "react";
import {
  Form,
  Input,
  InputNumber,
  Button,
  DatePicker,
  Radio,
  Select,
  Space,
  Typography,
  Upload,
  message,
  Carousel,
  Modal,
} from "antd";
import {
  MinusOutlined,
  PlusOutlined,
  UploadOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import "../styles/form.css";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Address from "./Address";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";

const { Option } = Select;
const { Title } = Typography;

const requiredBool = true;

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 12,
  },
};
/* eslint-disable no-template-curly-in-string */

const contentStyle = {
  height: "350px",
  color: "#fff",
  // lineHeight: "350px",
  textAlign: "center",
  background: "#00ccbc",
  margin: "0",
};

const validateMessages = {
  required: "*กรุณาระบุ${label}",
  types: {
    email: "รูปแบบ${label}ไม่ถูกต้อง",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const uploadPdfFile = {
  name: "file",
  action: process.env.REACT_APP_API_URL + "/uploadFile",
  headers: {
    authorization: "authorization-text",
  },
  beforeUpload(file) {
    const isPdf = file.type === "application/pdf";
    if (!isPdf) {
      message.error("You can only upload PDF file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("file must smaller than 2MB!");
    }
    return isPdf && isLt2M ? true : Upload.LIST_IGNORE;
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const ApplyForm = (props) => {
  const [isSubmit, setSubmit] = React.useState(false);
  let history = useHistory();
  const [jobId, setJobID] = React.useState(null);
  const [jobPos, setJobPos] = React.useState();
  const reRef = useRef();
  const [disabledInput, setdisabledInput] = React.useState(false);
  useEffect(() => {
    if (isSubmit) {
      history.push("/applySucess");
    } else {
      const jobId = props.match.params.jobId;
      const url = process.env.REACT_APP_API_URL + "/apis/jobPosition/" + jobId;
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            history.push("/404");
            throw Error("Could not fetch the data from that resource!");
          }
          return response.json();
        })
        .then((job) => {
          setJobID(job[0].id);
          setJobPos(job[0].job_position);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  });

  const onSubmitFail = (values) => {
    console.log(values);
    Modal.error({
      title: "กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วน",
      content: "",
    });
  };

  const onConfirm = (values) => {
    console.log(values);
    setdisabledInput(true);
    window.scrollTo(0, 0);
  };

  const onGoBack = () => {
    setdisabledInput(false);
    window.scrollTo(0, 0);
  };
  const onFinish = async (values) => {
    // setdisabledInput(true);
    // window.scrollTo(0, 0);
    console.log(values);

    message.loading("Action in progress..", 0);

    const token = await reRef.current.executeAsync();
    reRef.current.reset();
    // console.log(token);
    values.token = token;
    values.job = jobPos;
    values.jobId = jobId;

    fetch(`${process.env.REACT_APP_API_URL}/apis/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
      .then(function (response) {
        console.log(response);

        if (response.ok) {
          setSubmit(true);
        }

        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
    message.destroy();
    setTimeout(() => {
      message.success("บันทึกเสร็จสิ้น", 3);
    }, 500);
  };

  const [speakingValue, setSpeakingValue] = React.useState();
  const [readingValue, setReadingValue] = React.useState();
  const [writingValue, setWritingValue] = React.useState();
  const [genderValue, setGenderValue] = React.useState();
  const [addressValue, setAddressValue] = React.useState();
  const [militaryValue, setMilitaryValue] = React.useState();
  const [drivingcarValue, setDrivingCarValue] = React.useState();
  const [drivingcarLicenseValue, setDrivingCarLicenseValue] =
    React.useState(true);
  const [drivingMotorcyValue, setDrivingMotorcyValue] = React.useState();
  const [drivingMotorcyLicenseValue, setDrivingMotorcyLicenseValue] =
    React.useState(true);
  const [currentAddressType, setCurrentAddressType] = React.useState(true);
  const [educationList, setEducationList] = React.useState({
    studyLevel: "",
    academyName: "",
    yearOfSuccess: "",
    studyDepartment: "",
    GPA: "",
  });

  return (
    <>
      <div className="header" style={contentStyle}>
        <Carousel>
          <div>
            <Title
              level={1}
              style={{
                color: "#fff",
                lineHeight: "350px",
                textAlign: "center",
              }}
            >
              {disabledInput ? "ยืนยันการ" : ""}สมัครตำแหน่ง : {jobPos}
            </Title>
          </div>
        </Carousel>
      </div>

      <div className="container" style={{ padding: "2rem" }}>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
          requiredMark={"optional"}
          onFinishFailed={onSubmitFail}
        >
          <Form.Item
            name={["user", "salary"]}
            label="เงินเดือนที่ต้องการ (บาท)"
            rules={[
              {
                required: requiredBool,
              },
            ]}
          >
            <InputNumber
              min="1"
              max="999999"
              step="1"
              disabled={disabledInput}
            />
          </Form.Item>
          <Form.Item
            name={["user", "readyToStart"]}
            label="วันที่พร้อมเริ่มทำงาน"
            rules={[
              {
                required: requiredBool,
              },
            ]}
          >
            <DatePicker
              format="DD-MM-YYYY"
              disabled={disabledInput}
              placeholder={"DD-MM-YYYY"}
            />
          </Form.Item>
          <Title level={4}>ประวัติส่วนตัว</Title>
          <Form.Item
            name={["user", "Fullname"]}
            label="ชื่อ - นามสกุล"
            rules={[
              {
                required: requiredBool,
              },
            ]}
          >
            <Input disabled={disabledInput} />
          </Form.Item>
          <Form.Item
            name={["user", "Nickname"]}
            label="ชื่อเล่น"
            rules={[
              {
                required: requiredBool,
              },
            ]}
          >
            <Input disabled={disabledInput} />
          </Form.Item>
          <Form.Item
            name={["user", "gender"]}
            label="เพศ"
            rules={[
              {
                required: requiredBool,
              },
            ]}
          >
            <Radio.Group value={genderValue} disabled={disabledInput}>
              <Radio value={0}>ชาย</Radio>
              <Radio value={1}>หญิง</Radio>
              <Radio value={2}>ไม่ระบุ</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="อีเมล"
            rules={[
              { required: requiredBool },
              {
                type: "email",
              },
            ]}
          >
            <Input disabled={disabledInput} />
          </Form.Item>
          <Form.Item
            name={["user", "phoneNumber"]}
            label="เบอร์โทรศัพท์"
            rules={[{ required: requiredBool }]}
          >
            <Input disabled={disabledInput} />
          </Form.Item>
          <Form.Item
            name={["user", "birthDate"]}
            label="วัน/เดือน/ปีเกิด"
            rules={[
              {
                required: requiredBool,
              },
            ]}
          >
            <DatePicker
              format="DD-MM-YYYY"
              disabled={disabledInput}
              placeholder={"DD-MM-YYYY"}
            />
          </Form.Item>
          <Form.Item
            name={["user", "nationality"]}
            label="สัญชาติ"
            rules={[{ required: requiredBool }]}
          >
            <Input disabled={disabledInput} />
          </Form.Item>
          <Form.Item
            name={["user", "IdCard"]}
            label="เลขที่บัตรประชาชน"
            rules={[{ required: requiredBool }]}
          >
            <Input disabled={disabledInput} />
          </Form.Item>
          <Form.Item
            name={["user", "addressType"]}
            label="ที่อยู่ปัจจุบัน"
            rules={[{ required: requiredBool }]}
          >
            <Radio.Group value={addressValue} disabled={disabledInput}>
              <Radio value={1} onClick={() => setCurrentAddressType(true)}>
                บ้าน
              </Radio>
              <Radio value={2} onClick={() => setCurrentAddressType(true)}>
                หอพัก
              </Radio>
              <Space>
                <Radio value={3} onClick={() => setCurrentAddressType(false)}>
                  อื่นๆ (โปรดระบุ)
                  <Input
                    disabled={currentAddressType || disabledInput}
                    style={{ width: 120, marginLeft: 10 }}
                  />
                </Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
          <Address disabledInputToChild={disabledInput} />
          <Form.Item name={["user", "militaryStatus"]} label="สถานะทางทหาร">
            <Select
              placeholder="เลือกสถานะ"
              value={militaryValue}
              allowClear
              disabled={disabledInput}
            >
              <Option value={0}>อยู่ในภาวะเป็นทหารเกณฑ์</Option>
              <Option value={1}>ผ่านการเกณฑ์ทหารมาแล้ว</Option>
              <Option value={2}>ได้รับการยกเว้น เช่น รด. ใบดำ ฯลฯ</Option>
            </Select>
          </Form.Item>
          <Title level={4}>ประวัติการศึกษา</Title>
          <Form.List name={["user", "education"]}>
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, fieldKey, ...restField }) => (
                  <>
                    <Form.Item
                      {...restField}
                      name={[name, "studyLevel"]}
                      label="ระดับการศึกษา"
                      fieldKey={[fieldKey, "studyLevel"]}
                      rules={[{ required: requiredBool }]}
                    >
                      <Input disabled={disabledInput} />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "academyName"]}
                      label="ชื่อสถาบัน"
                      fieldKey={[fieldKey, "academyName"]}
                      rules={[{ required: requiredBool }]}
                    >
                      <Input disabled={disabledInput} />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "yearOfSuccess"]}
                      label="ปีที่จบ"
                      fieldKey={[fieldKey, "yearOfSuccess"]}
                      rules={[{ required: requiredBool }]}
                    >
                      <DatePicker picker="year" disabled={disabledInput} />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "studyDepartment"]}
                      label="สาขา"
                      fieldKey={[fieldKey, "studyDepartment"]}
                      rules={[{ required: requiredBool }]}
                    >
                      <Input disabled={disabledInput} />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "GPA"]}
                      label="GPA"
                      fieldKey={[fieldKey, "GPA"]}
                      rules={[
                        { required: requiredBool, message: "*กรุณาระบุ GPA" },
                      ]}
                    >
                      <InputNumber
                        step="0.01"
                        max="4.00"
                        min="1.50"
                        disabled={disabledInput}
                      />
                    </Form.Item>
                    <Form.Item
                      wrapperCol={{ ...layout.wrapperCol, offset: 16 }}
                    >
                      <Button
                        type="primary"
                        danger
                        onClick={() => remove(name)}
                        icon={<MinusOutlined />}
                        disabled={disabledInput}
                      >
                        ลบข้อมูล
                      </Button>
                    </Form.Item>
                  </>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    icon={<PlusOutlined />}
                    disabled={disabledInput}
                  >
                    เพิ่มระดับการศึกษา
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Title level={4}>ประสบการณ์การทำงาน</Title>
          <Form.List name={["user", "workExperience"]}>
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, fieldKey, ...restField }) => (
                  <>
                    <Form.Item
                      {...restField}
                      name={[name, "oldJobPosition"]}
                      label="ตำแหน่ง"
                      fieldKey={[fieldKey, "oldJobPosition"]}
                      rules={[{ required: requiredBool }]}
                    >
                      <Input disabled={disabledInput} />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "oldJobSalary"]}
                      label="เงินเดือน"
                      fieldKey={[fieldKey, "oldJobSalary"]}
                      rules={[{ required: requiredBool }]}
                    >
                      <InputNumber step="1" min="1" disabled={disabledInput} />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "oldJobPalce"]}
                      label="สถานที่ทำงาน"
                      fieldKey={[fieldKey, "oldJobPalce"]}
                      rules={[{ required: requiredBool }]}
                    >
                      <Input disabled={disabledInput} />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "startDate"]}
                      label="เริ่มทำงานวันที่"
                      fieldKey={[fieldKey, "startDate"]}
                      rules={[{ required: requiredBool }]}
                    >
                      <DatePicker
                        picker="month"
                        format="MM-YYYY"
                        disabled={disabledInput}
                      />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "endDate"]}
                      label="สิ้นสุดวันที่"
                      fieldKey={[fieldKey, "endDate"]}
                    >
                      <DatePicker
                        picker="month"
                        format="MM-YYYY"
                        disabled={disabledInput}
                      />
                    </Form.Item>
                    <Form.Item
                      wrapperCol={{ ...layout.wrapperCol, offset: 16 }}
                    >
                      <Button
                        type="primary"
                        danger
                        onClick={() => remove(name)}
                        icon={<MinusOutlined />}
                        disabled={disabledInput}
                      >
                        ลบข้อมูล
                      </Button>
                    </Form.Item>
                  </>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    icon={<PlusOutlined />}
                    disabled={disabledInput}
                  >
                    เพิ่มประสบการณ์การทำงาน
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Title level={4}>ความสามารถพิเศษ</Title>
          <Form.List name={["user", "Skills"]}>
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, fieldKey, ...restField }) => (
                  <>
                    <Form.Item
                      {...restField}
                      name={[name, "language"]}
                      label="ภาษา"
                      fieldKey={[fieldKey, "language"]}
                      rules={[{ required: requiredBool }]}
                    >
                      <Input disabled={disabledInput} />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "speakingLevel"]}
                      label="ระดับการพูด"
                      fieldKey={[fieldKey, "speakingLevel"]}
                      rules={[{ required: requiredBool }]}
                    >
                      <Radio.Group
                        value={speakingValue}
                        disabled={disabledInput}
                      >
                        <Radio value={1} onClick={() => setSpeakingValue(1)}>
                          ดี
                        </Radio>
                        <Radio value={2} onClick={() => setSpeakingValue(2)}>
                          ปานกลาง
                        </Radio>
                        <Radio value={3} onClick={() => setSpeakingValue(3)}>
                          พอใช้
                        </Radio>
                      </Radio.Group>
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "readingLevel"]}
                      label="ระดับการอ่าน"
                      fieldKey={[fieldKey, "readingLevel"]}
                      rules={[{ required: requiredBool }]}
                    >
                      <Radio.Group
                        value={readingValue}
                        disabled={disabledInput}
                      >
                        <Radio value={1} onClick={() => setReadingValue(1)}>
                          ดี
                        </Radio>
                        <Radio value={2} onClick={() => setReadingValue(2)}>
                          ปานกลาง
                        </Radio>
                        <Radio value={3} onClick={() => setReadingValue(3)}>
                          พอใช้
                        </Radio>
                      </Radio.Group>
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "writingLevel"]}
                      label="ระดับการเขียน"
                      fieldKey={[fieldKey, "writingLevel"]}
                      rules={[{ required: requiredBool }]}
                    >
                      <Radio.Group
                        value={writingValue}
                        disabled={disabledInput}
                      >
                        <Radio value={1} onClick={() => setWritingValue(1)}>
                          ดี
                        </Radio>
                        <Radio value={2} onClick={() => setWritingValue(2)}>
                          ปานกลาง
                        </Radio>
                        <Radio value={3} onClick={() => setWritingValue(3)}>
                          พอใช้
                        </Radio>
                      </Radio.Group>
                    </Form.Item>
                    <Form.Item
                      wrapperCol={{ ...layout.wrapperCol, offset: 16 }}
                    >
                      <Button
                        type="primary"
                        danger
                        onClick={() => remove(name)}
                        icon={<MinusOutlined />}
                        disabled={disabledInput}
                      >
                        ลบข้อมูล
                      </Button>
                    </Form.Item>
                  </>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    icon={<PlusOutlined />}
                    disabled={disabledInput}
                  >
                    เพิ่มภาษา
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Form.Item
            name={["user", "drivingCar"]}
            label="ขับรถยนต์"
            rules={[{ required: requiredBool }]}
          >
            <Radio.Group value={drivingcarValue} disabled={disabledInput}>
              <Radio value={1} onClick={() => setDrivingCarValue(1)}>
                ไม่ได้
              </Radio>
              <Radio value={2} onClick={() => setDrivingCarValue(2)}>
                ได้
              </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name={["user", "drivingMotorcycle"]}
            label="ขับรถจักรยานยนต์"
            rules={[{ required: requiredBool }]}
          >
            <Radio.Group value={drivingMotorcyValue} disabled={disabledInput}>
              <Radio value={1} onClick={() => setDrivingMotorcyValue(1)}>
                ไม่ได้
              </Radio>
              <Radio value={2} onClick={() => setDrivingMotorcyValue(2)}>
                ได้
              </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name={["user", "drivingCarLicense"]}
            label="ใบอนุญาตขับรถยนต์"
            rules={[{ required: requiredBool }]}
          >
            <Radio.Group disabled={disabledInput}>
              <Radio value={0} onClick={() => setDrivingCarLicenseValue(true)}>
                ไม่มี
              </Radio>
              <Radio value={1} onClick={() => setDrivingCarLicenseValue(false)}>
                มี (โปรดระบุ)
                <Input
                  style={{ width: 250, marginLeft: 10 }}
                  disabled={drivingcarLicenseValue || disabledInput}
                  placeholder={"ระบุประเภทใบขับขี่"}
                />
              </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name={["user", "drivingMotorcycleLicense"]}
            label="ใบอนุญาตขับรถจักรยานยนต์"
            rules={[{ required: requiredBool }]}
          >
            <Radio.Group disabled={disabledInput}>
              <Radio
                value={0}
                onClick={() => setDrivingMotorcyLicenseValue(true)}
              >
                ไม่มี
              </Radio>
              <Radio
                value={1}
                onClick={() => setDrivingMotorcyLicenseValue(false)}
              >
                มี (โปรดระบุ)
                <Input
                  style={{ width: 250, marginLeft: 10 }}
                  disabled={drivingMotorcyLicenseValue || disabledInput}
                  placeholder={"ระบุประเภทใบขับขี่"}
                />
              </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name={["user", "typeThaiRate"]}
            label="พิมพ์ดีดภาษาไทย (คำ/นาที)"
            rules={[{ required: requiredBool }]}
          >
            <InputNumber min="1" disabled={disabledInput} />
          </Form.Item>
          <Form.Item
            name={["user", "typeEngRate"]}
            label="พิมพ์ดีดภาษาอังกฤษ (คำ/นาที)"
            rules={[{ required: requiredBool }]}
          >
            <InputNumber min="1" disabled={disabledInput} />
          </Form.Item>
          <Form.Item
            name={["user", "computerSkill"]}
            label="โปรแกรมคอมพิวเตอร์"
            rules={[{ required: requiredBool }]}
          >
            <Input.TextArea disabled={disabledInput} />
          </Form.Item>
          <Form.Item
            name={["user", "otherSkill"]}
            label="ความสามารถพิเศษอื่น ๆ"
          >
            <Input.TextArea disabled={disabledInput} />
          </Form.Item>
          <Title level={4}>บุคคลที่สามารถติดต่อได้ในกรณีฉุกเฉิน</Title>
          <Form.Item
            name={["user", "personToNotifyFullname"]}
            label="ชื่อ - นามสกุล"
            rules={[{ required: requiredBool }]}
          >
            <Input disabled={disabledInput} />
          </Form.Item>
          <Form.Item
            name={["user", "personToNotifyRelation"]}
            label="ความสัมพันธ์"
            rules={[{ required: requiredBool }]}
          >
            <Input disabled={disabledInput} />
          </Form.Item>
          <Form.Item
            name={["user", "personToNotifyPhonenumber"]}
            label="เบอร์โทรศัพท์"
            rules={[{ required: requiredBool }]}
          >
            <Input disabled={disabledInput} />
          </Form.Item>
          <Title level={4}>อัปโหลดไฟล์</Title>
          <Form.Item
            name={["user", "cv"]}
            label="CV (.pdf)"
            rules={[{ required: requiredBool, message: "*กรุณาอัพโหลด CV" }]}
          >
            <Upload {...uploadPdfFile} disabled={disabledInput}>
              <Button icon={<UploadOutlined disabled={disabledInput} />}>
                Click to Upload
              </Button>
            </Upload>
          </Form.Item>
          <Form.Item name={["user", "Resume"]} label="Resume (.pdf)">
            <Upload {...uploadPdfFile} disabled={disabledInput}>
              <Button icon={<UploadOutlined disabled={disabledInput} />}>
                Click to Upload
              </Button>
            </Upload>
          </Form.Item>
          <Form.Item name={["user", "Transcript"]} label="Transcript (.pdf)">
            <Upload {...uploadPdfFile} disabled={disabledInput}>
              <Button icon={<UploadOutlined disabled={disabledInput} />}>
                Click to Upload
              </Button>
            </Upload>
          </Form.Item>
          <Form.Item
            name={["user", "copyOfHouseParticular"]}
            label="สำเนาทะเบียนบ้าน (.pdf)"
          >
            <Upload {...uploadPdfFile} disabled={disabledInput}>
              <Button icon={<UploadOutlined disabled={disabledInput} />}>
                Click to Upload
              </Button>
            </Upload>
          </Form.Item>
          <Form.Item
            name={["user", "militaryDocument"]}
            label="เอกสารทางทหาร (.pdf)"
          >
            <Upload {...uploadPdfFile} disabled={disabledInput}>
              <Button icon={<UploadOutlined disabled={disabledInput} />}>
                Click to Upload
              </Button>
            </Upload>
          </Form.Item>
          <Title level={4}>ลิงก์ที่เกี่ยวข้อง</Title>
          <Form.Item name={["user", "portfolioLink"]} label="Portfolio Link">
            <Input disabled={disabledInput} />
          </Form.Item>
          <Form.Item name={["user", "linkedinLink"]} label="Linkedin Link">
            <Input disabled={disabledInput} />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 15 }}>
            {disabledInput ? (
              <Space>
                <Button onClick={onGoBack}>
                  <ArrowLeftOutlined />
                  กลับไปแก้ไขข้อมูล
                </Button>
                <Button type="primary" htmlType="submit">
                  ยืนยัน
                </Button>
              </Space>
            ) : (
              <Button type="primary" htmlType="submit" onClick={onConfirm}>
                บันทึก
              </Button>
            )}
          </Form.Item>
          <ReCAPTCHA
            sitekey={
              process.env.NODE_ENV === "development"
                ? process.env.REACT_APP_RECAPTCHA_SITEKEY_LOCAL
                : process.env.REACT_APP_RECAPTCHA_SITEKEY_GITHUB
            }
            size="invisible"
            ref={reRef}
          />
        </Form>
      </div>
    </>
  );
};

export default withRouter(ApplyForm);
