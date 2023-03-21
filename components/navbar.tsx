import React from 'react'
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faLocationDot, faPhone} from "@fortawesome/free-solid-svg-icons";
import {
    faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";

interface Props {
    showNav: Boolean
};
const NavBar = ({showNav}: Props) => (
    <>
        <nav
            className={`${(!showNav) ? 'hidden' : ''} bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600`}>
            <div className="px-2 container flex flex-wrap justify-between items-center mx-auto">
                <div className="flex"> <Image width="32" height="32" src="/static/portrait.png"
                                                                                                 alt="Tony Wang"/><span className={'ml-2 text-xl font-semibold whitespace-nowrap text-slate-900 '}>Tony Wang</span></div>

                <a href={'https://www.linkedin.com/in/tony-wang-4a6b5b124/'} className="hover:opacity-70  text-xl font-semibold whitespace-nowrap text-slate-900 "><FontAwesomeIcon icon={faLinkedinIn}/></a>
            </div>
        </nav>
        <header className="text-gray-100 bg-gradient-to-b from-slate-900 to-slate-600 w-full z-50 py-2">

            <div className="lg:container w-full md:px-8 xl:px-0  py-8 md:py-8 lg:py-20 mx-auto">
                <div className={'flex flex-col md:flex-row  items-center justify-center md:justify-between'}>
                    <div
                        className="text-gray-200 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl p-5 lg:p-0 font-bold lg:w-3/5 flex flex-col items-center text-center md:items-start md:text-left">
                        <p className={'font-[monospace] text-4xl sm:text-6xl md:text-7xl mb-5 lg:mb-10 bg-clip-text text-transparent bg-gradient-to-r to-sky-400 from-violet-400'}>Hello
                            World,</p>

                        <div className="leading-tight text-white">I&apos;m <h1 className={'inline-block'}>Tony Wang</h1>
                            <span className={'text-sm text-gray-500 ml-2'}>(INTP)</span></div>
                        <h2 className="text-white">Senior
                            Front-end Developer</h2>
                        <p className={'mt-5 lg:mt-10 text-base  lg:text-lg xl:text-lg font-light'}>Focused on
                            accomplishing challenging development goals under strict deadlines. Analytical and
                            resourceful problem-solver with disciplined approach and skill in producing clean, robust
                            code.</p>
                        {/*<p className={'mt-5 lg:mt-10 text-base  lg:text-lg xl:text-lg font-light'}>- I&apos;m looking
                            for a full-time role as Front-end Developer at Auckland.</p>*/}
                    </div>
                    <div className="flex justify-end xl:justify-center items-center w-1/2 sm:w-2/5">
                        <Image width="256" height="256" src="/static/portrait.png"
                               className="md:max-h-32 lg:max-h-21"
                               alt="artwork"/></div>
                </div>

                <div className={'basis-full pt-10  px-5  lg:px-0 lg:pt-20 flex flex-col md:flex-row justify-between xl:justify-evenly items-center md:items-start'}>
                    <p><span className={'inline-block w-8'}><FontAwesomeIcon icon={faLocationDot}/></span><span
                        className={'hover:underline hover:opacity-80'}><a
                        target="_blank" rel="noreferrer"
                        href={'https://goo.gl/maps/tp8bZKeCeoq7duip6'}>Auckland, New Zealand</a></span></p>
                    <p><span className={'inline-block w-8'}><FontAwesomeIcon icon={faEnvelope}/></span><span
                        className={'hover:underline hover:opacity-80'}><a
                        href="mailto:anthonywang0517@gmail.co">anthonywang0517@gmail.com</a></span></p>
                    <p><span className={'inline-block w-8'}><FontAwesomeIcon icon={faPhone}/></span><span
                        className={'hover:underline hover:opacity-80'}><a
                        href="tel:006402108824591">+64 021 088 24591</a></span></p>
                </div>
            </div>

        </header>
    </>
)

export default NavBar;
