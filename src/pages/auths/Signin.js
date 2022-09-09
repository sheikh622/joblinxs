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
        <Container>
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
                          {showPassword ? <svg width="22" height="15" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.36 0C7.28727 0 2.10116 3.77724 0 9.10909C2.10116 14.4409 7.28727 18.2182 13.36 18.2182C19.4327 18.2182 24.6188 14.4409 26.72 9.10909C24.6188 3.77724 19.4327 0 13.36 0ZM13.36 15.1818C10.0079 15.1818 7.28727 12.4612 7.28727 9.10909C7.28727 5.75695 10.0079 3.03636 13.36 3.03636C16.7121 3.03636 19.4327 5.75695 19.4327 9.10909C19.4327 12.4612 16.7121 15.1818 13.36 15.1818ZM13.36 5.46545C11.3439 5.46545 9.71636 7.09295 9.71636 9.10909C9.71636 11.1252 11.3439 12.7527 13.36 12.7527C15.3761 12.7527 17.0036 11.1252 17.0036 9.10909C17.0036 7.09295 15.3761 5.46545 13.36 5.46545Z" fill="#66707C" />
                          </svg> : <svg width="22" height="15" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.117 8.7189C10.2467 8.7189 9.41213 9.0646 8.79677 9.67996C8.18142 10.2953 7.83572 11.1299 7.83572 12.0002C7.83572 12.0962 7.84011 12.1915 7.84831 12.2855L11.4023 8.7315C11.3083 8.72329 11.2134 8.7189 11.117 8.7189ZM0.256035 22.1498L1.5076 23.4002C1.55154 23.4441 1.61114 23.4688 1.67327 23.4688C1.7354 23.4688 1.79499 23.4441 1.83894 23.4002L5.04168 20.1965C6.80847 21.0995 8.79451 21.5509 10.9998 21.5509C16.6306 21.5509 20.8318 18.6183 23.6033 12.7531C23.7147 12.5172 23.7725 12.2596 23.7725 11.9987C23.7725 11.7378 23.7147 11.4802 23.6033 11.2443C22.4959 8.91167 21.1624 7.04204 19.6028 5.6354L22.7021 2.53726C22.746 2.49331 22.7707 2.43371 22.7707 2.37158C22.7707 2.30945 22.746 2.24986 22.7021 2.20591L21.4514 0.955223C21.4075 0.911303 21.3479 0.886631 21.2858 0.886631C21.2236 0.886631 21.164 0.911303 21.1201 0.955223L0.256035 21.8181C0.234243 21.8399 0.216955 21.8657 0.20516 21.8942C0.193365 21.9226 0.187296 21.9531 0.187296 21.9839C0.187296 22.0147 0.193365 22.0452 0.20516 22.0737C0.216955 22.1022 0.234243 22.128 0.256035 22.1498ZM16.2732 12.0002C16.2733 12.8908 16.0427 13.7662 15.6039 14.5412C15.1651 15.3162 14.533 15.9643 13.7692 16.4224C13.0055 16.8805 12.1361 17.133 11.2458 17.1553C10.3554 17.1775 9.47452 16.9688 8.68884 16.5494L10.1133 15.125C10.6877 15.3089 11.3017 15.331 11.8879 15.189C12.4742 15.0469 13.0099 14.7461 13.4364 14.3196C13.8629 13.8931 14.1637 13.3573 14.3058 12.7711C14.4479 12.1849 14.4257 11.5709 14.2418 10.9964L15.6662 9.57203C16.0659 10.3189 16.2745 11.1531 16.2732 12.0002Z" fill="#66707C" />
                          </svg>}



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

