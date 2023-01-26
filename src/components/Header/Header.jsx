import React from 'react'
import "./Header.css"
import Logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
import Button from '../../Re-useable/Button'

const Header = () => {
    const NavLink = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "About",
            link: "/About"
        },
        {
            name: "Contact",
            link: "/Contact"
        },
        {
            name: "Product",
            link: "/Products"
        }
    ]
  return (
    <div className='header'>
        <div className='logo w-[90px] h-[60px]'>
            <img src={Logo} alt='Logo'/>
        </div>

        <ul >
            {NavLink.map((item)=>{
                return(
                    <li><Link to={item.link} className="font-black text-xl text-[#2c3e50]">{item.name}</Link></li>
                )
            })}
            
        </ul>
        <Button title={"Login"} className="mr-4 bg-[#2980b9] border-2 hover:border-[#2090b9] hover:bg-white hover:text-[#2980b9] text-[#fff] pl-3 pr-3 pb-2 pt-2"/>
    </div>
  )
}

export default Header
