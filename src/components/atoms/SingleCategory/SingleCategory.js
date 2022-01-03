import React from 'react';
import styles from './SingleCategory.module.css';
import { Accordion } from 'react-bootstrap';
import MovieCreate from '../MovieCreate/MovieCreate';
import SingleMovie from '../SingleMovie/SingleMovie';
function SingleCategory({ category }) {
  const { movies } = category;
  return (
    <div className={styles['accordion-wrapper']}>
      <Accordion>
        <Accordion.Item eventKey={category?.id}>
          <Accordion.Header className={styles['accordion-header']}>
            <div className={styles['accordion-header-text']}>
              <p>&#8801; {category?.name}</p>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <div className={styles['accordion-body']}>
              <div className={styles['accordion-body-text']}>
                <h4> Name * : </h4>
                <h4> TRADEMARK : </h4>
              </div>
              <div className={styles['accordion-body-form']}>
                <MovieCreate category={category}/>
              </div>
              <div className={styles['accordion-body-movies']}>
                {movies?.map((movie, index) => (
                  <div key={movie?.id ?? index}>
                    <SingleMovie movie={movie} category={category} />
                  </div>
                ))}
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default SingleCategory;
