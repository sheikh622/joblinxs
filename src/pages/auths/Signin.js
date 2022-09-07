import {
  faFacebookF,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faUnlockAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button, Card, Col, Container, Form, InputGroup, Row
} from "@themesberg/react-bootstrap";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";
import BgImage from "../../assets/img/illustrations/signin.svg";
import { fetchToken } from "../../firebase";
import { loginRequest } from "../../Redux/auth/actions";
import { Routes } from "../../routes";
import { eyeIcon } from "../../assets/img/eyeON.svg";
const LoginPage = () => {
  const [isTokenFound, setTokenFound] = useState(false);
  const [token, setToken] = useState("");
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    localStorage.clear()
  }, [])
  useEffect(() => {
    let data;
    async function tokenFunc() {
      data = await fetchToken(setTokenFound, setToken);
      if (data) {
      }
      return data;
    }

    tokenFunc();
  }, [setTokenFound]);
  const history = useHistory();
  const {
    location: { state },
  } = history;
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
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
          webFcmToken: token,
          history: history,
          resetForm: resetForm,
          setLoader: setLoader,
        })
      );
    },
  });
  return (
    <main>
      <section className="d-flex align-items-center mt-5 mb-2">
        <div className="container">
          <Row
            className="justify-content-center form-bg-image"
            style={{ backgroundImage: `url(${BgImage})` }}
          >

            {/* {loader ? (
              <Spinner />
            ) : <> */}
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
                        // required
                        type="email"
                        value={loginFormik.values.email}
                        name="email"
                        label="Email"
                        onChange={(e) => {
                          loginFormik.setFieldValue("email", e.target.value);
                        }}
                        placeholder="example@company.com"
                      />

                    </InputGroup>
                    {loginFormik.touched.email && loginFormik.errors.email ? (
                      <div style={{ color: "red" }}>{loginFormik.errors.email}</div>
                    ) : null}
                  </Form.Group>
                  <Form.Group>
                    <Form.Group id="password" className="mb-4">
                      <Form.Label>Your Password</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faUnlockAlt} />
                        </InputGroup.Text>
                        <Form.Control
                          // required
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          label="Password"
                          value={loginFormik.values.password}
                          onChange={(e) => {
                            loginFormik.setFieldValue("password", e.target.value);
                          }}

                        />
                        <InputGroup.Text onClick={() => setShowPassword(!showPassword)}>
                          <svg width="22" height="15" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.36 0C7.28727 0 2.10116 3.77724 0 9.10909C2.10116 14.4409 7.28727 18.2182 13.36 18.2182C19.4327 18.2182 24.6188 14.4409 26.72 9.10909C24.6188 3.77724 19.4327 0 13.36 0ZM13.36 15.1818C10.0079 15.1818 7.28727 12.4612 7.28727 9.10909C7.28727 5.75695 10.0079 3.03636 13.36 3.03636C16.7121 3.03636 19.4327 5.75695 19.4327 9.10909C19.4327 12.4612 16.7121 15.1818 13.36 15.1818ZM13.36 5.46545C11.3439 5.46545 9.71636 7.09295 9.71636 9.10909C9.71636 11.1252 11.3439 12.7527 13.36 12.7527C15.3761 12.7527 17.0036 11.1252 17.0036 9.10909C17.0036 7.09295 15.3761 5.46545 13.36 5.46545Z" fill="#66707C" />
                          </svg>
                        </InputGroup.Text>

                      </InputGroup>
                      {loginFormik.touched.password && loginFormik.errors.password ? (
                        <div style={{ color: "red" }}>{loginFormik.errors.password}</div>
                      ) : null}
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
                    className="text-gray-700"
                  >
                    <Button variant="primary" type="submit" className="w-100">
                      Sign in
                    </Button>
                  </Card.Link>
                </Form>

                <div className="mt-3 mb-4 text-center">
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
                </div>
              </div>
            </Col>
            {/* </>
            } */}
          </Row>
        </Container>
      </section>
    </main>
  );
};
export default LoginPage;

