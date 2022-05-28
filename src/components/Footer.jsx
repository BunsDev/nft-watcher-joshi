import React from 'react'
import twitterLogo from '../assets/twitter-logo.svg'
function Footer() {
  return (
    <div className="flex justify-center items-center bg-white px-4 py-2 md:px-8">
        <img alt="Twitter Logo" className="twitter-logo w-8" src={twitterLogo} />
        <a className="text-black" href="https://twitter.com/chiragjoshi28" target="_blank" rel="noreferrer">build by @chiragjoshi28</a>
    </div>
  )
}

export default Footer