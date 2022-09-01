import {
  Col, Container,
  Row,
  Tab,
  Tabs
} from "@themesberg/react-bootstrap";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../../components/Navbar";
import AppliedApplicants from "./appliedApplicants";
import HiredApplicants from "./hiredApplicants";

const Applicants = (value) => {
  const history = useHistory();

  const [key, setKey] = useState('Applied');
  return (
    <>
      <Navbar module={"Applicants"} />
      <Col xs={12} xl={12} className={'d-flex justify-content-start mb-2'}>
        <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => history.goBack()}>
          <path d="M9.79591 14.8435L9.79557 14.8439C9.56284 15.0818 9.2503 15.2 8.93911 15.2C8.65838 15.2 8.37589 15.1036 8.15012 14.9076L8.14971 14.9073L1.18041 8.82491C0.939515 8.61471 0.799112 8.31587 0.799112 7.99906C0.799112 7.68333 0.93963 7.38454 1.18041 7.17445L8.14971 1.09206L8.15005 1.09176C8.62347 0.6805 9.35494 0.706129 9.79539 1.15531L9.79539 1.15531L9.79591 1.15584C10.2386 1.6107 10.2057 2.32402 9.72866 2.74114L9.72851 2.74128L3.7035 7.99908L9.72853 13.2581L9.72866 13.2582C10.2057 13.6753 10.2386 14.3887 9.79591 14.8435Z" fill="#12499C" stroke="#12499C" stroke-width="0.4" />
        </svg>

      </Col>
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
              <AppliedApplicants id={key} />
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
