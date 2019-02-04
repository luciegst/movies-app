import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';
import './CardMovie.scss';

const CardMovie = (props) => {

    return (
    <div>
      <Card className="card-movie">
        <CardImg src={props.poster} alt="poster image" />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardText>{props.resume}</CardText>
        </CardBody>
      </Card>
    </div>  
    );
  }
 
export default CardMovie;