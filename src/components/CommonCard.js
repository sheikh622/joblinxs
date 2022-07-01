import React from "react";
import { Card, Image } from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Routes } from "../routes";
import {markAsFavouriteJob} from "../Redux/addJob/actions"
import { useDispatch, useSelector } from "react-redux";

const CommonCard = (props) => {
  const dispatch = useDispatch();
  
  const handleFavourite =(id)=>{
    dispatch(
      markAsFavouriteJob({
        id:id
      })
    )
  }
  return (
    <>
      <Card border="light" className="shadow-sm selfCard">
        <div className="imgaSection">
          <Image src={props.img} className="navbar-brand-light" />
          <span className="starSpan" style={{cursor:"pointer"}} >
            <FontAwesomeIcon icon={faStar} /> {props.star}
          </span>
        </div>
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
            <span>
              <FontAwesomeIcon icon={faHeart}  onClick={()=>{handleFavourite("5cb47280-dfec-4416-a9e5-11a3525dc94f")}}/>
            </span>
          </span>
        </div>
      </Card>
    </>
  );
};
export default CommonCard;
