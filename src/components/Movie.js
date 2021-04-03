import React from "react";
import 'antd/dist/antd.css';
import { Card } from 'antd'
const { Meta } = Card;
const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <>
    <Card
      hoverable
      style={{ width: '15%',marginLeft:50,marginTop:50 }}
      cover={
        <img
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />}
    >
      <Meta title={movie.Title} description={movie.Year} />
    </Card>
    </>
  );
};

export default Movie;