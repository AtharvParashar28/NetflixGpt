import { addPopularMovies } from "../utils/movieSlice"
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { useEffect } from "react";

const usePopularMovies = () => {
    // Dipatching an action
    const dispatch = useDispatch();

    // API from env file
    const url = import.meta.env.VITE_API_URL_POPULAR;

    // Fetching movie data from TMDB
    const FetchMovieData = () => {
        // Fetching Movie list of popular movies
        fetch(url, options)
            .then((res) => res.json())
            .then((json) => dispatch(addPopularMovies(json?.results)))
            .catch((err) => console.log("could not fetch the data ", err))
    }

    useEffect(() => {
        FetchMovieData();
    },[])
} 

export default usePopularMovies;