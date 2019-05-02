import React from "react";
import { Row, Col } from "../Grid";
import "./style.css";

export function BookList({ children }) {
  return (
      <ul className="list-group">{children}</ul>
  );
}

export function BookListItem(props) {
  return (
    <li className="list-group-item mb-4">
      <Row>
        <Col size="sm-8">
          <h5>{props.title}</h5>
        </Col>
        <Col size="sm-4">
            <button className="btn btn-default float-right">
              <a rel="noreferrer noopener" target="_blank" href={props.href}>View</a>
            </button>
            <button onClick={props.handleSaveBook} className="btn btn-default float-right mr-2">Save</button>
        </Col>
      </Row>
      <Row>
        <Col size="sm-12"><h6>Written By: {props.author}</h6></Col>
      </Row>
      <Row>
        <Col size="sm-2">
          <img className="img-fluid" src={props.thumbnail} alt="book"/>
        </Col>
        <Col size="sm-10">
          <p>{props.plot}</p>
        </Col>
      </Row>
    </li>
  );
}

export function SavedBookListItem (props) {
  return (
    <li className="list-group-item mb-4">
      <Row>
        <Col size="sm-8">
          <h5>{props.title}</h5>
        </Col>
        <Col size="sm-4">
            <button className="btn btn-default float-right">
              <a rel="noreferrer noopener" target="_blank" href={props.href}>View</a>
            </button>
            <button onClick={props.handleDeleteBook} className="btn btn-default float-right mr-2">Delete</button>
        </Col>
      </Row>
      <Row>
        <Col size="sm-12"><h6>Written By: {props.author}</h6></Col>
      </Row>
      <Row>
        <Col size="sm-2">
          <img className="img-fluid" src={props.thumbnail} alt="book"/>
        </Col>
        <Col size="sm-10">
          <p>{props.plot}</p>
        </Col>
      </Row>
    </li>
  );
}