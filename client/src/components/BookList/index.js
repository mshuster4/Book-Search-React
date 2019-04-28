import React from "react";
import Thumbnail from "../Thumbnail";
import SaveBtn from "../SaveBtn"
import { Container, Row, Col } from "../Grid";


export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

export function BookListItem({
  thumbnail = "https://placehold.it/300x300",
  title,
  author,
  plot,
  href
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-6 sm-6">
            <h6>{title}</h6>
          </Col>
          <Col size="xs-6 sm-6">
             <button className="btn btn-success float-right">
                <a rel="noreferrer noopener" target="_blank" href={href}>View</a>
              </button>      
          </Col>
        </Row>
        <Row>
          <Col size="xs-6 sm-6">Written By: {author}</Col>
          <Col size="xs-6 sm-6"></Col>
        </Row>
        <Row>
          <Col size="xs-2 sm-4">
            <Thumbnail src={thumbnail} />
          </Col>
          <Col size="xs-10 sm-8">
            <p>{plot}</p>
          </Col>
        </Row>
      </Container>
    </li>
  );
}