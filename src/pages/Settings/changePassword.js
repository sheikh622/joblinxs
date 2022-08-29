import { Container, Col, Card, Row, Form, Button, InputGroup, Modal, } from "@themesberg/react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Routes } from "../../routes";
import * as Yup from "yup";
import { useFormik } from "formik";
import { faAngleLeft, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { updatetPassword } from "../../Redux/auth/actions";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const ChangePassword = (props, row) => {

    const dispatch = useDispatch();
    const login = useSelector((state) => state.auth.Auther);
    const [showDefault, setShowDefault] = useState(false);
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
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Form.Group>
                                    <Form.Label>Current Password</Form.Label>
                                    <Form.Control
                                        name="currentpassword"
                                        type="password"
                                        {...register("currentpassword")}
                                        className={`form-control ${errors.currentpassword ? "is-invalid" : ""
                                            }`}
                                    />
                                    <div className="invalid-feedback">
                                        {errors.currentpassword?.message}
                                    </div>
                                </Form.Group>
                                <Form.Group className="mt-3">
                                    <Form.Label>New Password</Form.Label>
                                    <Form.Control
                                        name="newpassword"
                                        type="password"
                                        {...register("newpassword")}
                                        className={`form-control ${errors.newpassword ? "is-invalid" : ""}`}
                                    />
                                    <div className="invalid-feedback">{errors.newpassword?.message}</div>
                                </Form.Group>
                                <Form.Group className="mt-3">
                                    <Form.Label>Confirm New Password</Form.Label>
                                    <Form.Control
                                        name="confirmpassword"
                                        type="password"
                                        {...register("confirmpassword")}
                                        className={`form-control ${errors.confirmpassword ? "is-invalid" : ""
                                            }`}
                                    />
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
            </Container>

        </>
    );
};

export default ChangePassword;
