import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Input, Button } from "antd";
import { useFormik } from "formik";
import { validateEmail } from "../../utils/validations";
import { login } from "../../api/usuarios";
import "./Login.scss";

export default function Login() {
  const formik = useFormik({
    initialValues: initialValues(),
    onSubmit: async (formData) => {
      try {
        if (!formData.password || !formData.email) {
          alert("Debe completar todos los campos.");
        } else if (formData.password.length < 6) {
          alert("La contraseña debe contener al menos 6 caracteres.");
        } else if (!validateEmail(formData.email)) {
          alert("El email ingresado no es válido.");
        } else {
          const response = await login(formData);
          alert(JSON.stringify(response));
        }
      } catch (error) {
        console.log(error.toString());
      }
    },
  });

  return (
    <Row>
      <Col span={24}>
        <div className="login">
          <div className="login__container">
            <h1>Desafiogram</h1>
            <Input
              type="email"
              placeholder="Email"
              onChange={(e) => formik.setFieldValue("email", e.target.value)}
              value={formik.values.email}
            />
            <Input
              type="password"
              placeholder="Contraseña"
              onChange={(e) => formik.setFieldValue("password", e.target.value)}
              value={formik.values.password}
            />
            <Button type="primary" onClick={formik.handleSubmit}>
              Login
            </Button>
            <p>
              No tienes cuenta? <Link to="/signup">Signup</Link>
            </p>
          </div>
        </div>
      </Col>
    </Row>
  );
}

function initialValues() {
  return {
    email: "",
    password: "",
  };
}
