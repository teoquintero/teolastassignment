import React, { useReducer, useEffect } from "react";
import '../App.css'
import Header from "./Header";
import Movie from "./Movie";
import spinner from "../asset/ajax-loader.gif";
import Search from "./Search";
import 'antd/dist/antd.css';
import {
  initialState,
  reducer
} from "../store/reducer";
import axios from "axios";
import {
  Row,
} from 'antd'


const MOVIE_API_URL = "https://www.omdbapi.com/?s=woman&apikey=95e3ad08";
const MOVIE_API_URL2 = "https://www.omdbapi.com/?s=man&apikey=95e3ad08";
const MOVIE_API_URL3 = "https://www.omdbapi.com/?s=good&apikey=95e3ad08";
const MOVIE_API_URL4 = "https://www.omdbapi.com/?s=bad&apikey=95e3ad08";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get(MOVIE_API_URL).then(jsonResponse => {
      dispatch({
        type: "SEARCH_MOVIES_SUCCESS",
        payload: jsonResponse.data.Search
      });
    });
  }, []);

  useEffect(() => {
    axios.get(MOVIE_API_URL2).then(jsonResponse => {
      dispatch({
        type: "SEARCH_MOVIES_SUCCESS",
        payload: jsonResponse.data.Search
      });
    });
  }, []);

  useEffect(() => {
    axios.get(MOVIE_API_URL3).then(jsonResponse => {
      dispatch({
        type: "SEARCH_MOVIES_SUCCESS",
        payload: jsonResponse.data.Search
      });
    });
  }, []);

  useEffect(() => {
    axios.get(MOVIE_API_URL4).then(jsonResponse => {
      dispatch({
        type: "SEARCH_MOVIES_SUCCESS",
        payload: jsonResponse.data.Search
      });
    });
  }, []);



  const search = searchValue => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST"
    });

    axios(`https://www.omdbapi.com/?s=${searchValue}&apikey=95e3ad08`).then(
      jsonResponse => {
        if (jsonResponse.data.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.data.Search
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: jsonResponse.data.Error
          });
        }
      }
    );
  };

  const { movies, errorMessage, loading } = state;

  const retrievedMovies =
    loading && !errorMessage ? (
      <img className="spinner" src={spinner} alt="Loading spinner" />
    ) : errorMessage ? (
      <div className="errorMessage"> Incorrect Title Id Please Check Again</div>
    ) : (
      movies.map((movie, index) => (
        <Movie key={`${index}-${movie.Title}`} movie={movie} />
      ))
    );

  return (



    <>
      <Header text='TEOMOVIE' />
      <Search search={search} />
      <h1 style={{ textAlign: 'center' }} >Find Your Favourite Movie</h1>

      <Row justify='center'>
        {retrievedMovies}
      </Row>
    </>

  );
};

export default App;



