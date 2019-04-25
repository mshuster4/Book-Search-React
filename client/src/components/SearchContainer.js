import React, { Component } from "react";
import SearchForm from "./SearchForm";
import BookDetail from "./BookDetail";
import { Container, Row, Col } from "./Grid"
import API from "../utils/API";

class SearchContainer extends Component {
  state = {
    books: [],
    search: ""
  };

  componentDidMount() {
    this.searchBooks("Harry+Potter");
  }

  searchBooks = query => {
    API.search(query)
      .then(res => 
        this.setState(
            {
                books: res.data.items,
                search: ""
            },
            console.log(res.data.items)
            )
        )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
                {this.state.books.map(book => (
                <BookDetail
                  key={book.id}  
                  title={book.volumeInfo.title}
                  author={book.volumeInfo.author}
                />
                  ))};
              ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
          <Col size="md-4">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
          </Col>
        </Row>
      </Container>
    );
  }
};

export default SearchContainer;
