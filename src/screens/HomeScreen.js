import React from "react";
import "./HomeScreen.css";
import Nav from "../Nav";
import Banner from "../Banner";
import Row from '../Row';
import requests from "../Requests";
import MovieLane from "../RowLane/MovieLane";


function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />

      <Banner genre="THRILLER"/>

      <MovieLane title="Thriller" genre="THRILLER"/>
      <MovieLane title="Action" genre="ACTION"  />
      <MovieLane title="Fantasy" genre="FANTASY"  />



      {/* <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      /> */}

      {/* <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow /> */}
      {/* <Row title="Top Rated" fetchUrl={requests.fetchTopRated} /> */}
      {/* <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} /> */}
      {/* <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} /> */}
      {/* <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow
      /> */}
      {/* <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} /> */}
      {/* <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} /> */}
    </div>
  );
}

export default HomeScreen;
