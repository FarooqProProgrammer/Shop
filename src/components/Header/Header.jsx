import React from 'react'
import "./Header.css"
import Logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
import Button from '../../Re-useable/Button'
import {FaBars} from "react-icons/fa"
import {BsBackspace} from "react-icons/bs"
const Header = () => {
    const [handleNav,setHandleNav] = React.useState(false);
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
    <>
    <div className='header'>
        <div className='logo w-[90px] h-[60px]'>
            <img src={Logo} alt='Logo'/>
        </div>
        <div className="list">
        <ul className=''>
            {NavLink.map((item)=>{
                return(
                    <li><Link to={item.link} className="font-black text-xl text-[#2c3e50]">{item.name}</Link></li>
                )
            })}
            
        </ul>
        </div>
        <FaBars  onClick={()=> setHandleNav(true)} className='icon mr-3 text-[#34495e] cursor-pointer' size={30}/>
        <Button title={"Login"} className="btn mr-4 z-[999] bg-[#2980b9] border-2 hover:border-[#2090b9] hover:bg-white hover:text-[#2980b9] text-[#fff] pl-3 pr-3 pb-2 pt-2"/>

    </div>


    {/* ============ Mobile Bar ============================= */}
    <div className={`${handleNav ?'mobile_bar':'hidden'} relative`}>
        <BsBackspace size={32} className='absolute top-0 right-0' onClick={()=> setHandleNav(false)}/>
    <ul className=''>
            {NavLink.map((item)=>{
                return(
                    <li><Link to={item.link} className="font-black text-xl text-[#2c3e50]">{item.name}</Link></li>
                )
            })}
            
        </ul>

    </div>
    </>
  )
}

export default Header
