import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import './Form.scss';

class FormMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      resume: "",
      poster: "",
      creation_date: "",
    }
    this.changeInput = this.changeInput.bind(this);
    this.submitMovie = this.submitMovie.bind(this);
  }

  changeInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  /* Add a movie method */
  submitMovie(e) {
    e.preventDefault();
    const { title, resume, poster, creation_date } = this.state;
    const movie = {
      title,
      resume,
      poster,
      creation_date,
    }
    fetch("http://localhost:5000/api/new",
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(movie),
      })
      .then(() => {
        window.location.reload();
      });
  }

   /* Add a movie with a form */
  render() {
    return (
      <div className="form-movie">
        <Container >
          <h2>Vous pouvez ajouter un film</h2>
          <Row>
            <Col>
              <Form onSubmit={this.submitMovie} className="form-movie">
                <FormGroup>
                  <Label for="movieName">Titre du film</Label>
                  <Input
                    type="text"
                    name="title"
                    id="exampleTitre"
                    value={this.state.title}
                    onChange={this.changeInput}
                    placeholder="entrer un titre de film"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="moviePoster">Affiche</Label>
                  <Input
                    type="text"
                    name="poster"
                    id="examplePoster"
                    value={this.state.poster}
                    onChange={this.changeInput}
                    placeholder="entrer l'url d'une image au format jpg"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="resume">Résumé</Label>
                  <Input
                    type="textarea"
                    name="resume"
                    id="exampleResume"
                    placeholder="entrer un petit descriptif"
                    onChange={this.changeInput}
                    value={this.state.resume}
                    required
                  />
                  <FormGroup>
                    <Label for="date">Date de sortie</Label>
                    <Input
                      type="date"
                      name="creation_date"
                      onChange={this.changeInput}
                      value={this.state.creation_date}
                      placeholder="entrer une date au format YYYY-MM-DD"
                      required
                    />
                  </FormGroup>
                </FormGroup>
                <Button>Soumettre</Button>
              </Form>
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
}

export default FormMovie;