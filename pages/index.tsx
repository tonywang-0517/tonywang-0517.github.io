import type {NextPage} from 'next'
import Image from 'next/image'
import {Carousel} from "flowbite-react"
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import {logos,projects,techCards} from "../constants";
import { NextSeo } from 'next-seo';






const Home: NextPage = () => {
    const [showNav, setShowNav] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setShowNav(scrollY > 400)
        };
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        };
    }, []);

    return (
        <>
            <NextSeo
                title="Tony Wang - Resume"
                description={`I'm Tony Wang, Senior Front-end Developer.`}
                canonical="https://tonywang-0517.github.io/"
                openGraph={{
                    title: 'Tony Wang - Resume',
                    description: `I'm Tony Wang, Senior Front-end Developer.`,
                    url: "https://tonywang-0517.github.io/",
                    type: 'profile',
                    profile: {
                        firstName: 'Tony',
                        lastName: 'Wang',
                        username: 'tonywang0517',
                        gender: 'male',
                    },
                    images: [
                        {
                            url: 'https://tonywang-0517.github.io/static/portrait.png',
                            width: 512,
                            height: 512,
                            alt: 'Profile Photo',
                        },
                    ],
                }}
            />
            <div>
                <NavBar showNav={showNav}/>
                <main>
                    <section className="flex flex-col items-center py-16 bg-blue-200">
                        <header className="flex flex-col items-center"><p
                            className="font-title text-2xl sm:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 text-center">Portfolio
                            I Delivered</p>
                        </header>
                        <div className="mt-10 lg:container px-3 mx-auto flex justify-center">
                            <div
                                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 items-center sm:items-baseline ">
                                {
                                    logos.map((logo, index) => (
                                        <div key={index}>
                                            <div className={'w-32 h-32  flex rounded-full bg-slate-900 place-items-center'}>
                                                <div className={'w-5/6 h-1/2 relative fill-white m-auto'}>
                                                    <Image layout='fill' className={'fill-white text-white'} src={logo} alt={''}
                                                           objectFit="contain"/>
                                                </div>

                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </section>
                    <section className="flex flex-col items-center py-16 bg-stone-100">
                        <div className={'container mx-auto '}>
                            <div className="flex flex-col items-center ">
                                <p className="font-title text-2xl sm:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 text-center">
                                    Commercial Projects</p>
                            </div>
                            {
                                projects.map((project, index) => (

                                    <div key={index} className="flex flex-col py-10 w-full h-2/6">
                                        <div
                                            className={`md:rounded-lg shadow-lg hover:shadow-xl bg-white text-black flex flex-col overflow-hidden ${index % 2 ? 'xl:flex-row' : 'xl:flex-row-reverse'}`}>
                                            <div className='basis-full md:basis-3/5 carousel'>
                                                {
                                                    project.srcs.length !== 1 ? <Carousel slide={false}>
                                                        {
                                                            project.srcs.map((src, key) => (

                                                                <div key={key} className={'relative overflow-hidden'}>
                                                                    <div className={'absolute w-full h-full bg-stone-900 z-10 opacity-20'}> </div>
                                                                    <Image src={src} width={1242} height={1242} alt={''}
                                                                           layout={'responsive'} objectFit={'cover'}
                                                                           objectPosition={'top'}/>
                                                                </div>

                                                            ))
                                                        }
                                                    </Carousel> : <div className={'relative overflow-hidden'}>
                                                        <div
                                                            className={'absolute w-full h-full bg-stone-900 z-10 opacity-20'}> </div>
                                                        <Image src={project.srcs[0]} width={1242} height={1242} alt={''}
                                                               layout={'responsive'} objectFit={'cover'}
                                                               objectPosition={'top'}/>
                                                    </div>
                                                }
                                            </div>
                                            <div
                                                className='basis-full md:basis-2/5 p-8 sm:p-12 flex flex-col text-gray-800'>
                                                <label
                                                    className={'text-gray-400 tracking-widest font-bold text-xs uppercase mb-2'}>{project.created}</label>
                                                <h3 className={'font-title tracking-tight text-gray-700 text-xl md:text-2xl font-bold mb-5 uppercase'}>
                                                    {project?.title}
                                                </h3>
                                                <div className={'text-base space-y-3'}>
                                                    {project?.descriptions.map((des,index) => <p key={index}>{des}</p>)}
                                                </div>
                                                {
                                                    project.brands && <div className={'mt-10'}>
                                                        <p className={'text-gray-600 tracking-widest font-bold text-sm uppercase mb-2'}>
                                                            brands involved
                                                        </p>
                                                        <p>
                                                            {project.brands}
                                                        </p>

                                                    </div>
                                                }
                                                <div className={'py-10'}>
                                                    <p className={'text-gray-600 tracking-widest font-bold text-sm uppercase mb-2'}>
                                                        TECHNOLOGIES
                                                    </p>
                                                    <p>
                                                        {
                                                            project.tech
                                                        }
                                                    </p>

                                                </div>
                                                <div className={`w-full text-right`}>
                                                    {
                                                        project.hrefs.length <= 1?<a className={`font-bold ${project.hrefs.length===0?'cursor-not-allowed text-gray-300':'cursor-pointer hover:underline hover:opacity-70'}`} href={project.hrefs[0]} target="_blank" rel="noreferrer">Visit <FontAwesomeIcon icon={faArrowRight}/></a>:
                                                            <div className={'grid text-center grid-cols-2 sm:flex  justify-between'}>
                                                                {
                                                                    project.hrefs.map((href,index)=><a key={index} className={`mb-2 sm:mb-0 font-bold ${project.hrefs.length===0?'cursor-not-allowed text-gray-300':'cursor-pointer hover:underline hover:opacity-70'}`} href={href} target="_blank" rel="noreferrer">{project.brands.split( ' · ')[index]} <FontAwesomeIcon icon={faArrowRight}/></a>)
                                                                }
                                                            </div>
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                ))
                            }
                            <div className="flex flex-col items-center ">
                                <p className="font-title text-2xl sm:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 text-center">
                                    Technologies & Skills</p>
                            </div>
                            <div className={'grid grid-cols-1 md:grid-cols-2 gap-5 w-full my-10'}>
                                {
                                    techCards.map((techcard, index) => (
                                        <div key={index}
                                             className={'rounded-lg shadow-lg hover:shadow-xl bg-white text-black p-8'}>
                                            <p className={'uppercase mb-5 font-bold tracking-widest'}>{techcard.title}</p>
                                            {
                                                techcard.items.map((item, index) => (
                                                    <div key={index} className={'flex flex-row'}>
                                                        <p className={'basis-6'}>
                                                            {
                                                                item?.icon ?
                                                                    <FontAwesomeIcon icon={item.icon as IconProp}/> :
                                                                    <span
                                                                        className={'w-full responsive inline-block pr-2'}>{item?.svg}</span>
                                                            }

                                                        </p>
                                                        <p className={'basis-auto'}>{item?.text}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    ))
                                }
                            </div>

                            <div className="flex flex-col items-center ">
                                <p className="font-title text-2xl sm:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 text-center">
                                    Recommendations</p>
                            </div>
                            <div className={'mx-auto my-10 w-7/12'}>
                                <Image src={'/static/refer.png'} width={1986} height={2810} layout={'responsive'} alt={''}
                                       objectFit={'contain'}/>
                            </div>

                        </div>

                    </section>
                </main>
                <Footer/>
            </div>
        </>
    )
};

export default Home
