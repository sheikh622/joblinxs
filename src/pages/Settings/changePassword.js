import { Container, Col, Card, Row, Form, Button, InputGroup, Modal } from "@themesberg/react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Routes } from "../../routes";
import * as Yup from "yup";
import { useFormik } from "formik";
import { faAngleLeft, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ChangePassword = (props, row) => {
    const label = { inputProps: { "aria-label": "Switch demo" } };
    const dispatch = useDispatch();
    const history = useHistory();
    const [showDefault, setShowDefault] = useState(false);
    const handleCloses = () => {
        setShowDefault(false);
    }
    const {
        location: { state },
    } = history;
    let Array = history.location.search;
    const newToken = Array.split("=")[1];

    useEffect(() => {
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
        currentPassword: Yup.string().required("Current Password is required"),
        password: Yup.string().required("New Password is required")
            .oneOf([Yup.ref('confirmPassword'), null], 'Passwords must match'),
        confirmPassword: Yup.string()
            .required("Confirm Password is required")
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
    });
    const resetPasswordFormik = useFormik({
        initialValues: {
            currentPassword: "",
            password: "",
            confirmPassword: "",
            showPasswordToken: ""
        },
        validationSchema: ResetPasswordSchema,
        onSubmit: async (values) => {

            // await dispatch(
            //   resetPassword({
            //     password: values.password,
            //     confirmPassword: values.confirmPassword,
            //     history: history,
            //     token: newToken,
            //   })
            // );
        },
    });

    return (
        <>
            <Navbar module={"Change Password"} />
            <Container>
                <Col xs={12} xl={12} className={'d-flex justify-content-end mb-2'}>
                    <Link className="text-white fw-bold" to={Routes.Settings.path}>
                        <Button variant="primary" type="submit">
                            {"  "}
                            Back
                        </Button>
                    </Link>
                </Col>
                <Row className="justify-content-center">
                    <Col xs={12} className="d-flex align-items-center justify-content-center">
                        <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">

                            <Form onSubmit={resetPasswordFormik.handleSubmit}>
                                <Form.Group id="currentPassword" className="mb-4">
                                    <Form.Label>Your Current Password</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text>
                                            <FontAwesomeIcon icon={faUnlockAlt} />
                                        </InputGroup.Text>
                                        <Form.Control
                                            //  required
                                            type="currentPassword" placeholder="Current Password"
                                            value={resetPasswordFormik.values.currentPassword}
                                            label="currentPassword"
                                            name="currentPassword"
                                            onChange={(e) => {
                                                resetPasswordFormik.setFieldValue("currentPassword", e.target.value);
                                            }}
                                        />
                                        {resetPasswordFormik.touched.currentPassword && resetPasswordFormik.errors.currentPassword ? (
                                            <div style={{ color: "red" }}>
                                                {resetPasswordFormik.errors.currentPassword}
                                            </div>
                                        ) : null}
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group id="password" className="mb-4">
                                    <Form.Label>Your New Password</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text>
                                            <FontAwesomeIcon icon={faUnlockAlt} />
                                        </InputGroup.Text>
                                        <Form.Control
                                            //  required
                                            type="password" placeholder="New Password"
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
                                        <Form.Control
                                            //  required
                                            type="password" placeholder="Confirm Password"
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
                                <Button variant="primary" type="submit" className="w-100"
                                    onClick={() => {
                                        setShowDefault(true);
                                    }}
                                >
                                    Confirm
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* Congratulations Modal */}
            <Modal
                as={Modal.Dialog}
                centered
                show={showDefault}
                onHide={handleCloses}
            >
                <Modal.Header className="border-0">
                    <Button variant="close" aria-label="Close" onClick={handleCloses} />
                </Modal.Header>
                <Modal.Body className="py-4 mb-5">
                    <Row className="justify-content-center">
                        <Col md={12} sm={12} xs={12} className="text-center">
                            <svg
                                width="215"
                                height="190"
                                viewBox="0 0 312 277"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_334_18513)">
                                    <path
                                        d="M152.835 171C179.778 171 201.621 149.174 201.621 122.249C201.621 95.325 179.778 73.4985 152.835 73.4985C125.891 73.4985 104.048 95.325 104.048 122.249C104.048 149.174 125.891 171 152.835 171Z"
                                        fill="#12499C"
                                    />
                                    <path
                                        d="M176.855 101.595C177.414 102.154 168.29 114.248 156.559 128.948C153.952 131.925 151.531 134.902 149.297 137.693L148.366 138.81L147.248 137.693C137.938 128.204 131.607 121.133 132.166 120.575C132.538 120.203 139.614 126.529 149.297 135.646L147.248 135.833C149.483 133.041 151.904 130.064 154.324 127.087C166.055 112.574 176.297 101.223 176.855 101.595Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M222.103 102.526C220.614 97.3156 213.91 97.8738 213.91 97.8738L214.096 101.409C218.007 100.665 220.427 105.317 220.427 105.317L222.103 102.526Z"
                                        fill="#12499C"
                                    />
                                    <path
                                        d="M80.9587 113.318C79.4691 108.108 72.7656 108.666 72.7656 108.666L72.9518 112.201C76.8622 111.457 79.2829 116.109 79.2829 116.109L80.9587 113.318Z"
                                        fill="#E0E0E0"
                                    />
                                    <path
                                        d="M158.793 42.6107C166.428 45.0296 171.269 36.0982 171.269 36.0982L166.614 33.4932C164.379 38.8892 156.559 38.331 156.559 38.331L158.793 42.6107Z"
                                        fill="#E0E0E0"
                                    />
                                    <path
                                        d="M115.779 52.1001C112.241 52.4722 111.683 56.938 111.683 56.938L114.103 57.3101C114.103 54.7051 117.455 53.5887 117.455 53.5887L115.779 52.1001Z"
                                        fill="#12499C"
                                    />
                                    <path
                                        d="M264 85.0347C264.559 81.4993 260.276 80.0107 260.276 80.0107L259.345 82.2436C261.952 82.9879 262.138 86.3372 262.138 86.3372L264 85.0347Z"
                                        fill="#E0E0E0"
                                    />
                                    <path
                                        d="M136.821 5.02394C137.379 1.48857 133.097 0 133.097 0L132.166 2.23286C134.772 2.97715 134.959 6.32644 134.959 6.32644L136.821 5.02394Z"
                                        fill="#12499C"
                                    />
                                    <path
                                        d="M47.9999 62.706C47.4413 68.2882 54.7033 69.5907 54.7033 69.5907L56.0068 65.8693C51.5378 65.4971 50.9792 60.2871 50.9792 60.2871L47.9999 62.706Z"
                                        fill="#12499C"
                                    />
                                    <path
                                        d="M213.352 42.4243C216.89 42.6104 218.193 38.3307 218.193 38.3307L215.959 37.5864C215.586 40.1914 212.048 40.7496 212.048 40.7496L213.352 42.4243Z"
                                        fill="#12499C"
                                    />
                                    <path
                                        d="M233.089 57.1241C233.089 57.3102 231.786 57.4962 230.11 57.4962C228.434 57.4962 227.131 57.3102 227.131 57.1241C227.131 56.938 228.434 56.752 230.11 56.752C231.6 56.752 233.089 56.938 233.089 57.1241Z"
                                        fill="#E0E0E0"
                                    />
                                    <path
                                        d="M236.255 49.123C236.441 49.123 236.628 50.4256 236.628 52.1002C236.628 53.7748 236.441 55.0773 236.255 55.0773C236.069 55.0773 235.883 53.7748 235.883 52.1002C235.883 50.4256 236.069 49.123 236.255 49.123Z"
                                        fill="#E0E0E0"
                                    />
                                    <path
                                        d="M239.607 56.9381C239.607 56.752 240.91 56.5659 242.586 56.5659C244.262 56.5659 245.566 56.752 245.566 56.9381C245.566 57.1241 244.262 57.3102 242.586 57.3102C240.91 57.3102 239.607 57.1241 239.607 56.9381Z"
                                        fill="#E0E0E0"
                                    />
                                    <path
                                        d="M236.441 65.1252C236.255 65.1252 236.069 63.8227 236.069 62.1481C236.069 60.4734 236.255 59.1709 236.441 59.1709C236.627 59.1709 236.814 60.4734 236.814 62.1481C236.627 63.6366 236.627 65.1252 236.441 65.1252Z"
                                        fill="#E0E0E0"
                                    />
                                    <path
                                        d="M241.283 61.5898C241.097 61.7759 240.538 61.2177 239.979 60.4734C239.421 59.7291 239.048 59.1709 239.234 58.9848C239.421 58.7987 239.979 59.3569 240.538 60.1012C240.91 60.8455 241.283 61.4037 241.283 61.5898Z"
                                        fill="#E0E0E0"
                                    />
                                    <path
                                        d="M240.91 52.4722C241.096 52.6583 240.538 53.2165 239.979 53.7747C239.421 54.3329 238.862 54.7051 238.676 54.7051C238.489 54.519 239.048 53.9608 239.607 53.4026C240.165 52.6583 240.724 52.2862 240.91 52.4722Z"
                                        fill="#E0E0E0"
                                    />
                                    <path
                                        d="M234.021 54.7051C233.834 54.8912 233.276 54.519 232.717 54.1469C232.159 53.5887 231.786 53.2165 231.786 53.0304C231.972 52.8444 232.531 53.2165 233.09 53.5887C233.834 54.1469 234.207 54.519 234.021 54.7051Z"
                                        fill="#E0E0E0"
                                    />
                                    <path
                                        d="M233.835 58.7989C234.021 58.985 233.648 59.5432 233.09 60.1014C232.531 60.6596 231.972 61.0317 231.786 61.0317C231.6 60.8457 231.972 60.2875 232.531 59.7292C233.09 58.985 233.648 58.6128 233.835 58.7989Z"
                                        fill="#E0E0E0"
                                    />
                                    <path
                                        d="M70.9034 40.5635C70.9034 40.7496 69.6 40.9357 67.9241 40.9357C66.2483 40.9357 64.9448 40.7496 64.9448 40.5635C64.9448 40.3775 66.2483 40.1914 67.9241 40.1914C69.4138 40.1914 70.9034 40.3775 70.9034 40.5635Z"
                                        fill="#12499C"
                                    />
                                    <path
                                        d="M73.8827 32.3765C74.0689 32.3765 74.2551 33.679 74.2551 35.3536C74.2551 37.0283 74.0689 38.3308 73.8827 38.3308C73.6965 38.3308 73.5103 37.0283 73.5103 35.3536C73.6965 33.865 73.8827 32.3765 73.8827 32.3765Z"
                                        fill="#12499C"
                                    />
                                    <path
                                        d="M77.4209 40.3775C77.4209 40.1914 78.7243 40.0054 80.4002 40.0054C82.0761 40.0054 83.3795 40.1914 83.3795 40.3775C83.3795 40.5636 82.0761 40.7497 80.4002 40.7497C78.7243 40.5636 77.4209 40.5636 77.4209 40.3775Z"
                                        fill="#12499C"
                                    />
                                    <path
                                        d="M74.2552 48.3786C74.069 48.3786 73.8828 47.0761 73.8828 45.4015C73.8828 43.7268 74.069 42.4243 74.2552 42.4243C74.4414 42.4243 74.6276 43.7268 74.6276 45.4015C74.4414 47.0761 74.2552 48.3786 74.2552 48.3786Z"
                                        fill="#12499C"
                                    />
                                    <path
                                        d="M78.9102 45.0293C78.724 45.2153 78.1654 44.6571 77.6067 43.9128C77.0481 43.1685 76.6757 42.6103 76.8619 42.4242C77.0481 42.2382 77.6067 42.7964 78.1654 43.5407C78.724 44.285 79.0964 44.8432 78.9102 45.0293Z"
                                        fill="#12499C"
                                    />
                                    <path
                                        d="M78.7241 35.7256C78.9103 35.9117 78.3517 36.4699 77.7931 37.0281C77.2345 37.5863 76.6759 37.9584 76.4896 37.9584C76.3034 37.7724 76.8621 37.2142 77.4207 36.6559C77.9793 36.0977 78.5379 35.7256 78.7241 35.7256Z"
                                        fill="#12499C"
                                    />
                                    <path
                                        d="M71.8346 38.1445C71.6484 38.3306 71.0898 37.9585 70.5311 37.5863C69.9725 37.0281 69.6001 36.656 69.6001 36.4699C69.7863 36.2838 70.3449 36.656 70.9035 37.0281C71.6484 37.5863 72.0208 37.9585 71.8346 38.1445Z"
                                        fill="#12499C"
                                    />
                                    <path
                                        d="M71.6485 42.2383C71.8347 42.4244 71.4623 42.9826 70.9036 43.5408C70.345 44.0991 69.7864 44.4712 69.6002 44.4712C69.414 44.2851 69.7864 43.7269 70.345 43.1687C70.9036 42.4244 71.4623 42.0523 71.6485 42.2383Z"
                                        fill="#12499C"
                                    />
                                </g>

                                <defs>
                                    <clipPath id="clip0_334_18513">
                                        <rect
                                            width="216"
                                            height="171"
                                            fill="white"
                                            transform="translate(48)"
                                        />
                                        <h5>
                                            Congratulations
                                            Your password has been successfully changed
                                        </h5>
                                    </clipPath>
                                </defs>
                            </svg>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ChangePassword;
