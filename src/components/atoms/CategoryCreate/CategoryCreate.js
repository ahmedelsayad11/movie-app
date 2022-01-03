import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './CategoryCreate.module.css';
import { Button } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { addCategory } from '../../../store/actions';

function CategoryCreate() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(addCategory(data));
  };
  return (
    <div className={styles['form-wrapper']}>
      <h1>Add Category</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Enter the category name"
          type="text"
          {...register('name', { required: true })}
        />
        <textarea
          row={15}
          cols={15}
          placeholder="category description"
          {...register('categoryDescription', { required: true })}
        />
        <Button color="success"> Create Category</Button>{' '}
      </form>
    </div>
  );
}

export default CategoryCreate;
