import { useState } from "react";
import { Link } from "react-router-dom";
import './pages.css';
import { FaBeer ,FaBars,FaTimes} from 'react-icons/fa';
const Navbar = () => {
    const [isMobile,setIsMobile]= useState(false);
    return (
        <>
        <nav className="navbar">
            <h1 className='logo'> logo</h1>
            <ul className={isMobile?'nav-links-mobile':'nav-links'}
             onClick={()=>setIsMobile(false)}>
                <Link to='/' className='about'><li>about</li></Link>
                <Link to='/news'  className='news'><li>news</li></Link>
                <Link to='/content' className='content'><li>content</li></Link>
            </ul>
            <button className='mobile-menu-icon'
            onClick={()=>setIsMobile(!isMobile)}>{isMobile? <FaTimes/>:<FaBars/>}</button>
        </nav>  
        </>
    );
}

export default Navbar;
