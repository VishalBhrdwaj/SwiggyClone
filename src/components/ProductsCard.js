import { FOOD_IMG_URL } from "../utils/constants"


const ProductsCard=({restaurantData})=>{
    console.log(restaurantData)
    return(
        
        <div className="products-card">
               <div className="product-img-div">
                <img style={{width:"100%",height:"100%"}} 
                src={FOOD_IMG_URL+restaurantData?.data?.cloudinaryImageId}
                />
                </div>
        </div>

    )
}

export default ProductsCard