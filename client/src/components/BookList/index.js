import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";


export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

export function BookListItem(props) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-6 sm-6">
            <h6>{props.title}</h6>
          </Col>
          <Col size="xs-6 sm-6">
             <button className="btn btn-success float-right">
                <a rel="noreferrer noopener" target="_blank" href={props.href}>View</a>
              </button>
              <button onClick={props.handleSaveBook} className="btn btn-success float-right">Save</button>
          </Col>
        </Row>
        <Row>
          <Col size="xs-6 sm-6">Written By: {props.author}</Col>
          <Col size="xs-6 sm-6"></Col>
        </Row>
        <Row>
          <Col size="xs-2 sm-4">
            <Thumbnail src={props.thumbnail} />
          </Col>
          <Col size="xs-10 sm-8">
            <p>{props.plot}</p>
          </Col>
        </Row>
      </Container>
    </li>
  );
}

export function SavedBookListItem (props) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-6 sm-6">
            <h6>{props.title}</h6>
          </Col>
          <Col size="xs-6 sm-6">
             <button className="btn btn-success float-right">
                <a rel="noreferrer noopener" target="_blank" href={props.href}>View</a>
              </button>
              <button onClick={props.handleDeleteBook} className="btn btn-success float-right">Delete</button>
          </Col>
        </Row>
        <Row>
          <Col size="xs-6 sm-6">Written By: {props.author}</Col>
          <Col size="xs-6 sm-6"></Col>
        </Row>
        <Row>
          <Col size="xs-2 sm-4">
            <Thumbnail src={props.thumbnail} />
          </Col>
          <Col size="xs-10 sm-8">
            <p>{props.plot}</p>
          </Col>
        </Row>
      </Container>
    </li>
  );
}