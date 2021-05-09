import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Input, Button } from 'reactstrap';

const SearchBar = ({ search }) => {
  const [query, setQuery] = useState('');
  const onChange = (e) => setQuery(e.target.value);
  const onClick = (e) => search(query);
  return (
    <Row className='search-bar'>
      <Col xs='10'>
        <Input
          type='text'
          onChange={(e) => onChange(e)}
          value={query}
          className='py-3'
          placeholder='e.g. Harry Potter'
        />
      </Col>
      <Col xs='2' className='search-btn'>
        <Button color='danger' onClick={onClick}>
          Search
        </Button>
      </Col>
    </Row>
  );
};

SearchBar.propTypes = {
  search: PropTypes.func.isRequired,
};

export default SearchBar;
