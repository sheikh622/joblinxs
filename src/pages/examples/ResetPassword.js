
import { faAngleLeft, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Col, Container, Form, InputGroup, Row } from '@themesberg/react-bootstrap';
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from 'react-router-dom';
import * as Yup from "yup";
import { resetPassword } from "../../Redux/auth/actions";
import { Routes } from "../../routes";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    location: { state },
  } = history;
  let Array = history.location.search;
  const newToken = Array.split("=")[1];

  useEffect(()=>{
    localStorage.clear()
  }, [])

  const token = useSelector((state) => state.auth.resetPasswordToken);
  const [showPassword, setShowPassword] = useState("password");
  const changePasswordState = () => {
    if (showPassword === "password") {
      setShowPassword("text");
    } else {
      setShowPassword("password");
    }
  };
  const [showConfirmPassword, setShowConfirmPassword] = useState("password");
  const changeConfirmPasswordState = () => {
    if (showConfirmPassword === "password") {
      setShowConfirmPassword("text");
    } else {
      setShowConfirmPassword("password");
    }
  };
  const ResetPasswordSchema = Yup.object().shape({
    password: Yup.string().required("Password is required")
      .oneOf([Yup.ref('confirmPassword'), null], 'Passwords must match'),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
  });
  const resetPasswordFormik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
      showPasswordToken: ""
    },
    validationSchema: ResetPasswordSchema,
    onSubmit: async (values) => {

      await dispatch(
        resetPassword({
          password: values.password,
          confirmPassword: values.confirmPassword,
          history: history,
          token: newToken,
        })
      );
    },
  });
  return (
    <main>
      <section className="bg-soft d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <Row className="justify-content-center">
            <p className="text-center">
              <Card.Link as={Link} to={Routes.Signin.path} className="text-gray-700">
                <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to sign in
              </Card.Link>
            </p>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <h3 className="mb-4">Reset password</h3>
                <Form onSubmit={resetPasswordFormik.handleSubmit}>
                  <Form.Group id="password" className="mb-4">
                    <Form.Label>Your Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control required type="password" placeholder="Password"
                        value={resetPasswordFormik.values.password}
                        label="Password"
                        name="password"
                        onChange={(e) => {
                          resetPasswordFormik.setFieldValue("password", e.target.value);
                        }}
                      />
                      {resetPasswordFormik.touched.password && resetPasswordFormik.errors.password ? (
                        <div style={{ color: "red" }}>{resetPasswordFormik.errors.password}</div>
                      ) : null}
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="confirmPassword" className="mb-4">
                    <Form.Label>Confirm Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control required type="password" placeholder="Confirm Password"
                        name="confirmPassword"
                        label="Retype Password"
                        value={resetPasswordFormik.values.confirmPassword}
                        onChange={(e) => {
                          resetPasswordFormik.setFieldValue("confirmPassword", e.target.value);
                        }}
                      />
                      {resetPasswordFormik.touched.confirmPassword && resetPasswordFormik.errors.confirmPassword ? (
                        <div style={{ color: "red" }}>{resetPasswordFormik.errors.confirmPassword}</div>
                      ) : null}
                    </InputGroup>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    Reset password
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
export default ResetPassword;

