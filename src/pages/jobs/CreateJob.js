import React from "react";
import { Col, Row, Container, Button } from "@themesberg/react-bootstrap";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import { Routes } from "../../routes";
import { GeneralInfoForm } from "../../components/Forms";
const CreateJob = () => {
  return (
    <>
      <Navbar module={"Create Job"} />
      <Container>
        <Row className="py-2">
        <Col xs={12} xl={12} className={'d-flex justify-content-end'}>
          <Link className="text-white fw-bold" to={Routes.Job.path}>
            <Button variant="primary" type="submit">
              {"  "}
              Back
            </Button>
          </Link>
        </Col>
          <Col xs={12} xl={12}>
            <GeneralInfoForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default CreateJob;
