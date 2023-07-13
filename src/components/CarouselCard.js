import { IMG_CDN_URL } from "../utils/constants";
import "./style.css"

const CarouselCard=(props)=> {
  return (
    <div id="carousel-card">
        <img  style={{width:"100%",height:"100%"}}src={props.img_url} />
    </div>
  );
}

export default CarouselCard;