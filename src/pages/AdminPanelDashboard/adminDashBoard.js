
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faChartLine, faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';
import { ProviderCard, BusinessSeeker, PersonalSeeker, TotalJobs, TotalProviders, TotalSeekers, RevenueCard, CircleChartWidget, BarChartWidget, ProgressTrackWidget, RankingWidget, SalesValueWidget, SalesValueWidgetPhone, AcquisitionWidget } from "../../DashBoardComponents/Widgets";
// import { PageVisitsTable } from "../../DashBoardComponents/Tables";
import { trafficShares, totalOrders } from "../../DashBoardComponents/DashBoardChart";
import Navbar from "../../components/Navbar";
import { getAdminUsers } from "../../Redux/AdminDashBoard/actions"

const AdminDashBoard = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    location: { state },
  } = history;
  const UsersCount = useSelector(
    (state) => state?.DashboardUsersCount?.UsersCounts?.message
  );
  useEffect(() => {
    dispatch(
      getAdminUsers()
    );
  }, []);


  return (
    <>
      <Navbar module={"Dashboard"} />
      <Row className="justify-content-md-center">
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <ProviderCard
            category="Provider"
            // title="12"
            title={UsersCount?.provider}
            icon={faChartLine}
            iconColor="shape-secondary"
          />
        </Col>
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <BusinessSeeker
            category="Business Seeker"
            // title="30"
            title={UsersCount?.bussinese_seeker}
            icon={faChartLine}
            iconColor="shape-secondary"
          />
        </Col>
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <PersonalSeeker
            category="Seeker"
            // title="21"
            title={UsersCount?.seeker}
            icon={faChartLine}
            iconColor="shape-secondary"
          />
        </Col>
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <TotalSeekers
            category="Total Seekers"
            // title="93"
            title={UsersCount?.seeker}
            icon={faChartLine}
            iconColor="shape-secondary"
          />
        </Col>
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <RevenueCard
            category="Revenue"
            // title="50111"
            title={`$ ${UsersCount?.Revenue}`}
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
        <Col xs={12} xl={6} className="mb-4">
          <ProgressTrackWidget />
        </Col>
        <Col xs={12} xl={6}>
          <BarChartWidget
            title="Total orders"
            value={452}
            percentage={18.2}
            data={totalOrders} />
        </Col>
      </Row>
    </>
  );
};


export default AdminDashBoard;