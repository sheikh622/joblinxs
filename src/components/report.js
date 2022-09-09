import {
  faEdit,
  faEllipsisV,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
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
import { useHistory, useLocation } from "react-router-dom";
import * as Yup from "yup";
import { reportUserList, reportedUser } from "../Redux/profile/actions";
const Report = ({ item, setShow, show, id, setBlockedBy }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [search, setSearch] = useState("");
  const [adminId, setAdminId] = useState(0);
  const {
    location: { state },
  } = history;
  const login = useSelector((state) => state.auth.Auther);
  const CategoryData = useSelector((state) => state?.Category?.getCategoryList);
  const ReportData = useSelector((state) => state.ProfileReducer.ReportList);
  const auth = useSelector((state) => state.auth);
  const forAction = history?.location?.state?.from;
  const [showDefault, setShowDefault] = useState(false);
  const [reportList, setReportList] = useState([]);
  const [categories, setCategories] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState();
  const params = useLocation();
  let profileId = params.pathname.split("/")[2];

  const handleClose = () => {
    setShow(false);
    CategoryFormik.resetForm();
  };
  const CategorySchema = Yup.object().shape({});
  const CategoryFormik = useFormik({
    enableReinitialize: true,
    initialValues: {},
    validationSchema: CategorySchema,
    onSubmit: async (values, action) => {},
  });
  useEffect(() => {
    let data;
    if (ReportData) {
      data = ReportData?.map((item) => ({
        label: item?.details,
        value: item?.id,
      }));
      setReportList(data);
    }
  }, [ReportData]);
  useEffect(() => {
    dispatch(reportUserList({}));
  }, []);
  const handleReport = () => {
    dispatch(
      reportedUser({
        reportedTo: profileId ? profileId : id,
        reportedBy: login?.id,
        description: CategoryFormik?.values?.description
          ? CategoryFormik?.values?.description
          : "",
        reportId: selectedCategory ? selectedCategory : "",
        setBlockedBy:setBlockedBy
      })
    );
    handleClose();
  };
  return (
    <Modal as={Modal.Dialog} centered show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title className="h5">{"Report"}</Modal.Title>
        <Button variant="close" aria-label="Close" onClick={handleClose} />
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={CategoryFormik.handleSubmit}>
          <Form.Group>
            <Col lg={12} md={6} className="mb-1">
              <Form.Group>
                Reason
                <Select
                  defaultValue={categories}
                  onChange={(e) => {
                    setCategories(e.label);
                    setSelectedCategory(e.value);
                  }}
                  options={reportList}
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
              name="description"
              label="description"
              onChange={(e) => {
                CategoryFormik.setFieldValue("description", e.target.value);
              }}
            />
            {CategoryFormik.touched.details && CategoryFormik.errors.details ? (
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
                onClick={() => {
                  handleReport();
                }}
              >
                Report
              </Button>
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
export default Report;
