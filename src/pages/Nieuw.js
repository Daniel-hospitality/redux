import React, {useState, useEffect} from "react";
import "./pages.css";
import Backend from "../Backend";


import Banner from "../components/Banner";
import Row from "../Row";
import requests from "../requests";

function Nieuw() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    async function fetchData() {
      const response = await Backend.fetchMovies(335984);
      setMovie(response.data);
    }
    fetchData();
  }, []);

  return (
    <div className="app">

      <Banner movie={movie}/>

      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

      
    </div>
  );
}

export default Nieuw;
