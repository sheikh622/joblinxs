import React, { useState,useEffect } from "react";
import { Button, Form } from "@themesberg/react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
//saga

import { updatetPassword } from "../Redux/auth/actions";

export default ({showDefault, setShowDefault}) => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.auth.Auther);
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
    if(!showDefault){
        reset();
    }
    console.log(showDefault, "erjerej")
  }, [showDefault])
  
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label>Current Password</Form.Label>
        <Form.Control
          name="currentpassword"
          type="password"
          {...register("currentpassword")}
          className={`form-control ${
            errors.currentpassword ? "is-invalid" : ""
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
        <Form.Label>New Password</Form.Label>
        <Form.Control
          name="confirmpassword"
          type="password"
          {...register("confirmpassword")}
          className={`form-control ${
            errors.confirmpassword ? "is-invalid" : ""
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
            Confirm Password
          </Button>
        </div>
      </Form.Group>
    </Form>
  );
}
