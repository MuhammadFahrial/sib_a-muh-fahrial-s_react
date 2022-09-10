import React from "react";

// Dan ketika mendengar istilah "stateless", artinya sebuah komponen tidak memiliki dan tidak bertanggungjawab terhadap state. Tugasnya hanya menampilkan data yang dikirim oleh parent component melalui props. Pada kasus tertentu, stateless component ini lebih dianjurkan daripada statefull component

const Movie = (props) => {
  return (
    <div>
      <h1>{props.movie.title}</h1>
      <h2>{props.movie.year}</h2>
      <p>{props.movie.synopsis}</p>
    </div>
  );
};

export default Movie;
