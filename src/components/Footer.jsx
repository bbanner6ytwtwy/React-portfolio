import React from 'react'

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <>
            <div className="bg-brown w-screen px-3 ">
                        <div className="row text-center p-3">
                        <div className="col-lg-4">
                        <div className="my-3">
                        <a href="https://ww.google.com" target="_blank">
                        <i
                            className="fa-brands p-2 my-2 2xl:mx-4 xl:mx-4 lg:mx-4 mx-2 font-headfour fa-instagram text-zinc-50 bg-zinc-800 hover:bg-zinc-50 hover:text-rose-500 rounded-full"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/akintunde-abegunrin-0b653a255/" target="_blank">
                        <i
                            className="fa-brands p-2 my-2 2xl:mx-4 xl:mx-4 lg:mx-4 mx-2 font-headfour fa-linkedin text-zinc-50 bg-zinc-800 hover:bg-zinc-50 hover:text-blue-500 rounded-full"></i>
                    </a>
                    <a href="https://github.com/bbanner6ytwtwy" target="_blank">
                        <i
                            className="fa-brands p-2 my-2 2xl:mx-4 xl:mx-4 lg:mx-4 mx-2  font-headfour fa-github text-zinc-50 bg-zinc-800 hover:bg-zinc-50 hover:text-stone-900 rounded-full"></i>
                    </a>
                    <a href="https://wa.me/message/7H5JMZNIQ57DK1" target="_blank">
                    <i class="fa-brands fa-whatsapp p-2 my-2 2xl:mx-4 xl:mx-4 lg:mx-4 mx-2  font-headfour text-zinc-50 bg-zinc-800 hover:bg-zinc-50 hover:text-green-500 rounded-full"></i>
                    </a>
                    </div>
                        </div>
                        <div className="col-lg-4">
                           <h1 className="font-headfour font-serif text-zinc-100">Contacts</h1>
                           <p className="text-zinc-300">+234 090 390 21880</p>
                           <p className="text-zinc-300">+234 070 173 29926</p>
                        </div>
                        <div className="col-lg-4">
                            <h1 className="font-headfour font-serif text-zinc-100">Emails</h1>
                            <p className="text-zinc-300" >Akincodezz@gmail.com</p>
                            <p className="text-zinc-300" >Bizsmart386@gmail.com</p>
                        </div>
                        <h1 className=" fs-6 text-light pt-3" >Made By Akintunde @Copyright year {year}</h1>
                        </div>
                        
            </div>
        </>
    )
}

export default Footer
