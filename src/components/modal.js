import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Modal,
} from "@themesberg/react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Rating } from "react-simple-star-rating";
import { useFormik } from "formik";
import * as Yup from "yup";
import { rateProvider } from "../Redux/addJob/actions";

const ModalComponent = (props) => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0); // initial rating value
  const RatingSchema = Yup.object().shape({
    // description: Yup.string().required("Description is required"),
  });
  const RatingFormik = useFormik({
    initialValues: {
      description: "",
    },
    validationSchema: RatingSchema,
    onSubmit: async (values) => {
      let value = (rating / 100) * 5;
      dispatch(
        rateProvider({
          description: values.description,
          rating: value,
          jobId: props.jobId,
          ratedTo: props.ratedTo,
          ratedBy:props.ratedBy,
          setShow: props.setShow,
        })
      );
    },
  });
  const handleRating = (rate) => {
    setRating(rate);
  };
  return (
    <>
      <Modal
        as={Modal.Dialog}
        centered
        show={props.show}
        onHide={() => {
          props.setShow(false);
        }}
      >
        <Modal.Body>
          <Form onSubmit={RatingFormik.handleSubmit}>
            <Card.Img
              style={{ cursor: "pointer" }}
              src={props.img}
              alt="Neil Portrait"
              className="user-avatar large-avatar rounded-circle mx-auto mt-1"
            />
            <h2 className="text-center my-2">Rate this person</h2>
            <Form.Group id="description" className="mb-4">
              <Form.Label>Add Comment</Form.Label>
              <InputGroup>
                <Form.Control
                  //  required
                  type="text"
                  placeholder="Add Comment"
                  name="Description"
                  label="description"
                  value={RatingFormik.values.description}
                  onChange={(e) => {
                    RatingFormik.setFieldValue("description", e.target.value);
                  }}
                />
                {RatingFormik.touched.description &&
                RatingFormik.errors.description ? (
                  <div style={{ color: "red", width: "100%" }}>
                    {RatingFormik.errors.description}
                  </div>
                ) : null}
              </InputGroup>
            </Form.Group>
            <Form.Group className="col my-2">
              <Rating
                onClick={handleRating}
                ratingValue={rating} /* Available Props */
              />
            </Form.Group>
            <Form.Group className="col my-2">
              <div class="d-grid gap-2 col-4 text-center mt-3 mx-auto">
                <Button color="dark" type="submit" size="sm" variant="primary">
                  Save
                </Button>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalComponent;
