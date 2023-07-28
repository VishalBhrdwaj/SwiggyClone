
export default EmptyCart=()=>{
    return (
        <div className="h-auto w-full  p-5 flex justify-center">
            <div className="h-[550] w-[500]  flex flex-col text-center  justify-cente">
                <div className="rounded mt-5">
                    <img className="rounded-lg ml-10" src="https://www.clariontech.com/hubfs/Food%20Delivery%20App%20Development.webp" />
                </div>
                <div className="mt-5 ml-16 text-lg font-semibold">Your Cart is Empty !</div>
                <div className="mt-3 ml-16 ">You can go to home page to view more restaurants</div>
                <div className="ml-16"><button className="bg-orange-400 px-3 py-3 mt-5 text-white font-semibold rounded-lg">SEE RESTAURANTS NEAR YOU</button></div>
            </div>

        </div>
    )
}