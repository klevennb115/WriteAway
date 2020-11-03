import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Container, Col, Row, Button,
} from 'react-bootstrap';

const Dashboard = (props) => {
  useEffect(() => {
    const action = {
      type: 'GET_PROMPTS',
    };
    props.dispatch(action);
  }, []);
  const getAffirmation = () => {
    const advicePrompts = [];
    props.prompt.forEach((entry) => {
      if (entry.type_of_prompt === 4) {
        advicePrompts.push(entry);
      }
    });
    return advicePrompts[Math.floor(Math.random() * Math.floor(advicePrompts.length))].text;
  };

  return (
    <Container fluid="md">
      <Row>
        <Col>
          <div className="d-flex justify-content-center mt-3 mb-1">
            <h5 className="border-dark text-light font-weight-bold font-italic">
              {props.prompt.length !== 0 && getAffirmation()}
            </h5>
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <div className="d-flex flex-row-reverse">
            <Button variant="light">
              <Link to="/profile">Profile</Link>
            </Button>
          </div>
        </Col>
        <Col>
          <div className="d-flex flex-row">
            <Button variant="light">
              <Link to="/write">Write Away!</Link>
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (reduxStore) => ({
  prompt: reduxStore.prompt,
});
export default connect(mapStateToProps)(Dashboard);
