import { useState } from "react"
import {menuAtom}  from "../Recoil/atoms"
import { useRecoilState } from "recoil"
import SpotifyProfile from "./spotify-component"

const Profile = ()=>{

    const[mobileState,setMobileState] = useRecoilState(menuAtom)
    console.log(menuAtom)

/* Storing user's device details in a variable*/
let details = navigator.userAgent; 
  
/* Creating a regular expression  
containing some mobile devices keywords  
to search it in details string*/
let regexp = /android|iphone|kindle|ipad/i; 
  
/* Using test() method to search regexp in details 
it returns boolean value*/
let isMobileDevice = regexp.test(details); 

const isAndroid = /Android/i.test(navigator.userAgent);
if(isAndroid){
    setMobileState(true)
}
  
if (isMobileDevice) { 
     setMobileState(true)
} 

const handleMobileFun = ()=>{
    setMobileState(!mobileState)
}


    return(
        <>
        {

         mobileState===true? <>
            
            <div className="md:w-[30%] h-[200px]  flex justify-center items-center z-10">
            <div className="md:w-[80%] w-[90%] h-[130px] bg-gray-800 rounded-lg flex flex-col items-center justify-evenly">
            <button className="md:hidden fixed top-[70px] right-7" onClick={handleMobileFun}></button>

                <div className="w-[85%] flex items-center">
                <img className='rounded-xl md:w-[70px] md:h-[70px] w-[70px] h-[70px] hover:scale-105 hover:rotate-1 shadow-lg transform-all duration-300 ease-in-out' src="../../ds_j6rNE_400x400.jpg" alt="" />
                <div className="ml-3">
                <p className="font-semibold text-[17px] text-[#90b8f8]">Pranav Latpate</p>
                <p>Full-Stack Dev</p>
                </div>
                </div>
                <div className="absolute top-12 right-0">
                <SpotifyProfile/>
                </div>

                <div className="flex justify-evenly w-[100%] text-[#90b8f8]">
                <a href="https://github.com/pranav-94" target="blank">Github</a>
                <a href="https://x.com/Uchiha_D_Levi" target="blank">Twitter</a>
                <a href="https://x.com/Uchiha_D_Levi" target="blank">LinkedIn</a>
            </div>

            </div>
            </div>
         
         </> :
        <div className="md:w-[30%] md:h-screen flex justify-center items-center z-10">
            <div className="md:w-[80%]  w-[90%] h-[500px] bg-gray-800 rounded-md flex flex-col items-center justify-evenly">
            <SpotifyProfile/>
            <button className="md:hidden fixed top-[70px]  right-7" onClick={handleMobileFun}><img src="https://cdn-icons-png.flaticon.com/128/14025/14025489.png" className="w-[25px] h-[25px]" alt="" /></button>
            <img className='rounded-lg md:w-[150px] md:h-[150px] w-[150px] h-[150px] hover:scale-105 hover:rotate-1 shadow-lg transform-all duration-300 ease-in-out' src="../../ds_j6rNE_400x400.jpg" alt="" />
            <div className="w-[80%]">
            <p className="text-[30px] text-[#90b8f8]">Pranav Latpate</p>
            <p>Full-Stack Dev</p>
            </div>
            <div className="flex justify-evenly w-[100%] text-[#90b8f8]">
                <a href="https://github.com/pranav-94" target="blank">Github</a>
                <a href="https://x.com/Uchiha_D_Levi" target="blank">Twitter</a>
                <a href="https://x.com/Uchiha_D_Levi" target="blank">LinkedIn</a>
            </div>
            </div>
        </div>
}
        </>
    )
}

export default Profile