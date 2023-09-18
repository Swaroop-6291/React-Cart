import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import {FiShoppingBag} from "react-icons/fi"

const Header = () => {
  return (
    <nav>
       <h2>DUKAAN.COM</h2>

       <div>
         <Link to="/">Home</Link>
         <HashLink to={"/#about"}>About</HashLink>
         <Link to="/cart">
           <FiShoppingBag/>
           <p>{0}</p>
         </Link>
         
        </div> 
    </nav>
  )
}

export default Header