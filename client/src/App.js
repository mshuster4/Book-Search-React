import React, { Component } from 'react';
import SearchBar from "./components/SearchBar";
import API from "./utils/API";
import Jumbotron from "./components/Jumbotron";
import { BookList, BookListItem } from "./components/BookList";
import { Container, Row, Col } from "./components/Grid";


class App extends Component {
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
                {!this.state.books.length ? (
                  <h1 className="text-center">No Books to Display</h1>
                ) : (
                  <BookList>
                    {this.state.books.map(book => {
                      return (
                        <BookListItem
                          key={book.id}  
                          title={book.volumeInfo.title}
                          author={book.volumeInfo.authors}
                          thumbnail={book.volumeInfo.imageLinks.thumbnail}
                          plot={book.searchInfo.textSnippet}
                          href={book.volumeInfo.infoLink}
                        />
                      );
                    })}
                  </BookList>
                )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
