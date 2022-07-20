import React, { useEffect } from "react";
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

const CommonCard = (props) => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state?.auth.Auther);
  const history = useHistory();
  // const { id } = useParams();
  const params = useLocation();
  // let jobId = params.pathname.split("/")[2];
  const handleFavourite = (id) => {
    dispatch(
      markAsFavouriteJob({
        id: id,
        page: props.page,
        limit: props.limit,
        type: props.type,
        category: props.categoryType,
        userId: login.id,
        history:history
      })
    );
  };
  return (
    <>
      <Card border="light" className="shadow-sm selfCard">
        <div className="imgaSection">
          <Image src={props.img} className="navbar-brand-light" />
          <span className="starSpan" style={{ cursor: "pointer" }}>
            <FontAwesomeIcon icon={faStar} /> {props.star}
          </span>
        </div>
        <div className="detailSection">
          <span className="left">
            {/* <div onClick={() => history.push(`/detailJob/${props.id}`)}> */}
            <Link className="fw-bold" to={props?.job === "job" ? `/detailJob/${props.id}`: `/detailProvider/${props.id}`}>
              <h3>{props.name}</h3>
              <h4>{props.type}</h4>
              <p>
                Rate: <span>${props.rate}hr</span>{" "}
              </p>
              <p>
                Job Completed: <span>{props.completed} </span>
              </p>
            </Link>
            {/* </div> */}
          </span>
          {props?.job === "job" && (
            <span className="right">
              <span>
                {props.favourite ? (
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => {
                      handleFavourite(props.id);
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
                      handleFavourite(props.id);
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
            </span>
          )}
        </div>
      </Card>
    </>
  );
};
export default CommonCard;
