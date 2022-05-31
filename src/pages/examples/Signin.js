import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faEnvelope,
  faUnlockAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  Col,
  Row,
  Form,
  Card,
  Button,
  FormCheck,
  Container,
  InputGroup,
} from "@themesberg/react-bootstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { loginRequest } from "../../Redux/auth/actions";
import { useDispatch } from "react-redux";

import { Routes } from "../../routes";
import BgImage from "../../assets/img/illustrations/signin.svg";

const LoginPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState("password");
  const changePasswordState = () => {
    if (showPassword === "password") {
      setShowPassword("text");
    } else {
      setShowPassword("password");
    }
  };
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const loginFormik = useFormik({
    initialValues: {

      email: "",
      password: "",
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: async (values, { resetForm }) => {
      await dispatch(
        loginRequest({
          email: values.email,
          password: values.password,
        })
      );resetForm();
    },
  });
  return (
    <main>
      <section className="d-flex align-items-center mt-5 mb-2">
        <Container>
          <Row
            className="justify-content-center form-bg-image"
            style={{ backgroundImage: `url(${BgImage})` }}
          >
            <Col
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="bg-white card-box-shadow border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Sign in</h3>
                </div>
                <Form className="mt-4" onSubmit={loginFormik.handleSubmit}>
                  <Form.Group id="email" className="mb-4">
                    <Form.Label>Your Email</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control
                        autoFocus
                        required
                        type="email"
                        value={loginFormik.values.email}
                        name="email"
                        label="Email"
                        onChange={(e) => {
                          loginFormik.setFieldValue("email", e.target.value);
                        }}
                        placeholder="example@company.com"
                      />
                      {loginFormik.touched.email && loginFormik.errors.email ? (
                        <div style={{ color: "red" }}>{loginFormik.errors.email}</div>
                      ) : null}
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <Form.Group id="password" className="mb-4">
                      <Form.Label>Your Password</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faUnlockAlt} />
                        </InputGroup.Text>
                        <Form.Control
                          required
                          name="password"
                          type="password"
                          placeholder="Password"
                          label="Password"
                          value={loginFormik.values.password}
                          onChange={(e) => {
                            loginFormik.setFieldValue("password", e.target.value);
                          }}
                        />
                        {loginFormik.touched.password && loginFormik.errors.password ? (
                          <div style={{ color: "red" }}>{loginFormik.errors.password}</div>
                        ) : null}
                      </InputGroup>
                    </Form.Group>
                    <div className="d-flex justify-content-end align-items-center mb-4">
                      <Card.Link
                        as={Link}
                        to={Routes.ForgotPassword.path}
                        className="small text-end"
                      >
                        Forgot password?
                      </Card.Link>
                    </div>
                  </Form.Group>
                  <Card.Link
                    as={Link}
                    to={Routes.DashboardOverview.path}
                    className="text-gray-700"
                  >
                    <Button variant="primary" type="submit" className="w-100">
                      Sign in
                    </Button>
                  </Card.Link>
                </Form>

                {/* <div className="mt-3 mb-4 text-center">
                  <span className="fw-normal">or login with</span>
                </div>
                <div className="d-flex justify-content-center my-4">
                  <Button
                    variant="outline-light"
                    className="btn-icon-only card-box-shadow btn-pill text-facebook me-2"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Button>
                  <Button
                    variant="outline-light"
                    className="btn-icon-only card-box-shadow btn-pill text-google me-2 "
                  >
                    <FontAwesomeIcon icon={faGoogle} />
                  </Button>
                </div> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
export default LoginPage;

