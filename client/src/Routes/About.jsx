

import Profile from "../Components/Profile"
import Nav from '../Components/Navbar'
import Particle from "../Components/ParticleBack"
import { menuAtom } from "../Recoil/atoms"
import { useRecoilValue } from "recoil"

const Home = ()=>{
   const menuState = useRecoilValue(menuAtom)
    return(
        <div className={`w-[100%] bg-[#181b1d] md:h-screen  text-slate-100 flex-col md:flex-row flex justify-evenly z-0  ${menuState=== false? "h-[1200px]" : "h-[850px]"}`}>
            <Particle/>
            <Profile/>
            <AboutComp/>
        </div>
    )
}

const AboutComp = ()=>{
    
    return(
        <div className='md:w-[70%] md:h-screen flex justify-center items-center z-10 '>
           <div className='md:w-[90%] w-[90%] h-[600px] md:h-[500px] bg-gray-800 rounded-md flex flex-col items-center justify-between'>


               <Nav/>
               <p className="w-[90%] flex justify-start text-[40px] text-[#90b8f8] pb-2">About</p>
               <div className="flex flex-col justify-evenly items-center md:h-[400px] h-[430px]">
               <Info/>
               </div>


           </div>
        </div>
    )
}

const Info = ()=>{
    return(
        <div className="w-[90%] md:text-[20px] text-[16px]  md:h-[350px] overflow-scroll">
            <p>I'm a Full Stack Developer based in India, with a passion for creating seamless and efficient web applications. I've been coding since 2022, and in that time, I've honed my skills in both front-end and back-end development. I'm constantly learning and exploring new technologies to stay ahead in this ever-evolving field.</p>

            <p className="w-[90%] flex justify-start mt-5 text-[40px] text-[#90b8f8] pb-2">Skills</p>
            <SkillsComp/>

        </div>
    )
}

const SkillsComp = ()=>{
    return(
        <>
        <div className=" md:h-[450px]  h-[750px] text-[16px] grid grid-cols-2 md:grid-cols-3">

          <div className="flex flex-col items-center">
             <img className="w-[50px] h-[50px]" src="https://abrudz.github.io/logos/JS.svg" alt="" />
             <p>JavaScript</p>
          </div>

          <div className="flex flex-col items-center">
             <img className="w-[50px] h-[50px]" src="https://abrudz.github.io/logos/TypeScript.svg" alt="" />
             <p>TypeScript</p>
          </div>

          <div className="flex flex-col items-center">
             <img className="w-[50px] h-[50px]" src="https://www.svgrepo.com/show/354259/react.svg" alt="" />
             <p>React js</p>
          </div>

          <div className="flex flex-col items-center">
             <img className="w-[50px] h-[50px]" src="https://www.svgrepo.com/show/452075/node-js.svg" alt="" />
             <p>Node.js</p>
          </div>

          <div className="flex flex-col items-center">
             <img className="w-[50px] h-[50px]" src="https://www.svgrepo.com/show/331488/mongodb.svg" alt="" />
             <p>MongoDB</p>
          </div>

          <div className="flex flex-col items-center">
             <img className="w-[50px] h-[50px]" src="https://files.raycast.com/gqynjodt1h64pyb2x6c6ypv6hq91" alt="" />
             <p>Next Js</p>
          </div>

          <div className="flex flex-col items-center">
            <img className="w-[50px] h-[50px]" src="https://www.svgrepo.com/show/374118/tailwind.svg" alt="" />
            <p>Tailwind Css</p>
            </div>
            <div className="flex flex-col items-center">
            <img className='w-[50px] h-[50px]' src='https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png' alt="" />
            <p>Express js</p>
            </div>

            <div className="flex flex-col items-center">
            <img className='w-[50px] h-[50px]' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png' alt="" />
            <p>Git</p>
            </div>

            <div className="flex flex-col items-center">
             <img className="w-[50px] h-[50px]" src="https://cdn.iconscout.com/icon/free/png-512/free-postgresql-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-freebies-pack-logos-icons-1175119.png?f=webp&w=512" alt="" />
             <p>Postgres</p>
          </div>

          <div className="flex flex-col items-center">
             <img className="w-[50px] h-[50px]" src="https://seeklogo.com/images/H/hono-logo-85A5D1206D-seeklogo.com.png" alt="" />
             <p>Hono</p>
          </div>

          <div className="flex flex-col items-center">
             <img className="w-[50px] h-[50px]" src="https://pbs.twimg.com/profile_images/1377116487933030410/kyyHFjc2_400x400.jpg" alt="" />
             <p>Recoil</p>
          </div>

          <div className="flex flex-col items-center">
             <img className="w-[50px] h-[50px]" src="https://downloads.marketplace.jetbrains.com/files/14282/146547/icon/pluginIcon.png" alt="" />
             <p>Prisma</p>
          </div>

          <div className="flex flex-col items-center">
             <img className="w-[50px] h-[50px]" src="https://abrudz.github.io/logos/Python.svg" alt="" />
             <p>Python</p>
          </div>

          <div className="flex flex-col items-center">
             <img className="w-[50px] h-[50px]" src="https://abrudz.github.io/logos/Java.svg" alt="" />
             <p>Java</p>
          </div>

          </div>
        </>
    )
}

export default Home
