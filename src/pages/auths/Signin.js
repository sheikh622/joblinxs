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
import { loginRequest, facebookLogin, googleLogin } from "../../Redux/auth/actions";
import { Routes } from "../../routes";
import { eyeIcon } from "../../assets/img/eyeON.svg";
import { useGoogleLogin } from "@react-oauth/google";
// import { useGoogleLogin } from '@react-oauth/google';
import FacebookLogin from "react-facebook-login";

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
  const responseFacebook = (response) => {
    let facebookId = response.id;
    let firstName = response.firstName;
    let lastName = response.lastName;
    let email = response.email;
    console.log(facebookId, "====facebookId===========")
    dispatch(
      facebookLogin({
        facebookId: facebookId,
        firstName: firstName,
        email:email,
        lastName:lastName,
      })
    )
    console.log(response, "here is response");
  };

  const Goolelogin = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
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
                          </svg> : <svg width="22" height="15" viewBox="3 4 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.117 11.7189C14.2467 11.7189 13.4121 12.0646 12.7968 12.68C12.1814 13.2953 11.8357 14.1299 11.8357 15.0002C11.8357 15.0962 11.8401 15.1915 11.8483 15.2855L15.4023 11.7315C15.3083 11.7233 15.2134 11.7189 15.117 11.7189ZM4.25603 25.1498L5.5076 26.4002C5.55154 26.4441 5.61114 26.4688 5.67327 26.4688C5.7354 26.4688 5.79499 26.4441 5.83894 26.4002L9.04168 23.1965C10.8085 24.0995 12.7945 24.5509 14.9998 24.5509C20.6306 24.5509 24.8318 21.6183 27.6033 15.7531C27.7147 15.5172 27.7725 15.2596 27.7725 14.9987C27.7725 14.7378 27.7147 14.4802 27.6033 14.2443C26.4959 11.9117 25.1624 10.042 23.6028 8.6354L26.7021 5.53726C26.746 5.49331 26.7707 5.43371 26.7707 5.37158C26.7707 5.30945 26.746 5.24986 26.7021 5.20591L25.4514 3.95522C25.4075 3.9113 25.3479 3.88663 25.2858 3.88663C25.2236 3.88663 25.164 3.9113 25.1201 3.95522L4.25603 24.8181C4.23424 24.8399 4.21696 24.8657 4.20516 24.8942C4.19337 24.9226 4.1873 24.9531 4.1873 24.9839C4.1873 25.0147 4.19337 25.0452 4.20516 25.0737C4.21696 25.1022 4.23424 25.128 4.25603 25.1498ZM20.2732 15.0002C20.2733 15.8908 20.0427 16.7662 19.6039 17.5412C19.1651 18.3162 18.533 18.9643 17.7692 19.4224C17.0055 19.8805 16.1361 20.133 15.2458 20.1553C14.3554 20.1775 13.4745 19.9688 12.6888 19.5494L14.1133 18.125C14.6877 18.3089 15.3017 18.331 15.8879 18.189C16.4742 18.0469 17.0099 17.7461 17.4364 17.3196C17.8629 16.8931 18.1637 16.3573 18.3058 15.7711C18.4479 15.1849 18.4257 14.5709 18.2418 13.9964L19.6662 12.572C20.0659 13.3189 20.2745 14.1531 20.2732 15.0002Z" fill="#66707C" />
                            <path d="M2.39668 15.7559C3.42793 17.9277 4.65537 19.6987 6.079 21.0688L10.3019 16.8457C9.94589 15.9152 9.86699 14.9015 10.0747 13.9271C10.2824 12.9527 10.7678 12.0593 11.4723 11.3549C12.1767 10.6504 13.0701 10.165 14.0445 9.9573C15.0189 9.7496 16.0326 9.82851 16.9631 10.1845L20.5449 6.60264C18.8832 5.83369 17.035 5.44922 15.0002 5.44922C9.36934 5.44922 5.16816 8.38183 2.39668 14.2471C2.28526 14.483 2.22747 14.7406 2.22747 15.0015C2.22747 15.2623 2.28526 15.52 2.39668 15.7559Z" fill="#66707C" />
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
                  {/* <Button
                    variant="outline-light"
                    className="btn-icon-only card-box-shadow btn-pill text-facebook me-2"
                    
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Button> */}
                  <Button
                    variant="outline-light"
                    className="btn-icon-only card-box-shadow btn-pill text-google me-2 "
                    onClick={() => Goolelogin()}
                  >
                    <FontAwesomeIcon icon={faGoogle} />
                  </Button>
                </div>
                <div
                //  className={`col-lg-12
                //   // ${styles.socialLogin}`
                // }
                 >
                  {/* <GoogleLogin
                    width="368px"
                    height="450px"
                    context="Google"
                    text="Google"
                    buttonText="Google"
                    onSuccess={(credentialResponse) => {
                      console.log(credentialResponse, "==================credentialResponse==========")
                      dispatch(
                        googleLogin({
                          idToken: credentialResponse.credential,
                        })
                      );
                    }}
                    onError={() => {                               
                      console.log("Login Failed");
                    }}
                  /> */}
                  <FacebookLogin
                    appId="652637439522601"
                    autoLoad={false}
                    textButton="Facebook"
                    icon="fa-facebook"
                    // cssClass={styles.butonfacebook}
                    fields="name,email,picture"
                    onClick={responseFacebook}
                    callback={responseFacebook}
                  />
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

