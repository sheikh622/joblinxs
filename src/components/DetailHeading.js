import React from "react";
import {
  Col,
  Row,
  Card,
} from "@themesberg/react-bootstrap";
export default function DetailHeading(props) {
  return (
    <Row>
      <Col xs={4}>
        <Card.Text className="text-gray mb-2">{props.heading}:</Card.Text>
      </Col>
      <Col xs={6}>
        <Card.Text className="text-black mb-2">{props.value}</Card.Text>
      </Col>
    </Row>
  );
}
