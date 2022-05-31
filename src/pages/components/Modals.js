
import React, { useState } from 'react';
import { Row, Col, Card, Modal, Button, Container } from '@themesberg/react-bootstrap';

import Documentation from "../../components/Documentation";


export default () => {
  const [showDefault, setShowDefault] = useState(false);
  const handleClose = () => setShowDefault(false);

  return (
    <article>
      <Container className="px-0">
        <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
          <Col className="d-block mb-4 mb-md-0">
            <h1 className="h2">Modals</h1>
            <p className="mb-0">
              Use modals to develop faster and more interactive user interfaces.
          </p>
          </Col>
        </Row>

        <Row>
          <Col xs={12} className="mb-4">
            <Documentation
              title="Example"
              description={
                <>
                  <p>The <code>&#x3C;Modal&#x3E;</code> component can be used as a way to show extra content on top of the existing UI based on an event. For example, you can use the <code>onClick</code> event from a button component to show a modal by using the <code>setShowDefault(true)</code> function.</p>
                  <p>Additionally, you can use the <code>handleClose</code> event to handle the situation when the modal is being closed.</p>
                </>
              }
              scope={{ Col, Card, Button, Modal, showDefault, setShowDefault, handleClose, useState }}
             
            />

          </Col>
        </Row>
      </Container>
    </article>
  );
};
