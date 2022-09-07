import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Container, Form, Row, InputGroup, } from "@themesberg/react-bootstrap";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import Navbar from "../../components/Navbar";
import { updatetPassword } from "../../Redux/auth/actions";

const ChangePassword = (props, row) => {
    const history = useHistory();
    // const location = useLocation();
    const dispatch = useDispatch();
    const login = useSelector((state) => state.auth.Auther);
    const [showDefault, setShowDefault] = useState(false);
    const [currentPassword, setCurrentPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(false);

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
            <Navbar module={"Change Password"} />
            <Col xs={12} xl={12} className={'d-flex justify-content-start mb-2'}>
                <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => history.goBack()}>
                    <path d="M9.79591 14.8435L9.79557 14.8439C9.56284 15.0818 9.2503 15.2 8.93911 15.2C8.65838 15.2 8.37589 15.1036 8.15012 14.9076L8.14971 14.9073L1.18041 8.82491C0.939515 8.61471 0.799112 8.31587 0.799112 7.99906C0.799112 7.68333 0.93963 7.38454 1.18041 7.17445L8.14971 1.09206L8.15005 1.09176C8.62347 0.6805 9.35494 0.706129 9.79539 1.15531L9.79539 1.15531L9.79591 1.15584C10.2386 1.6107 10.2057 2.32402 9.72866 2.74114L9.72851 2.74128L3.7035 7.99908L9.72853 13.2581L9.72866 13.2582C10.2057 13.6753 10.2386 14.3887 9.79591 14.8435Z" fill="#12499C" stroke="#12499C" stroke-width="0.4" />
                </svg>

            </Col>
            <div className="mx-5">

                <Row className="justify-content-center">
                    <Col xs={12} className="d-flex align-items-center justify-content-center">
                        <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Form.Group>
                                    <Form.Label>Current Password</Form.Label>
                                    <div className="password-icon">
                                        <Form.Control
                                            name="currentpassword"
                                            type={currentPassword ? "text" : "password"}

                                            {...register("currentpassword")}
                                            className={`form-control ${errors.currentpassword ? "is-invalid" : ""
                                                }`}
                                        />
                                        <span onClick={() => setCurrentPassword(!currentPassword)}>
                                            <svg width="22" height="15" position="absolute"
                                                right="10px" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.36 0C7.28727 0 2.10116 3.77724 0 9.10909C2.10116 14.4409 7.28727 18.2182 13.36 18.2182C19.4327 18.2182 24.6188 14.4409 26.72 9.10909C24.6188 3.77724 19.4327 0 13.36 0ZM13.36 15.1818C10.0079 15.1818 7.28727 12.4612 7.28727 9.10909C7.28727 5.75695 10.0079 3.03636 13.36 3.03636C16.7121 3.03636 19.4327 5.75695 19.4327 9.10909C19.4327 12.4612 16.7121 15.1818 13.36 15.1818ZM13.36 5.46545C11.3439 5.46545 9.71636 7.09295 9.71636 9.10909C9.71636 11.1252 11.3439 12.7527 13.36 12.7527C15.3761 12.7527 17.0036 11.1252 17.0036 9.10909C17.0036 7.09295 15.3761 5.46545 13.36 5.46545Z" fill="#66707C" />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="invalid-feedback">
                                        {errors.currentpassword?.message}
                                    </div>
                                </Form.Group>
                                <Form.Group className="mt-3">
                                    <Form.Label>New Password</Form.Label>
                                    <div className="password-icon">
                                        <Form.Control
                                            name="newpassword"
                                            type={showPassword ? "text" : "password"}
                                            {...register("newpassword")}
                                            className={`form-control ${errors.newpassword ? "is-invalid" : ""}`}

                                        />
                                        <span onClick={() => setShowPassword(!showPassword)}>
                                            <svg width="22" height="15" position="absolute"
                                                right="10px" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.36 0C7.28727 0 2.10116 3.77724 0 9.10909C2.10116 14.4409 7.28727 18.2182 13.36 18.2182C19.4327 18.2182 24.6188 14.4409 26.72 9.10909C24.6188 3.77724 19.4327 0 13.36 0ZM13.36 15.1818C10.0079 15.1818 7.28727 12.4612 7.28727 9.10909C7.28727 5.75695 10.0079 3.03636 13.36 3.03636C16.7121 3.03636 19.4327 5.75695 19.4327 9.10909C19.4327 12.4612 16.7121 15.1818 13.36 15.1818ZM13.36 5.46545C11.3439 5.46545 9.71636 7.09295 9.71636 9.10909C9.71636 11.1252 11.3439 12.7527 13.36 12.7527C15.3761 12.7527 17.0036 11.1252 17.0036 9.10909C17.0036 7.09295 15.3761 5.46545 13.36 5.46545Z" fill="#66707C" />
                                            </svg>
                                        </span>
                                    </div>

                                    <div className="invalid-feedback">{errors.newpassword?.message}</div>
                                </Form.Group>
                                <Form.Group className="mt-3">
                                    <Form.Label>Confirm New Password</Form.Label>
                                    <div className="password-icon">

                                        <Form.Control
                                            name="confirmpassword"
                                            type={confirmPassword ? "text" : "password"}

                                            {...register("confirmpassword")}
                                            className={`form-control ${errors.confirmpassword ? "is-invalid" : ""
                                                }`}
                                        />
                                        <span onClick={() => setConfirmPassword(!confirmPassword)}>
                                            <svg width="22" height="15" position="absolute"
                                                right="10px" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.36 0C7.28727 0 2.10116 3.77724 0 9.10909C2.10116 14.4409 7.28727 18.2182 13.36 18.2182C19.4327 18.2182 24.6188 14.4409 26.72 9.10909C24.6188 3.77724 19.4327 0 13.36 0ZM13.36 15.1818C10.0079 15.1818 7.28727 12.4612 7.28727 9.10909C7.28727 5.75695 10.0079 3.03636 13.36 3.03636C16.7121 3.03636 19.4327 5.75695 19.4327 9.10909C19.4327 12.4612 16.7121 15.1818 13.36 15.1818ZM13.36 5.46545C11.3439 5.46545 9.71636 7.09295 9.71636 9.10909C9.71636 11.1252 11.3439 12.7527 13.36 12.7527C15.3761 12.7527 17.0036 11.1252 17.0036 9.10909C17.0036 7.09295 15.3761 5.46545 13.36 5.46545Z" fill="#66707C" />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="invalid-feedback">
                                        {errors.confirmpassword?.message}
                                    </div>
                                </Form.Group>
                                <Form.Group>
                                    <div class="d-grid gap-2 col-4 text-center mt-3 mx-auto">
                                        <Button
                                            variant="primary"
                                            // onHide={handleClose}
                                            color="dark"
                                            size="sm"
                                            type="submit"

                                        >
                                            Change Password
                                        </Button>
                                    </div>
                                </Form.Group>
                            </Form>

                        </div>
                    </Col>
                </Row>
            </div>

        </>
    );
};

export default ChangePassword;
