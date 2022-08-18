import React,{useState} from "react";
import {
  Container,
  Row,
  Tab,
  Tabs,
  Col,
  Button,
} from "@themesberg/react-bootstrap";
import { Link } from "react-router-dom";
import { Routes } from "../../routes";
import Navbar from "../../components/Navbar";
import AppliedApplicants from "./appliedApplicants";
import HiredApplicants from "./hiredApplicants"

const Applicants = (value) => {
    const [key, setKey] = useState('Applied');
  return (
    <>
      <Navbar module={"Applicants"} />
      <Container>
      <Col xs={12} xl={12} className={'d-flex justify-content-end mb-2'}>
                <Link className="text-white fw-bold" to={Routes.Job.path}>
                  <Button variant="primary" type="submit">
                    {"  "}
                    Back
                  </Button>
                </Link>
              </Col>
        <Row className="py-2 ">
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
            fill
          >
            <Tab eventKey="Applied" title="Applied">
            <AppliedApplicants id={key}/>
            </Tab>
            <Tab eventKey="Hired" title="Hired">
            <HiredApplicants id={key} />
            </Tab>
          </Tabs>
        </Row>
      </Container>
    </>
  );
};

export default Applicants;
