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
    console.log("getById", getById)
    const params = useLocation();
    let profileId = params.state;
    console.log("pro========", profileId)
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
                {/* <Col xs={12} xl={12} className={'d-flex justify-content-end mb-2'}>
                    <Button onClick={() => history.goBack()}>Back</Button>
                </Col> */}
                <Card border="light" className="shadow-sm selfCard">
                    {getById?.workExperience?.length > 0 ? (
                        <>
                            {getById?.workExperience?.map((t, index) => (
                                <div className=" pt-4 pb-2 mb-2 ">
                                    <DetailHeading
                                        heading={"Job Title"}
                                        value={t?.jobTitle ? t.jobTitle : " --"}
                                    />
                                    <DetailHeading
                                        heading={"details"}
                                        value={t?.details ? t?.details : " --"}
                                    />
                                    <DetailHeading
                                        heading={"startDate"}
                                        value={t?.startDate
                                            ? moment(t?.startDate).format("DD-MM-YYYY")
                                            : " --"}
                                    />
                                    <DetailHeading
                                        heading={"endDate"}
                                        value={t?.endDate
                                            ? moment(t?.endDate).format("DD-MM-YYYY")
                                            : " --"}
                                    />
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
