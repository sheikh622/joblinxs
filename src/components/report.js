import {
    faEdit,
    faEllipsisV,
    faTrashAlt,
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
} from "@themesberg/react-bootstrap";
import Select from "react-select";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
// import { addAdminCategory} from "../../Redux/Category/actions";

const Report = ({ item, setShow, show }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [search, setSearch] = useState("");
    const [adminId, setAdminId] = useState(0);
    const {
        location: { state },
    } = history;
    const CategoryData = useSelector((state) => state?.Category?.getCategoryList);
    const auth = useSelector((state) => state.auth);
    const forAction = history?.location?.state?.from;
    const [showDefault, setShowDefault] = useState(false);
    const [categoryList, setCategoryList] = useState([]);
    const [categories, setCategories] = useState(null);

    const handleClose = () => {
        setShow(false);
        CategoryFormik.resetForm();
    };
    const [selectedImage, setSelectedImage] = useState("");
    // const activeButton = (value) => {
    //     setShowDefault(true);
    // };
    const CategorySchema = Yup.object().shape({
        title: Yup.string().trim().required("Category Name is required"),
        details: Yup.string().trim().required("description is required"),
    });
    const CategoryFormik = useFormik({
        enableReinitialize: true,
        initialValues: {
         
        },
        validationSchema: CategorySchema,
        onSubmit: async (values, action) => {
          
        },
    });

    useEffect(() => { }, [CategoryFormik.values]);
    // const addCategories = () => {
    //     setSelectedItem(null);
    //     setShowDefault(true);
    // };
    const currencies = [
        {
            value: "",
            label: "All Users",
        },
        {
            value: "provider",
            label: "Service Provider",
        },
        {
            value: "seeker",
            label: "Service Seeker",
        },
    ];
    return (
        <Modal as={Modal.Dialog} centered show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title className="h5">
                    {"Add Category"}
                </Modal.Title>
                <Button variant="close" aria-label="Close" onClick={handleClose} />
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={CategoryFormik.handleSubmit}>
                    <Form.Group>
                        <Col lg={12} md={6} className="mb-1">

                            <Form.Group>
                                Report
                                <Select
                                    defaultValue={categories}
                                    onChange={(e) => setCategories(e.label)}
                                    options={categoryList}
                                />
                            </Form.Group>
                        </Col>
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
                        <div class="d-grid gap-2 col-4 text-center mt-3 mx-auto">
                            <Button
                                variant="primary"
                                // onHide={handleClose}
                                color="dark"
                                size="sm"
                                type="submit"
                            >
                                Report
                            </Button>
                        </div>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    )
};
export default Report;
