import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getMovieInfo } from '../actions/movies';
import { Row, Col, Spinner } from 'reactstrap';

const MovieInfo = ({
  match,
  getMovieInfo,
  moviesState: { current, loading, count },
}) => {
  useEffect(() => {
    getMovieInfo(match.params.id);
    // eslint-disable-next-line
  }, [match.params.id]);

  const {
    Title,
    Year,
    Rated,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Language,
    Country,
    Poster,
    imdbRating,
    imdbVotes,
  } = current || {};

  return loading ? (
    <Spinner color='primary' />
  ) : (
    <div id='info-page'>
      <div className='movie-card'>
        <Row className='my-5'>
          <Col xs='12' md='6' lg='5' xl='4'>
            <img className='movie-poster' src={Poster} alt='Movie poster' />
          </Col>
          <Col xs='12' md='6' lg='7' xl='8' className='text-center'>
            <div className='text-left'>
              <h1 className='movie-title'>
                {Title} ({Year}){console.log(count)}
              </h1>
              <p className='movie-subtitle'>
                {Rated} | {Runtime} | {Genre} | {Released}
              </p>
              <p className='movie-extra-info'>
                {Language} | {Country} | {imdbRating}/10 from {imdbVotes} votes
              </p>
              <p className='movie-plot'>Plot: {Plot}</p>
              <p className='movie-credits'>Director: {Director}</p>
              <p className='movie-credits'>Writer: {Writer}</p>
              <p className='movie-credits'>Stars: {Actors}</p>
            </div>

            <Link to='/' className='btn btn-info return-btn'>
              <i className='fas fa-chevron-left mr-3' /> Home page
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};

MovieInfo.propTypes = {
  getMovieInfo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  moviesState: state.movies,
});

const mapFunctionsToProps = {
  getMovieInfo,
};

export default connect(mapStateToProps, mapFunctionsToProps)(MovieInfo);
