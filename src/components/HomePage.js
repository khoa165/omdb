import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchMovies, toggleNomination } from '../actions/movies';
import SearchBar from './SearchBar';
import NominationList from './NominationList';
import Movies from './Movies';
import { Accordion, Row, Col, Spinner } from 'reactstrap';

const HomePage = ({
  searchMovies,
  toggleNomination,
  moviesState: { movies, loading, nominations },
}) => {
  useEffect(() => {
    if (!movies) {
      console.log('default search');
      searchMovies('Harry Potter');
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div id='home-page'>
      <Row className='my-5'>
        <Col xs='12' sm={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }}>
          <SearchBar search={searchMovies} />
          <NominationList nominations={nominations} toggle={toggleNomination} />
          {loading ? (
            <div className='text-center'>
              <Spinner color='primary' />
            </div>
          ) : (
            <Movies movies={movies} toggle={toggleNomination} />
          )}
        </Col>
      </Row>
    </div>
  );
};

HomePage.propTypes = {
  searchMovies: PropTypes.func.isRequired,
  toggleNomination: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  moviesState: state.movies,
});

const mapFunctionsToProps = {
  searchMovies,
  toggleNomination,
};

export default connect(mapStateToProps, mapFunctionsToProps)(HomePage);
