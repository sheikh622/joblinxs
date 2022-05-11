import React, { useState } from "react";
import Button from "@mui/material/Button";
import Link from '@mui/material/Link';
import AppGrid from "@mui/material"
import { Row, Col, Container } from "reactstrap"
import { useDispatch } from "react-redux";
import { Form, Formik, validateYupSchema } from "formik";
import * as Yup from "yup";
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
import EmailListSkeleton from "@crema/core/AppSkeleton/EmailListSkeleton";
import { Nav, Collapse, Navbar } from "react-bootstrap"
import image from "../../../assets/icon/landing.png"
import { AppGridContainer } from "@crema";
import { Grid } from "@mui/material";
import Rating from '@mui/material/Rating';
import Select from "@mui/material/Select";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import TextField from "@mui/material/TextField";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const FormWrapper = styled(Form)(() => {
  return {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
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


const ComingSoon = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { messages } = useIntl();
  const [value, setValue] = React.useState(2);
  const validationSchema = Yup.object({
    email: Yup
      .string()
      .email("The Email you entered is not a valid format!"),
    // .required("Please enter Email Address!"),
    name: Yup.string(),
    // .required("Please enter fullName!"),
    number: Yup.string(),
    // .required("Please enter Phonenumbe!"),
    message: Yup.string(),
    // .required("Please enter your message here!"),
  });
  return (
    <>
      <div>
        <AppAnimate animation="transition.slideUpIn" delay={200}>
          <>
            <Navbar bg="light" expand="lg">
              <Container>
                <Nav className="navhead">
                  <div className="barTop">
                    <Nav.Link href="#home" className="Home">Home</Nav.Link>
                    <Nav.Link href="#about" className="About">About</Nav.Link>

                    <Nav.Link href="#how-it-works" className="how-it-works" style={{ paddingRight: "44px" }}>How it Works</Nav.Link>


                    <Nav.Link href="#contact" className="Contact">Contact</Nav.Link>

                    <Button className="login">Login</Button>
                    <Button className="signup">Sign-up</Button>
                  </div>

                </Nav>
              </Container>
            </Navbar>
            <section className="home-section" id="home">
              <AppGridContainer
                // spacing={1}
                sx={{
                  paddingTop: 0,
                  paddingBottom: 5,
                  paddingLeft: 5,
                  paddingRight: 5,
                }}
              >

                <Grid
                  item
                  xs={12}
                  md={3}
                  sx={{
                    marginLeft: { lg: 12, xs: 0 },
                  }}
                >
                  <Box
                    sx={{
                      py: { xl: 3 },
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      mt: 30,
                      marginLeft: 5
                    }}
                  >
                    <Box
                      component="h1"
                      sx={{
                        mb: { xs: 3, xl: 3 },
                        fontSize: { xs: 22, md: 30, mt: 50, marginLeft: 5 },
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
                      <Typography style={{ fontSize: 18, marginTop: 2, fontWeight: "bold", marginLeft: "5px" }}>
                        <IntlMessages id="error.comingSoonMessage1" />
                      </Typography>
                      <Typography style={{ fontSize: 18, fontWeight: "bold", marginLeft: "5px" }}>
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
                      // validationSchema={validationSchema}
                      onSubmit={(data, { resetForm }) => {
                        console.log("data", data.email)
                        // dispatch(
                        //   submitEmail(data.email)
                        // );
                      }}
                    >
                      {() => (
                        <FormWrapper>
                          <div style={{ display: "flex", width: "100%" }}>
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
                          <p className="newsletter-form-terms">
                            <span><i className="bi bi-check2"></i> Free 30-Day Trial</span>
                          </p>
                        </FormWrapper>
                      )}
                    </Formik>
                  </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                  <div className="image" style={{ marginTop: "20px" }}>
                    <img src={image} />
                  </div>
                </Grid>
              </AppGridContainer>



            </section>

            <section className="section-white" id="about">
              <div className="how its work" style={{ fontSize: "27px", justifyContent: "center", textAlign: "center" }} >
                <h1>About</h1>
              </div>
              <AppGridContainer
                // spacing={1}
                sx={{
                  paddingTop: 0,
                  paddingBottom: 5,
                  paddingLeft: 5,
                  paddingRight: 5,
                  justifycontent: "center",
                  alignitems: "center",
                }}
              >

                <Grid item xs={12} md={4}>
                  <div className="card" style={{ width: "18rem" }}>
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title" style={{ textAlign: "center", fontStyle: "initial" }}>Search Oportunities</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>


                </Grid>

                <Grid
                  item
                  xs={12}
                  md={4}
                  spacing={1}
                  sx={{
                    // marginLeft: { lg: 10, xs: 0 },
                    justifyContent: "center"
                  }}
                >
                  <div className="card" style={{ width: "18rem", justifyContent: "center", marginRight:"20px" }}>
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title" style={{ textAlign: "center" }}>Get Rewarded
                      </h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} md={4}>
                  <div className="card" style={{ width: "18rem" }}>
                    <img src={image} className="card-img-top" alt="..." />

                    <div className="card-body">
                      <h5 className="card-title" style={{ textAlign: "center" }}>Reach Clients</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>

                </Grid>
              </AppGridContainer>
              <AppGridContainer>
                
              
              <Grid
                item
                xs={12}
                md={5}
                // spacing={1}
                sx={{
                  marginLeft: { lg: 10, xs: 0 },
                  mt: 20,
                }}
              >
                <img src={image} style={{ marginLeft: "25px" }} />
              </Grid>
              <Grid
                item
                xs={12}
                md={5}
                // spacing={1}
                sx={{
                  marginLeft: { lg: 10, xs: 0 },
                  mt: 20,
                }}
              >
                <div style={{marginTop:"155px", fontSize:"20px"}}>
                Nemo enimat ipsam voluptatem quia voluptas situm ets aspernatis netsum loris fugit, sed quia magnitus honoratis quis ratione sequi etum nets.
                </div>
                <h6>Jennifer Smith<span>  — Designer <span style={{textEmphasisColor:"red"}}>@EpicThemes</span></span></h6>
              </Grid>
            
              </AppGridContainer>
            </section>
           
          </>
        </AppAnimate>
        <section className="section-grey" id="how-it-works">
          <AppGridContainer>

            <Grid
              item
              xs={12}
              md={5}
              // spacing={1}
              sx={{
                marginLeft: { lg: 10, xs: 0 },
                mt: 20,
              }}
            >
              <h2>
                How it Works
              </h2>
              <p style={{ marginTop: "20px" }}>Quis autem velis ets reprehender net etid quiste netsum voluptate. Utise wisi enim minim veniam, quis etsad ets aspernatis netsum stationes nets qualitats.</p>
              <Grid item xs={12}
                md={4}
              // spacing={1}
              >
                <div>
                  <p style={{ marginTop: "30px", textAlign: "center" }}>LinkedIn
                    <Box sx={{ mt: 2, }}> <Rating name='read-only' value={value} readOnly /></Box>

                  </p>
                </div>
              </Grid>
              <Grid item xs={12}
                md={6}
              // spacing={1}
              >
                <div>
                  <p style={{ marginTop: "30px", textAlign: "center" }}>UpWork
                    <Box sx={{ mt: 2, }}>   <Rating name='read-only' value={value} readOnly /></Box>

                  </p>
                </div>
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              md={5}
              // spacing={1}
              sx={{
                marginLeft: { lg: 10, xs: 0 },
                mt: 20,
              }}
            >
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Create Account</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Age"
                // onChange={handleChange}
                >
                  <MenuItem value={10}>This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the style.</MenuItem>

                </Select>
              </FormControl>

              <FormControl fullWidth style={{ marginTop: "20px" }} >
                <InputLabel id="demo-simple-select-label">Choose Package</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Age"
                // onChange={handleChange}
                >
                  <MenuItem value={10}>This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the style.</MenuItem>

                </Select>
              </FormControl>

              <FormControl fullWidth style={{ marginTop: "20px" }}>
                <InputLabel id="demo-simple-select-label">Enjoy Smart</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Age"
                // onChange={handleChange}
                >
                  <MenuItem value={10}>This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the style.</MenuItem>

                </Select>
              </FormControl>

            </Grid>


          </AppGridContainer>

        </section>

        <section className="section-white" id="contact">
          <AppGridContainer>

            <Grid
              item
              xs={12}
              md={6}
              // spacing={1}
              sx={{
                marginLeft: { lg: 10, xs: 0 },
                mt: 20,
              }}
            >
              <div>
                <h2>
                  Get in Touch
                </h2>
              </div>

              <div style={{ display: "flex", width: "100%", marginTop: "20px" }}>
                <TextField
                  placeholder="Full Name"
                  name="name"
                  label={<IntlMessages id="common.username" />}
                  className="text-field"
                  variant="outlined"
                  style={{ width: "64%", marginRight: "8px", marginTop: "20px" }}
                />
              </div>
              <div style={{ display: "flex", width: "100%", marginTop: "20px" }}>
                <TextField
                  placeholder="Email"
                  name="email"
                  label={<IntlMessages id="common.emailAddress" />}
                  className="text-field"
                  variant="outlined"
                  style={{ width: "64%", marginRight: "8px" }}
                />
              </div>
              <div style={{ display: "flex", width: "100%", marginTop: "20px" }}>
                <TextField
                  placeholder="phone  Number"
                  name="number"
                  label={<IntlMessages id="common.number" />}
                  className="text-field"
                  variant="outlined"
                  style={{ width: "64%", marginRight: "8px" }}
                />
              </div>
              <div style={{ display: "flex", width: "100%", marginTop: "20px" }}>
                <TextField
                  placeholder="Message"
                  name="message"
                  label={<IntlMessages id="common.Message" />}
                  className="text-field"
                  variant="outlined"
                  style={{ width: "64%", marginRight: "8px" }}
                />
              </div>
              <Box sx={{ mt: 10 }}>
                <Button variant="contained" sx={{ ml: 10, mb: 45 }}>
                  <IntlMessages id="common.sendmessage" ></IntlMessages></Button>
              </Box>
            </Grid>
            <Grid
              item
              xs={10}
              md={4}
              // spacing={1}
              sx={{
                marginLeft: { lg: 10, xs: 0 },
                mt: 20,
              }}
            >
              <div>
                <h2>
                  How to Find us
                </h2>
              </div>
              <iframe className="contact-maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9050207912896!2d-0.14675028449633118!3d51.514958479636384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad554c335c1%3A0xda2164b934c67c1a!2sOxford+St%2C+London%2C+UK!5e0!3m2!1sen!2sro!4v1485889312335" width="500" height="250" style={{ border: "0", marginTop: "40px", marginLeft: "0px" }} ></iframe>
              <h4 style={{ marginTop: "50px" }}>
                Head Office
              </h4>
              <div>
                <BottomNavigationAction
                  label='Nearby'
                  icon={<LocationOnIcon />}

                />
                <h5>10 Oxford Street, London, UK, E1 1EC</h5>
              </div>
              <div>
                <LocalPhoneIcon style={{ marginTop: "20px" }} >

                </LocalPhoneIcon>
                <h5>+44 987 654 321</h5>
              </div>

            </Grid>
          </AppGridContainer>

        </section>

      </div >
    </>
  );
};
export default ComingSoon;
