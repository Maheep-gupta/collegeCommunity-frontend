import React from 'react'
import LoggedUserNav from './LoggedUserNav'
import logo from './../assets/cc-logo.png'
function Navbar() {
    return (
        <>
            <nav className='flex  w-full '>
                <div className='flex w-full gap-32'
                >
                    <div className='flex gap-x-1 justify-center items-center'>
                        <img className='h-10 w-10' src={logo} alt=" cclogo" />
                        <span className='font-mont font-semibold'>College Community</span>
                    </div>
                    <div className='flex bg-bgPink font-robo items-center w-[40%] rounded-xl gap-2 px-2'>
                        <span className='h-4 w-4 '>
                            <svg className='h-4 w-4' xmlns="http://www.w3.org/2000/svg" fill='#808080' viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                        </span>
                        <span className='bg-inherit w-full'>
                            <input type="text" placeholder='Search' className='bg-inherit w-full outline-none' />
                        </span>
                    </div>
                </div>
                <div className='flex gap-5 pr-10'>
                    <div className='bg-bgPink h-10 w-10 rounded-lg flex justify-center items-center'>

                        <svg viewBox="0 0 20 20" className='h-4 w-4' xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#000000" fillRule="evenodd" d="M3.423 7.003C3.352 3.308 6.171 0 10 0c3.83 0 6.648 3.308 6.576 7.003a28.69 28.69 0 00-.005.497c0 1.647.188 3.94.315 5.3.006.067.009.134.009.2H18a1 1 0 110 2h-4a4 4 0 01-8 0H2a1 1 0 110-2h1.105c0-.066.003-.133.01-.2.126-1.36.314-3.653.314-5.3 0-.16-.002-.325-.006-.497zM7.023 13h7.865l.003-.003a.017.017 0 00.003-.005v-.006c-.126-1.36-.323-3.736-.323-5.486 0-.174.002-.353.006-.536C14.63 4.253 12.578 2 10 2S5.37 4.253 5.423 6.964c.004.183.006.362.006.536 0 1.75-.197 4.126-.324 5.486a.02.02 0 000 .004v.002l.004.005a.013.013 0 00.003.003h1.911zM8 15a2 2 0 104 0H8z"></path> </g></svg>
                    </div>
                    <div className='bg-bgPink h-10 w-10 rounded-lg flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='h-4 w-4' viewBox="0 0 384 512"><path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z" /></svg>
                    </div>
                </div>
                <div className='w-60'>
                    <LoggedUserNav />
                </div>
            </nav>
        </>
    )
}

export default Navbar