import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row, Card, Button, Container } from "@themesberg/react-bootstrap";
import { Link } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/Navbar";
import Profile1 from "../../assets/img/team/profile-picture-1.jpg";
import { Routes } from "../../routes";
import { useHistory, useLocation } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { Grid } from "@mui/material";
import moment from "moment";

const UserDetails = ({ }) => {

  // const history = useHistory();
  const location = useLocation()
  const [userData] = useState(location.state.item)
  // const {
  //   location: { state },
  // } = history;
  const tabelRow = () => {
    let arr = userData?.workExperience.map((item, index) => {
      return {
        id: index,
        JobTitle: item?.jobTitle ? item?.jobTitle : "-",
        employmenttype: item?.employmentType ? item?.employmentType : "-",
        Location: item?.location ? item?.location : "-",
        StartDate: item?.startDate
          ? moment(item?.startDate).format("DD-MM-YYYY")
          : "-",
        EndDate: item?.endDate
          ? moment(item?.endDate).format("DD-MM-YYYY")
          : "-",
        Detail: item?.details ? item?.details : "-",
      };
    });
    return arr
  }

  return (
    <>
      <Navbar module={"User Detail"} />
      <Container>
        <Row>
          <div className="mt-2 mb-3 d-flex justify-content-end">
            <Link className="text-white fw-bold" to={Routes.UserManagement.path}>
              <Button variant="primary" type="submit">
                Back
              </Button>
            </Link>
          </div>
          <Col xs={12} xl={4}>
            <Row>
              <Col xs={12}>
                <Card
                  border="light"
                  className="text-center p-0 mb-4 profileView"
                >
                  <Card.Body className="pb-2">
                    <Card.Img
                      // src={Profile1}
                      src={userData?.profileImg ? userData?.profileImg : Profile1}
                      alt="Neil Portrait"
                      className="user-avatar large-avatar rounded-circle mx-auto mb-2"
                    />
                    <div className="border_bottom pb-3 mb-4">
                      <Card.Title>Neil Sims</Card.Title>
                      <Card.Subtitle className="fw-normal">
                        <Card.Text className="text-gray mb-2">
                          <span className="text-black">
                            {userData?.employmentType ? userData?.employmentType : " n/a"}

                          </span>
                        </Card.Text>
                      </Card.Subtitle>




                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col xs={12} xl={8}>
            <Row>
              <Col xs={12}>
                <Card
                  border="light"
                  className="text-left p-0 mb-4 profileView info"
                >
                  <Card.Body className="pb-3">
                    <div className="border_bottom pb-2 mb-4">
                      <Card.Title className="text-primary">
                        Basic Information
                      </Card.Title>
                      <Card.Text className="text-gray mb-2">
                        Full Name: <span className="text-black">
                          {userData?.fullName ? userData?.fullName : " n/a"}
                        </span>
                      </Card.Text>
                      <Card.Text className="text-gray mb-2">
                        Member Since:{" "}
                        <span className="text-black">24/02/2022</span>
                      </Card.Text>

                      <Card.Text className="text-gray mb-2">
                        Description: <span className="text-black">
                          {userData?.description ? userData?.description : " n/a"}
                        </span>
                      </Card.Text>
                      <Card.Text className="text-gray mb-2">
                        DOB: <span className="text-black">
                          {userData?.dateofBirth ? userData?.dateofBirth : " n/a"}
                        </span>
                      </Card.Text>
                    </div>
                    <div className="border_bottom pb-2 mb-4">
                      <Card.Title className="text-primary">
                        Contact Information
                      </Card.Title>
                      <Card.Text className="text-gray mb-2">
                        Email: <span className="text-black">
                          {userData?.fullName ? userData?.fullName : " n/a"}
                        </span>
                      </Card.Text>
                      <Card.Text className="text-gray mb-2">
                        Phone: <span className="text-black">
                          {userData?.phoneNumber ? userData?.phoneNumber : " n/a"}
                        </span>
                      </Card.Text>
                      <Card.Text className="text-gray mb-2">
                        Address:{" "}
                        <span className="text-black">

                          {userData?.address ? userData?.address : " n/a"}
                        </span>
                      </Card.Text>

                      <Card.Text className="text-gray mb-2">
                        City:{" "}
                        <span className="text-black">

                          {userData?.city ? userData?.city : " n/a"}
                        </span>
                      </Card.Text>
                      <Card.Text className="text-gray mb-2">
                        Province:{" "}
                        <span className="text-black">

                          {userData?.province ? userData?.province : " n/a"}
                        </span>
                      </Card.Text>
                      <Card.Text className="text-gray mb-2">
                        Country Code:{" "}
                        <span className="text-black">

                          {userData?.countryCode ? userData?.countryCode : " n/a"}
                        </span>
                      </Card.Text>
                      <Card.Text className="text-gray mb-2">
                        postalCode:{" "}
                        <span className="text-black">

                          {userData?.postalCode ? userData?.postalCode : " n/a"}
                        </span>
                      </Card.Text>
                    </div>
                    <div className="border_bottom pb-2 mb-4">
                      <Card.Title className="text-primary">
                        Other Information
                      </Card.Title>
                      <Card.Text className="text-gray mb-2">
                        Tools Available: <span className="text-black">
                          {userData?.toolsAvailable ? userData?.toolsAvailable : " n/a"}
                        </span>
                      </Card.Text>
                      {userData.account_type === 'provider' && (
                        <>
                          <Card.Text className="text-gray mb-2">
                            Carrier Overview: <span className="text-black">
                              {userData?.carrierOverview ? userData?.carrierOverview : " n/a"}
                            </span>
                          </Card.Text>
                        </>
                      )}
                      {userData.account_type === 'provider' && (
                        <>
                          <Card.Text className="text-gray mb-2">
                            Personal Attributes:<span className="text-black">
                              {userData?.personalAttributes ? userData?.personalAttributes : " n/a"}
                            </span>
                          </Card.Text>
                        </>
                      )}
                      {userData.account_type === 'provider' && (
                        <>
                          <Card.Text className="text-gray mb-2">
                            Criminal Record <span className="text-black"><Card.Img
                              // src={Profile1}
                              src={userData?.criminalRecord ? userData?.criminalRecord : "--"}
                              alt="Neil Portrait"
                              className="user-avatar large-avatar rounded-circle mx-auto mb-2"
                            /></span>
                          </Card.Text>
                          <Card.Text className="text-gray mb-2">
                            frontId <span className="text-black"><Card.Img
                              // src={Profile1}
                              src={userData?.frontId ? userData?.frontId : "--"}
                              alt="Neil Portrait"
                              className="user-avatar large-avatar rounded-circle mx-auto mb-2"
                            /></span>
                          </Card.Text>
                          <Card.Text className="text-gray mb-2">
                            Back Id <span className="text-black"><Card.Img
                              src={userData?.backId ? userData?.backId : "--"}
                              alt="Neil Portrait"
                              className="user-avatar large-avatar rounded-circle mx-auto mb-2"
                            /></span>
                          </Card.Text>
                        </>
                      )}
                    </div>
                    {userData.account_type === 'provider' && (
                      <>
                        <Card.Title className="text-primary">
                          Business Information
                        </Card.Title>
                        <Card.Text className="text-gray mb-2">
                           <span className="text-black">
                            <a
                              href={userData?.businessInformation?.businessLicense}
                              target="_blank"
                            >
                              {" "}
                              business License{" "}
                            </a>
                          </span>
                        </Card.Text>
                        <Card.Text className="text-gray mb-2">
                          businessLogo<span className="text-black"><Card.Img

                            src={
                              userData?.businessInformation?.businessLogo
                                ? userData?.businessInformation?.businessLogo
                                : "images"
                            }
                            alt=""
                            className="user-avatar large-avatar rounded-circle mx-auto mb-2"
                          /></span>
                        </Card.Text>
                      </>
                    )}
                    <div className="pb-2 mb-4">
                      <Card.Title className="text-primary">
                        Categories
                      </Card.Title>
                      <Card.Text className="text-gray mb-2">
                        <span className="text-black">Plumber</span>
                      </Card.Text>
                    </div>
                    {userData.account_type === 'provider' && (
                      <>
                        <div className="pb-2 mb-4">

                          <Card.Title className="text-primary">
                            Work Experience
                          </Card.Title>
                          <Grid style={{ height: 400, width: "100%", marginTop: "5%" }}>

                            <DataGrid
                              columns={[
                                { field: "JobTitle" },
                                { field: "employmenttype" },
                                { field: "Location" },
                                { field: "StartDate" },
                                { field: "EndDate" },
                                { field: "Detail" },
                              ]}
                              rows={tabelRow()}
                            />

                          </Grid>
                        </div>
                      </>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default UserDetails;