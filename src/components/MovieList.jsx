import MovieCard from "./MovieCard";

const MovieList = ({ MovieData, title }) => {
    console.log("moviedata from movielist ",MovieData)

    if (!MovieData) return null;

    

    return (
        <div className="p-4 m-4">
             <h1 className="text-3xl fond-bold mb-6">{title}</h1>
             <div className="flex overflow-x-scroll scrollbar-hide scroll-smooth space-x-4 ">
                <div className="flex gap-6 justify-center"> {
                    (title !== 'Popular') ?
                    MovieData?.results?.map((item) => {
                        const { poster_path, title, id } = item
                        return <MovieCard poster_path={poster_path} title={title} key={id}/>
                    })
                    :
                    MovieData?.map((item) => {
                        const { poster_path, title, id } = item
                        return <MovieCard poster_path={poster_path} title={title} key={id}/>
                    })
                }
                </div>
            </div>
        </div>
    )
}
export default MovieList;