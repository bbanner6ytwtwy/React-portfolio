import React from 'react'

function Header() {
    return (
        <>
                        <nav className="navbar navbar-expand-lg p-3 position-fixed z-40 w-100 bg-brown">
                        <div className="container-fluid">
                        <a className="navbar-brand font-headthree general-font text-light" href="#home" style={{"fontFamily":"Anton"}}>Akintunde</a>
                           <div className="rounded-full p-3 ">
                           <a href="#home">
                           <i className="p-2 fa-solid font-headfour fa-house text-light hover:bg-black hover:rounded-full"></i>
                           </a>
                           <a href="#contact" >
                           <i className="p-2 fa-solid font-headfour  fa-phone text-light hover:bg-black hover:rounded-full"></i>
                           </a>
                           <a href="#about">
                           <i className="p-2 fa-solid font-headfour  fa-user text-light hover:bg-black hover:rounded-full"></i>
                           </a>
                           </div> 
                        </div> 
                    </nav>
        </>
    )
}

export default Header
