import React, { Component } from 'react';
import CarouselHome from './CarouselHome';
import SearchBar from './SearchBar';
import { Container, Row, Col } from 'reactstrap';
import './Home.scss';
import CardMovie from './CardMovie';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
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

  render() {
    /* Slice method to select only 4 movies */
    const moviefilter = this.state.movies.slice(1,5)
    return (
      <div>
        <CarouselHome />
        <Container>
          <Row>
            <Col>
              <SearchBar />
            </Col>
          </Row>
          <Row>
            <Col>
            <h1 className="best-movies">Nos meilleurs films</h1>
            </Col>
          </Row>
        <Row>
          {moviefilter.map(movie => (
            <Col md={6}>
              <CardMovie
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

export default Home;