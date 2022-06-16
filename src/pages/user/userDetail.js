import { Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import {
  Button, Card, Col, Container,
  Image, Row
} from "@themesberg/react-bootstrap";
import { useHistory } from "react-router-dom";

import moment from "moment";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Profile1 from "../../assets/img/team/profile-picture-1.jpg";
import DetailHeading from "../../components/DetailHeading";
import Navbar from "../../components/Navbar";
import { Routes } from "../../routes";

const UserDetails = ({ }) => {
  const history = useHistory();
  const location = useLocation();
  const [userData] = useState(location.state.item);
  const {
    location: { state },
  } = history;
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
    return arr;
  };

  return (
    <>
      <Navbar module={"User Detail"} />
      <Container>
        <Row>
          <div className="mt-2 mb-3 d-flex justify-content-end">
            <Link
              className="text-white fw-bold"
              to={Routes.UserManagement.path}
            >
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
                      src={
                        userData?.profileImg ? userData?.profileImg : Profile1
                      }
                      alt="Neil Portrait"
                      className="user-avatar large-avatar rounded-circle mx-auto mb-2"
                    />
                    <div className="border_bottom pb-3 mb-4">
                      <Card.Title>{userData?.fullName ? userData?.fullName : " --"}</Card.Title>
                      
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
                      <DetailHeading
                        heading={"Full Name"}
                        value={userData?.fullName ? userData?.fullName : " --"}
                      />
                      <DetailHeading
                        heading={"Member Since"}
                        value={"24/02/2022"}
                      />
                      <DetailHeading
                        heading={"Date of Birth"}
                        value={
                          userData?.dateOfBirth
                            ? moment(userData?.dateOfBirth).format("DD-MM-YYYY")
                            : " --"
                        }
                      />
                    </div>
                    <div className="border_bottom pb-2 mb-4">
                      <Card.Title className="text-primary">
                        Contact Information
                      </Card.Title>
                      <DetailHeading
                        heading={"Email"}
                        value={userData?.email ? userData?.email : " --"}
                      />
                      <DetailHeading
                        heading={"Phone"}
                        value={
                          userData?.phoneNumber ? userData?.phoneNumber : " --"
                        }
                      />
                      <DetailHeading
                        heading={"Address"}
                        value={userData?.address ? userData?.address : " --"}
                      />
                      <DetailHeading
                        heading={"City"}
                        value={userData?.city ? userData?.city : " --"}
                      />
                      <DetailHeading
                        heading={"Province"}
                        value={userData?.province ? userData?.province : " --"}
                      />
                      
                      <DetailHeading
                        heading={"Postal Code"}
                        value={
                          userData?.postalCode ? userData?.postalCode : " --"
                        }
                      />
                    </div>
                    <div className="border_bottom pb-2 mb-4">
                      <Card.Title className="text-primary">
                        Other Information
                      </Card.Title>
                      <DetailHeading
                        heading={"Tools Available"}
                        value={
                          userData?.toolsAvailable
                            ? userData?.toolsAvailable
                            : " --"
                        }
                      />

                      {userData.account_type === "provider" && (
                        <>
                          <DetailHeading
                            heading={"Carrier Overview"}
                            value={
                              userData?.carrierOverview
                                ? userData?.carrierOverview
                                : " --"
                            }
                          />
                          <DetailHeading
                            heading={"Personal Attributes"}
                            value={
                              userData?.personalAttributes
                                ? userData?.personalAttributes
                                : " --"
                            }
                          />
                          <Row>
                            <Col xs={4}>
                              <Card.Text className="text-gray mb-2">
                                Criminal Record:
                              </Card.Text>
                            </Col>
                            <Col xs={6}>
                              <Card.Text className="text-black mb-2">
                                <span className="text-black">
                                  <a
                                    href={userData?.criminalRecord}
                                    target="_blank"
                                  >
                                    Record
                                  </a>
                                </span>
                              </Card.Text>
                            </Col>
                          </Row>

                          <Card.Text className="text-gray mb-2">
                            frontId{" "}
                            <span className="text-black">
                              <Card.Img
                                // src={Profile1}
                                src={
                                  userData?.frontId ? userData?.frontId : "--"
                                }
                                alt="Neil Portrait"
                                className="user-avatar large-avatar rounded-circle mx-auto mb-2"
                              />
                            </span>
                          </Card.Text>
                          <Card.Text className="text-gray mb-2">
                            Back Id{" "}
                            <span className="text-black">
                              <Card.Img
                                src={userData?.backId ? userData?.backId : "--"}
                                alt="Neil Portrait"
                                className="user-avatar large-avatar rounded-circle mx-auto mb-2"
                              />
                            </span>
                          </Card.Text>
                        </>
                      )}
                    </div>
                    {userData.account_type === "seeker" && (
                      <>
                        <Card.Title className="text-primary">
                          Business Information
                        </Card.Title>
                        <Card.Text className="text-gray mb-2">
                          <span className="text-black">
                            <a
                              href={
                                userData?.businessInformation?.businessLicense
                              }
                              target="_blank"
                            >
                              {" "}
                              business License{" "}
                            </a>
                          </span>
                        </Card.Text>
                        <Card.Text className="text-gray mb-2">
                          businessLogo
                          <span className="text-black">
                            <Card.Img
                              src={
                                userData?.businessInformation?.businessLogo
                                  ? userData?.businessInformation?.businessLogo
                                  : "images"
                              }
                              alt=""
                              className="user-avatar large-avatar rounded-circle mx-auto mb-2"
                            />
                          </span>
                        </Card.Text>
                      </>
                    )}


                    <Row>
                      <Card.Title className="text-primary">Categories</Card.Title>
                      {userData?.category?.map((value, index, row) => {
                        let category = value?.category;
                        return (
                          <Col lg={12} md={12} xs={12} sm={12} className="pb-3">
                            <Card border="light" className="shadow-sm introCard"
                            >
                              <Image
                                src={category.categoryImg}
                                className="navbar-brand-light"
                              />
                              <div className="detailSection">
                                <span className="left">
                                  <h3>{category.title}</h3>
                                  <p>{category.details}</p>
                                </span>
                              </div>
                            </Card>
                          </Col>
                        );
                      })}

                    </Row>

                    {userData.account_type === "provider" && (
                      <>
                        <div className="pb-2 mb-4">
                          <Card.Title className="text-primary">
                            Work Experience
                          </Card.Title>
                          <Grid
                            style={{
                              height: 400,
                              width: "100%",
                              marginTop: "5%",
                            }}
                          >
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
      </Container >
    </>
  );
};
export default UserDetails;
