import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowplayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowplaying = () => {
    // Dispatching an action
    const dispatch = useDispatch();

    const url = import.meta.env.VITE_API_URL_NOWPLAYIING;

    const fetchNowplayingmovie = () => {
        fetch(url,options)
            .then((res) => res.json())
            .then((json) => dispatch(addNowplayingMovies(json)))
            .catch((error) => console.log("could fetch the data ",error))
    }

    useEffect(() => {
        fetchNowplayingmovie();
    },[])
}

export default useNowplaying;