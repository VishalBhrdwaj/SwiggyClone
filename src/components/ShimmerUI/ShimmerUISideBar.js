
export function ShimmerUiSideBar(){
    return(
        <div id="shimmer-ui-sidebar-parent-div">
            <ShimmerUISideBarElement/>
            <ShimmerUISideBarElement/>
            <ShimmerUISideBarElement/>
            <ShimmerUISideBarElement/>
        </div>
    )

}

export function ShimmerUISideBarElement(){
    return(
        <div className="shimmer-ui-sidebar-element">
            <div className="shimmerui-sidebar-circle"></div>
            <div className="shimmerui-sidebar-rectangle"></div>
        </div>
    )
}