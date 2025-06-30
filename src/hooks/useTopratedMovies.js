import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import {addTopratedMovies,addUpcomingMovies} from "../utils/movieSlice"

const useTopratedMovies = () => {
    const url = import.meta.env.VITE_API_URL_TOP_RATED;
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(url,options)
            .then((res) => res.json())
            .then((json) => dispatch(addTopratedMovies(json)))
            .catch((err) => console.log("could not fetch the data ",err))
    },[])
}

export default useTopratedMovies;