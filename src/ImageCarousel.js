import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

//not my code, adjusted to fit project
export default function App() {
   const sliderImages = [
      {
         url: "https://cdn.posteritati.com/posters/000/000/068/206/everything-everywhere-all-at-once-md-web.jpg",
      },
      {
         url: "https://pbs.twimg.com/media/FWnMpVJWYAEZtns?format=jpg&name=large",
      },
      {
         url: "https://m.media-amazon.com/images/M/MV5BNjI4ZTQ1OTYtNTI0Yi00M2EyLThiNjMtMzk1MmZlOWMyMDQwXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
      },
   ];
   return (
      
      <div className="imageCarousel">
        <h1>
            {" "}
          Movie Review List
         </h1>
         
         <SimpleImageSlider 
            width={750}
            height={1000}
            images={sliderImages}
            showNavs={true}
         />
      </div>
   );
}