import React from "react";
import { Row, Col } from "../Grid";
import Card from "react-bootstrap/Card";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import "./style.css";

function SearchBar(props) {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Row>
          <Col size="sm-12">
              <InputGroup>
                <FormControl
                  onChange={props.handleInputChange}
                  value={props.value}
                  name="search"
                  type="text"
                  className="form-control"
                  placeholder="Enter a Book"
                  id="search"
                />
                <InputGroup.Append>
                  <Button onClick={props.handleFormSubmit} className="btn btn-primary">Search</Button>
                </InputGroup.Append>
              </InputGroup>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default SearchBar;
