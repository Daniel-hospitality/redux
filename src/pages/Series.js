import React, {useState, useEffect} from "react";
import './pages.css';
import Backend from "../Backend";
import Banner from "../components/Banner";


function Series() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    async function fetchData() {
      const response = await Backend.fetchMovies(335984);
      setMovie(response.data);
    }
    fetchData();
  }, []);
    return (
      <div className="Series">
        <Banner movie={movie}/>

        
  
        {/* <h1>Series</h1> */}
        
      </div>
    );
  }
  
  export default Series;