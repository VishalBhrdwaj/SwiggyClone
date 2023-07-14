
import React from "react";
class ShimmerUIcards extends React.Component {
  render() {
    return (
      <div className="products-card" >
        <div className="product-img-div" style={{background:"#dfe6e9"}}>
        </div>
        <div style={{width:"60%",height:"18px",background:"#dfe6e9"}}></div>
        <div style={{width:"50%",height:"18px",background:"#dfe6e9",marginTop:"10px"}}></div>
      </div>
    );
  }
}
export default ShimmerUIcards;
