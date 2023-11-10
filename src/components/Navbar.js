import React, { useEffect, useState } from 'react'
import './Navbar.css'
function Navbar() {
    const [show,setShow]=useState(false)
    useEffect(()=>{
             window.addEventListener('scroll',()=>{
                if(window.scrollY>600){
                    setShow(true)
                }
                else{
                    setShow(false)
                }
             })
    },[])
  return (
    <div>
        <div className={`nav ${show && 'navblck'}`}>
            <img className='navimg' src="https://i.postimg.cc/FH4dXjgd/Netflix-logo-red-black-png-removebg-preview.png" alt="" />
        </div>
    </div>
  )
}

export default Navbar