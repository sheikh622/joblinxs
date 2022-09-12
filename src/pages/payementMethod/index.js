import React, { useEffect, useCallback, useState } from "react";
import {
  Col,
  Table,
  Row,
  Form,
  Modal,
  Button,
  Card,
  Pagination,
  Nav,
  Expire,

} from "@themesberg/react-bootstrap";
import Navbar from "../../components/Navbar";
import cardSvg from "./card.svg";
import { toast } from "react-toastify";
import {
  CardExpiryElement,
  CardCvcElement,
  CardNumberElement,
  CardElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { addCardDetails, getCardDetails } from "../../Redux/settings/actions";
import Visa from "../../assets/img/visa.png";
import MasterCard from "../../assets/img/mastercard.jpeg";
import American from "../../assets/img/american-express.png";
import Club from "../../assets/img/diners-club.png";

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const login = useSelector((state) => state.auth.Auther);
  const cardDetail = useSelector(
    (state) => state?.PushNotification?.cardDetails
  );
  const handleCloses = () => setShowModal(false);
  useEffect(() => {
    dispatch(getCardDetails(login?.id));
  }, []);
  const handleAddCard = useCallback(async (stripe, elements) => {
    const cardElement = elements.getElement(
      CardNumberElement,
      CardExpiryElement,
      CardCvcElement
    );
    await stripe.createToken(cardElement).then(async (res) => {
      if (res.error) {
        toast.error(res.error.message);
      } else {
        let data = { token: res.token.id, userId: login?.id, setShowModal: setShowModal };
        dispatch(addCardDetails(data));
      }
    });
  }, []);
  return (
    <>
      <Navbar module={"Payement Method"} />
      <Row>
        <Col xs={12}>
          <Card border="light" className="p-0 mb-4 chat-div profileView">
            <Card.Header>
              <span>Credit/Debit Card Details</span>
            </Card.Header>
            <Card.Body>

              <div className="text-center">
                <img src={cardSvg} alt="" />
              </div>

              <Table
                hover
                className="user-table align-items-center management_table mt-5"
              >
                <thead>
                  <tr>
                    <th className="border-bottom">Card Name</th>
                    <th className="border-bottom">Card Number</th>
                    <th className="border-bottom">Card Expiry</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="fw-normal ">
                        {cardDetail?.brand == "Visa" && (
                          <>
                            <img src={Visa} alt="" width="25px" className="mx-2" />
                          </>
                        )}
                        {cardDetail?.brand == "American Express" && (
                          <>
                            <img src={American} alt="" width="25px" className="mx-2" />
                          </>
                        )}
                        {cardDetail?.brand == "Diners Club" && (
                          <>
                            <img src={Club} alt="" width="25px" className="mx-2" />
                          </>
                        )}
                        {cardDetail?.brand == "MasterCard" && (
                          <>
                            <img src={MasterCard} alt=""width="25px" className="mx-2" />
                          </>
                        )}
                        {cardDetail?.brand}</span>
                    </td>
                    <td>
                      <span className="fw-normal">
                        {`****-****-${cardDetail?.last4 !==undefined ? cardDetail?.last4 :"********"}`}
                      </span>
                    </td>
                    <td>
                      <span className="fw-normal">
                        {`${cardDetail?.exp_month !==undefined ? cardDetail?.exp_year : "****"}${cardDetail?.exp_year !==undefined ? cardDetail?.exp_year : "****"}`}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
            <Card.Footer className="text-center">
              <Button
                variant="primary"
                className="mx-2"
                onClick={() => setShowModal(true)}
              >
                {cardDetail?.id ? "Add Another Card" : "Add Card"}
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
      {/* Modal */}
      <Modal as={Modal.Dialog} centered show={showModal} onHide={handleCloses}>
        <Modal.Header>
          <span>Add Card Details</span>
          <Button
            variant="close"
            aria-label="Close"
            onClick={() => {
              setShowModal(false);
            }}
          />
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <img src={cardSvg} alt="" />
            <div className="carfForm text-start">
              <Form.Label>Card Number</Form.Label>
              <CardNumberElement className="cardNumber my-1" />
              <Form.Label>Expiry Date</Form.Label>
              <div className="d-flex justify-content-between">
                <CardExpiryElement className="cardexpiray" />
                <CardCvcElement className="cardexpiray" />
              </div>
            </div>
            <Button
              variant="primary"
              className="mx-2"
              onClick={() => handleAddCard(stripe, elements)}
            >
              Add Card
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Payment;
