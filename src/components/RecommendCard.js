import React from "react";
import { Card, Image } from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Routes } from "../routes";
import {markAsFavouriteJob} from "../Redux/addJob/actions"
import { useDispatch, useSelector } from "react-redux";

const RecommendCard = (props) => {
  const dispatch = useDispatch();
  
  const handleFavourite =(id)=>{
    dispatch(
      markAsFavouriteJob(id)
    )
  }
  return (
    <>
      <Card border="light" className="shadow-sm introCard">
        <Image src={props.img} className="navbar-brand-light" />
        <div className="detailSection">
          <span className="left">
            <Link className="fw-bold" to={Routes.DetailJob.path}>
              <h3>{props.name}</h3>
              <h4>{props.type}</h4>
              <p>
                Rate: <span>${props.rate}hr</span>{" "}
              </p>
              <p>
                Job Completed: <span>{props.completed} </span>
              </p>
            </Link>
          </span>
          <span className="right">
            <span className="starSpan" >
              {" "}
              <FontAwesomeIcon icon={faStar} /> {props.star}
            </span>
            <span>
              <FontAwesomeIcon icon={faHeart} onClick={()=>{handleFavourite(props.id)}}/>
            </span>
          </span>
        </div>
      </Card>
    </>
  );
};
export default RecommendCard;
