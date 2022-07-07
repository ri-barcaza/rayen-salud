import React from "react";
import { Row, Col } from "antd";
import PhoneImage from "../../components/Signup/PhoneImage";
import Form from "../../components/Signup/Form";
import "./Signup.scss";

export default function Signup() {
  return (
    <Row className="signup">
      <Col className="col-12" span={12}>
        <PhoneImage />
      </Col>

      <Col className="col-12" span={12}>
        <Form />
      </Col>
    </Row>
  );
}
