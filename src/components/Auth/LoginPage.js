

import React from 'react'

const LoginPage = () => {
  return (
    <div className='h-screen fixed w-full bg-black bg-opacity-5 text-black flex justify-center'>
        <div className='w-[30rem] rounded-lg mt-4 h-[40rem] bg-white'>
            <div className='ml-10 mt-16 flex w-[24rem] h-auto px-2 py-4 flex-wrap'>
            <form className='flex flex-col'>
                <div className='flex'>
                <div className=''>
                <label className='text-[30px]' >Login</label>
                <label className='text-8 block' >or <span className='text-orange-500'>create an acount</span></label>
                <div className='w-14 h-1 mt-3 bg-black'></div>
                </div>
                 <img className='h-24 w-24 ml-28' src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r'/>
                </div>
                <input className='border-2 border-slate-400  w-[360px] mt-10 mb-10 px-2 h-[70px]' type='text' placeholder='Enter Any Random UserName'/>
                <button className='w-[362px] mb-10 font-semibold p-2 bg-orange-500 text-white hover:bg-orange-600 hover:shadow-lg'>Submit</button>
                <label>By clicking on Login, I accept the Terms & Conditions & Privacy Policy</label>
            </form>
            </div>
        </div>
    </div>
  )
}

export default LoginPage