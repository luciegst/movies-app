import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import CardMovie from './CardMovie';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      movies: []
     }
  }

/* Display movies you have searched */
componentDidMount(){
  const {
    location: { search }
  } = this.props
  fetch(`http://localhost:5000/api/search/${search}`)
        .then(results => results.json())
        .then(data => {
             this.setState({
             movies: data,
            }); 
        });
}

  render() { 
    const {movies} = this.state;
    return ( 
      <div>
        <h2>Les films que vous avez recherché</h2>
        <Container>
        <Row>
          {movies.map(movie => (
            <Col lg={12} md={6} sm={12}>
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
 
export default SearchPage;