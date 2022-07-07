import React from "react";
import { Link } from "react-router-dom";
import { Input, Button } from "antd";
import { useFormik } from "formik";
import { validateEmail } from "../../../utils/validations";
import { signup } from "../../../api/usuarios";

export default function Form() {
  const formik = useFormik({
    initialValues: initialValues(),
    onSubmit: async (formData) => {
      try {
        if (
          !formData.username ||
          !formData.password ||
          !formData.nombre ||
          !formData.email ||
          !formData.bio
        ) {
          alert("Debe completar todos los campos.");
        } else if (formData.password.length < 6) {
          alert("La contraseña debe contener al menos 6 caracteres.");
        } else if (!validateEmail(formData.email)) {
          alert("El email ingresado no es válido.");
        } else {
          const response = await signup(formData);
          alert(JSON.stringify(response));
        }
      } catch (error) {
        console.log(error.toString());
      }
    },
  });

  return (
    <div className="signup__container">
      <h1>Desafiogram</h1>
      <p>Regístrate para que veas el clon de Instagram</p>
      <Input
        type="email"
        placeholder="Email"
        onChange={(e) => formik.setFieldValue("email", e.target.value)}
        value={formik.values.email}
      />
      <Input
        placeholder="Nombre completo"
        onChange={(e) => formik.setFieldValue("nombre", e.target.value)}
        value={formik.values.nombre}
      />
      <Input
        placeholder="Nombre usuario"
        onChange={(e) => formik.setFieldValue("username", e.target.value)}
        value={formik.values.username}
      />
      <Input
        placeholder="Biografía"
        onChange={(e) => formik.setFieldValue("bio", e.target.value)}
        value={formik.values.bio}
      />
      <Input
        type="password"
        placeholder="Contraseña"
        onChange={(e) => formik.setFieldValue("password", e.target.value)}
        value={formik.values.password}
      />
      <Button type="primary" onClick={formik.handleSubmit}>
        Sign up
      </Button>
      <p>
        Ya tienes cuenta? <Link to="/">Login</Link>
      </p>
    </div>
  );
}

function initialValues() {
  return {
    username: "",
    email: "",
    password: "",
    bio: "",
    nombre: "",
  };
}
