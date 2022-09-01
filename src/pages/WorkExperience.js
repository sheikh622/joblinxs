import { Button, Col, Container, Navbar, Card } from "@themesberg/react-bootstrap";
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { Routes } from "../routes";
import { Link } from "react-router-dom";
import { getProfile } from "../Redux/profile/actions";
import DetailHeading from "../components/DetailHeading";
import moment from "moment";
import NoRecordFound from "../components/NoRecordFound";

const WorkExperience = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const login = useSelector((state) => state.auth.Auther);
    const getById = useSelector((state) => state?.ProfileReducer?.profile);
    const params = useLocation();
    let profileId = params.state;
    useEffect(() => {
        dispatch(
            getProfile({
                id: profileId,
            })
        );
    }, []);
    return (
        <>
            <Navbar module={"WorkExperience"} />
            <Container>
                <h2>
                    WorkExperience
                </h2>
                <Card border="light" className="shadow-sm selfCard">

                    {getById?.workExperience?.length > 0 ? (
                        <>
                            {getById?.workExperience?.map((t, index) => (
                                <div className=" p-4 ">
                                    <tr>
                                        <td>
                                            {t?.startDate
                                                ? moment(t?.startDate).format("DD-MM-YYYY")
                                                : " --"}{" : "}{t?.endDate
                                                    ? moment(t?.endDate).format("DD-MM-YYYY")
                                                    : " --"}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>
                                                <Card.Title>
                                                    {t?.jobTitle ? t.jobTitle : " --"}
                                                </Card.Title>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            {t?.details ? t.details : " --"}
                                        </td>
                                    </tr>
                                </div>
                            ))}
                        </>
                    ) : (
                        <NoRecordFound />
                    )}
                </Card>
            </Container>
        </>
    );
};
export default WorkExperience;
