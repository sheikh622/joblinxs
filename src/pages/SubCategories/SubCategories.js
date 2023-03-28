import {
  faEdit,
  faEllipsisV,
  faTrashAlt
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
  Row
} from "@themesberg/react-bootstrap";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import Navbar from "../../components/Navbar";
import NoRecordFound from "../../components/NoRecordFound";
import Spinner from "../../components/spinner";
import { addAdminCategory, deleteCategory, getCategoryList, updateCategory, addSubAdminCategory, getSingleList } from "../../Redux/Category/actions";

const SubCategories = (item) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [search, setSearch] = useState("");
  const [adminId, setAdminId] = useState(0);

  const [delCategory, setDelCategory] = useState(false)
  const [loader, setLoader] = useState(true);

  const {
    location: { state },
  } = history;
  // const CategoryData = useSelector((state) => state?.Category?.getCategoryList);
  const auth = useSelector((state) => state.auth);
  const forAction = history?.location?.state?.from;
  const categoryId = history.location.state;
  console.log("11111111111111111",categoryId)
  useEffect(() => {
    dispatch(
      getSingleList({
        id: categoryId,
        search: search,

      })
    );
  }, [search])
  // useEffect(() => {
  //   dispatch(
  //     getCategoryList({
  //       setLoader: setLoader,
  //       search: search,
  //       role: "admin"
  //     })
  //   );
  // }, [search]);
  const [showDefault, setShowDefault] = useState(false);
  const [subModal, setSubModel] = useState(false);
  const [category, setCategory] = useState([]);
  const [categoryType, setCategoryType] = useState("");

  const handleClick = (event) => {

    setCategoryType(event.target.value)
  }
  // const CategoryList = useSelector((state) => state?.Category?.getCategoryList);
  const SingleList = useSelector((state) => state?.Category?.SingleList);
  const Single = useSelector((state) => state?.Category);
  const MainCategory = useSelector((state) => state?.Category);
  console.log("00000000000000000000",MainCategory)
  // useEffect(() => {
  //   let array = [
  //     {
  //       value: "ALL",
  //       label: "All"
  //     }
  //   ];
  //   CategoryList.map((item) => {
  //     array.push({
  //       value: item?.id,
  //       label: item?.title,

  //     })
  //   })
  //   setCategory(array);
  // }, [CategoryList])
  const handleClose = () => {
    setEdit(false);
    setShowDefault(false);
    setDelCategory(false);
    CategoryFormik.resetForm();
  };
  const handleSubCategory = () => {
    setEdit(false);
    setSubModel(false);
    setDelCategory(false);
    CategoryFormik.resetForm();
  };
  const [selectedImage, setSelectedImage] = useState("");
  const [isEdit, setEdit] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const activeButton = (value) => {
    setEdit(true);
    // setShowDefault(true);
    setSelectedItem(value);
    setSelectedImage(value.categoryImg);
    setSubModel(true);
  };
  const handleDelete = (value) => {
    dispatch(
      deleteCategory({
        userId: adminId,
        search: search,
      })
    );
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
        : dispatch(
          addSubAdminCategory({
            categoryId: MainCategory?.id,
            title: values.title,
            details: values.details,
            categoryImg: selectedImage,
            setReset: action.resetForm,
            setShowDefault: setShowDefault,
            showDefault: showDefault,
            setSelectedImage: setSelectedImage,
            setSubModel: setSubModel,
            subModal: subModal,

          })
        );
    },
  });
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };
  useEffect(() => { }, [CategoryFormik.values]);
  const addCategories = () => {
    setEdit(false);
    setSelectedItem(null);
    setShowDefault(true);
  };
  const addSubCategories = () => {
    setSubModel(true);
    setEdit(false);

  }
  return (
    <>
      <Navbar module={"Sub-Categories"} />
      {/* <Col xs={12} xl={12} className={'d-flex justify-content-start mb-2'}>
        <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => history.goBack()}>
          <path d="M9.79591 14.8435L9.79557 14.8439C9.56284 15.0818 9.2503 15.2 8.93911 15.2C8.65838 15.2 8.37589 15.1036 8.15012 14.9076L8.14971 14.9073L1.18041 8.82491C0.939515 8.61471 0.799112 8.31587 0.799112 7.99906C0.799112 7.68333 0.93963 7.38454 1.18041 7.17445L8.14971 1.09206L8.15005 1.09176C8.62347 0.6805 9.35494 0.706129 9.79539 1.15531L9.79539 1.15531L9.79591 1.15584C10.2386 1.6107 10.2057 2.32402 9.72866 2.74114L9.72851 2.74128L3.7035 7.99908L9.72853 13.2581L9.72866 13.2582C10.2057 13.6753 10.2386 14.3887 9.79591 14.8435Z" fill="#12499C" stroke="#12499C" stroke-width="0.4" />
        </svg>

      </Col> */}
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/categories" >
          Categories
        </Link>
        <Typography color="text.primary">Sub-Catogories</Typography>
      </Breadcrumbs>
      {/* <div className="mx-5">
        {loader ? (
          <Spinner />
        ) : (
          <> */}
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
        {/* <Col lg={3} md={5} className="justify-content-end d-flex">
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
                </Col> */}
        <Col lg={6} md={5} className="justify-content-end d-flex">
          <Button
            variant="primary"
            className="mx-2"
            onClick={() => addSubCategories()}
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
            Add Sub-Category
          </Button>
        </Col>
        <Col lg={12} md={12} sm={12} xs={12} className="pt-4 pb-1">
          <div className="d-flex justify-content-between"></div>
        </Col>
      </Row>
      {SingleList?.length ? <>

        <Row className="pb-1">
          {SingleList?.map((value, index, row) => {
            return (
              <>
                <Col lg={4} md={12} xs={12} sm={12} className="pb-3 introCardParent" >
                  <Card border="light" className="shadow-sm introCard">
                    <Image
                      style={
                        {
                          height: "100%",
                          width: "100%",
                          objectFit: "contain",
                          borderRadius: "10px",
                        }
                      }
                      src={value.categoryImg}
                      className="navbar-brand-light"
                    />
                    <div className="detailSection">
                      <span className="left">
                        <h3>{value.title}</h3>
                        <p>{value.details}</p>
                      </span>
                      {/* <span className="right">
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
                            <Dropdown.Item onClick={() => activeButton(value)}>
                              <FontAwesomeIcon icon={faEdit} className="me-2" />{" "}
                              Edit
                            </Dropdown.Item>
                            <Dropdown.Item
                              className="text-danger"
                              onClick={() => {
                                setDelCategory(true);
                                setAdminId(value.id);
                              }}
                            >
                              <FontAwesomeIcon
                                icon={faTrashAlt}
                                className="me-2"
                              />{" "}
                              Remove
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </span> */}
                    </div>
                  </Card>
                </Col>
              </>
            );
          })}
        </Row>

      </> : <>
        <NoRecordFound />
      </>
      }

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
      {/* </>
        )}
      </div> */}
      <Modal as={Modal.Dialog} centered show={delCategory} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title className="h5">Delete User</Modal.Title>
          <Button variant="close" aria-label="Close" onClick={handleClose} />
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              Are you sure you want to delete this Category?
            </Form.Group>
            <Form.Group>
              <div class="d-grid gap-2 col-4 text-center mt-3 mx-auto">
                <Button
                  variant="primary"
                  // onHide={handleClose}
                  color="dark"
                  size="sm"
                  // type="submit"
                  onClick={() => {
                    handleDelete();
                    handleClose();
                  }}
                >
                  Delete
                </Button>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>

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

            <Form.Group className="mt-3">
              <Form.Label>Upload Image</Form.Label>
              <Form.Control type="file"
                onChange={imageChange}
                accept="image/png, image/jpg, image/jpeg"
              />

              <div class="d-grid gap-2 col-4 text-center mt-3 mx-auto">
                <Button
                  variant="primary"
                  // onHide={handleClose}
                  color="dark"
                  size="sm"
                  type="submit"
                >
                  {isEdit ? "Update" : "Save"}
                </Button>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
      {/* Sub-Category */}
      <Modal as={Modal.Dialog} centered show={subModal}>
        <Modal.Header>
          <Modal.Title className="h5">
            {isEdit ? "Edit Category" : "Add Sub-Category"}
          </Modal.Title>
          <Button variant="close" aria-label="Close" onClick={handleSubCategory} />
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={CategoryFormik.handleSubmit}>
            <Form.Group>
              <Form.Label>Sub-Category Name</Form.Label>
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
            <Form.Group className="mt-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="title"
                value={MainCategory?.title}
                name="title"
                label="title"
              />
            </Form.Group>
            {/* <Col lg={6} md={5}>
              <Form.Group className="mt-3">
                <Form.Label>Select Main category</Form.Label>
                <Form.Select defaultValue="1"
                  label="Select"
                  value={categoryType}
                  onChange={handleClick}
                >
                  {category.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col> */}
            <Form.Group className="mt-3">
              <Form.Label>Upload Image</Form.Label>
              <Form.Control type="file"
                onChange={imageChange}
                accept="image/png, image/jpg, image/jpeg"
              />

              <div class="d-grid gap-2 col-4 text-center mt-3 mx-auto">
                <Button
                  variant="primary"
                  // onHide={handleClose}
                  color="dark"
                  size="sm"
                  type="submit"
                >
                  {isEdit ? "Update" : "Save"}
                </Button>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default SubCategories;
