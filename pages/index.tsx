import type {NextPage} from 'next'
import Image from 'next/image'
import {Carousel} from "flowbite-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faReact, faJs,faHtml5,faCss3,faSass,faBootstrap, faFigma, faNodeJs,faAws,faDocker,faGit,faTrello
} from "@fortawesome/free-brands-svg-icons";


const logos = [
    '/static/freightways.png',
    '/static/nzc.svg',
    '/static/posthast.svg',
    '/static/nowcouries.png',
    '/static/seekstock.png',
    '/static/wallabiestravel.svg',
    '/static/sthj.svg',
    '/static/aotravel.svg',
    '/static/fiba.svg',
    '/static/activeadventures.svg',
    '/static/austinadventures.svg',
    '/static/alpsmart.png'
];

const projects = [
    {
        title:'freightways-monorep',
        srcs:['/static/screens/nowc.png','/static/screens/posthast.png','/static/screens/nzc.png','/static/screens/cp.png']
    },{
        title:'Wallaby travel',
        srcs:['/static/screens/wallabiestravel.png']
    },{
        title:'whitelabel sthjapan aotravel fiba',
        srcs:['/static/screens/sth.png','/static/screens/aot.png','/static/screens/fiba.png']
    },{
        title:'austin  active travel ',
        srcs:['/static/screens/activea.png','/static/screens/austina.png']
    },{
        title:'seekstock',
        srcs:['/static/screens/ss.png']
    },{
        title:'alpsmart',
        srcs:['/static/screens/alpsmart.png']
    }
]

const techCards = [
    {
        title:'Front-End',
        items:[{icon:faReact,text:'React (NextJS, Gatsby, CRA)'},{icon:faJs,text:'JavaScript'},{icon:'',text:'TypeScript'},{icon:faHtml5,text:'HTML5'},{icon:faCss3,text:'CSS3'},{icon:faSass,text:'SASS'},{icon:faBootstrap,text:'Bootstrap 5, Styled Components'},{icon:faFigma,text:'UI Design (Figma)'}]
    },
    {
        title:'Back-End',
        items:[{icon:'',text:'GraphQL'},{icon:'',text:'SQL'},{icon:faNodeJs,text:'Node & Express'},{icon:faDocker,text:'Docker'},{icon:faAws,text:'AWS EC2, CloudFront, S3, Route53'},{icon:faNodeJs,text:'NodeJs'}]
    },
    {
        title:'THE FUNDAMENTALS',
        items:[{icon:'',text:'Data Structures & Algorithms'},{icon:'',text:'Test Driven Development (TDD)'},{icon:'',text:'Design Patterns'},{icon:faTrello,text:'Agile (Scrum, Kanban)'},{icon:faGit,text:'Git'},{icon:'',text:'Design Thinking'}]
    },
    {
        title:'OTHER',
        items:[{icon:'',text:'Process Mining'}]
    }
];

