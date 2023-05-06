import React from "react";
import MovieCard from "./MovieCard";
import ImageCarousel from "./ImageCarousel";

export default function MovieList() {
    return (
        <div>
        <ImageCarousel/>,
        <br/>
        <MovieCard/>
        </div>
    );
}

