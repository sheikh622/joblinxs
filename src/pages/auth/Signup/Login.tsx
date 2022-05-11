import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import AppInfoView from "../../../@crema/core/AppInfoView";
import { Fonts } from "../../../shared/constants/AppEnums";
import { TextField } from "@mui/material";
import { loginRequest } from "../../../redux/auth/actions";
import { InputAdornment, IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
const LoginPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState("password");
  const changePasswordState = () => {
    if (showPassword === "password") {
      setShowPassword("text");
    } else {
      setShowPassword("password");
    }
  };

  const onGoToForgetPassword = () => {
    history.push("/forget-password", { tab: "firebase" });
  };

  const LoginSchema = Yup.object().shape({
    BusinessName: Yup.string()
      .required("required"),
    Description: Yup.string()
      .required("required"),
    Preference: Yup.string()
      .required("required"),
    name: Yup.string()
      .required("required"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    phone: Yup.string()
      .required("required")
      .min(11, "to short")
      .max(11, "to long"),
    password: Yup.string().required("Password is required"),
  });

  const loginFormik = useFormik({
    initialValues: {
      BusinessName: "",
      Description: "",
      Preference: "",
      name: "",
      email: "",
      phone: "",
      password: "",
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      await dispatch(
        loginRequest({
          BusinessName: values.BusinessName,
          Description: values.Description,
          Preference: values.Description,
          name: values.name,
          email: values.email,
          phone: values.phone,
          password: values.password,
        })
      );
    },
  });

  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", mb: 5 }}>
        <form
          style={{ textAlign: "center" }}
          noValidate
          autoComplete="off"
          onSubmit={loginFormik.handleSubmit}
        >
          <Box sx={{ mb: { xs: 5, xl: 8 } }}>
            <TextField
              name="BusinessName"
              fullWidth
              type="BusinessName"
              placeholder="Enter your BusinessName"
              label="Business Name"
              value={loginFormik.values.BusinessName}
              onChange={(e: any) => {
                loginFormik.setFieldValue("BusinessName", e.target.value);
              }}
            />
            {loginFormik.touched.BusinessName && loginFormik.errors.BusinessName ? (
              <div style={{ color: "red" }}>{loginFormik.errors.BusinessName}</div>
            ) : null}
          </Box>
          <Box sx={{ mb: { xs: 5, xl: 8 } }}>
            <TextField
              name="Description"
              fullWidth
              type="Description"
              placeholder="Enter your Description"
              label="Description"
              value={loginFormik.values.Description}
              onChange={(e: any) => {
                loginFormik.setFieldValue("Description", e.target.value);
              }}
            />
            {loginFormik.touched.Description && loginFormik.errors.Description ? (
              <div style={{ color: "red" }}>{loginFormik.errors.Description}</div>
            ) : null}
          </Box>
          <Box sx={{ mb: { xs: 5, xl: 8 } }}>
            <TextField
              name="Preference"
              fullWidth
              type="Preference"
              placeholder="Enter your Preference"
              label="Preference"
              value={loginFormik.values.Preference}
              onChange={(e: any) => {
                loginFormik.setFieldValue("Preference", e.target.value);
              }}
            />
            {loginFormik.touched.Preference && loginFormik.errors.Preference ? (
              <div style={{ color: "red" }}>{loginFormik.errors.Preference}</div>
            ) : null}
          </Box>

          <Box sx={{ mb: { xs: 5, xl: 8 } }}>
            <TextField
              name="name"
              fullWidth
              type="name"
              placeholder="Enter your name"
              label="name"
              value={loginFormik.values.name}
              onChange={(e: any) => {
                loginFormik.setFieldValue("name", e.target.value);
              }}
            />
            {loginFormik.touched.name && loginFormik.errors.name ? (
              <div style={{ color: "red" }}>{loginFormik.errors.name}</div>
            ) : null}
          </Box>

          <Box sx={{ mb: { xs: 5, xl: 8 } }}>
            <TextField
              name="email"
              fullWidth
              type="email"
              placeholder="name@email.com"
              label="Email"
              value={loginFormik.values.email}
              onChange={(e: any) => {
                loginFormik.setFieldValue("email", e.target.value);
              }}
            />
            {loginFormik.touched.email && loginFormik.errors.email ? (
              <div style={{ color: "red" }}>{loginFormik.errors.email}</div>
            ) : null}
          </Box>

          <Box sx={{ mb: { xs: 5, xl: 8 } }}>
            <TextField
              id="outlined-basic"
              label="Phone No."
              variant="outlined"
              name="phone"
              style={{ width: "100%" }}
              value={loginFormik.values && loginFormik.values.phone}
              onChange={loginFormik.handleChange}
            />
            {loginFormik.touched.phone && loginFormik.errors.phone ? (
              <div className=" phonefield" style={{ color: "#dc3545" }}>
                {loginFormik.errors.phone}
              </div>
            ) : null}
          </Box>


          <Box sx={{ mb: { xs: 3, xl: 4 } }}>
            <TextField
              name="password"
              fullWidth
              type={showPassword}
              placeholder="password"
              label="Password"
              value={loginFormik.values.password}
              onChange={(e: any) => {
                loginFormik.setFieldValue("password", e.target.value);
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={changePasswordState} edge="end">
                      <Icon
                        icon={showPassword == "text" ? "eva:eye-fill" : "eva:eye-off-fill"}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {loginFormik.touched.password && loginFormik.errors.password ? (
              <div style={{ color: "red" }}>{loginFormik.errors.password}</div>
            ) : null}
          </Box>

          <Box
            sx={{
              mb: { xs: 3, xl: 4 },
            }}
          >
            <Box
              component="span"
              sx={{
                color: (theme) => theme.palette.primary.main,
                fontWeight: Fonts.MEDIUM,
                cursor: "pointer",
                display: "block",
                textAlign: "right",
              }}
              onClick={onGoToForgetPassword}
            >
              Forget Your Password?
            </Box>
          </Box>

          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              // disabled={isSubmitting}
              sx={{
                minWidth: 160,
                fontWeight: Fonts.REGULAR,
                fontSize: 16,
                textTransform: "capitalize",
                padding: "4px 16px 8px",
              }}
            >
              Register
            </Button>
          </div>
        </form>
      </Box>

      {/* <AppInfoView /> */}
    </Box>
  );
};
export default LoginPage;
