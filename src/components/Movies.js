import React from 'react';
import MovieCard from './MovieCard';
import { Row, Col } from 'reactstrap';

const Movies = ({ movies, toggle }) => {
  return (
    <Row>
      {movies.map((movie, k) => (
        <Col xs='12' md='6' xl='4'>
          <MovieCard key={k} movie={movie} toggle={toggle} />
        </Col>
      ))}
    </Row>
  );
};

export default Movies;
