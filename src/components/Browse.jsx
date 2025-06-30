import Header from "./Header";
import useNowplaying from "../hooks/useNowplaying"
import useUpcomingMovies from "../hooks/useUpcomingMovies"
import useTopratedMovies from "../hooks/useTopratedMovies"
import VideoPlayback from "./VideoPlayback";
import { useSelector } from "react-redux";
import BingMovies from "./BingMovies";
import usePopularMovies from "../hooks/usePopularMovies";

const Browse = () => {

    // Fetching Now plyaing data from TMDB API
    useNowplaying();

     // Fetching popular movie data from TMDB API
    usePopularMovies();

    // Fetching Top rated movie data from TMDB API
    useTopratedMovies();

     // Fetching upcoming movie data from TMDB API
    useUpcomingMovies();

    // subscribing to the store
    const NowPlayingmovieData = useSelector((store) => store.movies.nowPlayingMovies)

    return (
        <>
            <Header />
            <VideoPlayback MovieID={NowPlayingmovieData?.results?.[0]?.id} Title={NowPlayingmovieData?.results?.[0]?.original_title} Overview={NowPlayingmovieData?.results?.[0]?.overview}/>
            <BingMovies />
        </>
    )
}

export default Browse;