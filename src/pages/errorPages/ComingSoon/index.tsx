import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Row, Col } from "reactstrap"
import { useDispatch } from "react-redux";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { showMessage, submitEmail } from "../../../redux/common/actions";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import { Fonts } from "shared/constants/AppEnums";
import IntlMessages from "@crema/utility/IntlMessages";
import { AppAnimate, AppCard, AppInfoView } from "@crema";
import AppTextField from "@crema/core/AppFormComponents/AppTextField";
import { styled } from "@mui/material/styles";
import { ReactComponent as Logo } from "../../../assets/icon/comingsoon.svg";
import landing from "../../../assets/icon/landing.png";
import appStore from "../../../assets/icon/appStore.png";
import googleStore from "../../../assets/icon/googleStore.png";
import { useTheme } from "@mui/material";
import { useIntl } from "react-intl";
const FormWrapper = styled(Form)(() => {
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 12,
    "& .text-field": {
      width: "100%",
      marginBottom: 20,
    },
    "& .button": {
      fontWeight: Fonts.MEDIUM,
      fontSize: 16,
      textTransform: "capitalize",
    },
  };
});
const validationSchema = yup.object({
  email: yup
    .string()
    .email("The Email you entered is not a valid format!")
    .required("Please enter Email Address!"),
});
const ComingSoon = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { messages } = useIntl();

  return (
    <div className="commingSoonImg">
      <AppAnimate animation="transition.slideUpIn" delay={200}>
        <>
          <Box
            sx={{
              py: { xl: 6 },
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Box
              component="h1"
              sx={{
                mb: { xs: 3, xl: 4 },
                fontSize: { xs: 22, md: 30, marginTop: 200, },
                fontWeight: Fonts.MEDIUM,
                textDecorationColor: "whitesmoke"
              }}
            >
              <IntlMessages id="error.comingSoon" />!
            </Box>

            <Box
              sx={{
                mb: { xs: 4, xl: 5 },
                color: grey[600],
              }}
            >
              <Typography style={{ fontSize: 18, marginTop: 2, fontWeight: "bold" }}>
                <IntlMessages id="error.comingSoonMessage1" />
              </Typography>
              <Typography style={{ fontSize: 18, fontWeight: "bold" }}>
                <IntlMessages id="error.comingSoonMessage2" />
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              mx: "auto",
              maxWidth: 364,
            }}
          >
            <Formik
              validateOnChange={true}
              initialValues={{
                email: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(data, { resetForm }) => {
                dispatch(
                  submitEmail({
                    email: data.email,  
                    resetForm:resetForm()
                  })
                );
                
              }}
            >
              {() => (
                <FormWrapper>
                  <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                    <AppTextField
                      placeholder="Email"
                      name="email"
                      label={<IntlMessages id="common.emailAddress" />}
                      className="text-field"
                      variant="outlined"
                      style={{ width: "64%", marginRight: "8px" }}
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      className="button"
                      style={{ width: "36%", padding: "10px", height: "53px" }}
                    >
                      <IntlMessages id="error.notifyMe" />
                    </Button>
                  </div>
                </FormWrapper>
              )}
            </Formik>
            <div style={{ display: "flex", marginTop: "20px", justifyContent: "center" }}>
              <img src={appStore} alt="" style={{ width: "150px", height: "50px", marginRight: "14px" }} />
              <img src={googleStore} alt="" style={{ width: "150px", height: "50px" }} />
            </div>
          </Box>
        </>
      </AppAnimate> 
    </div>
  );
};
export default ComingSoon;
