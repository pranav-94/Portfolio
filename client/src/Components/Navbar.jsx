```javascript
import { useState } from "react"
import { Link } from "react-router-dom"

const Nav =()=>{

    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return(
        <nav className="md:w-[40%] h-[60px] w-[100%] flex justify-evenly items-center font-semibold border-[1px] border-[#90b8f8] text-[#90b8f8] shadow-lg rounded-lg">
             <Link  to='/' className={`text-[20px] w-[33.3%] h-[60px] flex justify-center items-center rounded-md transition-all duration-500 ease-in-out ${activeLink === '/' ? 'bg-[#90b8f8] text-black' : ''}`} onClick={() => handleLinkClick('/')}>About</Link>
             <Link  to='/projects' className={`text-[20px] w-[33.3%] h-[60px] flex justify-center items-center transition-all duration-500 ease-in-out ${activeLink === '/projects' ? 'bg-[#90b8f8] text-black' : ''}`} onClick={() => handleLinkClick('/projects')}>Projects</Link>
             <Link  to='/contact' className={`text-[20px] w-[33.3%] h-[60px] flex justify-center items-center rounded-md transition-all duration-500 ease-in-out ${activeLink === '/contact' ? 'bg-[#90b8f8] text-black' : ''}`} onClick={() => handleLinkClick('/contact')}>Contact</Link>
        </nav>
    )
}

export default Nav
```