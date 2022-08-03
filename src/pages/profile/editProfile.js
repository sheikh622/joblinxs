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
import * as Yup from "yup";
import { toast } from "react-toastify";
// import PhoneInput from 'react-phone-input-2'
import "react-phone-input-2/lib/bootstrap.css";
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isValidPhoneNumber,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { getMultiValue } from "chartist";
import { height, width } from "@mui/system";
import startsWith from "lodash.startswith";
import { gridColumnLookupSelector } from "@mui/x-data-grid";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import { useHistory, useLocation } from "react-router-dom";
import moment from "moment";
export default () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    location: { state },
  } = history;
  const login = useSelector((state) => state.auth.Auther);
  const getById = useSelector((state) => state.ProfileReducer.profile);
  const [selectedImage, setSelectedImage] = useState();
  // const phoneRegExp =
  //   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full name is required"),
    // phoneNumber: Yup.string().required("phoneNumber is required"),
    address: Yup.string().required("address is required"),
    city: Yup.string().required("city is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const [value, setValue] = useState();
  const [dateofBirth, setDateofBirth] = React.useState(new Date());
  const { errors } = formState;
  // console.log(getById, "asdfg")
  const [user, setUser] = useState();
  useEffect(() => {
    reset(user);
  }, [user]);
  useEffect(() => {
    setUser({
      fullName: getById.fullName,
      address: getById.address,
      dateofBirth: getById.dateofBirth,
      phoneNumber: getById.phoneNumber,
      city: getById.city,
      postalCode: getById.postalCode,
    });
    // setDateofBirth(moment(new Date(getById?.dateOfBirth)));
  }, [getById]);
  useEffect(() => {
    dispatch(
      getProfile({
        id: login?.id,
      })
    );
  }, []);
  function onSubmit(data) {
    if (!isValidPhoneNumber(value)) {
      return;
    } else {
      dispatch(
        updateAdminProfile({
          fullName: data.fullName,
          address: data.address,
          dateofBirth: dateofBirth
            ? moment.utc(dateofBirth).format().toString()
            : getById?.dateofBirth.toString(),
          phoneNumber: value ? value : getById?.phoneNumber,
          city: data.city,
          postalCode: data.postalCode,
          id: getById.id,
          profileImg: selectedImage ? selectedImage : getById?.profileImg,
          history: history,
        })
      );
    }
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
  useEffect(() => {
    if (getById?.phoneNumber !== undefined) {
      setValue(getById?.phoneNumber);
    }
  }, [getById?.phoneNumber]);

  return (
    <>
      <Navbar module={"Edit Profile"} />
      <Container>
        {user && (
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
                      style={{ cursor: "pointer" }}
                    >
                      {selectedImage ? (
                        <Card.Img
                          src={URL.createObjectURL(selectedImage)}
                          alt="Neil Portrait"
                          onClick={onButtonClick}
                          ref={inputEl}
                          className="user-avatar large-avatar rounded-circle mx-auto mt-5"
                        />
                      ) : (
                        <Card.Img
                          src={getById?.profileImg}
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
                          style={{ cursor: "pointer" }}
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
                            fontWeight: "bold",
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
                        className={`form-control ${
                          errors.fullName ? "is-invalid" : ""
                        }`}
                      />
                      <div className="invalid-feedback">
                        {errors.fullName?.message}
                      </div>
                    </Form.Group>
                    <Col md={2} className="mb-3">
                      <Form.Label>Date of Birth</Form.Label>
                      <DatePicker
                        selected={dateofBirth}
                        label="dateofBirth"
                        name="dateofBirth"
                        value={dateofBirth}
                        onChange={(newValue) => {
                          setDateofBirth(newValue);
                        }}
                      />
                    </Col>
                    <Form.Group className="col my-2">
                      <Form.Label>Phone</Form.Label>
                      <PhoneInput
                        // placeholder="Enter phone number"
                        value={value}
                        onChange={setValue}
                        error={
                          value
                            ? isValidPhoneNumber(value)
                              ? undefined
                              : "Invalid phone number"
                            : "Phone number required"
                        }
                      />

                      <div className="invalid-phone">
                        {value && isValidPhoneNumber(value)
                          ? ""
                          : "Invalid phone number"}
                      </div>
                    </Form.Group>
                    {/* <PhoneInput
                      country={"us"}
                      value={value}
                      onChange={setValue}
                    />

                    <input
                      className="d-none"
                      type="text"
                      name="phone"
                      value={value}
                    // error={Boolean(formik.touched.phone && formik.errors.phone)}
                    // helpertext={formik.errors.phone}
                    /> */}
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
                    <Form.Group className="col my-2">
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
                    <Form.Group className="col my-2">
                      <Form.Label>Postal Code</Form.Label>
                      <Form.Control
                        name="postalCode"
                        type="text"
                        {...register("postalCode")}
                        className={`form-control ${
                          errors.postalCode ? "is-invalid" : ""
                        }`}
                      />
                      <div className="invalid-feedback">
                        {errors.postalCode?.message}
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
