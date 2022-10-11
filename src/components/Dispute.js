import {
  Button, Col, Form, Modal
} from "@themesberg/react-bootstrap";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import Select from "react-select";
import * as Yup from "yup";
import { reportedUser, reportUserList } from "../Redux/profile/actions";
import { getAddDispute, getDisputeReason } from "../Redux/DisputeManagement/actions"
const Dispute = ({ item, setDispute, dispute, id, logHours }) => {

  const dispatch = useDispatch();
  const params = useLocation();

  const history = useHistory();
  const [search, setSearch] = useState("");
  const [adminId, setAdminId] = useState(0);
  const {
    location: { state },
  } = history;
  let profileId = params.search.split('?')[1];
  let jobId = params.pathname.split("/")[2];
  const DisputeList = useSelector((state) => state.DisputeListing?.Reports?.disputedJobListing);
  const login = useSelector((state) => state.auth.Auther);
  console.log("222222222222222222", item)
  const ReasonList = useSelector((state) => state?.DisputeListing?.Reasons?.data);
  const [reportList, setReportList] = useState([]);
  const [categories, setCategories] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleClose = () => {
    setDispute(false);
    CategoryFormik.resetForm();
  };
  const CategorySchema = Yup.object().shape({});
  const CategoryFormik = useFormik({
    enableReinitialize: true,
    initialValues: {},
    validationSchema: CategorySchema,
    onSubmit: async (values, action) => { },
  });
  const [dataList, setDataList] = useState();

  useEffect(() => {
    if (DisputeList !== undefined) {
      setDataList(DisputeList);
    }
  }, [DisputeList]);
  useEffect(() => {
    let data;
    if (ReasonList) {
      data = ReasonList?.map((item) => ({
        label: item?.details,
        value: item?.id,
      }));
      setReportList(data);
    }
  }, [ReasonList]);
  useEffect(() => {
    dispatch(getDisputeReason({}));
  }, []);
  const handleReport = (jobId, profileId, item) => {
    console.log(profileId, "=============")
    if(profileId === undefined){
      var data ={
          jobId: item?.jobs?.id,
          disputedTo: item?.users?.id,
          disputedBy: login?.id,
          isDisputed: true,
          setDispute: setDispute,
          reason: selectedCategory ? selectedCategory : "",
          description: CategoryFormik?.values?.description
            ? CategoryFormik?.values?.description
            : "",
          logHourId:  null,
      }
    }else{
      var data ={
        jobId: jobId,
        disputedTo: profileId,
        disputedBy: login?.id,
        isDisputed: true,
        setDispute: setDispute,
        reason: selectedCategory ? selectedCategory : "",
        description: CategoryFormik?.values?.description
          ? CategoryFormik?.values?.description
          : "",
          logHourId:  item.id,
    }
  }
    dispatch(
      getAddDispute(data)
    );
  };
  return (
    <Modal as={Modal.Dialog} centered show={dispute} onHide={() => { handleClose(); setSelectedCategory(null); setCategories(null) }}>
      <Modal.Header>
        <Modal.Title className="h5">{"Dispute"}</Modal.Title>
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
                disabled={selectedCategory !== null ? false : true}
                // onHide={handleClose}
                color="dark"
                size="sm"
                type="submit"
                onClick={() => {
                  handleReport(jobId, profileId, item);
                }}
              >
                Confirm Dispute
              </Button>
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
export default Dispute;
