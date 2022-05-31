import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Form,
  Card,
  Button,
  Container,
  InputGroup,
} from "@themesberg/react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Routes } from "../../routes";
import { forgotPassword } from "../../Redux/auth/actions"
import * as Yup from "yup";
import { useFormik } from "formik";
const ForgetPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const ForgetSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
  });

  const forgetFormik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: ForgetSchema,
    onSubmit: async (values, { resetForm }) => {

      await dispatch(
        forgotPassword({
          email: values.email,
        })
      ); resetForm();
    },
  });
  return (
    <main>
      <section className="vh-lg-100 mt-4 mt-lg-0 bg-soft d-flex align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="signin-inner my-3 my-lg-0 bg-white card-box-shadow border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <h3>Forgot your password?</h3>
                <p className="mb-4">
                  Don't fret! Just type in your email and we will send you a
                  code to reset your password!
                </p>
                <Form onSubmit={forgetFormik.handleSubmit}>
                  <div className="mb-3">
                    <Form.Label htmlFor="email">Your Email</Form.Label>
                    <InputGroup id="email">
                      <Form.Control
                        required
                        autoFocus
                        type="email"
                        name="email"
                        label="Email"
                        value={forgetFormik.values.email}
                        onChange={(e) => {
                          forgetFormik.setFieldValue("email", e.target.value);
                        }}
                        placeholder="john@company.com"
                      />
                      {forgetFormik.touched.email && forgetFormik.errors.email ? (
                        <div style={{ color: "red" }}>
                          {forgetFormik.errors.email}
                        </div>
                      ) : null}
                    </InputGroup>
                  </div>
                  <p className="d-flex justify-content-end my-3">
                    <Card.Link
                      as={Link}
                      to={Routes.Signin.path}
                      className="small text-end"
                    >
                      Sign In
                    </Card.Link>
                  </p>

                  <Card.Link
                    as={Link}
                    to={Routes.ResetPassword.path}
                    className="text-gray-700"
                  >
                    <Button variant="primary" type="submit" className="w-100">
                      Recover password
                    </Button>
                  </Card.Link>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
export default ForgetPage;
