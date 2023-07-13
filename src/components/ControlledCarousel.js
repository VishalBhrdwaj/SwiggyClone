
import CarouselCard from "./CarouselCard";
import { CAROUSEL_IMGS,CAROUSEL_IMG_CDN_URL } from "../utils/constants";
import "./style.css"

function ControlledCarousel() {
  return (
    <>
    <div id="carousel">
      <CarouselCard img_url={CAROUSEL_IMG_CDN_URL+CAROUSEL_IMGS[0]}/>
      <CarouselCard img_url={CAROUSEL_IMG_CDN_URL+CAROUSEL_IMGS[1]}/>
      <CarouselCard img_url={CAROUSEL_IMG_CDN_URL+CAROUSEL_IMGS[2]}/>
      <CarouselCard img_url={CAROUSEL_IMG_CDN_URL+CAROUSEL_IMGS[3]}/>

    </div>
    </>
    
  );
}

export default ControlledCarousel;