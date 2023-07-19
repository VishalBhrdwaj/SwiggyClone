import { RESTAURANT_ITEMS_IMG } from "../../utils/constants";

export default CartItems = ({item}) => {
  return (
    <div className="h-2/5 w-full bg-red-300 rounded-xl mt-3 pt-3 pl-[20]">
      <div>
        <div className="h-5/6 w-36  bg-black mt-1 mr-2 rounded-lg flex justify-between">
          
          <img
            className="w-full h-full rounded-md"
            src={RESTAURANT_ITEMS_IMG+item.imageId}
          />
           <div>
           <div className="ml-10 text-lg font-semibold">{item.name}</div>
           <div className="ml-10 text-lg font-semibold">{item.price}</div>

           <div className=" h-10 w-20 flex justify-between mt-10 ml-5">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
               −
            </button>
            <div className="bg-white py-1 px-3">Hi</div>
           <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3  rounded">
                +
            </button>

            <div className="ml-6">
            <button class="bg-red-500 hover:bg-red-700 ml-32 text-white font-bold py-2 px-4 rounded">
              Delete
            </button>
          </div>
            

           </div>
           </div>
        </div>
        
      </div>
    </div>
  );
};
