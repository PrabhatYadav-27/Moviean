import React from 'react'
import Logo  from '../download.png';

function NavBar() {
  return (
    <div>
        <img src={Logo} alt="" />
        <h3>Movies</h3>
        <h3>Favourites</h3>
    </div>
  )
}

export default NavBar