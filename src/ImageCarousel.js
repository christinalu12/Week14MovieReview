import React from "react";
import SimpleImageSlider from "react-simple-image-slider";


export default function App() {
   const sliderImages = [
      {
         url: "https://cdn.posteritati.com/posters/000/000/068/206/everything-everywhere-all-at-once-md-web.jpg",
      },
      {
         url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9oHFP6JuBs3H8djvxKTeYb5UCi3rv7s-ESQ&usqp=CAU",
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
            width={600}
            height={600}
            images={sliderImages}
            showNavs={true}
         />
      </div>
   );
}