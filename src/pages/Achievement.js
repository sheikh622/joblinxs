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

const Achievement = () => {
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
            <Navbar module={"Achievement/Certification"} />
            <Container>
                <h2>
                    Achievement/Certification
                </h2>
                <Card border="light" className="shadow-sm selfCard">
                    {getById?.achievements?.length > 0 ? (
                        <>
                            {getById?.achievements?.map((t, index) => (
                                <div className=" pb-2 mb-4">
                                    <DetailHeading
                                        heading={"Job Title"}
                                        value={t?.jobTitle ? t.jobTitle : " --"}
                                    />
                                    <DetailHeading
                                        heading={"details"}
                                        value={t?.details ? t?.details : " --"}
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
export default Achievement;
