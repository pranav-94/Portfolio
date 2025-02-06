import { useState } from "react"
import { Link } from "react-router-dom"

const Nav =()=>{

    const [style,setStyle] = useState("")

    const handleHomeClick = ()=>{
      setStyle("bg-[#90b8f8] text-black")
    }

    const handleProjectClick = ()=>{
        setStyle("bg-[#90b8f8] text-black")
      }

      const handleContactClick = ()=>{
        setStyle("bg-[#90b8f8] text-black")
      }

    return(
        <div className="md:w-[40%] h-[60px] flex justify-evenly w-[100%] items-center font-semibold border-[1px] border-[#90b8f8] text-[#90b8f8]  shadow-lg rounded-lg ">
            {/* <p className="text-[20px] ">@pranav-94</p> */}
             <Link  to='/' className={`text-[20px] w-[33.3%] h-[60px] md:hover:bg-[#90b8f8] md:hover:text-black flex justify-center items-center rounded-md transition-all duration-500 ease-in-out ${style}`}>About</Link>
             <Link onClick={handleProjectClick} to='/projects' className={`text-[20px] w-[33.3%] h-[60px] md:hover:bg-[#90b8f8] md:hover:text-black flex justify-center items-center transition-all duration-500 ease-in-out ${style}`}>Projects</Link>
             <Link onClick={handleContactClick} to='/contact' className={`text-[20px] w-[33.3%] h-[60px] md:hover:bg-[#90b8f8] md:hover:text-black flex justify-center items-center rounded-md transition-all duration-500 ease-in-out ${style}`}>Contact</Link>
        </div>
    )
}

export default Nav