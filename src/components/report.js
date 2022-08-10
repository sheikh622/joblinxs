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
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";

// import { addAdminCategory} from "../../Redux/Category/actions";
const Report = ({item, setShow, show}) => {
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
    // useEffect(() => {
    //     dispatch(
    //         getCategoryList({

    //             search: search,
    //             role: "admin"
    //         })
    //     );
    // }, [search]);
    const [showDefault, setShowDefault] = useState(false);
    console.log("setShow",show)
    const handleClose = () => {
        setEdit(false);
        setShowDefault(false);

        CategoryFormik.resetForm();
    };
    const [selectedImage, setSelectedImage] = useState("");
    const [isEdit, setEdit] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
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
            // dispatch(
            //         addAdminCategory({
            //             title: values.title,
            //             details: values.details,
            //             categoryImg: selectedImage,
            //             setReset: action.resetForm,
            //             setShowDefault: setShowDefault,
            //             showDefault: showDefault,
            //             setSelectedImage: setSelectedImage,
            //         })
            //     );
        },
    });

    useEffect(() => { }, [CategoryFormik.values]);
    const addCategories = () => {

        setSelectedItem(null);
        setShowDefault(true);
    };
    return (



        <Modal as={Modal.Dialog} centered show={show}>
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
