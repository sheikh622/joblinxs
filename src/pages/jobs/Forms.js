import React from "react";
import { useEffect, useState, useRef } from 'react';
import {
  Button, Card, Col, Form, InputGroup, Modal, Row,
} from "@themesberg/react-bootstrap";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import Navbar from "../../components/Navbar";
import NoRecordFound from "../../components/NoRecordFound";
import AddCategory from "../../components/addCategory";
import { getJobListing } from "../../Redux/addJob/actions";
import profile from "../../assets/img/upload.png"
import Select from 'react-select';
import { usePlacesWidget } from "react-google-autocomplete";
import { getCategoryList } from "../../Redux/Category/actions";
export const GeneralInfoForm = () => {
  const YOUR_GOOGLE_MAPS_API_KEY = "AIzaSyBJWt1Yh6AufjxV8B8Y8UVz_25cYV1fvhs";
  const dispatch = useDispatch();
  const history = useHistory();
  const CategoryData = useSelector((state) => state?.Category?.getCategoryList);
  console.log("vhj", CategoryData)
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [hours, setHours] = useState("");
  const [days, setDays] = useState("");
  const [providers, setProviders] = useState("")
  const [experience, setExperience] = useState("")
  const [jobType, setJobType] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [jobNature, setJobNature] = useState("");
  const [categories, setCategories] = useState(null);
  const [location, setLocation] = useState([]);
  const [categoryList, setCategoryList] = useState([]);


  useEffect(() => {
    dispatch(
      getCategoryList({

        role: "user"
      })
    );
  }, []);


  useEffect(() => {
    let array = [

    ];
    CategoryData.map((item) => {
      array.push({
        value: [{ id: item.id, title: item.title, details: item.details }],
        label: item?.title,
      })
    })
    setCategoryList(array);
  }, [CategoryData])
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.click();
  };
  const handleHours = (event) => {
    setHours(event.target.value)

  }
  const handledays = (event) => {
    setDays(event.target.value)
  }

  const options = [
    { value: "Plumber", label: "Plumber" },
    { value: "Doctor", label: "Doctor" },
    { value: "Devloper", label: "Devloper" },
  ];
  const provide = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
  ];
  const experienced = [
    { value: "None", label: "None" },
    { value: "professional", label: "professional" },
    { value: "Expert", label: "Expert" },
  ];
  console.log("tyuiyiu------------", categories)
  const CategorySchema = Yup.object().shape({
    jobName: Yup.string().trim().required("Job Name is required"),
    description: Yup.string().trim().required("description is required"),
    jobRequirements: Yup.string().trim().required("Requirements is required"),
    toolsNeeded: Yup.string().trim().required("Tools is required"),
    fixRate: Yup.string().trim().required("Rate is required"),
  });
  console.log("gchjl", providers)
  const CategoryFormik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: selectedItem?.id ? selectedItem?.id : "",
      jobName: selectedItem?.jobName ? selectedItem?.jobName : "",
      description: selectedItem?.description ? selectedItem?.description : "",
      jobRequirements: selectedItem?.jobRequirements ? selectedItem?.jobRequirements : "",
      toolsNeeded: selectedItem?.toolsNeeded ? selectedItem?.toolsNeeded : "",
      fixRate: selectedItem?.fixRate ? selectedItem?.fixRate : "",
      remember: true,
    },
    validationSchema: CategorySchema,
    onSubmit: async (values, action) => {
      let data = {
        name: values.jobName,
        description: values.description,
        requirement: values.jobRequirements,
        toolsNeeded: values.toolsNeeded,
        rate: values.fixRate,
        jobType: jobType,
        paymentType: paymentType,
        jobNature: jobNature,
        category: categories.value,
        noOfProviders: providers.value,
        experienceRequired: experience.value,
        days: days,
        hours: hours,
        location: location,
        setReset: action.resetForm,
        setShowDefault: setShowDefault,
        showDefault: showDefault,
        jobImg: selectedImage,
        setSelectedImage: setSelectedImage,
      }

      dispatch(
        getJobListing(data)
      );
    },
  });
  // Add location
  const [showDefault, setShowDefault] = useState(false);
  const handleClose = () => setShowDefault(false);

  // Congratulations modal
  const [showDefaults, setShowDefaults] = useState(false);
  const handleCloses = () => setShowDefaults(false);

  // Add Category modal
  const [showDefaultCategory, setShowDefaultCategory] = useState(false);
  const handleClosesCategory = () => setShowDefaultCategory(false);
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };
  const { ref } = usePlacesWidget({
    apiKey: YOUR_GOOGLE_MAPS_API_KEY,
    onPlaceSelected: (place) => {

      setLocation(place.formatted_address)
    },
    options: {
      types: ["(regions)"],
    },
  });
  console.log(location, "here is lcoation");
  return (
    <>
      <Col className={'d-flex justify-content-center'}>
        {selectedImage ?
          (<Card.Img
            src={URL.createObjectURL(selectedImage)}
            alt="Neil Portrait"
            className="user-avatar large-avatar rounded-circle mx-auto mt-5"
          />) : (
            <img src={profile} alt="60px" width={"130px"} onClick={onButtonClick} />
          )
        }
        <Form.Control
          accept="image/*"
          type="file"
          id="file"
          name="file"
          onChange={imageChange}
          className="d-none"
          ref={inputEl}
        />
      </Col>
      <Card className="bg-white shadow-sm mb-4 border-0" >
        <Card.Body>
          <Form onSubmit={CategoryFormik.handleSubmit}>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group id="jobName">
                  <Form.Label>Job Name</Form.Label>
                  <Form.Control
                    // required
                    type="text"
                    placeholder="Enter your Job name"
                    value={CategoryFormik.values.jobName}
                    name="jobName"
                    label="jobName"
                    onChange={(e) => {
                      CategoryFormik.setFieldValue("jobName", e.target.value);
                    }}
                  />
                  {CategoryFormik.touched.jobName && CategoryFormik.errors.jobName ? (
                    <div style={{ color: "red" }}>
                      {CategoryFormik.errors.jobName}
                    </div>
                  ) : null}

                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group id="jobNature">
                  <Form.Label>Job Nature</Form.Label>
                  <fieldset className="d-flex radioButton">
                    <Form.Check
                      // defaultChecked
                      type="radio"
                      label="One Time"
                      value="oneTime"
                      name="jobNature"
                      className="radio1" Description
                      onChange={(event) => {
                        setJobNature(event.target.value)
                      }}
                    />

                    <Form.Check
                      type="radio"
                      label="Recurring"
                      value="recurring"
                      name="jobNature"
                      onChange={(event) => {
                        setJobNature(event.target.value)
                      }}
                    />
                  </fieldset>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6} className="mb-3">
                <Form.Group id="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" rows="3"
                    placeholder="Description"
                    value={CategoryFormik.values.description}
                    name="description"
                    label="description"
                    onChange={(e) => {
                      CategoryFormik.setFieldValue("description", e.target.value);
                    }}
                  />
                  {CategoryFormik.touched.description &&
                    CategoryFormik.errors.description ? (
                    <div style={{ color: "red" }}>
                      {CategoryFormik.errors.description}
                    </div>
                  ) : null}
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                {/* <Form.Group id="providersRequired">
                  <Form.Select defaultValue="1" value={providers} onChange={handleProvider}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Form.Select>
                </Form.Group> */}
                <Form.Group >
                  <Form.Label>Number of Providers required</Form.Label>
                  <Select
                    defaultValue={providers}
                    onChange={setProviders}
                    options={provide}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group id="jobRequirements">
                  <Form.Label>Job Requirements</Form.Label>
                  <Form.Control
                    // required
                    type="text"
                    placeholder="Job Requirements..."
                    value={CategoryFormik.values.jobRequirements}
                    name="jobRequirements"
                    label="jobRequirements"
                    onChange={(e) => {
                      CategoryFormik.setFieldValue("jobRequirements", e.target.value);
                    }}
                  />
                  {CategoryFormik.touched.jobRequirements &&
                    CategoryFormik.errors.jobRequirements ? (
                    <div style={{ color: "red" }}>
                      {CategoryFormik.errors.jobRequirements}
                    </div>
                  ) : null}
                </Form.Group>
              </Col>

              <Col md={6} className="mb-3">
                <Form.Group id="toolsNeeded">
                  <Form.Label>Tools Needed</Form.Label>
                  <Form.Control
                    // required
                    type="text"
                    placeholder="Tools needed..."
                    value={CategoryFormik.values.toolsNeeded}
                    name="toolsNeeded"
                    label="toolsNeeded"
                    onChange={(e) => {
                      CategoryFormik.setFieldValue("toolsNeeded", e.target.value);
                    }}
                  />
                  {CategoryFormik.touched.toolsNeeded &&
                    CategoryFormik.errors.toolsNeeded ? (
                    <div style={{ color: "red" }}>
                      {CategoryFormik.errors.toolsNeeded}
                    </div>
                  ) : null}
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={3} className="mb-3">
                <Form.Group id="jobNature">
                  <Form.Label>Payment Type</Form.Label>
                  <fieldset className="d-flex radioButton">
                    <Form.Check
                      // defaultChecked
                      type="radio"
                      // defaultValue=""
                      label="Hourly"
                      value="hourly"
                      name="paymentType"
                      className="radio1"
                      onChange={(event) => {
                        setPaymentType(event.target.value)
                      }}
                    />
                    <Form.Check
                      type="radio"
                      // defaultValue=""
                      label="Fixed"
                      value="fixed"
                      name="paymentType"
                      onChange={(event) => {
                        setPaymentType(event.target.value)
                      }}
                    />
                  </fieldset>
                </Form.Group>
              </Col>
              <Col md={3} className="mb-3">
                <Form.Group id="jobType">
                  <Form.Label>Job Type</Form.Label>
                  <fieldset className="d-flex radioButton">
                    <Form.Check
                      // defaultChecked
                      type="radio"
                      label="Part-time"
                      name="jobType"
                      value="partTime"
                      className="radio1"
                      onChange={(event) => {
                        setJobType(event.target.value)
                      }}
                    />
                    <Form.Check
                      type="radio"
                      label="Permanent"
                      name="jobType"
                      value="permanent"
                      onChange={(event) => {
                        setJobType(event.target.value)
                      }}
                    />

                  </fieldset>
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group id="fixedRate">
                  <Form.Label>Fixed Rate</Form.Label>
                  <Form.Control
                    //  required 
                    type="number" placeholder="$"
                    value={CategoryFormik.values.fixRate}
                    name="fixRate"
                    label="fixRate"
                    onChange={(e) => {
                      CategoryFormik.setFieldValue("fixRate", e.target.value);
                    }}
                  />
                  {CategoryFormik.touched.fixRate &&
                    CategoryFormik.errors.fixRate ? (
                    <div style={{ color: "red" }}>
                      {CategoryFormik.errors.fixRate}
                    </div>
                  ) : null}
                </Form.Group>
              </Col>
            </Row>
            <h5 className="my-4">Time Required</h5>
            <Row>
              <Col md={3} className="mb-3">
                <Form.Group id="minutes">
                  <Form.Label>Days</Form.Label>
                  <Form.Select defaultValue="1" value={days} onChange={handledays}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>

                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={3} className="mb-3">
                <Form.Group id="hours" >
                  <Form.Label>Hours</Form.Label>
                  <Form.Select defaultValue="1" value={hours} onChange={handleHours}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">

                <Form.Group >
                  <Form.Label>Minimum Experience Required</Form.Label>
                  <Select
                    defaultValue={experience}
                    onChange={setExperience}
                    options={experienced}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="align-items-end">
              <Col md={6} className="mb-3">

                <Form.Label onClick={() => setShowDefaultCategory(true)} className="text-underline">
                  Add New 
                </Form.Label>
                <p>{categories?.value[0]?.title}</p>
                <Form.Group >
                  <Select
                    defaultValue={categories}
                    onChange={setCategories}
                    options={categoryList}
                  />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Control ref={ref} style={{ width: "100%" }} />
              </Col>
            </Row>

            <div className="mt-3 d-flex justify-content-end">
              <Button variant="primary" type="submit">
                Post Job
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>

      {/* Modal */}
      <Modal as={Modal.Dialog} centered show={showDefault} onHide={handleClose}>
        <Form.Control ref={ref} style={{ width: "90%" }} />
      </Modal>

      {/* Congratulations Modal */}
      <Modal
        as={Modal.Dialog}
        centered
        show={showDefaults}
        onHide={handleCloses}
      >
        <Modal.Header className="border-0">
          <Button variant="close" aria-label="Close" onClick={handleCloses} />
        </Modal.Header>
        <Modal.Body className="py-4 mb-5">
          <Row className="justify-content-center">
            <Col md={12} sm={12} xs={12} className="text-center">
              <svg
                width="215"
                height="190"
                viewBox="0 0 312 277"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M94.3663 221.24C93.273 221.24 92.2797 220.98 91.3863 220.46C90.493 219.94 89.7797 219.18 89.2463 218.18C88.7263 217.167 88.4663 215.94 88.4663 214.5C88.4663 213.073 88.733 211.853 89.2663 210.84C89.813 209.813 90.5397 209.033 91.4463 208.5C92.353 207.953 93.353 207.68 94.4463 207.68C95.273 207.68 96.0063 207.847 96.6463 208.18C97.2863 208.513 97.813 208.9 98.2263 209.34L96.9863 210.84C96.653 210.493 96.2797 210.22 95.8663 210.02C95.4663 209.807 95.013 209.7 94.5063 209.7C93.7997 209.7 93.1663 209.893 92.6063 210.28C92.0597 210.653 91.6263 211.193 91.3063 211.9C90.9997 212.607 90.8463 213.453 90.8463 214.44C90.8463 215.933 91.173 217.107 91.8263 217.96C92.4797 218.8 93.353 219.22 94.4463 219.22C95.033 219.22 95.553 219.1 96.0063 218.86C96.4597 218.607 96.873 218.28 97.2463 217.88L98.4863 219.34C97.953 219.953 97.3397 220.427 96.6463 220.76C95.9663 221.08 95.2063 221.24 94.3663 221.24ZM104.49 221.24C103.676 221.24 102.916 221.04 102.21 220.64C101.503 220.227 100.93 219.64 100.49 218.88C100.05 218.107 99.8298 217.18 99.8298 216.1C99.8298 215.007 100.05 214.08 100.49 213.32C100.93 212.547 101.503 211.96 102.21 211.56C102.916 211.147 103.676 210.94 104.49 210.94C105.316 210.94 106.083 211.147 106.79 211.56C107.496 211.96 108.07 212.547 108.51 213.32C108.95 214.08 109.17 215.007 109.17 216.1C109.17 217.18 108.95 218.107 108.51 218.88C108.07 219.64 107.496 220.227 106.79 220.64C106.083 221.04 105.316 221.24 104.49 221.24ZM104.49 219.36C105.21 219.36 105.776 219.06 106.19 218.46C106.603 217.86 106.81 217.073 106.81 216.1C106.81 215.113 106.603 214.32 106.19 213.72C105.776 213.12 105.21 212.82 104.49 212.82C103.77 212.82 103.203 213.12 102.79 213.72C102.39 214.32 102.19 215.113 102.19 216.1C102.19 217.073 102.39 217.86 102.79 218.46C103.203 219.06 103.77 219.36 104.49 219.36ZM111.446 221V211.18H113.346L113.506 212.5H113.586C114.026 212.073 114.506 211.707 115.026 211.4C115.546 211.093 116.14 210.94 116.806 210.94C117.86 210.94 118.626 211.28 119.106 211.96C119.586 212.64 119.826 213.6 119.826 214.84V221H117.526V215.14C117.526 214.327 117.406 213.753 117.166 213.42C116.926 213.087 116.533 212.92 115.986 212.92C115.56 212.92 115.18 213.027 114.846 213.24C114.526 213.44 114.16 213.74 113.746 214.14V221H111.446ZM126.058 225.34C125.284 225.34 124.584 225.247 123.958 225.06C123.344 224.873 122.858 224.587 122.498 224.2C122.151 223.827 121.978 223.353 121.978 222.78C121.978 221.967 122.444 221.267 123.378 220.68V220.6C123.124 220.44 122.911 220.227 122.738 219.96C122.578 219.693 122.498 219.36 122.498 218.96C122.498 218.573 122.604 218.227 122.818 217.92C123.044 217.6 123.298 217.34 123.578 217.14V217.06C123.244 216.807 122.944 216.453 122.678 216C122.424 215.547 122.298 215.033 122.298 214.46C122.298 213.7 122.478 213.06 122.838 212.54C123.198 212.02 123.671 211.627 124.258 211.36C124.858 211.08 125.498 210.94 126.178 210.94C126.444 210.94 126.698 210.967 126.938 211.02C127.191 211.06 127.418 211.113 127.618 211.18H131.138V212.88H129.338C129.498 213.067 129.631 213.307 129.738 213.6C129.844 213.88 129.898 214.193 129.898 214.54C129.898 215.26 129.731 215.873 129.398 216.38C129.064 216.873 128.618 217.247 128.058 217.5C127.498 217.753 126.871 217.88 126.178 217.88C125.964 217.88 125.744 217.86 125.518 217.82C125.291 217.78 125.064 217.713 124.838 217.62C124.691 217.753 124.571 217.887 124.478 218.02C124.398 218.153 124.358 218.333 124.358 218.56C124.358 218.84 124.471 219.06 124.698 219.22C124.938 219.38 125.358 219.46 125.958 219.46H127.698C128.884 219.46 129.778 219.653 130.378 220.04C130.991 220.413 131.298 221.027 131.298 221.88C131.298 222.52 131.084 223.1 130.658 223.62C130.231 224.153 129.624 224.573 128.838 224.88C128.051 225.187 127.124 225.34 126.058 225.34ZM126.178 216.44C126.644 216.44 127.044 216.267 127.378 215.92C127.711 215.573 127.878 215.087 127.878 214.46C127.878 213.847 127.711 213.373 127.378 213.04C127.058 212.693 126.658 212.52 126.178 212.52C125.698 212.52 125.291 212.687 124.958 213.02C124.624 213.353 124.458 213.833 124.458 214.46C124.458 215.087 124.624 215.573 124.958 215.92C125.291 216.267 125.698 216.44 126.178 216.44ZM126.418 223.84C127.204 223.84 127.844 223.68 128.338 223.36C128.831 223.04 129.078 222.673 129.078 222.26C129.078 221.873 128.924 221.613 128.618 221.48C128.324 221.347 127.898 221.28 127.338 221.28H125.998C125.464 221.28 125.018 221.233 124.658 221.14C124.151 221.527 123.898 221.96 123.898 222.44C123.898 222.88 124.124 223.22 124.578 223.46C125.031 223.713 125.644 223.84 126.418 223.84ZM133.028 221V211.18H134.928L135.088 212.92H135.168C135.515 212.28 135.935 211.793 136.428 211.46C136.922 211.113 137.428 210.94 137.948 210.94C138.415 210.94 138.788 211.007 139.068 211.14L138.668 213.14C138.495 213.087 138.335 213.047 138.188 213.02C138.042 212.993 137.862 212.98 137.648 212.98C137.262 212.98 136.855 213.133 136.428 213.44C136.002 213.733 135.635 214.253 135.328 215V221H133.028ZM142.342 221.24C141.489 221.24 140.789 220.973 140.242 220.44C139.709 219.907 139.442 219.213 139.442 218.36C139.442 217.307 139.902 216.493 140.822 215.92C141.742 215.333 143.209 214.933 145.222 214.72C145.209 214.2 145.069 213.753 144.802 213.38C144.549 212.993 144.089 212.8 143.422 212.8C142.942 212.8 142.469 212.893 142.002 213.08C141.549 213.267 141.102 213.493 140.662 213.76L139.822 212.22C140.369 211.873 140.982 211.573 141.662 211.32C142.355 211.067 143.089 210.94 143.862 210.94C145.089 210.94 146.002 211.307 146.602 212.04C147.215 212.76 147.522 213.807 147.522 215.18V221H145.622L145.462 219.92H145.382C144.942 220.293 144.469 220.607 143.962 220.86C143.469 221.113 142.929 221.24 142.342 221.24ZM143.082 219.44C143.482 219.44 143.842 219.347 144.162 219.16C144.495 218.96 144.849 218.693 145.222 218.36V216.16C143.889 216.333 142.962 216.593 142.442 216.94C141.922 217.273 141.662 217.687 141.662 218.18C141.662 218.62 141.795 218.94 142.062 219.14C142.329 219.34 142.669 219.44 143.082 219.44ZM153.422 221.24C152.289 221.24 151.482 220.913 151.002 220.26C150.535 219.593 150.302 218.733 150.302 217.68V213H148.902V211.28L150.422 211.18L150.702 208.5H152.622V211.18H155.122V213H152.622V217.68C152.622 218.827 153.082 219.4 154.002 219.4C154.175 219.4 154.355 219.38 154.542 219.34C154.729 219.287 154.889 219.233 155.022 219.18L155.422 220.88C155.155 220.973 154.849 221.053 154.502 221.12C154.169 221.2 153.809 221.24 153.422 221.24ZM160.109 221.24C159.055 221.24 158.289 220.9 157.809 220.22C157.329 219.54 157.089 218.58 157.089 217.34V211.18H159.389V217.04C159.389 217.853 159.509 218.427 159.749 218.76C159.989 219.093 160.375 219.26 160.909 219.26C161.335 219.26 161.709 219.153 162.029 218.94C162.362 218.727 162.715 218.38 163.089 217.9V211.18H165.389V221H163.509L163.329 219.56H163.269C162.842 220.067 162.375 220.473 161.869 220.78C161.362 221.087 160.775 221.24 160.109 221.24ZM170.542 221.24C169.728 221.24 169.148 220.993 168.802 220.5C168.468 220.007 168.302 219.333 168.302 218.48V206.88H170.602V218.6C170.602 218.88 170.655 219.08 170.762 219.2C170.868 219.307 170.982 219.36 171.102 219.36C171.155 219.36 171.202 219.36 171.242 219.36C171.295 219.347 171.368 219.333 171.462 219.32L171.762 221.04C171.628 221.093 171.455 221.14 171.242 221.18C171.042 221.22 170.808 221.24 170.542 221.24ZM176.111 221.24C175.258 221.24 174.558 220.973 174.011 220.44C173.478 219.907 173.211 219.213 173.211 218.36C173.211 217.307 173.671 216.493 174.591 215.92C175.511 215.333 176.978 214.933 178.991 214.72C178.978 214.2 178.838 213.753 178.571 213.38C178.318 212.993 177.858 212.8 177.191 212.8C176.711 212.8 176.238 212.893 175.771 213.08C175.318 213.267 174.871 213.493 174.431 213.76L173.591 212.22C174.138 211.873 174.751 211.573 175.431 211.32C176.125 211.067 176.858 210.94 177.631 210.94C178.858 210.94 179.771 211.307 180.371 212.04C180.985 212.76 181.291 213.807 181.291 215.18V221H179.391L179.231 219.92H179.151C178.711 220.293 178.238 220.607 177.731 220.86C177.238 221.113 176.698 221.24 176.111 221.24ZM176.851 219.44C177.251 219.44 177.611 219.347 177.931 219.16C178.265 218.96 178.618 218.693 178.991 218.36V216.16C177.658 216.333 176.731 216.593 176.211 216.94C175.691 217.273 175.431 217.687 175.431 218.18C175.431 218.62 175.565 218.94 175.831 219.14C176.098 219.34 176.438 219.44 176.851 219.44ZM187.191 221.24C186.058 221.24 185.251 220.913 184.771 220.26C184.305 219.593 184.071 218.733 184.071 217.68V213H182.671V211.28L184.191 211.18L184.471 208.5H186.391V211.18H188.891V213H186.391V217.68C186.391 218.827 186.851 219.4 187.771 219.4C187.945 219.4 188.125 219.38 188.311 219.34C188.498 219.287 188.658 219.233 188.791 219.18L189.191 220.88C188.925 220.973 188.618 221.053 188.271 221.12C187.938 221.2 187.578 221.24 187.191 221.24ZM190.958 221V211.18H193.258V221H190.958ZM192.118 209.46C191.705 209.46 191.371 209.34 191.118 209.1C190.865 208.86 190.738 208.54 190.738 208.14C190.738 207.753 190.865 207.44 191.118 207.2C191.371 206.96 191.705 206.84 192.118 206.84C192.531 206.84 192.865 206.96 193.118 207.2C193.371 207.44 193.498 207.753 193.498 208.14C193.498 208.54 193.371 208.86 193.118 209.1C192.865 209.34 192.531 209.46 192.118 209.46ZM200.212 221.24C199.399 221.24 198.639 221.04 197.932 220.64C197.226 220.227 196.652 219.64 196.212 218.88C195.772 218.107 195.552 217.18 195.552 216.1C195.552 215.007 195.772 214.08 196.212 213.32C196.652 212.547 197.226 211.96 197.932 211.56C198.639 211.147 199.399 210.94 200.212 210.94C201.039 210.94 201.806 211.147 202.512 211.56C203.219 211.96 203.792 212.547 204.232 213.32C204.672 214.08 204.892 215.007 204.892 216.1C204.892 217.18 204.672 218.107 204.232 218.88C203.792 219.64 203.219 220.227 202.512 220.64C201.806 221.04 201.039 221.24 200.212 221.24ZM200.212 219.36C200.932 219.36 201.499 219.06 201.912 218.46C202.326 217.86 202.532 217.073 202.532 216.1C202.532 215.113 202.326 214.32 201.912 213.72C201.499 213.12 200.932 212.82 200.212 212.82C199.492 212.82 198.926 213.12 198.512 213.72C198.112 214.32 197.912 215.113 197.912 216.1C197.912 217.073 198.112 217.86 198.512 218.46C198.926 219.06 199.492 219.36 200.212 219.36ZM207.169 221V211.18H209.069L209.229 212.5H209.309C209.749 212.073 210.229 211.707 210.749 211.4C211.269 211.093 211.862 210.94 212.529 210.94C213.582 210.94 214.349 211.28 214.829 211.96C215.309 212.64 215.549 213.6 215.549 214.84V221H213.249V215.14C213.249 214.327 213.129 213.753 212.889 213.42C212.649 213.087 212.256 212.92 211.709 212.92C211.282 212.92 210.902 213.027 210.569 213.24C210.249 213.44 209.882 213.74 209.469 214.14V221H207.169ZM221.1 221.24C220.434 221.24 219.767 221.113 219.1 220.86C218.434 220.593 217.86 220.267 217.38 219.88L218.46 218.4C218.9 218.733 219.34 219 219.78 219.2C220.22 219.4 220.687 219.5 221.18 219.5C221.714 219.5 222.107 219.387 222.36 219.16C222.614 218.933 222.74 218.653 222.74 218.32C222.74 218.04 222.634 217.813 222.42 217.64C222.22 217.453 221.96 217.293 221.64 217.16C221.32 217.013 220.987 216.873 220.64 216.74C220.214 216.58 219.787 216.387 219.36 216.16C218.947 215.92 218.607 215.62 218.34 215.26C218.074 214.887 217.94 214.427 217.94 213.88C217.94 213.013 218.26 212.307 218.9 211.76C219.54 211.213 220.407 210.94 221.5 210.94C222.194 210.94 222.814 211.06 223.36 211.3C223.907 211.54 224.38 211.813 224.78 212.12L223.72 213.52C223.374 213.267 223.02 213.067 222.66 212.92C222.314 212.76 221.947 212.68 221.56 212.68C221.067 212.68 220.7 212.787 220.46 213C220.22 213.2 220.1 213.453 220.1 213.76C220.1 214.147 220.3 214.44 220.7 214.64C221.1 214.84 221.567 215.033 222.1 215.22C222.554 215.38 222.994 215.58 223.42 215.82C223.847 216.047 224.2 216.347 224.48 216.72C224.774 217.093 224.92 217.587 224.92 218.2C224.92 219.04 224.594 219.76 223.94 220.36C223.287 220.947 222.34 221.24 221.1 221.24Z"
                  fill="#09101D"
                />
                <g clip-path="url(#clip0_334_18513)">
                  <path
                    d="M152.835 171C179.778 171 201.621 149.174 201.621 122.249C201.621 95.325 179.778 73.4985 152.835 73.4985C125.891 73.4985 104.048 95.325 104.048 122.249C104.048 149.174 125.891 171 152.835 171Z"
                    fill="#12499C"
                  />
                  <path
                    d="M176.855 101.595C177.414 102.154 168.29 114.248 156.559 128.948C153.952 131.925 151.531 134.902 149.297 137.693L148.366 138.81L147.248 137.693C137.938 128.204 131.607 121.133 132.166 120.575C132.538 120.203 139.614 126.529 149.297 135.646L147.248 135.833C149.483 133.041 151.904 130.064 154.324 127.087C166.055 112.574 176.297 101.223 176.855 101.595Z"
                    fill="white"
                  />
                  <path
                    d="M222.103 102.526C220.614 97.3156 213.91 97.8738 213.91 97.8738L214.096 101.409C218.007 100.665 220.427 105.317 220.427 105.317L222.103 102.526Z"
                    fill="#12499C"
                  />
                  <path
                    d="M80.9587 113.318C79.4691 108.108 72.7656 108.666 72.7656 108.666L72.9518 112.201C76.8622 111.457 79.2829 116.109 79.2829 116.109L80.9587 113.318Z"
                    fill="#E0E0E0"
                  />
                  <path
                    d="M158.793 42.6107C166.428 45.0296 171.269 36.0982 171.269 36.0982L166.614 33.4932C164.379 38.8892 156.559 38.331 156.559 38.331L158.793 42.6107Z"
                    fill="#E0E0E0"
                  />
                  <path
                    d="M115.779 52.1001C112.241 52.4722 111.683 56.938 111.683 56.938L114.103 57.3101C114.103 54.7051 117.455 53.5887 117.455 53.5887L115.779 52.1001Z"
                    fill="#12499C"
                  />
                  <path
                    d="M264 85.0347C264.559 81.4993 260.276 80.0107 260.276 80.0107L259.345 82.2436C261.952 82.9879 262.138 86.3372 262.138 86.3372L264 85.0347Z"
                    fill="#E0E0E0"
                  />
                  <path
                    d="M136.821 5.02394C137.379 1.48857 133.097 0 133.097 0L132.166 2.23286C134.772 2.97715 134.959 6.32644 134.959 6.32644L136.821 5.02394Z"
                    fill="#12499C"
                  />
                  <path
                    d="M47.9999 62.706C47.4413 68.2882 54.7033 69.5907 54.7033 69.5907L56.0068 65.8693C51.5378 65.4971 50.9792 60.2871 50.9792 60.2871L47.9999 62.706Z"
                    fill="#12499C"
                  />
                  <path
                    d="M213.352 42.4243C216.89 42.6104 218.193 38.3307 218.193 38.3307L215.959 37.5864C215.586 40.1914 212.048 40.7496 212.048 40.7496L213.352 42.4243Z"
                    fill="#12499C"
                  />
                  <path
                    d="M233.089 57.1241C233.089 57.3102 231.786 57.4962 230.11 57.4962C228.434 57.4962 227.131 57.3102 227.131 57.1241C227.131 56.938 228.434 56.752 230.11 56.752C231.6 56.752 233.089 56.938 233.089 57.1241Z"
                    fill="#E0E0E0"
                  />
                  <path
                    d="M236.255 49.123C236.441 49.123 236.628 50.4256 236.628 52.1002C236.628 53.7748 236.441 55.0773 236.255 55.0773C236.069 55.0773 235.883 53.7748 235.883 52.1002C235.883 50.4256 236.069 49.123 236.255 49.123Z"
                    fill="#E0E0E0"
                  />
                  <path
                    d="M239.607 56.9381C239.607 56.752 240.91 56.5659 242.586 56.5659C244.262 56.5659 245.566 56.752 245.566 56.9381C245.566 57.1241 244.262 57.3102 242.586 57.3102C240.91 57.3102 239.607 57.1241 239.607 56.9381Z"
                    fill="#E0E0E0"
                  />
                  <path
                    d="M236.441 65.1252C236.255 65.1252 236.069 63.8227 236.069 62.1481C236.069 60.4734 236.255 59.1709 236.441 59.1709C236.627 59.1709 236.814 60.4734 236.814 62.1481C236.627 63.6366 236.627 65.1252 236.441 65.1252Z"
                    fill="#E0E0E0"
                  />
                  <path
                    d="M241.283 61.5898C241.097 61.7759 240.538 61.2177 239.979 60.4734C239.421 59.7291 239.048 59.1709 239.234 58.9848C239.421 58.7987 239.979 59.3569 240.538 60.1012C240.91 60.8455 241.283 61.4037 241.283 61.5898Z"
                    fill="#E0E0E0"
                  />
                  <path
                    d="M240.91 52.4722C241.096 52.6583 240.538 53.2165 239.979 53.7747C239.421 54.3329 238.862 54.7051 238.676 54.7051C238.489 54.519 239.048 53.9608 239.607 53.4026C240.165 52.6583 240.724 52.2862 240.91 52.4722Z"
                    fill="#E0E0E0"
                  />
                  <path
                    d="M234.021 54.7051C233.834 54.8912 233.276 54.519 232.717 54.1469C232.159 53.5887 231.786 53.2165 231.786 53.0304C231.972 52.8444 232.531 53.2165 233.09 53.5887C233.834 54.1469 234.207 54.519 234.021 54.7051Z"
                    fill="#E0E0E0"
                  />
                  <path
                    d="M233.835 58.7989C234.021 58.985 233.648 59.5432 233.09 60.1014C232.531 60.6596 231.972 61.0317 231.786 61.0317C231.6 60.8457 231.972 60.2875 232.531 59.7292C233.09 58.985 233.648 58.6128 233.835 58.7989Z"
                    fill="#E0E0E0"
                  />
                  <path
                    d="M70.9034 40.5635C70.9034 40.7496 69.6 40.9357 67.9241 40.9357C66.2483 40.9357 64.9448 40.7496 64.9448 40.5635C64.9448 40.3775 66.2483 40.1914 67.9241 40.1914C69.4138 40.1914 70.9034 40.3775 70.9034 40.5635Z"
                    fill="#12499C"
                  />
                  <path
                    d="M73.8827 32.3765C74.0689 32.3765 74.2551 33.679 74.2551 35.3536C74.2551 37.0283 74.0689 38.3308 73.8827 38.3308C73.6965 38.3308 73.5103 37.0283 73.5103 35.3536C73.6965 33.865 73.8827 32.3765 73.8827 32.3765Z"
                    fill="#12499C"
                  />
                  <path
                    d="M77.4209 40.3775C77.4209 40.1914 78.7243 40.0054 80.4002 40.0054C82.0761 40.0054 83.3795 40.1914 83.3795 40.3775C83.3795 40.5636 82.0761 40.7497 80.4002 40.7497C78.7243 40.5636 77.4209 40.5636 77.4209 40.3775Z"
                    fill="#12499C"
                  />
                  <path
                    d="M74.2552 48.3786C74.069 48.3786 73.8828 47.0761 73.8828 45.4015C73.8828 43.7268 74.069 42.4243 74.2552 42.4243C74.4414 42.4243 74.6276 43.7268 74.6276 45.4015C74.4414 47.0761 74.2552 48.3786 74.2552 48.3786Z"
                    fill="#12499C"
                  />
                  <path
                    d="M78.9102 45.0293C78.724 45.2153 78.1654 44.6571 77.6067 43.9128C77.0481 43.1685 76.6757 42.6103 76.8619 42.4242C77.0481 42.2382 77.6067 42.7964 78.1654 43.5407C78.724 44.285 79.0964 44.8432 78.9102 45.0293Z"
                    fill="#12499C"
                  />
                  <path
                    d="M78.7241 35.7256C78.9103 35.9117 78.3517 36.4699 77.7931 37.0281C77.2345 37.5863 76.6759 37.9584 76.4896 37.9584C76.3034 37.7724 76.8621 37.2142 77.4207 36.6559C77.9793 36.0977 78.5379 35.7256 78.7241 35.7256Z"
                    fill="#12499C"
                  />
                  <path
                    d="M71.8346 38.1445C71.6484 38.3306 71.0898 37.9585 70.5311 37.5863C69.9725 37.0281 69.6001 36.656 69.6001 36.4699C69.7863 36.2838 70.3449 36.656 70.9035 37.0281C71.6484 37.5863 72.0208 37.9585 71.8346 38.1445Z"
                    fill="#12499C"
                  />
                  <path
                    d="M71.6485 42.2383C71.8347 42.4244 71.4623 42.9826 70.9036 43.5408C70.345 44.0991 69.7864 44.4712 69.6002 44.4712C69.414 44.2851 69.7864 43.7269 70.345 43.1687C70.9036 42.4244 71.4623 42.0523 71.6485 42.2383Z"
                    fill="#12499C"
                  />
                </g>
                <path
                  d="M45.7624 268V263.428L42.2164 256.192H43.8184L45.3484 259.522C45.5404 259.954 45.7264 260.38 45.9064 260.8C46.0984 261.22 46.2904 261.652 46.4824 262.096H46.5544C46.7584 261.652 46.9624 261.22 47.1664 260.8C47.3704 260.38 47.5624 259.954 47.7424 259.522L49.2544 256.192H50.8204L47.2744 263.428V268H45.7624ZM54.9346 268.216C54.2266 268.216 53.5606 268.036 52.9366 267.676C52.3246 267.316 51.8266 266.794 51.4426 266.11C51.0706 265.426 50.8846 264.604 50.8846 263.644C50.8846 262.66 51.0706 261.826 51.4426 261.142C51.8266 260.458 52.3246 259.936 52.9366 259.576C53.5606 259.216 54.2266 259.036 54.9346 259.036C55.6546 259.036 56.3206 259.216 56.9326 259.576C57.5446 259.936 58.0366 260.458 58.4086 261.142C58.7926 261.826 58.9846 262.66 58.9846 263.644C58.9846 264.604 58.7926 265.426 58.4086 266.11C58.0366 266.794 57.5446 267.316 56.9326 267.676C56.3206 268.036 55.6546 268.216 54.9346 268.216ZM54.9346 266.992C55.6906 266.992 56.2966 266.686 56.7526 266.074C57.2206 265.45 57.4546 264.64 57.4546 263.644C57.4546 262.636 57.2206 261.82 56.7526 261.196C56.2966 260.572 55.6906 260.26 54.9346 260.26C54.1906 260.26 53.5846 260.572 53.1166 261.196C52.6486 261.82 52.4146 262.636 52.4146 263.644C52.4146 264.64 52.6486 265.45 53.1166 266.074C53.5846 266.686 54.1906 266.992 54.9346 266.992ZM63.8445 268.216C62.9205 268.216 62.2425 267.928 61.8105 267.352C61.3785 266.764 61.1625 265.912 61.1625 264.796V259.252H62.6565V264.598C62.6565 265.414 62.7825 266.008 63.0345 266.38C63.2985 266.752 63.7185 266.938 64.2945 266.938C64.7505 266.938 65.1525 266.824 65.5005 266.596C65.8605 266.356 66.2445 265.978 66.6525 265.462V259.252H68.1285V268H66.9045L66.7785 266.632H66.7245C66.3165 267.112 65.8845 267.496 65.4285 267.784C64.9725 268.072 64.4445 268.216 63.8445 268.216ZM71.0795 268V259.252H72.3035L72.4295 260.836H72.4835C72.7835 260.284 73.1495 259.846 73.5815 259.522C74.0135 259.198 74.4755 259.036 74.9675 259.036C75.3155 259.036 75.6275 259.096 75.9035 259.216L75.6155 260.512C75.4715 260.464 75.3395 260.428 75.2195 260.404C75.0995 260.38 74.9495 260.368 74.7695 260.368C74.3975 260.368 74.0075 260.518 73.5995 260.818C73.2035 261.118 72.8555 261.64 72.5555 262.384V268H71.0795ZM80.9233 268V259.252H82.1473L82.2733 260.512H82.3273C82.7473 260.092 83.1913 259.744 83.6593 259.468C84.1273 259.18 84.6613 259.036 85.2613 259.036C86.1853 259.036 86.8573 259.33 87.2773 259.918C87.7093 260.494 87.9253 261.34 87.9253 262.456V268H86.4493V262.654C86.4493 261.838 86.3173 261.244 86.0533 260.872C85.7893 260.5 85.3693 260.314 84.7933 260.314C84.3493 260.314 83.9473 260.428 83.5873 260.656C83.2393 260.884 82.8433 261.22 82.3993 261.664V268H80.9233ZM94.313 268.216C93.533 268.216 92.825 268.036 92.189 267.676C91.553 267.304 91.049 266.776 90.677 266.092C90.305 265.408 90.119 264.592 90.119 263.644C90.119 262.684 90.305 261.862 90.677 261.178C91.061 260.494 91.553 259.966 92.153 259.594C92.753 259.222 93.383 259.036 94.043 259.036C95.159 259.036 96.017 259.408 96.617 260.152C97.229 260.896 97.535 261.892 97.535 263.14C97.535 263.296 97.529 263.452 97.517 263.608C97.517 263.752 97.505 263.878 97.481 263.986H91.577C91.637 264.91 91.925 265.648 92.441 266.2C92.969 266.752 93.653 267.028 94.493 267.028C94.913 267.028 95.297 266.968 95.645 266.848C96.005 266.716 96.347 266.548 96.671 266.344L97.193 267.316C96.821 267.556 96.395 267.766 95.915 267.946C95.447 268.126 94.913 268.216 94.313 268.216ZM91.559 262.924H96.239C96.239 262.036 96.047 261.364 95.663 260.908C95.291 260.44 94.763 260.206 94.079 260.206C93.467 260.206 92.915 260.446 92.423 260.926C91.943 261.394 91.655 262.06 91.559 262.924ZM101.171 268L98.7406 259.252H100.253L101.549 264.31C101.645 264.718 101.735 265.126 101.819 265.534C101.903 265.93 101.987 266.332 102.071 266.74H102.143C102.239 266.332 102.335 265.93 102.431 265.534C102.527 265.126 102.629 264.718 102.737 264.31L104.087 259.252H105.527L106.895 264.31C107.003 264.718 107.105 265.126 107.201 265.534C107.309 265.93 107.411 266.332 107.507 266.74H107.579C107.675 266.332 107.765 265.93 107.849 265.534C107.945 265.126 108.035 264.718 108.119 264.31L109.397 259.252H110.801L108.461 268H106.661L105.401 263.302C105.293 262.882 105.191 262.468 105.095 262.06C105.011 261.652 104.915 261.226 104.807 260.782H104.735C104.639 261.226 104.543 261.658 104.447 262.078C104.351 262.486 104.243 262.9 104.123 263.32L102.899 268H101.171ZM115.408 271.906C115.144 271.906 114.904 271.882 114.688 271.834C114.46 271.786 114.268 271.732 114.112 271.672L114.418 270.556C114.526 270.592 114.652 270.622 114.796 270.646C114.94 270.682 115.09 270.7 115.246 270.7C115.678 270.7 115.966 270.544 116.11 270.232C116.254 269.932 116.326 269.518 116.326 268.99V259.252H117.802V268.99C117.802 269.878 117.622 270.586 117.262 271.114C116.902 271.642 116.284 271.906 115.408 271.906ZM117.046 257.452C116.758 257.452 116.518 257.368 116.326 257.2C116.146 257.02 116.056 256.78 116.056 256.48C116.056 256.192 116.146 255.958 116.326 255.778C116.518 255.598 116.758 255.508 117.046 255.508C117.334 255.508 117.568 255.598 117.748 255.778C117.94 255.958 118.036 256.192 118.036 256.48C118.036 256.78 117.94 257.02 117.748 257.2C117.568 257.368 117.334 257.452 117.046 257.452ZM124.157 268.216C123.449 268.216 122.783 268.036 122.159 267.676C121.547 267.316 121.049 266.794 120.665 266.11C120.293 265.426 120.107 264.604 120.107 263.644C120.107 262.66 120.293 261.826 120.665 261.142C121.049 260.458 121.547 259.936 122.159 259.576C122.783 259.216 123.449 259.036 124.157 259.036C124.877 259.036 125.543 259.216 126.155 259.576C126.767 259.936 127.259 260.458 127.631 261.142C128.015 261.826 128.207 262.66 128.207 263.644C128.207 264.604 128.015 265.426 127.631 266.11C127.259 266.794 126.767 267.316 126.155 267.676C125.543 268.036 124.877 268.216 124.157 268.216ZM124.157 266.992C124.913 266.992 125.519 266.686 125.975 266.074C126.443 265.45 126.677 264.64 126.677 263.644C126.677 262.636 126.443 261.82 125.975 261.196C125.519 260.572 124.913 260.26 124.157 260.26C123.413 260.26 122.807 260.572 122.339 261.196C121.871 261.82 121.637 262.636 121.637 263.644C121.637 264.64 121.871 265.45 122.339 266.074C122.807 266.686 123.413 266.992 124.157 266.992ZM134.381 268.216C133.973 268.216 133.547 268.12 133.103 267.928C132.671 267.724 132.263 267.448 131.879 267.1H131.825L131.699 268H130.511V255.184H131.987V258.676L131.951 260.26C132.347 259.912 132.779 259.624 133.247 259.396C133.727 259.156 134.207 259.036 134.687 259.036C135.827 259.036 136.691 259.438 137.279 260.242C137.867 261.046 138.161 262.126 138.161 263.482C138.161 264.478 137.981 265.33 137.621 266.038C137.273 266.746 136.811 267.286 136.235 267.658C135.671 268.03 135.053 268.216 134.381 268.216ZM134.129 266.974C134.849 266.974 135.443 266.668 135.911 266.056C136.391 265.432 136.631 264.58 136.631 263.5C136.631 262.54 136.451 261.766 136.091 261.178C135.743 260.578 135.155 260.278 134.327 260.278C133.955 260.278 133.577 260.38 133.193 260.584C132.809 260.788 132.407 261.082 131.987 261.466V266.056C132.371 266.392 132.749 266.632 133.121 266.776C133.505 266.908 133.841 266.974 134.129 266.974ZM146.35 268.216C145.726 268.216 145.132 268.102 144.568 267.874C144.004 267.634 143.512 267.346 143.092 267.01L143.83 266.02C144.214 266.32 144.61 266.572 145.018 266.776C145.426 266.968 145.888 267.064 146.404 267.064C146.98 267.064 147.412 266.932 147.7 266.668C147.988 266.392 148.132 266.068 148.132 265.696C148.132 265.396 148.03 265.144 147.826 264.94C147.634 264.736 147.382 264.568 147.07 264.436C146.77 264.292 146.458 264.16 146.134 264.04C145.726 263.884 145.324 263.71 144.928 263.518C144.532 263.314 144.208 263.056 143.956 262.744C143.704 262.42 143.578 262.012 143.578 261.52C143.578 260.812 143.842 260.224 144.37 259.756C144.91 259.276 145.654 259.036 146.602 259.036C147.142 259.036 147.646 259.132 148.114 259.324C148.582 259.516 148.984 259.75 149.32 260.026L148.6 260.962C148.3 260.734 147.988 260.548 147.664 260.404C147.34 260.26 146.986 260.188 146.602 260.188C146.05 260.188 145.642 260.314 145.378 260.566C145.126 260.818 145 261.112 145 261.448C145 261.724 145.09 261.952 145.27 262.132C145.45 262.3 145.684 262.45 145.972 262.582C146.26 262.702 146.566 262.828 146.89 262.96C147.31 263.116 147.724 263.296 148.132 263.5C148.54 263.692 148.876 263.956 149.14 264.292C149.416 264.616 149.554 265.054 149.554 265.606C149.554 266.074 149.428 266.506 149.176 266.902C148.936 267.298 148.576 267.616 148.096 267.856C147.628 268.096 147.046 268.216 146.35 268.216ZM155.151 268.216C154.371 268.216 153.663 268.036 153.027 267.676C152.391 267.304 151.887 266.776 151.515 266.092C151.143 265.408 150.957 264.592 150.957 263.644C150.957 262.684 151.143 261.862 151.515 261.178C151.899 260.494 152.391 259.966 152.991 259.594C153.591 259.222 154.221 259.036 154.881 259.036C155.997 259.036 156.855 259.408 157.455 260.152C158.067 260.896 158.373 261.892 158.373 263.14C158.373 263.296 158.367 263.452 158.355 263.608C158.355 263.752 158.343 263.878 158.319 263.986H152.415C152.475 264.91 152.763 265.648 153.279 266.2C153.807 266.752 154.491 267.028 155.331 267.028C155.751 267.028 156.135 266.968 156.483 266.848C156.843 266.716 157.185 266.548 157.509 266.344L158.031 267.316C157.659 267.556 157.233 267.766 156.753 267.946C156.285 268.126 155.751 268.216 155.151 268.216ZM152.397 262.924H157.077C157.077 262.036 156.885 261.364 156.501 260.908C156.129 260.44 155.601 260.206 154.917 260.206C154.305 260.206 153.753 260.446 153.261 260.926C152.781 261.394 152.493 262.06 152.397 262.924ZM160.535 268V259.252H161.759L161.885 260.512H161.939C162.359 260.092 162.803 259.744 163.271 259.468C163.739 259.18 164.273 259.036 164.873 259.036C165.797 259.036 166.469 259.33 166.889 259.918C167.321 260.494 167.537 261.34 167.537 262.456V268H166.061V262.654C166.061 261.838 165.929 261.244 165.665 260.872C165.401 260.5 164.981 260.314 164.405 260.314C163.961 260.314 163.559 260.428 163.199 260.656C162.851 260.884 162.455 261.22 162.011 261.664V268H160.535ZM173.132 268.216C172.196 268.216 171.542 267.946 171.17 267.406C170.81 266.866 170.63 266.164 170.63 265.3V260.458H169.334V259.342L170.702 259.252L170.882 256.804H172.124V259.252H174.482V260.458H172.124V265.318C172.124 265.858 172.22 266.278 172.412 266.578C172.616 266.866 172.97 267.01 173.474 267.01C173.63 267.01 173.798 266.986 173.978 266.938C174.158 266.878 174.32 266.824 174.464 266.776L174.752 267.892C174.512 267.976 174.248 268.048 173.96 268.108C173.684 268.18 173.408 268.216 173.132 268.216ZM180.316 268V260.458H179.128V259.342L180.316 259.252V257.866C180.316 256.978 180.52 256.276 180.928 255.76C181.348 255.232 181.996 254.968 182.872 254.968C183.148 254.968 183.412 254.998 183.664 255.058C183.916 255.106 184.138 255.172 184.33 255.256L184.006 256.39C183.682 256.246 183.352 256.174 183.016 256.174C182.2 256.174 181.792 256.738 181.792 257.866V259.252H183.646V260.458H181.792V268H180.316ZM188.546 268.216C187.838 268.216 187.172 268.036 186.548 267.676C185.936 267.316 185.438 266.794 185.054 266.11C184.682 265.426 184.496 264.604 184.496 263.644C184.496 262.66 184.682 261.826 185.054 261.142C185.438 260.458 185.936 259.936 186.548 259.576C187.172 259.216 187.838 259.036 188.546 259.036C189.266 259.036 189.932 259.216 190.544 259.576C191.156 259.936 191.648 260.458 192.02 261.142C192.404 261.826 192.596 262.66 192.596 263.644C192.596 264.604 192.404 265.426 192.02 266.11C191.648 266.794 191.156 267.316 190.544 267.676C189.932 268.036 189.266 268.216 188.546 268.216ZM188.546 266.992C189.302 266.992 189.908 266.686 190.364 266.074C190.832 265.45 191.066 264.64 191.066 263.644C191.066 262.636 190.832 261.82 190.364 261.196C189.908 260.572 189.302 260.26 188.546 260.26C187.802 260.26 187.196 260.572 186.728 261.196C186.26 261.82 186.026 262.636 186.026 263.644C186.026 264.64 186.26 265.45 186.728 266.074C187.196 266.686 187.802 266.992 188.546 266.992ZM194.9 268V259.252H196.124L196.25 260.836H196.304C196.604 260.284 196.97 259.846 197.402 259.522C197.834 259.198 198.296 259.036 198.788 259.036C199.136 259.036 199.448 259.096 199.724 259.216L199.436 260.512C199.292 260.464 199.16 260.428 199.04 260.404C198.92 260.38 198.77 260.368 198.59 260.368C198.218 260.368 197.828 260.518 197.42 260.818C197.024 261.118 196.676 261.64 196.376 262.384V268H194.9ZM206.76 268.216C206.028 268.216 205.416 268 204.924 267.568C204.444 267.124 204.204 266.512 204.204 265.732C204.204 264.772 204.63 264.04 205.482 263.536C206.346 263.02 207.708 262.66 209.568 262.456C209.568 262.084 209.514 261.73 209.406 261.394C209.31 261.058 209.13 260.788 208.866 260.584C208.614 260.368 208.248 260.26 207.768 260.26C207.264 260.26 206.79 260.356 206.346 260.548C205.902 260.74 205.506 260.956 205.158 261.196L204.582 260.17C204.99 259.906 205.488 259.654 206.076 259.414C206.676 259.162 207.324 259.036 208.02 259.036C209.088 259.036 209.862 259.366 210.342 260.026C210.822 260.674 211.062 261.544 211.062 262.636V268H209.838L209.712 266.956H209.658C209.25 267.292 208.8 267.586 208.308 267.838C207.828 268.09 207.312 268.216 206.76 268.216ZM207.192 267.028C207.612 267.028 208.008 266.926 208.38 266.722C208.752 266.518 209.148 266.23 209.568 265.858V263.428C208.116 263.608 207.096 263.878 206.508 264.238C205.932 264.598 205.644 265.06 205.644 265.624C205.644 266.116 205.794 266.476 206.094 266.704C206.394 266.92 206.76 267.028 207.192 267.028ZM213.814 271.69V259.252H215.038L215.164 260.26H215.218C215.614 259.924 216.046 259.636 216.514 259.396C216.994 259.156 217.492 259.036 218.008 259.036C219.136 259.036 219.994 259.444 220.582 260.26C221.17 261.064 221.464 262.144 221.464 263.5C221.464 264.484 221.284 265.33 220.924 266.038C220.576 266.746 220.114 267.286 219.538 267.658C218.974 268.03 218.356 268.216 217.684 268.216C217.276 268.216 216.868 268.126 216.46 267.946C216.064 267.766 215.662 267.52 215.254 267.208L215.29 268.738V271.69H213.814ZM217.432 266.974C218.152 266.974 218.746 266.668 219.214 266.056C219.694 265.432 219.934 264.58 219.934 263.5C219.934 262.54 219.754 261.766 219.394 261.178C219.046 260.578 218.458 260.278 217.63 260.278C217.258 260.278 216.88 260.38 216.496 260.584C216.124 260.788 215.722 261.082 215.29 261.466V266.056C215.686 266.392 216.07 266.632 216.442 266.776C216.814 266.908 217.144 266.974 217.432 266.974ZM223.798 271.69V259.252H225.022L225.148 260.26H225.202C225.598 259.924 226.03 259.636 226.498 259.396C226.978 259.156 227.476 259.036 227.992 259.036C229.12 259.036 229.978 259.444 230.566 260.26C231.154 261.064 231.448 262.144 231.448 263.5C231.448 264.484 231.268 265.33 230.908 266.038C230.56 266.746 230.098 267.286 229.522 267.658C228.958 268.03 228.34 268.216 227.668 268.216C227.26 268.216 226.852 268.126 226.444 267.946C226.048 267.766 225.646 267.52 225.238 267.208L225.274 268.738V271.69H223.798ZM227.416 266.974C228.136 266.974 228.73 266.668 229.198 266.056C229.678 265.432 229.918 264.58 229.918 263.5C229.918 262.54 229.738 261.766 229.378 261.178C229.03 260.578 228.442 260.278 227.614 260.278C227.242 260.278 226.864 260.38 226.48 260.584C226.108 260.788 225.706 261.082 225.274 261.466V266.056C225.67 266.392 226.054 266.632 226.426 266.776C226.798 266.908 227.128 266.974 227.416 266.974ZM233.783 268V259.252H235.007L235.133 260.836H235.187C235.487 260.284 235.853 259.846 236.285 259.522C236.717 259.198 237.179 259.036 237.671 259.036C238.019 259.036 238.331 259.096 238.607 259.216L238.319 260.512C238.175 260.464 238.043 260.428 237.923 260.404C237.803 260.38 237.653 260.368 237.473 260.368C237.101 260.368 236.711 260.518 236.303 260.818C235.907 261.118 235.559 261.64 235.259 262.384V268H233.783ZM243.249 268.216C242.541 268.216 241.875 268.036 241.251 267.676C240.639 267.316 240.141 266.794 239.757 266.11C239.385 265.426 239.199 264.604 239.199 263.644C239.199 262.66 239.385 261.826 239.757 261.142C240.141 260.458 240.639 259.936 241.251 259.576C241.875 259.216 242.541 259.036 243.249 259.036C243.969 259.036 244.635 259.216 245.247 259.576C245.859 259.936 246.351 260.458 246.723 261.142C247.107 261.826 247.299 262.66 247.299 263.644C247.299 264.604 247.107 265.426 246.723 266.11C246.351 266.794 245.859 267.316 245.247 267.676C244.635 268.036 243.969 268.216 243.249 268.216ZM243.249 266.992C244.005 266.992 244.611 266.686 245.067 266.074C245.535 265.45 245.769 264.64 245.769 263.644C245.769 262.636 245.535 261.82 245.067 261.196C244.611 260.572 244.005 260.26 243.249 260.26C242.505 260.26 241.899 260.572 241.431 261.196C240.963 261.82 240.729 262.636 240.729 263.644C240.729 264.64 240.963 265.45 241.431 266.074C241.899 266.686 242.505 266.992 243.249 266.992ZM251.423 268L248.273 259.252H249.803L251.459 264.22C251.591 264.652 251.723 265.084 251.855 265.516C251.999 265.948 252.137 266.374 252.269 266.794H252.341C252.473 266.374 252.605 265.948 252.737 265.516C252.881 265.084 253.013 264.652 253.133 264.22L254.789 259.252H256.247L253.151 268H251.423ZM259.599 268.216C258.867 268.216 258.255 268 257.763 267.568C257.283 267.124 257.043 266.512 257.043 265.732C257.043 264.772 257.469 264.04 258.321 263.536C259.185 263.02 260.547 262.66 262.407 262.456C262.407 262.084 262.353 261.73 262.245 261.394C262.149 261.058 261.969 260.788 261.705 260.584C261.453 260.368 261.087 260.26 260.607 260.26C260.103 260.26 259.629 260.356 259.185 260.548C258.741 260.74 258.345 260.956 257.997 261.196L257.421 260.17C257.829 259.906 258.327 259.654 258.915 259.414C259.515 259.162 260.163 259.036 260.859 259.036C261.927 259.036 262.701 259.366 263.181 260.026C263.661 260.674 263.901 261.544 263.901 262.636V268H262.677L262.551 266.956H262.497C262.089 267.292 261.639 267.586 261.147 267.838C260.667 268.09 260.151 268.216 259.599 268.216ZM260.031 267.028C260.451 267.028 260.847 266.926 261.219 266.722C261.591 266.518 261.987 266.23 262.407 265.858V263.428C260.955 263.608 259.935 263.878 259.347 264.238C258.771 264.598 258.483 265.06 258.483 265.624C258.483 266.116 258.633 266.476 258.933 266.704C259.233 266.92 259.599 267.028 260.031 267.028ZM268.22 268.216C267.668 268.216 267.266 268.048 267.014 267.712C266.774 267.364 266.654 266.872 266.654 266.236V255.184H268.13V266.344C268.13 266.572 268.172 266.74 268.256 266.848C268.34 266.944 268.436 266.992 268.544 266.992C268.592 266.992 268.634 266.992 268.67 266.992C268.718 266.98 268.784 266.968 268.868 266.956L269.066 268.072C268.97 268.12 268.856 268.156 268.724 268.18C268.592 268.204 268.424 268.216 268.22 268.216Z"
                  fill="#09101D"
                />
                <defs>
                  <clipPath id="clip0_334_18513">
                    <rect
                      width="216"
                      height="171"
                      fill="white"
                      transform="translate(48)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      {/* Add Category Modal */}
      <Modal
        as={Modal.Dialog}
        centered
        show={showDefaultCategory}
        onHide={handleClosesCategory}  
      >
        <Modal.Header>
          <Modal.Title className="h5">Add Category</Modal.Title>
          <Button
            variant="close"
            aria-label="Close"
            onClick={handleClosesCategory}
          />
        </Modal.Header>
        <Modal.Body >
          <AddCategory setShowDefault={setShowDefault} showDefault={showDefault} categories={categories} setCategories={setCategories} onHide={showDefaultCategory} />

        </Modal.Body>

      </Modal>
    </>
  );
};
