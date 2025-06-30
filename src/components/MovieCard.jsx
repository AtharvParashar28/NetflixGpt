import { useEffect, useState } from "react";
import { TMDB_IMG_ULR } from "../utils/constants";

const MovieCard = ({ poster_path , title}) => {
    const Img_url = TMDB_IMG_ULR.replace('{poster_path}', poster_path);


    if (!poster_path) return null;

    return (

        <div className="flex flex-col flex-wrap gap-4 justify-center w-46 cursor-pointer">
            <img src={Img_url} alt="Poster of movie"/>
            <h1 className="text-sm fond-bold">{title}</h1>
        </div>
    )
}
export default MovieCard;