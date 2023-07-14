import React from "react";
import ShimmerUIcards from "./ShimmerUICards";
import { ShimmerUICarousel } from "./ShimmerUICarousel";
import { ShimmerUiSideBar } from "./ShimmerUISideBar";

class ShimmerUI extends React.Component {
  render() {
    return (
      <>
        <ShimmerUICarousel />
        <div id="shimmer-side-nav-parent-div">
          <ShimmerUiSideBar />
          <div id="shimmer-outer-div">
            <ShimmerUIcards />
            <ShimmerUIcards />
            <ShimmerUIcards />
            <ShimmerUIcards />
            <ShimmerUIcards />
            <ShimmerUIcards />
          </div>
        </div>
      </>
    );
  }
}

export default ShimmerUI;
