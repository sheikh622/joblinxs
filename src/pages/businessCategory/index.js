import {
  faAngleDoubleLeft,
  faAngleDoubleRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button, Card,
  Col,
  Container, Form,
  Image,
  Modal, Nav, Pagination, Row
} from "@themesberg/react-bootstrap";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import Navbar from "../../components/Navbar";
import NoRecordFound from "../../components/NoRecordFound";
import Spinner from "../../components/spinner";
import {
  addCategory,
  getBusinessCategoryList,
  saveCategory,
  CopyBusinessCategoryList
} from "../../Redux/BusinessCategory/actions";
const BusinessCategories = (item) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loader, setLoader] = useState(true);
  const [search, setSearch] = useState("");
  const [checked, setChecked] = useState([]);
  const [copyChecked, setCopyChecked] = useState([]);
  const [checkedItem, setCheckedItem] = useState([]);
  const [adminId, setAdminId] = useState(0);
  const [delCategory, setDelCategory] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [isEdit, setEdit] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [categoriesItem, setCategoriesItem] = useState([]);

  const [page, setPage] = useState(1);
  const [limit] = useState(12);
  const {
    location: { state },
  } = history;
  const login = useSelector((state) => state?.auth?.Auther?.Category)
  const SubLogin = useSelector((state) => state?.auth?.Auther)
  const CategoryData = useSelector((state) => state?.BusinessCategory?.getBusinessCategoryList);
  const CopyCategoryData = useSelector((state) => state?.BusinessCategory?.getBusinessCategoryList);
  const subCategories = useSelector((state) => state?.BusinessCategory?.getBusinessCategoryList);
  useEffect(() => {
    if (CategoryData !== undefined) {
      setChecked(CategoryData?.updatedArray)
    }

  }, [CategoryData])

  useEffect(() => {
    if (CopyCategoryData !== undefined) {
      setCopyChecked(CopyCategoryData?.updatedArray)
    }
  }, [CopyCategoryData])
  // useEffect(() => {
  //   if (subCategories !== undefined) {
  //     {subCategories.map((item)=>{
  //       if(item.id==login.id){
  //         setCategoriesItem(item.sub_Categories)
  //       }
  //     })}
  //   }
  // }, [subCategories])
  useEffect(() => {
    dispatch(
      getBusinessCategoryList({
        id: login.id,
        page: page,
        limit: limit,
        search: search,
        setLoader: setLoader,
        SubLogin: SubLogin?.user_categories,
      })
    );
  },
    [page, limit, search]
  );
  useEffect(() => {
    if (CategoryData?.pages != undefined) {
      dispatch(
        getBusinessCategoryList({
          id: login.id,
          page: page,
          limit: limit,
          search: search,
          setLoader: setLoader,
        })
      );
    }
  },
    [CategoryData]
  );
  const handleClick = () => {
    let arr = [];
    copyChecked.map((obj) => {
      if (obj.select === true) {
        arr.push(obj.id);
      }
    });
    dispatch(
      saveCategory({
        mainCategoryId: SubLogin?.Category?.id,
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
  useEffect(() => { }, [CategoryFormik.values]);
  const addCategories = () => {
    setEdit(false);
    setSelectedItem(null);
    setShowDefault(true);
  };
  const handlechecked = (index, value, e) => {
    let newValue = checked.find((item) => item.id === value.id);
    if (e.target.checked) {
      newValue = { ...newValue, select: e.target.checked }
    } if (!e.target.checked) {
      newValue = { ...newValue, select: false }
    }
    let newArray = checked.map(item => {
      if (item.id === newValue.id) {
        return { ...newValue }
      }
      return item;
    })
    setChecked(newArray)



    let valueNew = copyChecked.find((item) => item.id === value.id);
    if (e.target.checked) {
      valueNew = { ...valueNew, select: e.target.checked }
    } if (!e.target.checked) {
      valueNew = { ...valueNew, select: false }
    }
    let newNewArray = copyChecked.map(item => {
      if (item.id === valueNew.id) {
        return { ...valueNew }
      }
      return item;
    })
    setCopyChecked(newNewArray)

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
      <div className="mx-50">
        <Row className="py-2 justify-content-between align-items-baseline">
          <Col lg={3} md={5}>
            <Form.Group className="mt-3">
              <Form.Label>Search Category</Form.Label>
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
          <Col lg={3} md={5}>
            <Form.Group className="mt-3">
              <Form.Label>Main Category</Form.Label>
              <Form.Control
                disabled={true}
                value={login?.title}
              />
            </Form.Group>
          </Col>
          <Col lg={12} md={12} sm={12} xs={12} className="pt-4 pb-1">
            <div className="d-flex justify-content-between"></div>
          </Col>
        </Row>
        {/* {loader ? (
          <Spinner />
        ) : ( */}
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
                                  checked={value.select ? true : false}
                                  onChange={(event) =>
                                    handlechecked(index, value, event)
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
              {/* <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
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
                    <b>{checked?.total_categories}</b> entries
                  </small>
                </Card.Footer> */}
            </>
          ) : (
            <>
              <NoRecordFound />
            </>
          )}
        </>
        {/* )} */}

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
      </div>
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
