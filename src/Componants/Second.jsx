import React from 'react'
import Google from '../../src/assets/google.png'
import Apple from '../../src/assets/apple.png'
import Facebook from '../../src/assets/Facebook.png'

const Second = () => {
    return (
        <div className='w-[45%] flex items-center justify-center '>
            <div className='w-[85%] h-4/5 p-9 flex flex-col gap-7 box-border rounded-3xl border border-[#0089ED] bg-white'>
                <div className='flex items-start justify-between p-2'>
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-xl font-normal'>Welcome to <span className='text-[#0089ED] font-bold'>DevPos</span></h1>
                        <h1 className='text-5xl font-medium'>Sign in</h1>
                    </div>
                    <div className='w-[25%]'>
                        <span>No Account ?
                            <a href='#' className='text-[#4285F4]'>Sign up</a></span>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className='p-2 w-[75%] rounded-xl border bg-[#E9F1FF] flex items-center justify-center gap-5 text-[#4285F4]'><img src={Google} alt="Google" />Sign in with Google</div>
                    <div className='p-2 rounded-xl border bg-[#F6F6F6] flex items-center justify-center'><img src={Apple} alt="Apple" /></div>
                    <div className='p-2 rounded-xl border bg-[#F6F6F6] flex items-center justify-center'><img src={Facebook} alt="Facebook" /></div>
                </div>
                <div className='flex flex-col gap-3'>
                <div className='flex gap-3 flex-col'>
                    <label htmlFor="userName" className='font-medium'>Enter your username or email address</label>
                    <input className='p-3 rounded-xl border border-[#4285F4]' type="email" name="userName" id="email" placeholder='Username or email address' />
                </div>
                <div className='flex gap-3 flex-col mt-5'>
                    <label htmlFor="password" className='font-medium'>Enter your Password</label>
                    <input className='p-3 rounded-xl border border-[#4285F4]' type="email" name="userName" id="email" placeholder='Password' />
                </div>
                <a href='#' className='text-[#4285F4]'>
                    <h3 className='text-right'>Forget Password</h3>
                </a>
                </div>
                <button className='bg-[#0089ED] p-3 mt-3 rounded-xl text-white font-semibold'>Sign in</button>
            </div>
        </div>
    )
}

export default Second