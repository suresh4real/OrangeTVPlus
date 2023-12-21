import React from 'react'
import "../styles/sidebar.css"
import "boxicons";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar-comp'>
      <img  src="https://play-lh.googleusercontent.com/enfAD5xU52suceuSJ4CTeSIXm8cahKbcSyj2BqQzzcSxDfkR61bn7siekMeyQ4CbD8c" alt="" />
      {/* <h1 >OrangeTv Plus</h1> */}
      <div className='nav-links'>
        <Link to={'/'}><span><box-icon type='solid' name='home' color="white"></box-icon></span> Home</Link>
        <Link to={'/search'}><span><box-icon name='search-alt-2' color="white" ></box-icon></span>Search</Link>
        <Link to={'/add'}><span><box-icon name='camera-movie' type='solid' color="white"></box-icon></span>Addmovies</Link>
        <Link to={'/profile'}><span><box-icon name='user-circle' color="white"></box-icon> </span>Profile</Link>
      </div>
    </div>
  )
}

export default Sidebar