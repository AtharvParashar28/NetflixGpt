import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const BingMovies = () => {
    // Subscribing to the store
    const MovieData = useSelector((store) => store.movies)
    
    return (
        <div>
            <div className="-mt-32 relative z-20">
                <MovieList title={"Now Playing"} MovieData={MovieData.nowPlayingMovies}/>
                <MovieList title={"Popular"} MovieData={MovieData.popularMovies}/>
                <MovieList title={"Top Rated"} MovieData={MovieData.topratedMovies}/>
                <MovieList title={"Upcoming"} MovieData={MovieData.upcomingMovies}/>
            </div>
        </div>
    )
}
export default BingMovies;