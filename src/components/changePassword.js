import React, { useState, useEffect } from "react";
import { Button, Container, Form, Col, Row } from "@themesberg/react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
//saga
import { updatetPassword } from "../Redux/auth/actions";
import Navbar from "./Navbar";

export default ({ showDefault, setShowDefault }) => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.auth.Auther);
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const CategorySchema = Yup.object().shape({
    currentpassword: Yup.string()
      .trim()
      .required(" Current Password is required"),
    newpassword: Yup.string().trim().required("New Password is required"),
    confirmpassword: Yup.string().when("newpassword", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref("newpassword")], "Passwords not match"),
    }),
  });
  const formOptions = { resolver: yupResolver(CategorySchema) };
  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = async (data) => {
    // display form data on success
    let newData = Object.assign(data, { email: login.email });
    await dispatch(
      updatetPassword({
        email: newData.email,
        currentpassword: newData.currentpassword,
        newpassword: newData.newpassword,
        setShowDefault: setShowDefault,
        reset: reset,
      })
    );
  };
  useEffect(() => {
    if (!showDefault) {
      reset();
    }
  }, [showDefault]);

  return (
    <>
      {login?.role?.name !== "Admin" ? (
        <>
          <Navbar module={"Change Password"} />
        </>
      ) : (<>
        </>
      )}


      <div className="mx-5">
        <Row className="justify-content-center">
          {/* <Col
            xs={12}
            className="d-flex align-items-center justify-content-center"
          > */}
          <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group>
                <Form.Label>Current Password</Form.Label>
                <div className="password-icon">
                  <Form.Control
                    name="currentpassword"
                    type={showPassword ? "text" : "password"}
                    {...register("currentpassword")}
                    className={`form-control ${errors.currentpassword ? "is-invalid" : ""
                      }`}
                  />
                  <span onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (
                      <svg
                        width="22"
                        height="25"
                        position="absolute"
                        right="10px"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.36 0C7.28727 0 2.10116 3.77724 0 9.10909C2.10116 14.4409 7.28727 18.2182 13.36 18.2182C19.4327 18.2182 24.6188 14.4409 26.72 9.10909C24.6188 3.77724 19.4327 0 13.36 0ZM13.36 15.1818C10.0079 15.1818 7.28727 12.4612 7.28727 9.10909C7.28727 5.75695 10.0079 3.03636 13.36 3.03636C16.7121 3.03636 19.4327 5.75695 19.4327 9.10909C19.4327 12.4612 16.7121 15.1818 13.36 15.1818ZM13.36 5.46545C11.3439 5.46545 9.71636 7.09295 9.71636 9.10909C9.71636 11.1252 11.3439 12.7527 13.36 12.7527C15.3761 12.7527 17.0036 11.1252 17.0036 9.10909C17.0036 7.09295 15.3761 5.46545 13.36 5.46545Z"
                          fill="#66707C"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="22"
                        height="25"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.117 11.7189C14.2467 11.7189 13.4121 12.0646 12.7968 12.68C12.1814 13.2953 11.8357 14.1299 11.8357 15.0002C11.8357 15.0962 11.8401 15.1915 11.8483 15.2855L15.4023 11.7315C15.3083 11.7233 15.2134 11.7189 15.117 11.7189ZM4.25603 25.1498L5.5076 26.4002C5.55154 26.4441 5.61114 26.4688 5.67327 26.4688C5.7354 26.4688 5.79499 26.4441 5.83894 26.4002L9.04168 23.1965C10.8085 24.0995 12.7945 24.5509 14.9998 24.5509C20.6306 24.5509 24.8318 21.6183 27.6033 15.7531C27.7147 15.5172 27.7725 15.2596 27.7725 14.9987C27.7725 14.7378 27.7147 14.4802 27.6033 14.2443C26.4959 11.9117 25.1624 10.042 23.6028 8.6354L26.7021 5.53726C26.746 5.49331 26.7707 5.43371 26.7707 5.37158C26.7707 5.30945 26.746 5.24986 26.7021 5.20591L25.4514 3.95522C25.4075 3.9113 25.3479 3.88663 25.2858 3.88663C25.2236 3.88663 25.164 3.9113 25.1201 3.95522L4.25603 24.8181C4.23424 24.8399 4.21696 24.8657 4.20516 24.8942C4.19337 24.9226 4.1873 24.9531 4.1873 24.9839C4.1873 25.0147 4.19337 25.0452 4.20516 25.0737C4.21696 25.1022 4.23424 25.128 4.25603 25.1498ZM20.2732 15.0002C20.2733 15.8908 20.0427 16.7662 19.6039 17.5412C19.1651 18.3162 18.533 18.9643 17.7692 19.4224C17.0055 19.8805 16.1361 20.133 15.2458 20.1553C14.3554 20.1775 13.4745 19.9688 12.6888 19.5494L14.1133 18.125C14.6877 18.3089 15.3017 18.331 15.8879 18.189C16.4742 18.0469 17.0099 17.7461 17.4364 17.3196C17.8629 16.8931 18.1637 16.3573 18.3058 15.7711C18.4479 15.1849 18.4257 14.5709 18.2418 13.9964L19.6662 12.572C20.0659 13.3189 20.2745 14.1531 20.2732 15.0002Z"
                          fill="#66707C"
                        />
                        <path
                          d="M2.39668 15.7559C3.42793 17.9277 4.65537 19.6987 6.079 21.0688L10.3019 16.8457C9.94589 15.9152 9.86699 14.9015 10.0747 13.9271C10.2824 12.9527 10.7678 12.0593 11.4723 11.3549C12.1767 10.6504 13.0701 10.165 14.0445 9.9573C15.0189 9.7496 16.0326 9.82851 16.9631 10.1845L20.5449 6.60264C18.8832 5.83369 17.035 5.44922 15.0002 5.44922C9.36934 5.44922 5.16816 8.38183 2.39668 14.2471C2.28526 14.483 2.22747 14.7406 2.22747 15.0015C2.22747 15.2623 2.28526 15.52 2.39668 15.7559Z"
                          fill="#66707C"
                        />
                      </svg>
                    )}
                  </span>
                  <div className="invalid-feedback">
                    {errors.currentpassword?.message}
                  </div>
                </div>
              </Form.Group>
              <Form.Group className="mt-3">
                <Form.Label>New Password</Form.Label>
                <div className="password-icon">
                  <Form.Control
                    name="newpassword"
                    type={showNewPassword ? "text" : "password"}
                    {...register("newpassword")}
                    className={`form-control ${errors.newpassword ? "is-invalid" : ""
                      }`}
                  />
                  <span onClick={() => setShowNewPassword(!showNewPassword)}>
                    {showNewPassword ? (
                      <svg
                        width="22"
                        height="25"
                        position="absolute"
                        right="10px"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.36 0C7.28727 0 2.10116 3.77724 0 9.10909C2.10116 14.4409 7.28727 18.2182 13.36 18.2182C19.4327 18.2182 24.6188 14.4409 26.72 9.10909C24.6188 3.77724 19.4327 0 13.36 0ZM13.36 15.1818C10.0079 15.1818 7.28727 12.4612 7.28727 9.10909C7.28727 5.75695 10.0079 3.03636 13.36 3.03636C16.7121 3.03636 19.4327 5.75695 19.4327 9.10909C19.4327 12.4612 16.7121 15.1818 13.36 15.1818ZM13.36 5.46545C11.3439 5.46545 9.71636 7.09295 9.71636 9.10909C9.71636 11.1252 11.3439 12.7527 13.36 12.7527C15.3761 12.7527 17.0036 11.1252 17.0036 9.10909C17.0036 7.09295 15.3761 5.46545 13.36 5.46545Z"
                          fill="#66707C"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="22"
                        height="25"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.117 11.7189C14.2467 11.7189 13.4121 12.0646 12.7968 12.68C12.1814 13.2953 11.8357 14.1299 11.8357 15.0002C11.8357 15.0962 11.8401 15.1915 11.8483 15.2855L15.4023 11.7315C15.3083 11.7233 15.2134 11.7189 15.117 11.7189ZM4.25603 25.1498L5.5076 26.4002C5.55154 26.4441 5.61114 26.4688 5.67327 26.4688C5.7354 26.4688 5.79499 26.4441 5.83894 26.4002L9.04168 23.1965C10.8085 24.0995 12.7945 24.5509 14.9998 24.5509C20.6306 24.5509 24.8318 21.6183 27.6033 15.7531C27.7147 15.5172 27.7725 15.2596 27.7725 14.9987C27.7725 14.7378 27.7147 14.4802 27.6033 14.2443C26.4959 11.9117 25.1624 10.042 23.6028 8.6354L26.7021 5.53726C26.746 5.49331 26.7707 5.43371 26.7707 5.37158C26.7707 5.30945 26.746 5.24986 26.7021 5.20591L25.4514 3.95522C25.4075 3.9113 25.3479 3.88663 25.2858 3.88663C25.2236 3.88663 25.164 3.9113 25.1201 3.95522L4.25603 24.8181C4.23424 24.8399 4.21696 24.8657 4.20516 24.8942C4.19337 24.9226 4.1873 24.9531 4.1873 24.9839C4.1873 25.0147 4.19337 25.0452 4.20516 25.0737C4.21696 25.1022 4.23424 25.128 4.25603 25.1498ZM20.2732 15.0002C20.2733 15.8908 20.0427 16.7662 19.6039 17.5412C19.1651 18.3162 18.533 18.9643 17.7692 19.4224C17.0055 19.8805 16.1361 20.133 15.2458 20.1553C14.3554 20.1775 13.4745 19.9688 12.6888 19.5494L14.1133 18.125C14.6877 18.3089 15.3017 18.331 15.8879 18.189C16.4742 18.0469 17.0099 17.7461 17.4364 17.3196C17.8629 16.8931 18.1637 16.3573 18.3058 15.7711C18.4479 15.1849 18.4257 14.5709 18.2418 13.9964L19.6662 12.572C20.0659 13.3189 20.2745 14.1531 20.2732 15.0002Z"
                          fill="#66707C"
                        />
                        <path
                          d="M2.39668 15.7559C3.42793 17.9277 4.65537 19.6987 6.079 21.0688L10.3019 16.8457C9.94589 15.9152 9.86699 14.9015 10.0747 13.9271C10.2824 12.9527 10.7678 12.0593 11.4723 11.3549C12.1767 10.6504 13.0701 10.165 14.0445 9.9573C15.0189 9.7496 16.0326 9.82851 16.9631 10.1845L20.5449 6.60264C18.8832 5.83369 17.035 5.44922 15.0002 5.44922C9.36934 5.44922 5.16816 8.38183 2.39668 14.2471C2.28526 14.483 2.22747 14.7406 2.22747 15.0015C2.22747 15.2623 2.28526 15.52 2.39668 15.7559Z"
                          fill="#66707C"
                        />
                      </svg>
                    )}
                  </span>
                  <div className="invalid-feedback">
                    {errors.newpassword?.message}
                  </div>
                </div>
              </Form.Group>
              <Form.Group className="mt-3">
                <Form.Label>Confirm New Password</Form.Label>
                <div className="password-icon">
                  <Form.Control
                    name="confirmpassword"
                    type={showConfirmPassword ? "text" : "password"}
                    {...register("confirmpassword")}
                    className={`form-control ${errors.confirmpassword ? "is-invalid" : ""
                      }`}
                  />
                  <span
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                  >
                    {showConfirmPassword ? (
                      <svg
                        width="22"
                        height="25"
                        position="absolute"
                        right="10px"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.36 0C7.28727 0 2.10116 3.77724 0 9.10909C2.10116 14.4409 7.28727 18.2182 13.36 18.2182C19.4327 18.2182 24.6188 14.4409 26.72 9.10909C24.6188 3.77724 19.4327 0 13.36 0ZM13.36 15.1818C10.0079 15.1818 7.28727 12.4612 7.28727 9.10909C7.28727 5.75695 10.0079 3.03636 13.36 3.03636C16.7121 3.03636 19.4327 5.75695 19.4327 9.10909C19.4327 12.4612 16.7121 15.1818 13.36 15.1818ZM13.36 5.46545C11.3439 5.46545 9.71636 7.09295 9.71636 9.10909C9.71636 11.1252 11.3439 12.7527 13.36 12.7527C15.3761 12.7527 17.0036 11.1252 17.0036 9.10909C17.0036 7.09295 15.3761 5.46545 13.36 5.46545Z"
                          fill="#66707C"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="22"
                        height="25"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.117 11.7189C14.2467 11.7189 13.4121 12.0646 12.7968 12.68C12.1814 13.2953 11.8357 14.1299 11.8357 15.0002C11.8357 15.0962 11.8401 15.1915 11.8483 15.2855L15.4023 11.7315C15.3083 11.7233 15.2134 11.7189 15.117 11.7189ZM4.25603 25.1498L5.5076 26.4002C5.55154 26.4441 5.61114 26.4688 5.67327 26.4688C5.7354 26.4688 5.79499 26.4441 5.83894 26.4002L9.04168 23.1965C10.8085 24.0995 12.7945 24.5509 14.9998 24.5509C20.6306 24.5509 24.8318 21.6183 27.6033 15.7531C27.7147 15.5172 27.7725 15.2596 27.7725 14.9987C27.7725 14.7378 27.7147 14.4802 27.6033 14.2443C26.4959 11.9117 25.1624 10.042 23.6028 8.6354L26.7021 5.53726C26.746 5.49331 26.7707 5.43371 26.7707 5.37158C26.7707 5.30945 26.746 5.24986 26.7021 5.20591L25.4514 3.95522C25.4075 3.9113 25.3479 3.88663 25.2858 3.88663C25.2236 3.88663 25.164 3.9113 25.1201 3.95522L4.25603 24.8181C4.23424 24.8399 4.21696 24.8657 4.20516 24.8942C4.19337 24.9226 4.1873 24.9531 4.1873 24.9839C4.1873 25.0147 4.19337 25.0452 4.20516 25.0737C4.21696 25.1022 4.23424 25.128 4.25603 25.1498ZM20.2732 15.0002C20.2733 15.8908 20.0427 16.7662 19.6039 17.5412C19.1651 18.3162 18.533 18.9643 17.7692 19.4224C17.0055 19.8805 16.1361 20.133 15.2458 20.1553C14.3554 20.1775 13.4745 19.9688 12.6888 19.5494L14.1133 18.125C14.6877 18.3089 15.3017 18.331 15.8879 18.189C16.4742 18.0469 17.0099 17.7461 17.4364 17.3196C17.8629 16.8931 18.1637 16.3573 18.3058 15.7711C18.4479 15.1849 18.4257 14.5709 18.2418 13.9964L19.6662 12.572C20.0659 13.3189 20.2745 14.1531 20.2732 15.0002Z"
                          fill="#66707C"
                        />
                        <path
                          d="M2.39668 15.7559C3.42793 17.9277 4.65537 19.6987 6.079 21.0688L10.3019 16.8457C9.94589 15.9152 9.86699 14.9015 10.0747 13.9271C10.2824 12.9527 10.7678 12.0593 11.4723 11.3549C12.1767 10.6504 13.0701 10.165 14.0445 9.9573C15.0189 9.7496 16.0326 9.82851 16.9631 10.1845L20.5449 6.60264C18.8832 5.83369 17.035 5.44922 15.0002 5.44922C9.36934 5.44922 5.16816 8.38183 2.39668 14.2471C2.28526 14.483 2.22747 14.7406 2.22747 15.0015C2.22747 15.2623 2.28526 15.52 2.39668 15.7559Z"
                          fill="#66707C"
                        />
                      </svg>
                    )}
                  </span>
                  <div className="invalid-feedback">
                    {errors.confirmpassword?.message}
                  </div>
                </div>
              </Form.Group>
              <Form.Group>
                <div class="d-grid gap-2 col-6 text-center mt-3 mx-auto">
                  <Button
                    variant="primary"
                    // onHide={handleClose}
                    color="dark"
                    size="sm"
                    type="submit"
                  >
                    Update Password
                  </Button>
                </div>
              </Form.Group>
            </Form>
          </div>
          {/* </Col> */}
        </Row>
      </div>
    </>
  );
};
