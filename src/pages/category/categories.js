import {
  faEdit, faEllipsisV, faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button, ButtonGroup, Card, Col, Container, Dropdown, Form,
  Image,
  Modal, Row
} from "@themesberg/react-bootstrap";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import Navbar from "../../components/Navbar";
import { addCategory, deleteCategory, getCategoryList, updateCategory } from "../../Redux/Category/actions";
const Categories = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [search, setSearch] = useState("");
  const {
    location: { state },
  } = history;
  const CategoryData = useSelector(
    (state) => state?.Category?.getCategoryList
  );
  const auth = useSelector((state) => state.auth);
  const forAction = history?.location?.state?.from;
  useEffect(() => {
    dispatch(
      getCategoryList({
        search: search
      })
    );
  }, [search]);
  const [showDefault, setShowDefault] = useState(false);
  const handleClose = () => {
    setEdit(false)
    setShowDefault(false)
  };
  const [selectedImage, setSelectedImage] = useState("");
  const [isEdit, setEdit] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);


  const activeButton = (value) => {
    setEdit(!isEdit)
    setShowDefault(true)
    setSelectedItem(value)
    setSelectedImage(value.categoryImg)
  }
  const handleDelete = (value) => {
    dispatch(
      deleteCategory({
        userId: value.id,
        search: search,
      })
    );
  }
  const CategorySchema = Yup.object().shape({
    title: Yup.string()
      .required("Category Name is required"),
    details: Yup.string().required("Password is required"),
  });
  const CategoryFormik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: selectedItem?.id ? selectedItem?.id : "",
      title: selectedItem?.title ? selectedItem?.title : "",
      details: selectedItem?.details ? selectedItem?.details : "",
      remember: true,
    },
    validationSchema: CategorySchema,
    onSubmit: async (values, action) => {

      selectedItem
        ? dispatch(
          updateCategory({

            id: values.id,
            title: values.title,
            categoryImg: selectedImage,
            details: values.details,
            setReset: action.resetForm,
            setShowDefault: setShowDefault,
            // showDefault: showDefault,
            setSelectedImage: setSelectedImage,

            history: history,
          })
        )
        :
        dispatch(
          addCategory({
            title: values.title,
            details: values.details,
            categoryImg: selectedImage,
            setReset: action.resetForm,
            setShowDefault: setShowDefault,
            showDefault: showDefault,
            setSelectedImage: setSelectedImage,
          })
        );
    },
  });
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };
  useEffect(() => {
  }, [CategoryFormik.values])
  const addCategories = () => {
    setSelectedItem(null);
    setShowDefault(true);
  }
  return (
    <>
      <Navbar module={"Categories"} />
      <Container>
        <Row className="py-2 justify-content-between align-items-baseline">
          <Col lg={3} md={5}>
            <Form.Group className="mt-3">
              <Form.Control type="text" select placeholder="Search"
                label="Search"
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
              />
            </Form.Group>
          </Col>
          <Col lg={3} md={5} className="justify-content-end d-flex">
            <Button
              variant="primary"
              className="mx-2"
              onClick={() => addCategories()}
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12H8M12 8V12V8ZM12 12V16V12ZM12 12H16H12Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="white"
                  stroke-width="2"
                />
              </svg>
              {"  "}
              Add Category
            </Button>
          </Col>

          <Col lg={12} md={12} sm={12} xs={12} className="pt-4 pb-1">
            <div className="d-flex justify-content-between">
          
            </div>
          </Col>
        </Row>

        <Row className="pb-1">
          {CategoryData?.map((value, index, row,) => {
            return (
              <>
                <Col lg={4} md={12} xs={12} sm={12} className="pb-3">
                  <Card border="light" className="shadow-sm introCard">
                    <Image src={value.categoryImg} className="navbar-brand-light" />
                    <div className="detailSection">
                      <span className="left">
                        <h3>{value.title}</h3>
                        <p>
                          {value.details}
                        </p>
                      </span>
                      <span className="right">
                        <Dropdown as={ButtonGroup} className="me-3 mt-1">
                          <Dropdown.Toggle
                            as={Button}
                            split
                            variant="link"
                            className="text-dark m-0 p-0"
                          >
                            <span className="icon icon-sm">
                              <FontAwesomeIcon
                                icon={faEllipsisV}
                                className="icon-dark"
                              />
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="custom_menu">
                            <Dropdown.Item onClick={() => activeButton(value)}
                            >
                              <FontAwesomeIcon icon={faEdit} className="me-2" /> Edit
                            </Dropdown.Item>
                            <Dropdown.Item className="text-danger" onClick={() => { handleDelete(value) }}>
                              <FontAwesomeIcon icon={faTrashAlt} className="me-2" />{" "}
                              Remove
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </span>
                    </div>
                  </Card>
                </Col>
              </>
            );
          })}

        </Row>

        {auth.Auther.userRole != "Admin" && (
          <Row className="py-2 justify-content-between">
            <div class="d-grid gap-2 col-3 text-center  mx-auto">
              <span className="text-gray">
                You can select multiple categories
              </span>
              <Button variant="primary" color="dark" size="sm">
                Save
              </Button>
            </div>
          </Row>
        )}
      </Container>

      {/* Modal */}
      <Modal as={Modal.Dialog} centered show={showDefault} >
        <Modal.Header>
          <Modal.Title className="h5">
            {isEdit ? (
              "Edit Category"
            ) : (
              "Add Category"
            )}
          </Modal.Title>
          <Button variant="close" aria-label="Close" onClick={handleClose} />
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={CategoryFormik.handleSubmit}>
            <Form.Group>
              <Form.Label>Category Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter category Name"
                value={CategoryFormik.values.title}
                name="title"
                label="title"
                onChange={(e) => {
                  CategoryFormik.setFieldValue("title", e.target.value);
                }}
              />
              {CategoryFormik.touched.title && CategoryFormik.errors.title ? (
                <div style={{ color: "red" }}>{CategoryFormik.errors.title}</div>
              ) : null}
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows="3"
                required
                type="text"
                placeholder="Description"
                value={CategoryFormik.values.details}
                name="details"
                label="details"
                onChange={(e) => {
                  CategoryFormik.setFieldValue("details", e.target.value);
                }}
              />
              {CategoryFormik.touched.details && CategoryFormik.errors.details ? (
                <div style={{ color: "red" }}>{CategoryFormik.errors.details}</div>
              ) : null}
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Label>Upload Image</Form.Label>
              <Form.Control type="file"
                onChange={imageChange}

              />
              <div class="d-grid gap-2 col-4 text-center mt-3 mx-auto">
                <Button
                  variant="primary"
                  // onHide={handleClose}
                  color="dark"
                  size="sm"
                  type="submit"
                >
                  {isEdit ? (
                    "Update"
                  ) : (
                    "Save"
                  )}
                </Button>
              </div>
            </Form.Group>
          </Form>

        </Modal.Body>
      </Modal>
    </>
  );
};
export default Categories;
