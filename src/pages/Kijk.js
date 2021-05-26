import React, {useState, useEffect} from "react";
import "./pages.css";
import Backend from "../Backend";
import Banner from "../components/Banner";


function Kijk() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    async function fetchData() {
      const response = await Backend.fetchMovies(335984);
      setMovie(response.data);
    }
    fetchData();
  }, []);

  return (
    <div className="kijk">
      <Banner movie={movie}/>

     
      {/* <h1>Kijk opnieuw</h1> */}
    </div>
  );
}

export default Kijk;
