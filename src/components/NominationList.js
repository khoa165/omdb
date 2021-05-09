import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Card, Button } from 'react-bootstrap';

const NominationList = ({ nominations, toggle }) => {
  return (
    <Accordion defaultActiveKey='0' className='nomination-list sticky-top'>
      <Card className='course-card mb-3'>
        <Accordion.Toggle as={Card.Header} eventKey='0'>
          <div>
            <h2>
              <i className='fas fa-chevron-right mr-3' /> Nomination list
            </h2>
          </div>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey='0'>
          <Card.Body className='mx-3'>
            {nominations && nominations.length === 0 && (
              <p>You have yet to nominate any movies!</p>
            )}
            {nominations.map((nom, k) => (
              <div key={k} className='nomination-entry'>
                <h3>
                  {nom.Title} ({nom.Year})
                </h3>
                <div>
                  <Button
                    variant='danger'
                    onClick={() => toggle(nom.imdbID, true)}
                  >
                    Remove nomination
                  </Button>
                  <Link
                    to={`/movies/${nom.imdbID}`}
                    className='visit-btn btn btn-primary'
                  >
                    More info
                  </Link>
                </div>
              </div>
            ))}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default NominationList;
