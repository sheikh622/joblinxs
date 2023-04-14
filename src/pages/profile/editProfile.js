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
import * as Yup from "yup";
import Navbar from "../../components/Navbar";
import { getProfile, updateAdminProfile } from "../../Redux/profile/actions";
// import PhoneInput from 'react-phone-input-2'
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-phone-input-2/lib/bootstrap.css";
import PhoneInput, {
  isValidPhoneNumber
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useHistory } from "react-router-dom";

export default () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    location: { state },
  } = history;
  const login = useSelector((state) => state.auth.Auther);
  const getById = useSelector((state) => state.ProfileReducer.profile);
  const [selectedImage, setSelectedImage] = useState();
  const [loader, setLoader] = useState(true);

  // const phoneRegExp =
  //   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validationSchema = Yup.object().shape({
    businessName: Yup.string().required("Business Name is required"),
    fullName: Yup.string().required("Business Name is required"),
    // phoneNumber: Yup.string().required("phoneNumber is required"),
    address: Yup.string().required("address is required"),
    city: Yup.string().required("city is required"),
    industryType: Yup.string().trim().required("industryType is Required")
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const [value, setValue] = useState();
  const [dateofBirth, setDateofBirth] = React.useState(new Date());
  const { errors } = formState;
  const [user, setUser] = useState();
  useEffect(() => {
    reset(user);
  }, [user]);
  useEffect(() => {
    setUser({
      businessName: getById?.businessName,
      fullName: getById?.fullName,
      address: getById?.address,
      dateofBirth: getById?.dateofBirth,
      phoneNumber: getById?.phoneNumber,
      city: getById?.city,
      postalCode: getById?.postalCode,
      industryType: getById?.industryType,
      // setLoader: setLoader,

    });
    // setDateofBirth(moment(new Date(getById?.dateOfBirth)));
  }, [getById]);
  useEffect(() => {
    dispatch(
      getProfile({
        profileId: login?.id,
        setLoader: setLoader,

      })
    );
  }, []);
  function onSubmit(data) {
    if (!isValidPhoneNumber(value)) {
      return;
    } else {
      dispatch(
        updateAdminProfile({
          businessName:data.businessName,
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
          industryType: data.industryType,
          history: history,
          setLoader: setLoader,

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
                          Business Logo
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
                      <Form.Label>Business Name</Form.Label>
                      <Form.Control
                        name="businessName"
                        type="text"
                        {...register("businessName")}
                        className={`form-control ${errors.businessName ? "is-invalid" : ""
                          }`}
                      />
                      <div className="invalid-feedback">
                        {errors.businessName?.message}
                      </div>
                    </Form.Group>
                    <Form.Group className="col my-2">
                      <Form.Label>full Name</Form.Label>
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
                    {/* <Col md={12} className="mb-3">
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
                    </Col> */}
                    <Form.Group className="col my-2">
                      <Form.Label>Business Address</Form.Label>
                      <Form.Control
                        name="address"
                        type="text"
                        {...register("address")}
                        className={`form-control ${errors.address ? "is-invalid" : ""
                          }`}
                      />
                      <div className="invalid-feedback">
                        {errors.address?.message}
                      </div>
                    </Form.Group>
                    <Form.Group className="col my-2">
                      <Form.Label>Industry Type</Form.Label>
                      <Form.Control
                        name="IndustryType"
                        type="text"
                        {...register("industryType")}
                        className={`form-control ${errors.industryType ? "is-invalid" : ""
                          }`}
                      />
                      <div className="invalid-feedback">
                        {errors.industryType?.message}
                      </div>
                    </Form.Group>
                    {/* <Form.Group className="col my-2">
                      <Form.Label>Postal Code</Form.Label>
                      <Form.Control
                        name="postalCode"
                        type="text"
                        {...register("postalCode")}
                        className={`form-control ${errors.postalCode ? "is-invalid" : ""
                          }`}
                      />
                      <div className="invalid-feedback">
                        {errors.postalCode?.message}
                      </div>
                    </Form.Group> */}
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
