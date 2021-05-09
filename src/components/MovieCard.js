import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';

const MovieCard = ({
  toggle,
  movie: { Title, Year, imdbID, Poster, nominated },
}) => {
  return (
    <Card className='movie-card'>
      <CardImg
        className='movie-poster'
        top
        width='100%'
        src={Poster}
        alt='Card image cap'
      />
      <CardBody>
        <CardTitle tag='h4' className='movie-title'>
          {Title} ({Year})
        </CardTitle>
        <div className='text-right'>
          <Button
            className={`${nominated ? 'remove-btn' : 'nominate-btn'} mr-2`}
            color={nominated ? 'danger' : 'success'}
            onClick={() => toggle(imdbID, nominated)}
          >
            {nominated ? 'Remove nomination' : 'Nominate'}
          </Button>
          <Link to={`/movies/${imdbID}`} className='visit-btn btn btn-primary'>
            More info
          </Link>
        </div>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
