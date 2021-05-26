import React, {useState, useEffect} from "react";
import './pages.css';
import Backend from "../Backend";
import Banner from "../components/Banner";


function Lijst() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    async function fetchData() {
      const response = await Backend.fetchMovies(335984);
      setMovie(response.data);
    }
    fetchData();
  }, []);
    return (
      <div className="Lijst">
      <Banner movie={movie}/>
  
        {/* <h1>Mijn lijst</h1> */}
        
      </div>
    );
  }
  
  export default Lijst;