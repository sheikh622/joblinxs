import React, { useRef, useState } from "react";
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
import Select from 'react-select';

export default () => {
  const [selectedImage, setSelectedImage] = useState();
  const [selectedOption, setSelectedOption] = useState(null);
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validationSchema = Yup.object().shape({
    description: Yup.string().required("description is required"),
    fullName: Yup.string().required("Full name is required"),
    phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    address: Yup.string().required("address is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;
  function onSubmit(data) {
    // display form data on success
    let newData = Object.assign(data, { category: selectedOption.value });
    console.log(newData, "here is error");
  }
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };
  const options = [
    { value: "Plumber", label: "Plumber" },
    { value: "Doctor", label: "Doctor" },
    { value: "Devloper", label: "Devloper" },
  ];
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.click();
  };
  return (
    <>
      <Navbar module={"Edit Profile"} />
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
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
                    {selectedImage ? (
                      <Card.Img
                        src={URL.createObjectURL(selectedImage)}
                        alt="Neil Portrait"
                        className="user-avatar large-avatar rounded-circle mx-auto mt-5"
                      />
                    ) : (
                      <Card.Img
                        src={Profile1}
                        alt="Neil Portrait"
                        className="user-avatar large-avatar rounded-circle mx-auto mt-5"
                      />
                    )}
                    <Form.Group className="col my-2">
                      <Form.Control
                        accept="image/*"
                        type="file"
                        id="file"
                        name="file"
                        onChange={imageChange}
                        className="d-none"
                        ref={inputEl}
                      />
                      <div className="invalid-feedback">
                        {errors.file?.message}
                      </div>
                    </Form.Group>
                    <Card.Body className="pb-5">
                      <Dropdown.Menu className="custom_menu">
                        <Dropdown.Item onClick>
                          <FontAwesomeIcon icon={faEdit} className="me-2" />{" "}
                          Edit
                        </Dropdown.Item>
                      </Dropdown.Menu>
                      <Card.Subtitle
                        className="text-gray mb-2"
                        onClick={onButtonClick}
                      >
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
                  <Card.Title className="text-primary">
                    Basic Information
                  </Card.Title>
                  <Form.Group className="col my-2">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      name="fullName"
                      type="text"
                      {...register("fullName")}
                      className={`form-control ${
                        errors.fullName ? "is-invalid" : ""
                      }`}
                    />
                    <div className="invalid-feedback">
                      {errors.fullName?.message}
                    </div>
                  </Form.Group>
                  <Form.Group className="col my-2">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      name="description"
                      type="text"
                      {...register("description")}
                      className={`form-control ${
                        errors.description ? "is-invalid" : ""
                      }`}
                    />
                    <div className="invalid-feedback">
                      {errors.description?.message}
                    </div>
                  </Form.Group>
                  <hr />
                  <Card.Title className="text-primary">
                    Contact Information
                  </Card.Title>
                  <Form.Group className="col my-2">
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
                  <Form.Group className="col my-2">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      name="phone"
                      type="text"
                      {...register("phone")}
                      className={`form-control ${
                        errors.phone ? "is-invalid" : ""
                      }`}
                    />
                    <div className="invalid-feedback">
                      {errors.phone?.message}
                    </div>
                  </Form.Group>
                  <Form.Group className="col my-2">
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
                  <hr />
                  <Card.Title className="text-primary">
                    Other Information
                  </Card.Title>
                  <Card.Title>Job Type</Card.Title>
                  <Form.Group className="col my-2">
                    <Form.Label>
                      <Form.Label>Full Time</Form.Label>
                      <input
                        type="radio"
                        name="picked"
                        value="fullTime"
                        {...register("jobType")}
                        className="mx-2"
                      />
                    </Form.Label>
                    <Form.Label>
                      <Form.Label>Part Time</Form.Label>
                      <input
                        type="radio"
                        name="picked"
                        value="partTime"
                        {...register("jobType")}
                        className="mx-2"
                      />
                    </Form.Label>
                  </Form.Group>
                  <Card.Title>Can Drive ?</Card.Title>
                  <Form.Group className="col my-2">
                    <Form.Label>
                      <Form.Label>Yes</Form.Label>
                      <input
                        type="radio"
                        name="picked"
                        value="yes"
                        {...register("canDrive")}
                        className="mx-2"
                      />
                    </Form.Label>
                    <Form.Label>
                      <Form.Label>No</Form.Label>
                      <input
                        type="radio"
                        name="picked"
                        value="no"
                        {...register("canDrive")}
                        className="mx-2"
                      />
                    </Form.Label>
                  </Form.Group>
                  <Card.Title>Have Tools ?</Card.Title>
                  <Form.Group className="col my-2">
                    <Form.Label>
                      <Form.Label>Yes</Form.Label>
                      <input
                        type="radio"
                        name="picked"
                        value="yes"
                        {...register("haveTools")}
                        className="mx-2"
                      />
                    </Form.Label>
                    <Form.Label>
                      <Form.Label>No</Form.Label>
                      <input
                        type="radio"
                        name="picked"
                        value="no"
                        {...register("haveTools")}
                        className="mx-2"
                      />
                    </Form.Label>
                  </Form.Group>
                  <Card.Title>Categories</Card.Title>
                  <Form.Group className="col my-2">
                    <Select
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={options}
                    />
                  </Form.Group>
                  <Form.Group>
                    <div class="d-grid gap-2 col-4 text-center mt-3 mx-auto">
                      <Button
                        variant="primary"
                        color="dark"
                        size="sm"
                        type="submit"
                      >
                        Update
                      </Button>
                    </div>
                  </Form.Group>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};
