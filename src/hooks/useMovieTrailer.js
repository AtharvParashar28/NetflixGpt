import { useState,useEffect } from "react";
import { options } from "../utils/constants";

const useMovieTrailer = (MovieID) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        // Do not fetch if movie id in null or underfined
        if (!MovieID) return;

        const url = import.meta.env.VITE_API_URL_VIDEOS.replace('{movie_id}', MovieID);

        fetch(url, options)
            .then((res) => res.json())
            .then((json) => setData(json?.results?.filter((item) => item?.type == "Trailer")))
            .catch((err) => console.log('could not fetch the data ', err))
    }, [MovieID])

    useEffect(() => {
        console.log("data :", data?.[0]?.key)
    }, [data])

    return data;
}

export default useMovieTrailer