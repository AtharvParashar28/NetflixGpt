import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import {addUpcomingMovies} from "../utils/movieSlice"

const useUpcomingMovies = () => {
    const url = import.meta.env.VITE_API_URL_UPCOMING;
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(url,options)
            .then((res) => res.json())
            .then((json) => dispatch(addUpcomingMovies(json)))
            .catch((err) => console.log("could not fetch the data ",err))
    },[])
}

export default useUpcomingMovies;