import React from "react";
import { useForm } from "react-hook-form";
import styles from "./MovieCreate.module.css";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { addMovie } from "../../../store/actions";

function MovieCreate({ category }) {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {

    const newMovie = {...data,id:Math.random()}
    const categoryData = {
        ...category,
        movies: [...category.movies, newMovie],
    };

    dispatch(addMovie({categoryData,id:category.id}));
  };
  return (
    <div className={styles["form-wrapper"]}>
      <h3>Movies</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Enter the Movie name"
          type="text"
          {...register("name", { required: true })}
        />
        <textarea
          row={5}
          cols={20}
          placeholder="Movie description"
          {...register("description", { required: true })}
        />
        <Button color="success"> Create </Button>{" "}
      </form>
    </div>
  );
}

export default MovieCreate;
