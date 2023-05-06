import React from "react";
import MovieCard from "./MovieCard";
import MovieCardTwo from "./MovieCardTwo";
import MovieCardThree from "./MovieCardThree";
import ImageCarousel from "./ImageCarousel";

export default function MovieList() {
    return (
        <div>
        <ImageCarousel/>,
        <br/>
        <MovieCard/>
        <MovieCardTwo/>
        <MovieCardThree/>
        </div>
    );
}

