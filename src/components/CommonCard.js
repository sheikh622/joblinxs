import React,{useEffect} from "react";
import { Card, Image } from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Routes } from "../routes";
import { markAsFavouriteJob, jobById } from "../Redux/addJob/actions"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router';
import { useHistory, useLocation } from "react-router-dom";

const CommonCard = (props, item) => {
  const dispatch = useDispatch();
  const history = useHistory();
  // const { id } = useParams();
  const params = useLocation();
  // let jobId = params.pathname.split("/")[2];
  const handleFavourite = (id) => {
    dispatch(
      markAsFavouriteJob({
        id: id,
      })
    )
  }
  return (
    <>
      <Card border="light" className="shadow-sm selfCard">
        <div className="imgaSection">
          <Image src={props.img} className="navbar-brand-light" />
          <span className="starSpan" style={{ cursor: "pointer" }} >
            <FontAwesomeIcon icon={faStar} /> {props.star}
          </span>
        </div>
        <div className="detailSection">
          <span className="left">
            {/* <div onClick={() => history.push(`/detailJob/${props.id}`)}> */}
            <Link className="fw-bold" to={`/detailJob/${props.id}`}>

              <h3
              >{props.name}</h3>
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
          <span className="right">
            <span>
              <FontAwesomeIcon icon={faHeart} onClick={() => { handleFavourite(props.id) }} />
            </span>
          </span>
        </div>
      </Card>
    </>
  );
};
export default CommonCard;
