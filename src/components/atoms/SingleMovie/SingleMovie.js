import React from 'react';
import styles from './SingleMovie.module.css';

import Button from 'react-bootstrap/Button';
import { Accordion } from 'react-bootstrap';
import { deleteMovie } from '../../../store/actions';
import { useDispatch } from 'react-redux';

function SingleMovie({ movie,category }) {

  const dispatch = useDispatch();

  const handleDeleteButton = () => {
    const updatedMovies = category.movies.filter((singleMovie) => singleMovie.id !== movie.id)
        const updatedCategory = {...category,movies:updatedMovies}
    dispatch(deleteMovie({updatedCategory ,id:category.id}))
  }

  return (
    <div className={styles['accordion-wrapper']}>
      {/* defaultActiveKey="0" */}
      <Accordion>
        <Accordion.Item eventKey={movie?.id}>
          <Accordion.Header className={styles['accordion-header']}>
            <div className={styles['accordion-header-text']}>
              <p>&#8801;{movie?.name}</p>
              <div className={styles['accordion-header-buttons']}>
                <Button  variant="warning">Edit</Button>
                <Button onClick={handleDeleteButton} variant="danger">Delete</Button>
              </div>
            </div>
          </Accordion.Header>
          <Accordion.Body>{movie?.description}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default SingleMovie;
