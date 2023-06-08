import React, {useState, useEffect} from 'react'
import {Fade, Bounce} from 'react-reveal';
import {Complex, Img} from '../../Content'
import {Basic} from '../../Content'
import {Standard} from '../../Content'
function Home() {
    const [bg, setBg] = useState("bg-light")

    return (
        <> 

        <div className = "2xl:px-3 xl:px-3 lg:px-3 md:px-2 px-2" id = "home" > 
        <div className="row">

        <Fade duration={1000} top="top">
            <div
                className="col-12 xl:pt-44  sm:pt-32 pt-36 2xl:px-44 xl:px-44 lg:px-14 md:px-7 px-0 text-center pb-32">
                <h1
                    className="font-head text-white underline text-center xl:px-5 xl:mx-5 px-2 mx-2"
                    style={{
                        "fontFamily" : "Anton"
                    }}>WELCOME
                    TO MY PORTFOLIO, I HOPE YOU ENJOY THE DESIGN, THE EXPERIENCE, JUST ENJOY IT.</h1>
                <hr className="w-9/12 h-5 bg-black opacity-100 mx-auto"/>
                <h1
                    className="font-sechead text-slate-300 mb-2 text-center xl:px-5 xl:mx-5 px-2 mx-2 mt-3"
                    style={{
                        "fontFamily" : "Anton"
                    }}>HI,
                    I'M AKINTUNDE ABEGUNRIN, I'M A FRONTEND DEVELOPER/ENGINEER WITH A PASSION FOR
                    KNOWING AND UNDERSTANDING TECH.</h1>
                {
                    Img.map((e) => {
                        return <img
                            className="my-1 bg-zinc-50 rounded-5 d-inline-block w-icon mx-2"
                            src={e.img}
                            alt="logo"/>
                    })
                }
                <hr className="w-5/12 h-5 bg-black opacity-100 mx-auto"/>
                <button className="btn btn-lg btn-dark mt-4 rounded-5">
                    <a
                        className=""
                        href="#contact"
                        style={{
                            "fontFamily" : "Anton"
                        }}>Contact me</a>
                </button>
                <div className="2xl:w-8/12 w-10/12 mx-auto mt-4">
                    <a href="https://instagram.com/ble55in9in?igshid=NTc4MTIwNjQ2YQ==" target="_blank">
                        <i
                            className="fa-brands p-2 my-2 2xl:mx-4 xl:mx-4 lg:mx-4 mx-2 font-headthree fa-instagram text-zinc-50 bg-zinc-800 hover:bg-zinc-50 hover:text-rose-500 rounded-full"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/akintunde-abegunrin-0b653a255/" target="_blank">
                        <i
                            className="fa-brands p-2 my-2 2xl:mx-4 xl:mx-4 lg:mx-4 mx-2 font-headthree  fa-linkedin text-zinc-50 bg-zinc-800 hover:bg-zinc-50 hover:text-blue-500 rounded-full"></i>
                    </a>
                    <a href="https://github.com/bbanner6ytwtwy" target="_blank">
                        <i
                            className="fa-brands p-2 my-2 2xl:mx-4 xl:mx-4 lg:mx-4 mx-2  font-headthree  fa-github text-zinc-50 bg-zinc-800 hover:bg-zinc-50 hover:text-stone-900 rounded-full"></i>
                    </a>
                    <a href="https://wa.me/message/7H5JMZNIQ57DK1" target="_blank">
                    <i class="fa-brands fa-whatsapp p-2 my-2 2xl:mx-4 xl:mx-4 lg:mx-4 mx-2  font-headthree text-zinc-50 bg-zinc-800 hover:bg-zinc-50 hover:text-green-500 rounded-full"></i>
                    </a>
                </div>

            </div>
        </Fade>
        </div> 
        </div> 
    
    <div className = {
        bg + " px-2"
    }
    id = "about" > <Fade duration={1000}  bottom="bottom">
        <div className="row bg-light">
            <div className="col-12 text-center my-3">
                <button className="bg-black rounded-5 fs-4 p-3 mt-5 select-none text-light">A Little About me.</button > <h1
        className="font-headthree pt-14 general-font  2xl:px-60 xl:px-44 lg:px-32 md:px-20 sm:px-7  mx-10 text-black"
        style={{
            "fontFamily" : "Anton"
        }}>HI,
        I'M AKINTUNDE, I'M 19 AND AN ASPIRING TECH BRO, I LIVE FOR TECH AND EXPERIENCES.</h1>
    <p className="font-headfour mt-5 mx-7 text-black opacity-50 fw-bold">
        My Passion for Tech Started when i was a little boy, I found myself always
        wanting to know how tech gadgets are made, that led to dismantling and other
        things with the parents i can't say, That desire extended to binge watching all
        the youtube videos on Mordern tech innovations. One day i stumbled accross an
        amazing website design tutorial for a Restaurant sites then i was hooked, And
        the lifestyle is a plus, i love my solitude.</p>
    <p className="font-headfour mt-5 mx-7 pb-5 text-black opacity-50 fw-bold">My #1 Goal
        is To Grow My Skills and Sharpen my knowledge base, I want to be the best developer i
        can be.</p> </div>
</div> 
</Fade> <div className = "row bg-light" > <Fade  bottom="bottom">
        <div className="col-12 text-center my-5">
            <button className="bg-black rounded-5 fs-4 p-3 select-none text-light">My work</button >
            <h1
                className="font-head pt-3 general-font text-black text-center"
                style={{
                    "fontFamily" : "Anton"
                }}>Complex Projects</h1>
        </div>
        <div className="home-bgi pb-10 row mx-1">
            {
                Complex.map((element) => {
                    return (
                        <div key={element.id} className="col-lg-6 col-md-6 px-2 py-2 text-center sm:mt-1 ">
                            <a className="text-decoration" href={element.url} rel="dns-prefetch" target="_blank">
                                <div
                                    className="card align-middle mb-1 border-4 grayscale  hover:grayscale-0 rounded-3xl ">
                                    <img src={element.img} className="card-img-top rounded-3xl" alt="img"/>
                                    <div className="card-body">
                                        <p
                                            className="card-text font-headfour general-font"
                                            style={{
                                                "fontFamily" : "Anton"
                                            }}>{element.title}</p>
                                        <p className="card-text px-2 ">{element.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    )
                })
            }
            </div>
            </Fade>
            <div className="parent-element position-relative overflow-x-clip h-72 bg-light">
                <div className=" my-auto  pt-4 d-block">
                    <div className="text-animation1">
                        <h1
                            className="move-text general-font d-inline-block "
                            style={{
                                "fontFamily" : "Anton"
                            }}>
                            HI, I'M AKINTUNDE AND I'M A WEB DEVELOPER,
                            <i className="fa-brands fa-github px-2 text-6xl align-middle"></i>
                            I FELL IN LOVE WITH TECH FIRST, THEN CODE.
                            <i
                                className="fa-brands fa-bootstrap text-indigo-700 px-2 text-6xl align-middle"></i>
                        </h1>
                        <h1
                            className="move-text d-inline-block general-font "
                            style={{
                                "fontFamily" : "Anton"
                            }}>
                            HI, I'M AKINTUNDE AND I'M A WRITER,
                            <i className="fa-brands fa-html5 px-2 text-orange-700 text-6xl align-middle"></i>
                            I WRITE WHAT I FEEL AND PEOPLE LOVE IT, MOST TIMES.
                            <i className="fa-brands fa-css3-alt px-2 text-blue-700 text-6xl align-middle"></i>
                        </h1>
                        <h1
                            className="move-text  d-inline-block general-font "
                            style={{
                                "fontFamily" : "Anton"
                            }}>
                            HI, I'M AKINTUNDE AND I'M A WORDPRESS DEVELOPER,
                            <i className="fa-solid fa-server px-2 text-blue-950 text-6xl align-middle"></i>
                            I LEARNT WORDPRESS CMS, I LOVED THE EASE OF USE.
                            <i
                                className="fa-solid fa-cloud-arrow-up px-2 text-red-500 text-6xl align-middle"></i>
                        </h1>
                    </div>
                    <div className="text-animation">
                        <h1
                            className="move-text general-font d-inline-block "
                            style={{
                                "fontFamily" : "Anton"
                            }}>
                            HI, I'M AKINTUNDE AND I'M A WEB DEVELOPER,
                            <i className="fa-brands fa-apple px-2 text-6xl align-middle"></i>
                            I FELL IN LOVE WITH TECH FIRST, THEN CODE.
                            <i className="fa-solid fa-database text-green-800 px-2 text-6xl align-middle"></i>
                        </h1>
                        <h1
                            className="move-text d-inline-block general-font "
                            style={{
                                "fontFamily" : "Anton"
                            }}>
                            HI, I'M AKINTUNDE AND I'M A WRITER,
                            <i className="fa-brands fa-amazon text-amber-300 px-2 text-6xl align-middle"></i>
                            I WRITE WHAT I FEEL AND PEOPLE LOVE IT, MOST TIMES.
                            <i className="fa-brands fa-youtube text-red-600 px-2 text-6xl align-middle"></i>
                        </h1>
                        <h1
                            className="move-text  d-inline-block general-font "
                            style={{
                                "fontFamily" : "Anton"
                            }}>
                            HI, I'M AKINTUNDE AND I'M A WORDPRESS DEVELOPER,
                            <i className="fa-brands fa-paypal text-blue-600 px-2 text-6xl align-middle"></i>
                            I LEARNT WORDPRESS CMS, I LOVED THE EASE OF USE.
                            <i className="fa-brands fa-js text-yellow-300 px-2 text-6xl align-middle"></i>
                        </h1>
                    </div>
                </div>
            </div>
            </div>

                <div className="row  bg-light">
                    <Fade bottom>
                        <div className="col-12 text-center my-4">
                            <h1
                                className="font-head pt-3 general-font text-black text-center"
                                style={{
                                    "fontFamily" : "Anton"
                                }}>Standard Projects</h1 >
                        </div>
                        <div className="home-bgi pb-14 row mx-1">
                            {
                                Standard.map((element) => {
                                    return (
                                        <div key={element.id} className="col-lg-6 col-md-6 px-2 py-2 text-center sm:mt-1">
                                            <a className="text-decoration" href={element.url} target="_blank">
                                                <div
                                                    className="card  mb-1 border-4 grayscale text-bg-secondary  hover:grayscale-0 rounded-3xl">
                                                    <img src={element.img} className="card-img-top rounded-3xl" alt="img"/>
                                                    <div className="card-body">
                                                        <p
                                                            className="card-text font-headfour general-font"
                                                            style={{
                                                                "fontFamily" : "Anton"
                                                            }}>{element.title}</p>
                                                        <p className="card-text px-2 ">{element.description}</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    )
                                })
                            }
                            </div>
                            </Fade>
                            <div className="parent-element position-relative overflow-x-clip h-32 bg-light">
                                <div className=" my-auto  pt-4 d-block">
                                    <div className="text-animation2">
                                        <h1
                                            className="move-text general-font d-inline-block"
                                            style={{
                                                "fontFamily" : "Anton"
                                            }}>
                                            CONTACT ME NOW, LET'S WORK TOGETHER.
                                            <i className="fa-brands fa-apple px-2 text-6xl align-middle"></i>
                                            CONTACT ME NOW, LET'S WORK TOGETHER.
                                            <i className="fa-solid fa-database text-green-800 px-2 text-6xl align-middle"></i>
                                        </h1>
                                        <h1
                                            className="move-text d-inline-block general-font"
                                            style={{
                                                "fontFamily" : "Anton"
                                            }}>
                                            CONTACT ME NOW, LET'S WORK TOGETHER.
                                            <i className="fa-brands fa-amazon text-amber-300 px-2 text-6xl align-middle"></i>
                                            CONTACT ME NOW, LET'S WORK TOGETHER.
                                            <i className="fa-brands fa-youtube text-red-600 px-2 text-6xl align-middle"></i>
                                        </h1>
                                        <h1
                                            className="move-text  d-inline-block general-font"
                                            style={{
                                                "fontFamily" : "Anton"
                                            }}>
                                            CONTACT ME NOW, LET'S WORK TOGETHER.
                                            <i className="fa-brands fa-paypal text-blue-600 px-2 text-6xl align-middle"></i>
                                            CONTACT ME NOW, LET'S WORK TOGETHER.
                                            <i className="fa-brands fa-js text-yellow-300 px-2 text-6xl align-middle"></i>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            </div>
                                <div className="row pt-14 bg-light">
                                    <Fade  bottom="bottom">
                                        <div className="col-12 text-center my-3">
                                            <h1
                                                className="font-head pt-3 general-font text-black text-center"
                                                style={{
                                                    "fontFamily" : "Anton"
                                                }}>Basic Projects</h1 >
                                        </div>
                                        <div className="home-bgi row mx-1">
                                            {
                                                Basic.map((element) => {
                                                    return (
                                                        <div key={element.id} className="ccol-lg-6 col-md-6 px-2 py-2 text-center sm:mt-1">
                                                            <a className="text-decoration" href={element.url} target="_blank">
                                                                <div
                                                                    className="card  mb-1 border-4 grayscale text-bg-dark  hover:grayscale-0 rounded-3xl">
                                                                    <img src={element.img} className="card-img-top rounded-3xl" alt="img"/>
                                                                    <div className="card-body">
                                                                        <p
                                                                            className="card-text font-headfour general-font"
                                                                            style={{
                                                                                "fontFamily" : "Anton"
                                                                            }}>{element.title}</p>
                                                                        <p className="card-text px-2">{element.description}</p>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </Fade>

                                    <div
                                        className="parent-element position-relative overflow-x-clip h-44 bg-light"
                                        id="contact">
                                        <div className=" my-auto  pt-4 d-block">
                                            <div className="text-animation2">
                                                <h1
                                                    className="move-text general-font d-inline-block"
                                                    style={{
                                                        "fontFamily" : "Anton"
                                                    }}>
                                                    CONTACT ME NOW, LET'S WORK TOGETHER.
                                                    <i className="fa-brands fa-apple px-2 text-6xl align-middle"></i>
                                                    CONTACT ME NOW, LET'S WORK TOGETHER.
                                                    <i className="fa-solid fa-database text-green-800 px-2 text-6xl align-middle"></i>
                                                </h1>
                                                <h1
                                                    className="move-text d-inline-block general-font"
                                                    style={{
                                                        "fontFamily" : "Anton"
                                                    }}>
                                                    CONTACT ME NOW, LET'S WORK TOGETHER.
                                                    <i className="fa-brands fa-amazon text-amber-300 px-2 text-6xl align-middle"></i>
                                                    CONTACT ME NOW, LET'S WORK TOGETHER.
                                                    <i className="fa-brands fa-youtube text-red-600 px-2 text-6xl align-middle"></i>
                                                </h1>
                                                <h1
                                                    className="move-text  d-inline-block general-font"
                                                    style={{
                                                        "fontFamily" : "Anton"
                                                    }}>
                                                    CONTACT ME NOW, LET'S WORK TOGETHER.
                                                    <i className="fa-brands fa-paypal text-blue-600 px-2 text-6xl align-middle"></i>
                                                    CONTACT ME NOW, LET'S WORK TOGETHER.
                                                    <i className="fa-brands fa-js text-yellow-300 px-2 text-6xl align-middle"></i>
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                            </>
                            )
}

export default Home
