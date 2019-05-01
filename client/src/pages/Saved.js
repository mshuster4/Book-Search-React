import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { BookList, SavedBookListItem } from "../components/BookList";

class Saved extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    API.getBooks()
    .then(res => this.setState(
      { 
        books: res.data 
      },
      console.log(res.data)
      )
    )
    .catch(err => console.log(err));
  }


  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data })
      )
      .catch(err => console.log(err));
  };

render() {
    return (
      <div>
        <Jumbotron/>
        <Container>
         <Row>
            <Col size="md-12">
                {!this.state.books.length ? (
                  <h1 className="text-center">No Books to Display</h1>
                ) : (
                  <BookList>
                    {this.state.books.map(book => {
                      return (
                        <SavedBookListItem
                          key={book._id}  
                          title={book.title}
                          author={book.author}
                          thumbnail={book.thumbnail}
                          plot={book.plot}
                          href={book.href}
                          handleDeleteBook={() => this.handleDeleteBook(book._id)}
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

export default Saved;
