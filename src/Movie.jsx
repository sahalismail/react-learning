import axios from "axios";
import "./Movie.css";
import { useEffect, useState } from "react"

export const Movie =() => {
    const [movieData, setMovieData] = useState([]);

    const fetchData = () => {
        axios
    .get("https://www.amalmk.com/mock-api/movie-streaming/data/page1.json")
    .then(response=>{
        console.log(response.data.page["content-items"].content);
        setMovieData(response.data.page["content-items"].content);
    })
    .catch((err) => {
        console.log("Error occured:", err);
    })
    .finally(() => {
        console.log("API CALL COMPLETED");
    })}
    
    useEffect(()=>{
        fetchData();
    },[]);


    return(
    <section>
      <h1>Romatic Comedy</h1>
      <div className="wrapper">
        {movieData?.map((movie) => (
            <div className="user" key={movie.id}>
                
                <img src={ ["https://www.amalmk.com/mock-api/movie-streaming/images/"]+movie["poster-image"]}/>
                <h3>{`${movie.name}`}</h3>
                </div>
            
        ))}
      </div>
    </section>            
    );
};