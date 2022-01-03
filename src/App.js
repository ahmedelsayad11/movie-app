import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import server from "./api/server";
import MoviesView from "./components/molecules/MoviesView/MoviesView";
import { fetchCategories } from "./store/actions";
import { FETCH_CATEGORIES } from "./store/actionTypes";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(fetchCategories());
  }, []);

  return (
    <div
      className="AppContainer"
      style={{ display: "flex", flexDirection: "column" }}
    >
     
      <MoviesView />
    </div>
  );
};

export default App;
