import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AppInfoView from "../../../@crema/core/AppInfoView";
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
    // name: Yup.string()
    // .required("required"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const loginFormik = useFormik({
    initialValues: {
      // name:"",
      email: "",
      password: "",
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      await dispatch(
        loginRequest({
          // name: values.name,
          email: values.email,
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
           {/* <Box sx={{ mb: { xs: 5, xl: 8 } }}>
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
          </Box> */}

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
              Login
            </Button>
          </div>
        </form>
      </Box>

      <AppInfoView />
    </Box>
  );
};

export default LoginPage;
