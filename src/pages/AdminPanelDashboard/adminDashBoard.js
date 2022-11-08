
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faChartLine, faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';

import {  ProviderCard,BusinessSeeker,PersonalSeeker,TotalJobs,TotalProviders,TotalSeekers,RevenueCard,CircleChartWidget, BarChartWidget, ProgressTrackWidget, RankingWidget, SalesValueWidget, SalesValueWidgetPhone, AcquisitionWidget } from "../../DashBoardComponents/Widgets";
// import { PageVisitsTable } from "../../DashBoardComponents/Tables";
import { trafficShares, totalOrders } from "../../DashBoardComponents/DashBoardChart";
import Navbar from "../../components/Navbar";


const AdminDashBoard = () => {
  return (
    <>
      <Navbar module={"DashBoard"} />


      <Row className="justify-content-md-center">
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <ProviderCard
            category="Provider"
            title="3.5k"
            // period="Feb 1 - Apr 1"
            // percentage={18.2}
            icon={faChartLine}
            
            iconColor="shape-secondary"
          />
        </Col>
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <BusinessSeeker
            category="Business Seeker"
            title="5k"
            // period="Feb 1 - Apr 1"
            // percentage={18.2}
            icon={faChartLine}
            iconColor="shape-secondary"
          />
        </Col>
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <PersonalSeeker
            category="Personal Seeker"
            title="3k"
            // period="Feb 1 - Apr 1"
            // percentage={18.2}
            icon={faChartLine}
            iconColor="shape-secondary"
          />
        </Col>
        {/* <Col xs={12} sm={6} xl={4} className="mb-4">
          <TotalJobs
            category="Total Jobs"
            title="45k"
            // period="Feb 1 - Apr 1"
            // percentage={18.2}
            icon={faChartLine}
            iconColor="shape-secondary"
          />  
        </Col> */}
        {/* <Col xs={12} sm={6} xl={4} className="mb-4">
          <TotalProviders
            category="Total Providers"
            title="15k"
            // period="Feb 1 - Apr 1"
            // percentage={18.2}
            icon={faChartLine}
            iconColor="shape-secondary"
          />
        </Col> */}
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <TotalSeekers
            category="Toatal Seekers"
            title="5k"
            // period="Feb 1 - Apr 1"
            // percentage={18.2}
            icon={faChartLine}
            iconColor="shape-secondary"
          />
        </Col>
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <RevenueCard
            category="Revenue"
            title="$43,594"
            period="Feb 1 - Apr 1"
            percentage={28.4}
            icon={faCashRegister}
            iconColor="shape-tertiary"
          />
        </Col>
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CircleChartWidget
            title="Traffic Share"
            data={trafficShares} />
        </Col>
        <Col xs={12} className="mb-4 d-none d-sm-block">
          <SalesValueWidget
            title="Sales Value"
            value="10,567"
            percentage={10.57}
          />
        </Col>
        <Col xs={12} className="mb-4 d-sm-none">
          <SalesValueWidgetPhone
            title="Sales Value"
            value="10,567"
            percentage={10.57}
          />
        </Col>

      </Row>

      <Row>
        <Col xs={12} xl={12} className="mb-4">
          <Row>
            <Col xs={12} xl={8} className="mb-4">
              <Row>

                {/* <Col xs={12} lg={6} className="mb-4">
                  <AcquisitionWidget />
                </Col> */}
                <Col xs={12} lg={6} className="mb-4">
                  <ProgressTrackWidget />
                </Col>
              </Row>
            </Col>

            <Col xs={12} xl={4}>
              <Row>
                <Col xs={12} className="mb-4">
                  <BarChartWidget
                    title="Total orders"
                    value={452}
                    percentage={18.2}
                    data={totalOrders} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};


export default AdminDashBoard;