const Home: NextPage = () => {


    return (
        <div>
            <header className="text-gray-100 bg-gradient-to-b from-slate-900 to-slate-600 w-full z-50 py-2">

                <div className="lg:container w-full  flex flex-col md:flex-row  items-center justify-center md:justify-between  md:px-8 xl:px-0  py-8 md:py-8 lg:py-20 mx-auto">
                    <hgroup
                        className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl p-5 font-bold lg:w-3/5 flex flex-col items-center md:items-start">
                        <h1 className="leading-tight text-white">Tony Wang</h1>
                        <h2 className="bg-clip-text text-transparent bg-gradient-to-r to-sky-400 from-violet-400">Senior Front-end Developer</h2>
                        <p className={'mt-2 lg:mt-5 text-base sm:text-base lg:text-lg xl:text-lg font-light text-white'}>Focused on accomplishing challenging development goals under strict deadlines. Analytical and resourceful problem-solver with disciplined approach and skill in producing clean, robust code.</p>
                    </hgroup>
                    <picture className="flex justify-center items-center w-1/2 sm:w-2/5">
                        <Image width="268" height="274"  src="/static/portrait.png" className="md:max-h-32 lg:max-h-80" alt="artwork"/></picture>
                </div>
            </header>
            <main>
                <section className="flex flex-col items-center py-16 bg-amber-300">
                    <header className="flex flex-col items-center"><p
                        className="font-title text-2xl sm:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 text-center">portfolio I delivered to clients</p>
                        <hgroup className="text-gray-700 text-lg text-center">
                            portfolio I delivered to clients
                        </hgroup>
                    </header>
                    <div className="mt-10 lg:container px-3 mx-auto flex justify-center">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 items-center sm:items-baseline ">
                            {
                                logos.map((logo,key)=>(
                                    <a key={key}>
                                        <div  className={'w-32 h-32  flex rounded-full bg-slate-900 place-items-center'}>
                                            <div className={'w-5/6 h-1/2 relative fill-white m-auto'}>
                                                <Image  layout='fill' className={'fill-white text-white'}  src={logo} objectFit="contain"/>
                                            </div>

                                        </div>

                                    </a>
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
                            projects.map((project,index)=>(
                                <div key={index} className="flex flex-col py-10 w-full h-2/6" >
                                    <div className={`md:rounded-lg shadow-lg hover:shadow-xl bg-white text-black flex flex-col overflow-hidden ${index%2?'lg:flex-row':'lg:flex-row-reverse'}`} >
                                        <div className='basis-full md:basis-3/5'>
                                            {
                                                project.srcs.length !== 1?<Carousel slideInterval={20*1000} >
                                                    {
                                                        project.srcs.map((src,key)=>(
                                                            <div key={key} className={'relative overflow-hidden'} >
                                                                <div className={'absolute w-full h-full bg-stone-900 z-10 opacity-20'}></div>
                                                                <Image src={src}  width={1242} height={1242} layout={'responsive'}  objectFit={'cover'} objectPosition={'top'}/>
                                                            </div>
                                                        ))
                                                    }
                                                </Carousel>:<div className={'relative overflow-hidden'} >
                                                    <div className={'absolute w-full h-full bg-stone-900 z-10 opacity-20'}></div>
                                                    <Image src={project.srcs[0]}  width={1242} height={1242} layout={'responsive'}  objectFit={'cover'} objectPosition={'top'}/>
                                                </div>
                                            }


                                        </div>
                                        <div className='basis-full md:basis-2/5 p-8 sm:p-12 flex flex-col text-gray-800'>
                                            <h3 className={'font-title tracking-tight text-gray-700 text-xl md:text-2xl font-bold mb-5'}>
                                                Projects
                                            </h3>
                                            <div className={'text-base space-y-3'}>
                                                <p>{project?.title}</p>
                                            </div>
                                            <div className={'py-10'}>
                                                <p>
                                                    TECHNOLOGIES
                                                </p>
                                                <p>
                                                    GatsbyJS (ReactJS) · TypeScript · TailwindCSS · Shopify integration · GraphQL
                                                </p>

                                            </div>
                                            <div className={'flex justify-between'}>
                                                <span>Created: Mar 2021</span>
                                                <a>Visit</a>
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
                                techCards.map((techcard,index)=>(
                                    <div key={index} className={'rounded-lg shadow-lg hover:shadow-xl bg-white text-black p-8'}>
                                        <p className={'uppercase mb-5 font-bold tracking-widest'}>{techcard.title}</p>
                                        {
                                            techcard.items.map((item,index)=>(
                                                <div key={index} className={'flex flex-row'}>
                                                    <p className={'basis-6'}>
                                                        <FontAwesomeIcon icon={item.icon}/>
                                                    </p>
                                                    <p className={'basis-auto'}>{item.text}</p>
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
                            <Image src={'/static/refer.png'} width={1986} height={2810} layout={'responsive'} objectFit={'contain'}/>
                        </div>
                        <div className="flex flex-col items-center ">
                            <p className="font-title text-2xl sm:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 text-center">
                                Education and training</p>
                        </div>
                        <div className={'mx-auto my-10 w-7/12 text-center'}>
                            <p>Bachelor of Science, Software engineering, 07/2015</p>
                            <div className={'bg-red-700 w-5/12 p-5 mx-auto'}>
                                <Image src={'/static/university.png'} width={275} height={71} layout={'responsive'}/>
                            </div>
                            <p>Sichuan University - Sichuan</p>
                        </div>
                        <div className="flex flex-col items-center ">
                            <p className="font-title text-2xl sm:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 text-center">
                                Contact</p>
                            <div className={'py-10 mx-auto'}>
                                <p><strong>Address:</strong><span>Auckland Centre</span></p>
                                <p><strong>Phone:</strong><span>021 088 24591</span></p>
                                <p><strong>Email:</strong><span>Anthonywang0517@gmail.com</span></p>
                            </div>
                        </div>

                    </div>

                </section>
            </main>
        </div>

)}

export default Home
