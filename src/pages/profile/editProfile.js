import React,{useEffect} from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Dropdown,
} from "@themesberg/react-bootstrap";
import {
  faEdit,
  faEllipsisV,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import ProfileCover from "../../assets/img/profile-cover.jpg";
import Profile1 from "../../assets/img/team/profile-picture-1.jpg";
import Navbar from "../../components/Navbar";
import { Routes } from "../../routes";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export default () => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last name is required"),
    dob: Yup.string()
      .required("Date of Birth is required")
      .matches(
        /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
        "Date of Birth must be a valid date in the format YYYY-MM-DD"
      ),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    acceptTerms: Yup.bool().oneOf([true], "Accept Ts & Cs is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data) {
    // display form data on success
    console.log(data, "here is error");
  }
  return (
    <>
      <Navbar module={"Edit Profile"} />
      <Container>
        <Row>
          <div className="mt-2 mb-3 d-flex justify-content-end">
            <Link className="text-white fw-bold" to={Routes.Profile.path}>
              <Button variant="primary">Back</Button>
            </Link>
          </div>
          <Col xs={12} xl={4}>
            <Row>
              <Col xs={12}>
                <Card
                  border="light"
                  className="text-center p-0 mb-4 profileView"
                >
                  <div
                    style={{ backgroundImage: `url(${ProfileCover})` }}
                    className="profile-cover rounded-top"
                  />
                  <Card.Body className="pb-5">
                    <Card.Img
                      src={Profile1}
                      alt="Neil Portrait"
                      className="user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-4"
                    />
                    <span>
                      <Dropdown.Menu className="custom_menu">
                        <Dropdown.Item onClick>
                          <FontAwesomeIcon icon={faEdit} className="me-2" />{" "}
                          Edit
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </span>
                    <Card.Subtitle className="text-gray mb-2">
                      Change Profile Picture
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col xs={12} xl={8}>
            <Card
              border="light"
              className="text-left p-0 mb-4 profileView info"
            >
              <Card.Body className="pb-3">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="col">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        name="email"
                        type="text"
                        {...register("email")}
                        className={`form-control ${
                          errors.email ? "is-invalid" : ""
                        }`}
                      />
                      <div className="invalid-feedback">
                        {errors.email?.message}
                      </div>
                    </Form.Group>

                    <Form.Group  className="col my-2">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        name="phone"
                        type="tel"
                        {...register("phone")}
                        className={`form-control ${
                          errors.phone ? "is-invalid" : ""
                        }`}
                      />
                      <div className="invalid-feedback">
                        {errors.phone?.message}
                      </div>
                    </Form.Group>

                    <Form.Group  className="col my-2">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        name="address"
                        type="text"
                        {...register("address")}
                        className={`form-control ${
                          errors.address ? "is-invalid" : ""
                        }`}
                      />
                      <div className="invalid-feedback">
                        {errors.address?.message}
                      </div>
                    </Form.Group>
                    <Form.Group  className="col my-2">
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        name="city"
                        type="text"
                        {...register("city")}
                        className={`form-control ${
                          errors.city ? "is-invalid" : ""
                        }`}
                      />
                      <div className="invalid-feedback">
                        {errors.city?.message}
                      </div>
                    </Form.Group>
                    <Form.Group  className="col my-2">
                      <Form.Label>Provice</Form.Label>
                      <Form.Control
                        name="province"
                        type="text"
                        {...register("province")}
                        className={`form-control ${
                          errors.province ? "is-invalid" : ""
                        }`}
                      />
                      <div className="invalid-feedback">
                        {errors.province?.message}
                      </div>
                    </Form.Group>
                    <Form.Group  className="col my-2">
                      <Form.Label>Postal Code</Form.Label>
                      <Form.Control
                        name="postalcode"
                        type="text"
                        {...register("postalcode")}
                        className={`form-control ${
                          errors.postalcode ? "is-invalid" : ""
                        }`}
                      />
                      <div className="invalid-feedback">
                        {errors.postalcode?.message}
                      </div>
                    </Form.Group>
                    <Form.Group  className="col my-2">
                      <Form.Label>Personal Attributes</Form.Label>
                      <Form.Control
                        name="personalattributes"
                        type="text"
                        {...register("personalattributes")}
                        className={`form-control ${
                          errors.personalattributes ? "is-invalid" : ""
                        }`}
                      />
                      <div className="invalid-feedback">
                        {errors.personalattributes?.message}
                      </div>
                    </Form.Group>
                    <Form.Group  className="col my-2">
                      <Form.Label>Career Overview</Form.Label>
                      <Form.Control
                        name="careeroverview"
                        type="text"
                        {...register("careeroverview")}
                        className={`form-control ${
                          errors.careeroverview ? "is-invalid" : ""
                        }`}
                      />
                      <div className="invalid-feedback">
                        {errors.careeroverview?.message}
                      </div>
                    </Form.Group>

                    <Form.Group  className="col my-2">
                      <Form.Label>Job Type</Form.Label>
                      <select
                        name="title"
                        {...register("title")}
                        className={`form-control ${
                          errors.title ? "is-invalid" : ""
                        }`}
                      >
                        <option value=""></option>
                        <option value="Mr">Part Time</option>
                        <option value="Mrs">Full Time</option>
                      </select>
                      <div className="invalid-feedback">
                        {errors.title?.message}
                      </div>
                    </Form.Group>
                    
                    
                    <Form.Group  className="col my-2">
                      <Form.Label>Date of Birth</Form.Label>
                      <Form.Control
                        name="dob"
                        type="date"
                        {...register("dob")}
                        className={`form-control ${
                          errors.dob ? "is-invalid" : ""
                        }`}
                      />
                      <div className="invalid-feedback">
                        {errors.dob?.message}
                      </div>
                    </Form.Group>
                    <Button type="submit" className="btn btn-primary mr-1">
                      Update
                    </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
