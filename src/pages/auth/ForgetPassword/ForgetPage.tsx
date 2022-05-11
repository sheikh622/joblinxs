import React from "react";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import AppInfoView from "@crema/core/AppInfoView";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Fonts } from "../../../shared/constants/AppEnums";
import AuthWrapper from "../AuthWrapper";
import { TextField } from "@mui/material";
import {forgotPassword} from "../../../redux/auth/actions"
import IntlMessages from "@crema/utility/IntlMessages";
const ForgetPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const ForgetSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
  });

  const forgetFormik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: ForgetSchema,
    onSubmit: async (values , {resetForm}) => {
   
      await dispatch(
        forgotPassword({
          email: values.email,
        })
      );resetForm();
    },
  });
  return (
    <AuthWrapper>
      <Box sx={{ width: "70%" }}>
        <Box sx={{ mb: { xs: 8, xl: 10 } }}>
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
             <IntlMessages id="common.Forget" />
          </Typography>

          <Typography
            sx={{
              pt: 3,
              fontSize: 15,
              color: "grey.500",
            }}
          >
            <span style={{ marginRight: 4 }}><IntlMessages id="common.password" /></span>
            <Box
              component="span"
              sx={{
                fontWeight: Fonts.MEDIUM,
                "& a": {
                  color: (theme) => theme.palette.primary.main,
                  textDecoration: "none",
                },
              }}
            >
              <Link to="/signin"><IntlMessages id="common.Signin" /></Link>
            </Box>
          </Typography>
        </Box>

        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <form
              style={{ textAlign: "left" }}
              noValidate
              autoComplete="off"
              onSubmit={forgetFormik.handleSubmit}
            >
              <Box sx={{ mb: { xs: 5, xl: 8 } }}>
                <TextField
                  name="email"
                  fullWidth
                  type="email"
                  placeholder="name@email.com"
                  label="Email"
                  value={forgetFormik.values.email}
                  onChange={(e: any) => {
                    forgetFormik.setFieldValue("email", e.target.value);
                  }}
                />
                {forgetFormik.touched.email && forgetFormik.errors.email ? (
                  <div style={{ color: "red" }}>
                    {forgetFormik.errors.email}
                  </div>
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
                >
                  Send Password
                </Button>
              </div>
            </form>

            {/* <Formik
              validateOnChange={true}
              initialValues={{
                email: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(data, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                //reset password api goes here
                setSubmitting(false);
                resetForm();
              }}
            >
              {({ isSubmitting }) => (
                <Form style={{ textAlign: "left" }}>
                  <Box sx={{ mb: { xs: 5, lg: 8 } }}>
                    <AppTextField
                      placeholder="Email"
                      name="email"
                      label={<IntlMessages id="common.emailAddress" />}
                      sx={{
                        width: "100%",
                        "& .MuiInputBase-input": {
                          fontSize: 14,
                        },
                      }}
                      variant="outlined"
                    />
                  </Box>

                  <div>
                    <Button
                      variant="contained"
                      color="primary"
                      disabled={isSubmitting}
                      sx={{
                        fontWeight: Fonts.REGULAR,
                        textTransform: "capitalize",
                        fontSize: 16,
                        minWidth: 160,
                      }}
                      type="submit"
                    >
                      <IntlMessages id="common.sendNewPassword" />
                    </Button>
                  </div>
                </Form>
              )}
            </Formik> */}
          </Box>

          <AppInfoView />
        </Box>
      </Box>
    </AuthWrapper>
  );
};

export default ForgetPage;
