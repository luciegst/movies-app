import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import './CardMovie.scss';

class DeleteMovieCard extends Component {

  /* Delete a movie with id */
  deleteItem() {
    fetch(`http://localhost:5000/api/delete/${this.props.id}`, {
      method: 'DELETE'
    })
      .then(res => res.text())
      .then(() => {
        window.location.reload();
      });
  }

  render() {
    return (
      <div>
        <Card className="card-movie">
          <CardImg src={this.props.poster} alt="poster image" />
          <CardBody>
            <CardTitle>{this.props.title}</CardTitle>
            <CardText>{this.props.resume}</CardText>
          </CardBody>
          <Button onClick={() => this.deleteItem()}>Supprimer ce film</Button>
        </Card>
      </div>
    );
  }
}

export default DeleteMovieCard;
