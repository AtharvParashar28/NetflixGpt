import { useEffect, useState } from "react";
import { Youtube_URL_Prefix, Youtube_URL_Suffix } from "../utils/constants";
import { options } from "../utils/constants";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoPlayback = ({ MovieID, Title, Overview }) => {

    const data = useMovieTrailer(MovieID);

    console.log("custom hook ", useMovieTrailer(MovieID))


    return (
        <div className="relative w-full h-[90vh] max-h-[600px] overflow-hidden">
            <iframe
                className="absolute aspect-video inset-0 w-screen h-full object-cover rounded-xl shadow-lg  pointer-events-auto cursor-pointer"
                src={Youtube_URL_Prefix + data?.[1]?.key + Youtube_URL_Suffix + data?.[1]?.key}
                title="YouTube Trailer"
                allow=" autoplay; encrypted-media; gyroscope; "
                allowFullScreen
            ></iframe>

            <div className="absolute bottom-[30%] left-0 p-8 h-full flex flex-col justify-end p-8 text-white">
                <h3 className="text-4xl w-sm text-white/90 font-bold ">{Title}</h3>
                <p className="text-sm w-sm text-white/90">
                    {Overview}
                </p>
            </div>


            {/* gyroscope; picture-in-picture accelerometer; */}
            {/* YOUR_VIDEO_ID?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=YOUR_VIDEO_ID */}
            {/* src="https://www.youtube.com/embed/fFqxDrmQLnQ?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=fFqxDrmQLnQ" */}

        </div>
    )
}

export default VideoPlayback;

{/* <iframe width="853" height="480" src="https://www.youtube.com/embed/fFqxDrmQLnQ?list=RDfFqxDrmQLnQ" title="CM Punk 13th Titantron 2012-2014 HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */ }