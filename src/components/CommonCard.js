import React, { useEffect, useState } from "react";
import { Card, Image } from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Routes } from "../routes";
import { markAsFavouriteJob, jobById } from "../Redux/addJob/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useHistory, useLocation } from "react-router-dom";
// import FillHeart from "../icons/fillHeart.svg"
// import HeartFill from "../assets/img/fillHeart.svg"
import { icon } from "../assets/icon.svg";
const CommonCard = (props) => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state?.auth.Auther);
  const history = useHistory();
  const handleFavourite = (id, value, isFavourite, title) => {
    props.handleClick(id, value, isFavourite, title);
  };
  return (
    <>
      <Card border="light" className="shadow-sm selfCard">
        <div className="imgaSection">
          <Image src={props.img} className="navbar-brand-light" />
          <span className="starSpan" style={{ cursor: "pointer" }}>
            <FontAwesomeIcon icon={faStar} /> {props.star === 0 ? props.star : props.star.toFixed(1)}
          </span>
        </div>
        <div className="detailSection">
          <span className="left">
            {/* <div onClick={() => history.push(`/detailJob/${props.id}`)}> */}
            <Link
              className="fw-bold"
              to={`/detailJob/${props.id}`}
            >
              {props?.item?.isEmergency ? <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.4 8.8C6.62667 8.8 6.8168 8.7232 6.9704 8.5696C7.12347 8.41653 7.2 8.22667 7.2 8V5.6C7.2 5.37333 7.12347 5.1832 6.9704 5.0296C6.8168 4.87653 6.62667 4.8 6.4 4.8C6.17333 4.8 5.98347 4.87653 5.8304 5.0296C5.6768 5.1832 5.6 5.37333 5.6 5.6V8C5.6 8.22667 5.6768 8.41653 5.8304 8.5696C5.98347 8.7232 6.17333 8.8 6.4 8.8ZM6.4 11.2C6.62667 11.2 6.8168 11.1232 6.9704 10.9696C7.12347 10.8165 7.2 10.6267 7.2 10.4C7.2 10.1733 7.12347 9.9832 6.9704 9.8296C6.8168 9.67653 6.62667 9.6 6.4 9.6C6.17333 9.6 5.98347 9.67653 5.8304 9.8296C5.6768 9.9832 5.6 10.1733 5.6 10.4C5.6 10.6267 5.6768 10.8165 5.8304 10.9696C5.98347 11.1232 6.17333 11.2 6.4 11.2ZM0.8 13.6C0.573333 13.6 0.3832 13.5232 0.2296 13.3696C0.0765335 13.2165 0 13.0267 0 12.8C0 12.5733 0.0765335 12.3835 0.2296 12.2304C0.3832 12.0768 0.573333 12 0.8 12H1.6V6.4C1.6 5.29333 1.93333 4.30987 2.6 3.4496C3.26667 2.58987 4.13333 2.02667 5.2 1.76V1.2C5.2 0.866667 5.3168 0.583467 5.5504 0.3504C5.78347 0.1168 6.06667 0 6.4 0C6.73333 0 7.01653 0.1168 7.2496 0.3504C7.4832 0.583467 7.6 0.866667 7.6 1.2V1.76C8.66667 2.02667 9.53333 2.58987 10.2 3.4496C10.8667 4.30987 11.2 5.29333 11.2 6.4V12H12C12.2267 12 12.4165 12.0768 12.5696 12.2304C12.7232 12.3835 12.8 12.5733 12.8 12.8C12.8 13.0267 12.7232 13.2165 12.5696 13.3696C12.4165 13.5232 12.2267 13.6 12 13.6H0.8ZM6.4 16C5.96 16 5.58347 15.8435 5.2704 15.5304C4.9568 15.2168 4.8 14.84 4.8 14.4H8C8 14.84 7.84347 15.2168 7.5304 15.5304C7.2168 15.8435 6.84 16 6.4 16Z" fill="#12499C" />
              </svg> : ""}
              <h3>{props.name}</h3>
              <h4>{props.type}</h4>

              <p>
                Rate: <span>${props.rate}hr</span>{" "}
              </p>
              <p>
                Jobs Completed: <span>{props.completed} </span>
              </p>
            </Link>
            {/* </div> */}
          </span>
          {!props.myJobs && (
            <span>
              {props?.isFavourite ? (
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => {
                    handleFavourite(props.id, props.index, props?.isFavourite, props.title);
                  }}
                >
                  <path
                    d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z"
                    fill="#12499C"
                    stroke="#12499C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => {
                    handleFavourite(props.id, props.index, props?.isFavourite, props.title);
                  }}
                >
                  <path
                    d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z"
                    stroke="#12499C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </span>
          )}
        </div>
      </Card>
    </>
  );
};
export default CommonCard;
