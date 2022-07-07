import { Button, Col, Container, Row } from "@themesberg/react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import { GeneralInfoForm } from "./Forms";
import Navbar from "../../components/Navbar";
import { Routes } from "../../routes";
import { useHistory, useLocation } from "react-router-dom";

const CreateJob = () => {

  const params = useLocation();
  let id = params.pathname.split("/")[2];

  return (
    <>
      <Navbar module={id ? "Edit Job" :"Create Job"} />
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
