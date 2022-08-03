import React,{useState} from "react";
import {
  Container,
  Row,
  Tab,
  Tabs
} from "@themesberg/react-bootstrap";
import Navbar from "../../components/Navbar";
import AppliedApplicants from "./appliedApplicants";
import HiredApplicants from "./hiredApplicants"

const Applicants = (value) => {
    const [key, setKey] = useState('Applied');
  return (
    <>
      <Navbar module={"Applicants"} />
      <Container>
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
