import {
    Button, Form, Modal, Row
} from "@themesberg/react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Routes } from "../routes";

const AddCard = ({addCard, setAddCard, onHide}) => {
    const label = {
        inputProps: {
            "aria-label": "Switch demo"

        }
    };
    const dispatch = useDispatch();
    const history = useHistory();


    const handlefalse = () => {
        setAddCard(false)
    };

    return (
        <>
            <Modal as={Modal.Dialog} centered show={addCard} >
                <Modal.Header>
                    <Modal.Title className="h5">
                        Add Card
                    </Modal.Title>
                 
                </Modal.Header>
                <Modal.Body>
                    <Form >
                        <Form.Group>
                            Kindly enter your card Details!
                        </Form.Group>
                        <Form.Group>
                            <div class="d-grid gap-2 col-4 text-center mt-3 mx-auto">
                                <Button
                                    variant="primary"
                                    onHide={handlefalse}
                                    color="dark"
                                    size="sm"
                                    // type="submit"
                                    onClick={() => {
                                        handlefalse();
                                        history.push(Routes.PayementMethod.path)
                                    }}
                                >
                                    ok
                                </Button>
                            </div>
                        </Form.Group>
                    </Form>

                </Modal.Body>
            </Modal>
        </>
    );
};
export default AddCard;
