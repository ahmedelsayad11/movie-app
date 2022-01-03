import React from "react";
import styles from "./MoviesView.module.css";
import CategoryCreate from "../../atoms/CategoryCreate/CategoryCreate";
import SingleCategory from "../../atoms/SingleCategory/SingleCategory";
import { useSelector } from "react-redux";

function MoviesView() {
  const state = useSelector((state) => state);
  const { categories, error, loading } = state;
  const renderData = categories?.map((category, index) => (
    <div key={category?.id ?? index}>
      <SingleCategory category={category} />
    </div>
  ));

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["header"]}>
        <CategoryCreate />
      </div>
      <div className={styles["body"]}>
        <h1>Movies Data </h1>
        {loading
          ? "The data is loading"
          : error
          ? "There was an error please try again"
          : renderData}
      </div>
    </div>
  );
}

export default MoviesView;
