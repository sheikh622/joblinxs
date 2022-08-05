import {
  faEdit,
  faEllipsisV,
  faTrashAlt,
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Container,
  Dropdown,
  Form,
  Image,
  Modal,
  Row,
  Pagination,
  Nav,
} from "@themesberg/react-bootstrap";
import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import Navbar from "../../components/Navbar";
import NoRecordFound from "../../components/NoRecordFound";
import {
  addCategory,
  getBusinessCategoryList,
  saveCategory,
} from "../../Redux/BusinessCategory/actions";
import Spinner from "../../components/spinner";
const BusinessCategories = (item) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loader, setLoader] = useState(true);
  const [search, setSearch] = useState("");
  const [checked, setChecked] = useState([]);
  const [checkedItem, setCheckedItem] = useState([]);
  const [adminId, setAdminId] = useState(0);
  const [delCategory, setDelCategory] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [isEdit, setEdit] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [page, setPage] = useState(1);
  const [limit] = useState("12");
  const {
    location: { state },
  } = history;
  const CategoryData = useSelector((state) => state?.BusinessCategory?.getBusinessCategoryList);
  useEffect(()=>{
    if(CategoryData !== undefined){
      setChecked(CategoryData?.updatedArray)
    }
  },[CategoryData])
  useEffect(() => {
    dispatch(
      getBusinessCategoryList({
        page: page,
        limit: limit,
        search: search,
        setLoader: setLoader,
      })
    );
  },
    [page, limit, search]
  );

  const handleClick = () => {
    let arr = [];
    checked.map((obj) => {
      if (obj.selected === true) {
        arr.push(obj.id);
      }
    });
    dispatch(
      saveCategory({
        categoriesId: arr,
        setLoader: setLoader,
      })
    );
  };
  const [showDefault, setShowDefault] = useState(false);
  const handleClose = () => {
    setEdit(false);
    setShowDefault(false);
    setDelCategory(false);
    CategoryFormik.resetForm();

  };
  const activeButton = (value) => {
    setEdit(true);
    setShowDefault(true);
    setSelectedItem(value);
    setSelectedImage(value.categoryImg);
  };
  const CategorySchema = Yup.object().shape({
    title: Yup.string().trim().required("Category Name is required"),
    details: Yup.string().trim().required("description is required"),
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
        ? dispatch()
        : // updateCategory({
          //     id: values.id,
          //     title: values.title,

          //     details: values.details,
          //     setReset: action.resetForm,
          //     setShowDefault: setShowDefault,
          //     // showDefault: showDefault,
          //     setSelectedImage: setSelectedImage,

          //     history: history,
          // })
          dispatch(
            addCategory({
              title: values.title,
              details: values.details,
              page: page,
              limit: limit,
              search: search,
              setReset: action.resetForm,
              setShowDefault: setShowDefault,
              showDefault: showDefault,
              setSelectedImage: setSelectedImage,
              setLoader: setLoader,
            })
          );
    },
  });
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };
  useEffect(() => {}, [CategoryFormik.values]);
  const addCategories = () => {
    setEdit(false);
    setSelectedItem(null);
    setShowDefault(true);
  };
  const handlechecked = (index, value) => {
    let newArray = checked;
    newArray[index].selected = !value.selected;
    setChecked(() => {
      return [...newArray];
    });
  };
  const nextPage = () => {
    if (page < CategoryData?.pages) {
      setPage(page + 1);
    }
  };
  const previousPage = () => {
    if (1 > page) {
      setPage(page - 1);
    }
  };

  const paginationItems = () => {
    let items = [];
    for (let number = 1; number <= CategoryData?.pages; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === page}
          onClick={() => {
            setPage(number);
          }}
        >
          {number}
        </Pagination.Item>
      );
    }
    return items;
  };
  return (
    <>
      <Navbar module={"Categories"} />
      <Container>
        <Row className="py-2 justify-content-between align-items-baseline">
          <Col lg={3} md={5}>
            <Form.Group className="mt-3">
              <Form.Control
                type="text"
                select
                placeholder="Search"
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
            <div className="d-flex justify-content-between"></div>
          </Col>
        </Row>
        {loader ? (
          <Spinner />
        ) : (
          <>
            {checked?.length ? (
              <>
                <Row className="pb-1">
                  {checked?.map((value, index, row) => {
                    return (
                      <>
                        <Col
                          lg={4}
                          md={12}
                          xs={12}
                          sm={12}
                          className="pb-3 introCardParent"
                        >
                          <Card border="light" className="shadow-sm introCard">
                            <Image
                              src={value.categoryImg}
                              className="navbar-brand-light"
                            />
                            <div className="detailSection">
                              <span className="left">
                                <h3>{value.title}</h3>
                                <p>{value.details}</p>
                              </span>
                              <span className="right">
                                <label>
                                  <input
                                    type="checkbox"
                                    checked={value.selected}
                                    onChange={(event) =>
                                      handlechecked(index, value)
                                    }
                                  />
                                </label>
                              </span>
                            </div>
                          </Card>
                        </Col>
                      </>
                    );
                  })}
                </Row>
                <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
                  <Nav>
                    <Pagination size={"sm"} className="mb-2 mb-lg-0">
                      <Pagination.Prev onClick={() => previousPage()}>
                        <FontAwesomeIcon icon={faAngleDoubleLeft} />
                      </Pagination.Prev>
                      {paginationItems()}
                      <Pagination.Next onClick={() => nextPage()}>
                        <FontAwesomeIcon icon={faAngleDoubleRight} />
                      </Pagination.Next>
                    </Pagination>
                  </Nav>
                  <small className="fw-bold">
                    Showing <b>{checked?.length}</b> out of{" "}
                    <b>{checked?.total_jobs}</b> entries
                  </small>
                </Card.Footer>
              </>
            ) : (
              <>
                <NoRecordFound />
              </>
            )}
          </>
        )}

        <Row className="py-2 justify-content-between">
          <div class="d-grid gap-2 col-3 text-center  mx-auto">
            <span className="text-gray">
              You can select multiple categories
            </span>
            <Button
              variant="primary"
              color="dark"
              size="sm"
              onClick={() => {
                handleClick();
              }}
            >
              Save
            </Button>
          </div>
        </Row>
      </Container>
      {/* Modal */}
      <Modal as={Modal.Dialog} centered show={showDefault}>
        <Modal.Header>
          <Modal.Title className="h5">
            {isEdit ? "Edit Category" : "Add Category"}
          </Modal.Title>
          <Button variant="close" aria-label="Close" onClick={handleClose} />
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={CategoryFormik.handleSubmit}>
            <Form.Group>
              <Form.Label>Category Name</Form.Label>
              <Form.Control
                // required
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
                <div style={{ color: "red" }}>
                  {CategoryFormik.errors.title}
                </div>
              ) : null}
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                // required
                type="text"
                placeholder="Description"
                value={CategoryFormik.values.details}
                name="details"
                label="details"
                onChange={(e) => {
                  CategoryFormik.setFieldValue("details", e.target.value);
                }}
              />
              {CategoryFormik.touched.details &&
              CategoryFormik.errors.details ? (
                <div style={{ color: "red" }}>
                  {CategoryFormik.errors.details}
                </div>
              ) : null}
            </Form.Group>
            <div class="d-grid gap-2 col-4 text-center mt-3 mx-auto">
              <Button
                variant="primary"
                // onHide={handleClose}
                color="dark"
                size="sm"
                type="submit"
              >
                Send for Approval
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default BusinessCategories;
