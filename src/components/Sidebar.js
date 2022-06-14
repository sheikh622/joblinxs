import { faThList, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Badge, Button, Image, Modal, Nav, Navbar
} from "@themesberg/react-bootstrap";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import SimpleBar from "simplebar-react";
import ReactHero from "../assets/img/technologies/react-hero-logo.svg";
import { logoutRequest } from "../Redux/auth/actions";
import { Routes } from "../routes";

export default (props = {}) => {
  const location = useLocation();
  const { pathname } = location;
  const [show, setShow] = useState(false);
  const showClass = show ? "show" : "";
  const dispatch = useDispatch();

  const [showDefaultCategory, setShowDefaultCategory] = useState(false);
  const handleClosesCategory = () => {
    setShowDefaultCategory(false);
  };

  const auth = useSelector((state) => state.auth);

  const onCollapse = () => setShow(!show);

  const NavItem = (props) => {
    const {
      title,
      link,
      external,
      target,
      icon,
      SVG,
      image,
      badgeText,
      badgeBg = "secondary",
      badgeColor = "primary",
    } = props;
    const classNames = badgeText
      ? "d-flex justify-content-start align-items-center justify-content-between"
      : "";
    const navItemClassName = link === pathname ? "active" : "";
    const linkProps = external ? { href: link } : { as: Link, to: link };

    return (
      <Nav.Item className={navItemClassName} onClick={() => setShow(false)}>
        <Nav.Link {...linkProps} target={target} className={classNames}>
          <span>
            {icon ? (
              <span className="sidebar-icon">
                <FontAwesomeIcon icon={icon} />{" "}
              </span>
            ) : null}
            {image ? (
              <Image
                src={image}
                width={20}
                height={20}
                className="sidebar-icon svg-icon"
              />
            ) : null}

            {SVG ? <span className="sidebar-icon svg-icon">{SVG}</span> : null}

            <span className="sidebar-text">{title}</span>
          </span>
          {badgeText ? (
            <Badge
              pill
              bg={badgeBg}
              text={badgeColor}
              className="badge-md notification-count ms-2"
            >
              {badgeText}
            </Badge>
          ) : null}
        </Nav.Link>
      </Nav.Item>
    );
  };

  return (
    <>
      <Navbar
        expand={false}
        collapseOnSelect
        variant="dark"
        className="navbar-theme-primary px-4 d-md-none"
      >
        <Navbar.Brand
          className="me-lg-5"
          as={Link}
          to={Routes.DashboardOverview.path}
        >
          <Image src={ReactHero} className="navbar-brand-light" />
        </Navbar.Brand>
        <Navbar.Toggle
          as={Button}
          aria-controls="main-navbar"
          onClick={onCollapse}
        >
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
      </Navbar>
      <CSSTransition timeout={300} in={show} classNames="sidebar-transition">
        <SimpleBar
          className={`collapse ${showClass} sidebar d-md-block bg-primary text-white`}
        >
          <div className="sidebar-inner px-4 pt-3">
            <div className="user-card d-flex align-items-center justify-content-between justify-content-md-center pb-3">
              <div className="d-flex align-items-center">
                <div className="user-avatar lg-avatar me-4">
                  <Image
                    src={auth?.Auther?.profileImg}
                    className="card-img-top rounded-circle border-white"
                  />
                </div>
                <div className="d-block">
                  <h4>{auth?.Auther?.fullName}</h4>
                  <span>{auth?.Auther?.userRole}</span>
                </div>
              </div>
              <Nav.Link
                className="collapse-close d-md-none"
                onClick={onCollapse}
              >
                <FontAwesomeIcon icon={faTimes} />
              </Nav.Link>
            </div>
            <Nav className="flex-column pt-3 pt-md-0 mt-4">
              {auth?.Auther?.userRole != "Admin" && (
                <>
                  <NavItem
                    title="Home"
                    link={Routes.DashboardOverview.path}
                    SVG={
                      <svg
                        width="19"
                        height="17"
                        viewBox="0 0 19 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.00059 16.0002V11.0002H11.0006V16.0002C11.0006 16.5502 11.4506 17.0002 12.0006 17.0002H15.0006C15.5506 17.0002 16.0006 16.5502 16.0006 16.0002V9.00021H17.7006C18.1606 9.00021 18.3806 8.43021 18.0306 8.13022L9.67059 0.600215C9.29059 0.260215 8.71059 0.260215 8.33059 0.600215L-0.0294136 8.13022C-0.369414 8.43021 -0.159414 9.00021 0.300586 9.00021H2.00059V16.0002C2.00059 16.5502 2.45059 17.0002 3.00059 17.0002H6.00059C6.55059 17.0002 7.00059 16.5502 7.00059 16.0002Z"
                          fill="#FFF"
                        />
                      </svg>
                    }
                  />

                  <NavItem
                    title="My Jobs"
                    SVG={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                      >
                        <path
                          d="M13 9H5C4.45 9 4 9.45 4 10C4 10.55 4.45 11 5 11H13C13.55 11 14 10.55 14 10C14 9.45 13.55 9 13 9ZM16 2H15V1C15 0.45 14.55 0 14 0C13.45 0 13 0.45 13 1V2H5V1C5 0.45 4.55 0 4 0C3.45 0 3 0.45 3 1V2H2C0.89 2 0 2.9 0 4V18C0 19.1 0.89 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM15 18H3C2.45 18 2 17.55 2 17V7H16V17C16 17.55 15.55 18 15 18ZM10 13H5C4.45 13 4 13.45 4 14C4 14.55 4.45 15 5 15H10C10.55 15 11 14.55 11 14C11 13.45 10.55 13 10 13Z"
                          fill="#fff"
                        />
                      </svg>
                    }
                    link={Routes.Job.path}
                  />

                  <NavItem
                    title="Profile"
                    SVG={
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 10.75C12.6242 10.75 14.75 8.62421 14.75 6C14.75 3.37579 12.6242 1.25 10 1.25C7.37579 1.25 5.25 3.37579 5.25 6C5.25 8.62421 7.37579 10.75 10 10.75ZM10 11.25C8.57124 11.25 6.47644 11.6026 4.71985 12.3063C3.84095 12.6584 2.99956 13.1168 2.36586 13.7017C1.72707 14.2912 1.25 15.0595 1.25 16V17C1.25 17.9642 2.03579 18.75 3 18.75H17C17.9642 18.75 18.75 17.9642 18.75 17V16C18.75 15.0595 18.2729 14.2912 17.6341 13.7017C17.0004 13.1168 16.1591 12.6584 15.2802 12.3063C13.5236 11.6026 11.4288 11.25 10 11.25Z"
                          stroke="#fff"
                          stroke-width="1.5"
                        />
                      </svg>
                    }
                    link={Routes.Profile.path}
                  />

                  <NavItem
                    title="My Users"
                    SVG={
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.6379 14.8036C11.6316 14.1351 10.8673 13.1605 10.458 12.0238C10.0488 10.8872 10.0163 9.64905 10.3654 8.49255C10.7145 7.33604 11.4267 6.32266 12.3965 5.60237C13.3664 4.88209 14.5423 4.49316 15.7504 4.49316C16.9584 4.49316 18.1344 4.88209 19.1042 5.60237C20.0741 6.32266 20.7862 7.33604 21.1354 8.49255C21.4845 9.64905 21.452 10.8872 21.0427 12.0238C20.6335 13.1605 19.8692 14.1351 18.8629 14.8036C20.5795 15.4348 22.0616 16.5766 23.1098 18.0754C23.1781 18.1546 23.2291 18.2472 23.2595 18.3472C23.29 18.4472 23.2991 18.5525 23.2865 18.6563C23.2738 18.7601 23.2396 18.8601 23.186 18.9499C23.1324 19.0397 23.0606 19.1173 22.9752 19.1777C22.8899 19.2381 22.7929 19.28 22.6904 19.3006C22.5879 19.3213 22.4822 19.3204 22.3801 19.2978C22.278 19.2752 22.1817 19.2315 22.0975 19.1696C22.0133 19.1076 21.9429 19.0287 21.891 18.9379C21.198 17.9533 20.2783 17.1498 19.2096 16.5952C18.1409 16.0405 16.9545 15.751 15.7504 15.751C14.5463 15.751 13.3599 16.0405 12.2912 16.5952C11.2225 17.1498 10.3028 17.9533 9.60977 18.9379C9.55784 19.0287 9.48751 19.1076 9.40328 19.1696C9.31906 19.2315 9.22281 19.2752 9.12072 19.2978C9.01862 19.3204 8.91293 19.3213 8.81043 19.3006C8.70793 19.28 8.61089 19.2381 8.52554 19.1777C8.44019 19.1173 8.36841 19.0397 8.31481 18.9499C8.26122 18.8601 8.22698 18.7601 8.21432 18.6563C8.20165 18.5525 8.21082 18.4472 8.24125 18.3472C8.27169 18.2472 8.3227 18.1546 8.39102 18.0754C9.43922 16.5766 10.9213 15.4348 12.6379 14.8036ZM19.8754 10.1254C19.8754 9.30959 19.6335 8.51206 19.1802 7.83371C18.7269 7.15536 18.0827 6.62665 17.329 6.31444C16.5752 6.00222 15.7458 5.92054 14.9456 6.0797C14.1455 6.23886 13.4105 6.63173 12.8336 7.20862C12.2567 7.78551 11.8638 8.52052 11.7047 9.32069C11.5455 10.1209 11.6272 10.9503 11.9394 11.704C12.2516 12.4578 12.7803 13.102 13.4587 13.5552C14.137 14.0085 14.9345 14.2504 15.7504 14.2504C16.8444 14.2504 17.8936 13.8158 18.6672 13.0423C19.4408 12.2687 19.8754 11.2195 19.8754 10.1254ZM0.928514 19.1161C1.00826 19.1735 1.09864 19.2144 1.19437 19.2366C1.29011 19.2587 1.38929 19.2615 1.48614 19.245C1.58299 19.2284 1.67557 19.1927 1.7585 19.14C1.84142 19.0873 1.91302 19.0186 1.96914 18.9379C2.6627 17.9538 3.58246 17.1506 4.65104 16.5959C5.71963 16.0412 6.90579 15.7513 8.10977 15.7504C8.30868 15.7504 8.49944 15.6714 8.6401 15.5308C8.78075 15.3901 8.85977 15.1993 8.85977 15.0004C8.85977 14.8015 8.78075 14.6108 8.6401 14.4701C8.49944 14.3295 8.30868 14.2504 8.10977 14.2504C7.01575 14.2504 5.96654 13.8158 5.19295 13.0423C4.41936 12.2687 3.98477 11.2195 3.98477 10.1254C3.98477 9.03142 4.41936 7.98221 5.19295 7.20862C5.96654 6.43503 7.01575 6.00044 8.10977 6.00044C8.4865 6.00294 8.86138 6.05335 9.22539 6.15044C9.32019 6.17763 9.41942 6.18585 9.5174 6.17465C9.61538 6.16344 9.71019 6.13302 9.7964 6.08512C9.88261 6.03723 9.95852 5.9728 10.0198 5.89553C10.0811 5.81826 10.1265 5.72967 10.1535 5.63481C10.2059 5.44341 10.1812 5.23912 10.0849 5.06566C9.9885 4.8922 9.82806 4.76335 9.63789 4.70669C9.13951 4.5725 8.62589 4.50318 8.10977 4.50044C6.90047 4.49609 5.72207 4.88223 4.74986 5.60142C3.77765 6.32061 3.06358 7.33443 2.71387 8.49207C2.36415 9.64971 2.39748 10.8893 2.80889 12.0265C3.2203 13.1637 3.98782 14.1376 4.99727 14.8036C3.27957 15.4374 1.79518 16.5785 0.741014 18.0754C0.628492 18.2385 0.585056 18.4394 0.620186 18.6344C0.655315 18.8294 0.766159 19.0025 0.928514 19.1161Z"
                          fill="#fff"
                        />
                      </svg>
                    }
                    link={Routes.Users.path}
                  />

                  <NavItem
                    title="Favourites"
                    SVG={
                      <svg
                        width="15"
                        height="20"
                        viewBox="0 0 15 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.30042 5.125C7.31869 5.08752 7.34713 5.05592 7.38249 5.03382C7.41786 5.01172 7.45872 5 7.50042 5C7.54212 5 7.58298 5.01172 7.61835 5.03382C7.65371 5.05592 7.68215 5.08752 7.70042 5.125L8.49294 6.73128C8.5088 6.76377 8.53234 6.79191 8.56153 6.81325C8.59072 6.8346 8.62467 6.84851 8.66044 6.85378L10.4355 7.11128C10.6167 7.13753 10.6905 7.36129 10.558 7.49004L9.27545 8.74131C9.24957 8.76657 9.23024 8.79776 9.21914 8.83217C9.20803 8.86659 9.20547 8.90319 9.2117 8.93881L9.5142 10.7063C9.521 10.7472 9.51628 10.7891 9.50057 10.8273C9.48487 10.8656 9.4588 10.8988 9.4253 10.923C9.3918 10.9473 9.35219 10.9618 9.31092 10.9648C9.26966 10.9678 9.22837 10.9593 9.1917 10.9401L7.60417 10.1051C7.57235 10.0884 7.53696 10.0797 7.50104 10.0797C7.46513 10.0797 7.42974 10.0884 7.39792 10.1051L5.81039 10.9401C5.77376 10.9589 5.73262 10.9672 5.69156 10.964C5.6505 10.9608 5.61113 10.9463 5.57783 10.9221C5.54452 10.8979 5.5186 10.8649 5.50294 10.8268C5.48728 10.7887 5.4825 10.747 5.48914 10.7063L5.79164 8.93881C5.79802 8.90329 5.79567 8.86675 5.78478 8.83235C5.77389 8.79794 5.7548 8.76669 5.72914 8.74131L4.44162 7.49004C4.41213 7.46108 4.39128 7.42449 4.38142 7.38435C4.37156 7.34421 4.37308 7.30212 4.3858 7.2628C4.39852 7.22347 4.42194 7.18847 4.45343 7.16171C4.48493 7.13494 4.52326 7.11749 4.56412 7.11128L6.33915 6.85378C6.37492 6.84851 6.40887 6.8346 6.43806 6.81325C6.46724 6.79191 6.49079 6.76377 6.50665 6.73128L7.30042 5.125Z"
                          fill="#fff"
                        />
                        <path
                          d="M0 2.50004C0 1.83699 0.263396 1.20109 0.732245 0.732245C1.20109 0.263396 1.83699 0 2.50004 0L12.5002 0C13.1633 0 13.7991 0.263396 14.268 0.732245C14.7368 1.20109 15.0002 1.83699 15.0002 2.50004V19.3753C15.0002 19.4884 14.9695 19.5993 14.9113 19.6963C14.8532 19.7932 14.7699 19.8726 14.6702 19.926C14.5706 19.9794 14.4583 20.0047 14.3454 19.9993C14.2324 19.9939 14.1231 19.958 14.029 19.8953L7.50012 16.3765L0.971266 19.8953C0.877146 19.958 0.7678 19.9939 0.654875 19.9993C0.541949 20.0047 0.429673 19.9794 0.330005 19.926C0.230336 19.8726 0.147008 19.7932 0.088894 19.6963C0.0307805 19.5993 5.84015e-05 19.4884 0 19.3753V2.50004ZM2.50004 1.25002C2.16851 1.25002 1.85057 1.38172 1.61614 1.61614C1.38172 1.85057 1.25002 2.16851 1.25002 2.50004V18.2078L7.15387 15.1052C7.25644 15.037 7.37691 15.0006 7.50012 15.0006C7.62334 15.0006 7.7438 15.037 7.84638 15.1052L13.7502 18.2078V2.50004C13.7502 2.16851 13.6185 1.85057 13.3841 1.61614C13.1497 1.38172 12.8317 1.25002 12.5002 1.25002H2.50004Z"
                          fill="#fff"
                        />
                      </svg>
                    }
                    link={Routes.Favourites.path}
                  />
                </>
              )}

              <NavItem
                title="User Management"
                icon={faThList}
                link={Routes.UserManagement.path}
              />

              <NavItem
                title="Categories"
                SVG={
                  <svg
                    width="19"
                    height="17"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.74 2.50002L4.09357 3.16752L4.52571 4.00002H7.85714V7.75001H1.57143V2.50002H3.74ZM4.22714 1.00002H0.785714C0.57733 1.00002 0.37748 1.07904 0.23013 1.21969C0.0827803 1.36034 0 1.55111 0 1.75002V8.50001C0 8.69892 0.0827803 8.88969 0.23013 9.03034C0.37748 9.17099 0.57733 9.25001 0.785714 9.25001H8.64286C8.85124 9.25001 9.05109 9.17099 9.19844 9.03034C9.34579 8.88969 9.42857 8.69892 9.42857 8.50001V3.25002C9.42857 3.0511 9.34579 2.86034 9.19844 2.71969C9.05109 2.57903 8.85124 2.50002 8.64286 2.50002H5.5L4.93429 1.41252C4.86839 1.28769 4.76727 1.18293 4.64232 1.11004C4.51737 1.03715 4.37357 0.999045 4.22714 1.00002ZM16.3114 2.50002L16.665 3.16752L17.0971 4.00002H20.4286V7.75001H14.1429V2.50002H16.3114ZM16.7986 1.00002H13.3571C13.1488 1.00002 12.9489 1.07904 12.8016 1.21969C12.6542 1.36034 12.5714 1.55111 12.5714 1.75002V8.50001C12.5714 8.69892 12.6542 8.88969 12.8016 9.03034C12.9489 9.17099 13.1488 9.25001 13.3571 9.25001H21.2143C21.4227 9.25001 21.6225 9.17099 21.7699 9.03034C21.9172 8.88969 22 8.69892 22 8.50001V3.25002C22 3.0511 21.9172 2.86034 21.7699 2.71969C21.6225 2.57903 21.4227 2.50002 21.2143 2.50002H18.0714L17.5057 1.41252C17.4398 1.28769 17.3387 1.18293 17.2137 1.11004C17.0888 1.03715 16.945 0.999045 16.7986 1.00002ZM3.74 12.25L4.09357 12.9175L4.52571 13.75H7.85714V17.5H1.57143V12.25H3.74ZM4.22714 10.75H0.785714C0.57733 10.75 0.37748 10.829 0.23013 10.9697C0.0827803 11.1103 0 11.3011 0 11.5V18.25C0 18.4489 0.0827803 18.6397 0.23013 18.7803C0.37748 18.921 0.57733 19 0.785714 19H8.64286C8.85124 19 9.05109 18.921 9.19844 18.7803C9.34579 18.6397 9.42857 18.4489 9.42857 18.25V13C9.42857 12.8011 9.34579 12.6103 9.19844 12.4697C9.05109 12.329 8.85124 12.25 8.64286 12.25H5.5L4.93429 11.1625C4.86839 11.0377 4.76727 10.9329 4.64232 10.86C4.51737 10.7871 4.37357 10.749 4.22714 10.75ZM16.3114 12.25L16.665 12.9175L17.0971 13.75H20.4286V17.5H14.1429V12.25H16.3114ZM16.7986 10.75H13.3571C13.1488 10.75 12.9489 10.829 12.8016 10.9697C12.6542 11.1103 12.5714 11.3011 12.5714 11.5V18.25C12.5714 18.4489 12.6542 18.6397 12.8016 18.7803C12.9489 18.921 13.1488 19 13.3571 19H21.2143C21.4227 19 21.6225 18.921 21.7699 18.7803C21.9172 18.6397 22 18.4489 22 18.25V13C22 12.8011 21.9172 12.6103 21.7699 12.4697C21.6225 12.329 21.4227 12.25 21.2143 12.25H18.0714L17.5057 11.1625C17.4398 11.0377 17.3387 10.9329 17.2137 10.86C17.0888 10.7871 16.945 10.749 16.7986 10.75Z"
                      fill="#fff"
                    />
                  </svg>
                }
                link={Routes.Categories.path}
              />

              <NavItem
                title="Categories Management"
                SVG={
                  <svg
                    width="19"
                    height="17"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.74 2.50002L4.09357 3.16752L4.52571 4.00002H7.85714V7.75001H1.57143V2.50002H3.74ZM4.22714 1.00002H0.785714C0.57733 1.00002 0.37748 1.07904 0.23013 1.21969C0.0827803 1.36034 0 1.55111 0 1.75002V8.50001C0 8.69892 0.0827803 8.88969 0.23013 9.03034C0.37748 9.17099 0.57733 9.25001 0.785714 9.25001H8.64286C8.85124 9.25001 9.05109 9.17099 9.19844 9.03034C9.34579 8.88969 9.42857 8.69892 9.42857 8.50001V3.25002C9.42857 3.0511 9.34579 2.86034 9.19844 2.71969C9.05109 2.57903 8.85124 2.50002 8.64286 2.50002H5.5L4.93429 1.41252C4.86839 1.28769 4.76727 1.18293 4.64232 1.11004C4.51737 1.03715 4.37357 0.999045 4.22714 1.00002ZM16.3114 2.50002L16.665 3.16752L17.0971 4.00002H20.4286V7.75001H14.1429V2.50002H16.3114ZM16.7986 1.00002H13.3571C13.1488 1.00002 12.9489 1.07904 12.8016 1.21969C12.6542 1.36034 12.5714 1.55111 12.5714 1.75002V8.50001C12.5714 8.69892 12.6542 8.88969 12.8016 9.03034C12.9489 9.17099 13.1488 9.25001 13.3571 9.25001H21.2143C21.4227 9.25001 21.6225 9.17099 21.7699 9.03034C21.9172 8.88969 22 8.69892 22 8.50001V3.25002C22 3.0511 21.9172 2.86034 21.7699 2.71969C21.6225 2.57903 21.4227 2.50002 21.2143 2.50002H18.0714L17.5057 1.41252C17.4398 1.28769 17.3387 1.18293 17.2137 1.11004C17.0888 1.03715 16.945 0.999045 16.7986 1.00002ZM3.74 12.25L4.09357 12.9175L4.52571 13.75H7.85714V17.5H1.57143V12.25H3.74ZM4.22714 10.75H0.785714C0.57733 10.75 0.37748 10.829 0.23013 10.9697C0.0827803 11.1103 0 11.3011 0 11.5V18.25C0 18.4489 0.0827803 18.6397 0.23013 18.7803C0.37748 18.921 0.57733 19 0.785714 19H8.64286C8.85124 19 9.05109 18.921 9.19844 18.7803C9.34579 18.6397 9.42857 18.4489 9.42857 18.25V13C9.42857 12.8011 9.34579 12.6103 9.19844 12.4697C9.05109 12.329 8.85124 12.25 8.64286 12.25H5.5L4.93429 11.1625C4.86839 11.0377 4.76727 10.9329 4.64232 10.86C4.51737 10.7871 4.37357 10.749 4.22714 10.75ZM16.3114 12.25L16.665 12.9175L17.0971 13.75H20.4286V17.5H14.1429V12.25H16.3114ZM16.7986 10.75H13.3571C13.1488 10.75 12.9489 10.829 12.8016 10.9697C12.6542 11.1103 12.5714 11.3011 12.5714 11.5V18.25C12.5714 18.4489 12.6542 18.6397 12.8016 18.7803C12.9489 18.921 13.1488 19 13.3571 19H21.2143C21.4227 19 21.6225 18.921 21.7699 18.7803C21.9172 18.6397 22 18.4489 22 18.25V13C22 12.8011 21.9172 12.6103 21.7699 12.4697C21.6225 12.329 21.4227 12.25 21.2143 12.25H18.0714L17.5057 11.1625C17.4398 11.0377 17.3387 10.9329 17.2137 10.86C17.0888 10.7871 16.945 10.749 16.7986 10.75Z"
                      fill="#fff"
                    />
                  </svg>
                }
                link={Routes.Categories_Management.path}
              />
              <button
                style={{
                  background: "none",
                  border: "none",
                  textAlign: "left",
                }}
                onClick={() => {
                  dispatch(logoutRequest({}));
                  // setShowDefaultCategory(true);
                }}
              >
                <NavItem
                  title="Logout"
                  SVG={
                    <svg
                      width="17"
                      height="19"
                      viewBox="0 0 20 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.625 24H11.375C11.8058 23.9995 12.2189 23.8188 12.5236 23.4974C12.8282 23.176 12.9996 22.7402 13 22.2857V19.7143H11.375V22.2857H1.625V1.71429H11.375V4.28571H13V1.71429C12.9996 1.25977 12.8282 0.823996 12.5236 0.502604C12.2189 0.181211 11.8058 0.000453837 11.375 0H1.625C1.19416 0.000453837 0.78108 0.181211 0.476427 0.502604C0.171773 0.823996 0.0004302 1.25977 0 1.71429V22.2857C0.0004302 22.7402 0.171773 23.176 0.476427 23.4974C0.78108 23.8188 1.19416 23.9995 1.625 24Z"
                        fill="white"
                      />
                      <path
                        d="M13.8217 15.8217L16.81 12.8333H5V11.1667H16.81L13.8217 8.17833L15 7L20 12L15 17L13.8217 15.8217Z"
                        fill="white"
                      />
                    </svg>
                  }
                ></NavItem>
              </button>
            </Nav>
          </div>
        </SimpleBar>
      </CSSTransition>

      <Modal
        as={Modal.Dialog}
        centered
        show={showDefaultCategory}
        onHide={handleClosesCategory}
      >
        <Modal.Body className="pt-3">
          <Modal.Title className="text-center">
            <h2>Confirmation</h2>
          </Modal.Title>
          <Modal.Title className="h5 text-center">
            Are you sure you want to logout?
          </Modal.Title>

          <div class="d-flex justify-content-between mt-5">
            <Button
              variant="primary"
              color="dark"
              type="button"
              onClick={() => {
                dispatch(logoutRequest({}));
              }}
              size="sm"
            >
              Logout
            </Button>

            <Button
              variant="white"
              color="dark"
              onClick={() => {
                handleClosesCategory();
              }}
              type="button"
              size="sm"
            >
              Cancel
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};