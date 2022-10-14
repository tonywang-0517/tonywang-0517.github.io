import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
    return (
        <div>
            <header className="text-gray-100 bg-gradient-to-bl to-black from-gray-800 w-full z-50 py-2">
                <div className="px-2 md:px-4 lg:px-0 py-2 lg:container mx-auto text-gray-200"><a
                    href="https://www.linkedin.com/" target="_blank"  rel="noreferrer"
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
                        <Image width="756" height="512"  src="/static/svg-hero-art-538ee183e050d77af16d88c5cec3b80d.svg" className="md:max-h-32 lg:max-h-80" alt="artwork"/></picture>
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
                        <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8 md:space-x-16 items-center sm:items-baseline">
                            </div>
                    </div>
                </section>
            </main>
        </div>

)}

export default Home
