
import React from "react";
class ShimmerUIcards extends React.Component {
  render() {
    return (
      <div className="products-card" >
        <div className="product-img-div animate-pulse" style={{background:"#dfe6e9"}}>
        </div>
        <div className="animate-pulse" style={{width:"60%",height:"18px",background:"#dfe6e9"}}></div>
        <div className="animate-pulse" style={{width:"50%",height:"18px",background:"#dfe6e9",marginTop:"10px"}}></div>
      </div>
    );
  }
}
export default ShimmerUIcards;
