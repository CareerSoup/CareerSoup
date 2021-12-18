import  React,{useState} from 'react'
import './NavBar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import { BsSearch } from "react-icons/bs";


function NewNavBar() {
    const[clicked,setClicked]=useState(true);
   
    const handleClick =()=>{
        if(clicked){
            setClicked(false)
        }else{
            setClicked(true) 
        }
    }

    return (
            <nav className="NavBar-items">
                <h1 className='navbar-logo'>CS</h1>
                <div className='menu-icon' onClick={handleClick}>
                    {clicked? <GiHamburgerMenu/>:<MdCancel/>}
                </div>
                <ul className={clicked? 'nav-menu active': 'nav-menu'}>
                    <li><a className="nav-links" href='#'>Services</a></li>
                    <li><a className="nav-links" href='#'>Learning</a></li>
                    <li><a className="nav-links" href='#'>Alumini</a></li>
                    <li><a className="nav-links" href='#'>About Us</a></li>
                    <li><a className="nav-links" href='#'>More</a></li>
                </ul>
                <div className="right-cont">
                <BsSearch className='search-icon'/>   
                <button className='signIn-btn'>Sign-in</button>
                <button className='signIn-btn'>Resgister</button>
                </div>
                
                
            </nav>
       
    )
}

export default NewNavBar