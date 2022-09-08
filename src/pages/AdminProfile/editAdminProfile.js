import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Card,
  Col,
  Container, Dropdown, Form,
  Row
} from "@themesberg/react-bootstrap";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import profile from "../../assets/img/team/profile-picture-1.jpg";
import Navbar from "../../components/Navbar";
import { getProfile, updateAdminProfile } from "../../Redux/profile/actions";


export default () => {
  const history = useHistory();

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
      <Col xs={12} xl={12} className={'d-flex justify-content-start mb-2'}>
        <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => history.goBack()}>
          <path d="M9.79591 14.8435L9.79557 14.8439C9.56284 15.0818 9.2503 15.2 8.93911 15.2C8.65838 15.2 8.37589 15.1036 8.15012 14.9076L8.14971 14.9073L1.18041 8.82491C0.939515 8.61471 0.799112 8.31587 0.799112 7.99906C0.799112 7.68333 0.93963 7.38454 1.18041 7.17445L8.14971 1.09206L8.15005 1.09176C8.62347 0.6805 9.35494 0.706129 9.79539 1.15531L9.79539 1.15531L9.79591 1.15584C10.2386 1.6107 10.2057 2.32402 9.72866 2.74114L9.72851 2.74128L3.7035 7.99908L9.72853 13.2581L9.72866 13.2582C10.2057 13.6753 10.2386 14.3887 9.79591 14.8435Z" fill="#12499C" stroke="#12499C" stroke-width="0.4" />
        </svg>

      </Col>
      <div className="mx-5">
        {user && (
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
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
      </div>
    </>
  );
};
