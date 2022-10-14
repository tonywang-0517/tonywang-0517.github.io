import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
    return (
        <div>
            <header className="text-gray-100 bg-gradient-to-bl to-black from-gray-800 w-full z-50 py-2">
                <div className="px-2 md:px-4 lg:px-0 py-2 lg:container mx-auto text-gray-200"><a
                    href="https://www.linkedin.com/in/dr-sumedh-kanade/" target="_blank" rel="noopener"
                    className="flex justify-end items-baseline space-x-2 hover:underline"><span
                    className="text-sm md:text-base">Get in touch</span><span className="w-4 h-4"><svg aria-hidden="true"
                                                                                                       focusable="false"
                                                                                                       data-prefix="fab"
                                                                                                       data-icon="linkedin"
                                                                                                       className="svg-inline--fa fa-linkedin fa-w-14 "
                                                                                                       role="img"
                                                                                                       xmlns="http://www.w3.org/2000/svg"
                                                                                                       viewBox="0 0 448 512"><path
                    fill="currentColor"
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></span></a>
                </div>
                <div className="lg:container w-full  flex flex-col md:flex-row  items-center justify-center md:justify-between  md:px-8 xl:px-0  py-8 md:py-8 lg:py-20 mx-auto">
                    <hgroup
                        className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl p-5 font-bold lg:w-3/5 flex flex-col items-center md:items-start">
                  <span className="flex items-baseline"><span
                      className="text-gray-300 font-title">Tony Wang</span><span
                      className="text-gray-400 ml-2 text-xs md:text-xl lg:text-2xl">MD, BE.</span></span><span
                        className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 font-title">Senior front-end developer</span>
                    </hgroup>
                    <picture className="flex justify-center items-center w-1/2 sm:w-2/5">
                        <img  src="/static/svg-hero-art-538ee183e050d77af16d88c5cec3b80d.svg" className="md:max-h-32 lg:max-h-80" alt="artwork"/></picture>
                </div>
            </header>
            <main>
                <section className="flex flex-col items-center py-16 ">
                    <header className="flex flex-col items-center"><h1
                        className="font-title text-2xl sm:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 text-center">Contract
                        Software Development</h1>
                        <hgroup className="text-gray-700 text-lg text-center">For some of the biggest brands in New
                            Zealand and the world
                        </hgroup>
                    </header>
                    <div className="mt-10 lg:container px-3 mx-auto flex justify-center">
                        <div
                            className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8 md:space-x-16 items-center sm:items-baseline">
                            <a href="https://www.pwc.co.nz/" target="_blank" rel="noopener"
                               className="hover:opacity-80"><img
                                src="/static/PricewaterhouseCoopers-37c3c987097924f6c51ff5a2d49606aa.svg" alt="PwC logo"
                                className="h-16 md:h-24 animate-fade-in-slow"/></a><a href="https://stuff.co.nz"
                                                                                     target="_blank" rel="noopener"
                                                                                     className="hover:opacity-80"><img
                            src="data:image/png;base64,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"
                            alt="Stuff News logo" className="h-8 md:h-12 animate-fade-in-slow"/></a><a
                            href="https://yellow.co.nz" target="_blank" rel="noopener" className="hover:opacity-80"><img
                            src="/static/yellowpng-73669ad2b894b5de2d152ee454536d42.png" alt="Yellow logo"
                            className="h-10 md:h-16 animate-fade-in-slow"/></a></div>
                    </div>
                </section>
            </main>
        </div>

)}

export default Home
