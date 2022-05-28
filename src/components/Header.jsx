import React from 'react'
import logo from '../logo.png';


function Header() {
  return (
    <div className="bg-white flex px-4 py-2 md:px-8">
      <img src={logo} className="w-6 mr-2" /> 
      <h2 className="font-press text-sm">NFT Watcher</h2>
    </div>
  )
}

export default Header