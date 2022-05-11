import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Fonts } from "../../../shared/constants/AppEnums";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AppInfoView from "../../../@crema/core/AppInfoView";
import AuthWrapper from "../AuthWrapper";
import { InputAdornment, IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
import { TextField } from "@mui/material";
import {resetPassword} from "../../../redux/auth/actions"
import IntlMessages from "@crema/utility/IntlMessages";
import { useHistory} from "react-router-dom";
import { Console } from "console";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  console.log("----------",history);
  // const onGoToResetPassword = () => {
  //   history.push("/reset-password", { tab: "firebase" });
  // };
  let Array = history.location.search;
  const newToken=Array.split("=")[1];
  console.log("newToken",newToken);

  const token = useSelector((state: any) => state.auth.resetPasswordToken);
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
    password: Yup.string().required("Password is required")
    .oneOf([Yup.ref('confirmPassword'), null], 'Passwords must match'),
    confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
  });
  const resetPasswordFormik = useFormik({
    initialValues: {
      password: "", 
      confirmPassword: "",
      showPasswordToken:"" 
    },
    validationSchema: ResetPasswordSchema,
    onSubmit: async (values) => {   
    
      await dispatch(
        resetPassword({
          password: values.password, 
          confirmPassword: values.confirmPassword, 
          token: newToken, 
        })
      );
    },
  });
  return (
    <AuthWrapper>
      <Box sx={{ width: "70%" }}>
        <Box
          sx={{
            mb: 5,
            display: "flex",
            alignItems: "center",
          }}
        >
           <Typography
              component="h2"
              sx={{
                fontWeight: Fonts.BOLD,
                fontSize: 30,
                mb: 4,
              }}
            >
            {/* <IntlMessages id="common.Admin" /> */}
            </Typography>
        </Box>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            mb: 1.5,
            color: (theme) => theme.palette.text.primary,
            fontWeight: Fonts.SEMI_BOLD,
            fontSize: { xs: 14, xl: 16 },
          }}
        >
         Reset Password
        </Typography>
        <form
          style={{ textAlign: "left" }}
          noValidate
          autoComplete="off"
          onSubmit={resetPasswordFormik.handleSubmit}
        >
          <Box sx={{ mb: { xs: 5, xl: 8 } }}>      
          </Box>
          <Box sx={{ mb: { xs: 3, xl: 4 } }}>
            <TextField
              name="password"
              fullWidth
              type={showPassword}
              placeholder="password"
              label="Password"
              value={resetPasswordFormik.values.password}
              onChange={(e: any) => {
                resetPasswordFormik.setFieldValue("password", e.target.value);
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
            {resetPasswordFormik.touched.password && resetPasswordFormik.errors.password ? (
              <div style={{ color: "red" }}>{resetPasswordFormik.errors.password}</div>
            ) : null}
          </Box>
          <Box sx={{ mb: { xs: 3, xl: 4 } }}>
            <TextField
              name="confirmPassword"
              fullWidth
              type={showConfirmPassword}
              placeholder="Retype Password"
              label="Retype Password"
              value={resetPasswordFormik.values.confirmPassword}
              onChange={(e: any) => {
                resetPasswordFormik.setFieldValue("confirmPassword", e.target.value);
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={changeConfirmPasswordState} edge="end">
                      <Icon
                       icon={showConfirmPassword == "text" ? "eva:eye-fill" : "eva:eye-off-fill"}
                        // icon={showConfirmPassword ? "eva:eye-fill" : "eye-off-fill"}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {resetPasswordFormik.touched.confirmPassword && resetPasswordFormik.errors.confirmPassword ? (
              <div style={{ color: "red" }}>{resetPasswordFormik.errors.confirmPassword}</div>
            ) : null}
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
              // onClick={onGoToResetPassword}
            >
           <IntlMessages id="common.reset" />
            </Button>
          </div>
        </form>
        <AppInfoView />
      </Box>
    </AuthWrapper>
  );
};
export default ResetPassword;
