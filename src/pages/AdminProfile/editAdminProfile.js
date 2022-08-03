import React, { useRef, useState, useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Dropdown,
} from "@themesberg/react-bootstrap";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Routes } from "../../routes";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { updateAdminProfile } from "../../Redux/profile/actions";
import { yupResolver } from "@hookform/resolvers/yup";
import { getProfile } from "../../Redux/profile/actions";
import profile from "../../assets/img/team/profile-picture-1.jpg"
import * as Yup from "yup";


export default () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.auth.Auther);
  const getById = useSelector((state) => state.ProfileReducer.profile);
  const [selectedImage, setSelectedImage] = useState();
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().trim().required("Full name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;
  const [user, setUser] = useState();
  useEffect(() => {
    reset(user);
  }, [user]);

  useEffect(() => {
    setUser({ fullName: getById?.fullName, email: getById?.email })
  }, [getById])

  useEffect(() => {
    dispatch(
      getProfile({
        id: login?.id,
      })
    );
  }, []);
  function onSubmit(data) {
    // display form data on success
    let Data = new FormData();
    Data.append("fullName", data.fullName)
    Data.append("id", getById.id)
    Data.append("profileImg", selectedImage ? selectedImage : getById?.profileImg)
    dispatch(updateAdminProfile(Data));
  }
  // effect runs when user state is updated
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.click();
  };
  return (
    <>
      <Navbar module={"Edit Profile"} />
      <Container>
        {user && (
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <div className="mt-2 mb-3 d-flex justify-content-end">
                <Link className="text-white fw-bold" to={Routes.AdminProfile.path}>
                  <Button variant="primary">Back</Button>
                </Link>
              </div>
              <Col xs={12} xl={4}>
                <Row>
                  <Col xs={12}>
                    <Card
                      border="light"
                      className="text-center p-0 mb-4 profileView"
                      style={{ cursor: "pointer" }}
                    >
                      {selectedImage ? (
                          <Card.Img
                            src={URL.createObjectURL(selectedImage)}
                            alt="Neil Portrait"
                            onClick={onButtonClick}
                            style={{ cursor: "pointer" }}
                            ref={inputEl}
                            className="user-avatar large-avatar rounded-circle mx-auto mt-5"
                          />
                      ) : (
                        <Card.Img
                          style={{ cursor: "pointer" }}
                          src={getById?.profileImg ? getById?.profileImg : profile}
                          alt="Neil Portrait"
                          onClick={onButtonClick}
                          ref={inputEl}
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
                          style={{
                            fontWeight: "bold"
                          }}
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
                        className={`form-control ${errors.fullName ? "is-invalid" : ""
                          }`}
                      />
                      <div className="invalid-feedback">
                        {errors.fullName?.message}
                      </div>
                    </Form.Group>
                    <Form.Group className="col my-2">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        name="email"
                        type="text"
                        disabled
                        {...register("email")}
                        className={`form-control ${errors.email ? "is-invalid" : ""
                          }`}
                      />
                      <div className="invalid-feedback">
                        {errors.email?.message}
                      </div>
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
        )}
      </Container>
    </>
  );
};
