import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import DeleteMovieCard from './DeleteMovie';
import './Layout.scss';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

/* Display all movies */
  componentDidMount() {
    fetch('http://localhost:5000/api/movies')
        .then(results => results.json())
        .then(data => {
             this.setState({
             movies: data,
            }); 
        });
} 

/* Delete 1 with delete button on DeleteMovieCard component */
  render() {
    const {movies} = this.state
    return (
      <div>
        <Container>
        <Row className="row-layout">
          {movies.map(movie => (
            <Col lg="6" xs="12">
              <DeleteMovieCard
                id={movie.id}
                title={movie.title}
                resume={movie.resume}
                poster={movie.poster}
              />
            </Col>
          ))}
          </Row> 
        </Container>
      </div>
    );
  }
}

export default Layout;