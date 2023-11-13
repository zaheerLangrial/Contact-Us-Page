import React from 'react'
import DoSomeCodingLogo from "../assets/DoSomeCodingLogo.jpg";

function Nav() {
  return (
    <div className="flex justify-between items-center max-w-7xl mx-auto">
      <div>
        <img src={DoSomeCodingLogo} alt="" />
      </div>
      <ul className="flex space-x-5 text-[16px] text-[#2E2E2E] leading-[24px] cursor-pointer">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
    </div>
  )
}

export default Nav