import React from "react";

function BookDetail(props) {
  return (
    <div className="text-center">
      <h3>Title: {props.title}</h3>
      <h3>Author: {props.author}</h3>
    </div>
  );
}

export default BookDetail;
