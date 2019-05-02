import React, { Component } from 'react';
import SearchBar from "../components/SearchBar";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { BookList, BookListItem } from "../components/BookList";
import { Container, Row, Col } from "../components/Grid";


class Search extends Component {
  state = {
    books: [],
    search: ""
  };

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

  handleSaveBook = bookData => {
    console.log("clicked")
    API.saveBook(bookData)
      .then(res => alert("Book Saved!"))
      .catch(err => console.log(err));
  };


  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data })
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

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  render() {
    return (
      <div>
        <Jumbotron/>
        <Container>
          <Row>
            <Col size="md-12">
            <SearchBar
                  value={this.state.search}
                  handleInputChange={this.handleInputChange}
                  handleFormSubmit={this.handleFormSubmit}
                />
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
                  <BookList>
                    {this.state.books.map(book => {
                      return (
                        <BookListItem
                          key={book.id}  
                          title={book.volumeInfo.title}
                          author={book.volumeInfo.authors
                                ? book.volumeInfo.authors.join(", ")
                                : "N/A"}
                          thumbnail={book.volumeInfo.imageLinks.thumbnail}
                          plot={book.volumeInfo.description}
                          href={book.volumeInfo.infoLink}
                          handleSaveBook={() => this.handleSaveBook({
                                  title: book.volumeInfo.title,
                                  author: book.volumeInfo.authors,
                                  thumbnail: book.volumeInfo.imageLinks.thumbnail,
                                  plot: book.volumeInfo.description,
                                  href: book.volumeInfo.infoLink})}
                             
                        />
                      );
                    })}
                  </BookList>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Search;
