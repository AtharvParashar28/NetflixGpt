import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const movieSlice = createSlice({
    name : 'movie',
    initialState:{
        popularMovies : null,
        nowPlayingMovies : null,
        topratedMovies : null,
        upcomingMovies : null,
        movieImages : null
    },
    reducers : {
        addPopularMovies : (state, action) => {
            state.popularMovies = action.payload; 
        },
        addNowplayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addMovieImages : (state,action) => {
            state.movieImages = action.payload;
        },
        addTopratedMovies : (state, action) => {
            state.topratedMovies = action.payload;
        },
        addUpcomingMovies : (state, action) => {
            state.upcomingMovies = action.payload;
        }
    }
});

export const {addPopularMovies,addNowplayingMovies,addMovieImages,addTopratedMovies,addUpcomingMovies} = movieSlice.actions;
export default movieSlice.reducer;