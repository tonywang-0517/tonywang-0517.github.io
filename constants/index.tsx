import {
    faAws,
    faBootstrap, faConfluence,
    faCss3,
    faDocker,
    faFigma, faGit,
    faHtml5, faJira,
    faJs, faNodeJs,
    faReact,
    faSass, faTrello
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import {faBook, faDatabase, faFlask, faLightbulb, faServer, faTimeline} from "@fortawesome/free-solid-svg-icons";

const logos = [
    '/static/freightways.png',
    '/static/nzc.svg',
    '/static/posthast.svg',
    '/static/nowcouries.png',
    '/static/wallabiestravel.svg',
    '/static/sthj.svg',
    '/static/aotravel.svg',
    '/static/fiba.svg',
    '/static/seekstock.png',
    '/static/activeadventures.svg',
    '/static/austinadventures.svg',
    '/static/alpsmart.png'
];

const projects = [
    {
        title: 'freightways portal (monorepo)',
        brands: 'NZ Couriers · Now Couriers · Post Hast · Castle Parcels',
        descriptions: [`Freightways is listed as one of New Zealand's top 50 companies on the New Zealand Stock Exchange.
        Around 200,000 items per day, 50 million items per year are collected, sorted and dispersed by their package and mail brands. 
        Freightways employs a multi-brand strategy in the network courier segment via New Zealand Couriers, Post Haste Couriers, Castle Parcels and NOW Couriers. It’s a strategy that enables Freightways to be responsive and flexible when meeting customer service needs and price point.`,
            `As the main frontend developer, My work is to create a track & trace react module with strong compatibility crossed all their sub-brands, which could be inserted into their WordPress website container. it's a project driven by TDD with hundreds of criteria acceptance and use cases to maximize module compatibility. I created monorepo function to visit shared components across projects and did the graceful degradation for supporting IE and other devices.`],
        srcs: ['/static/screens/nowc.png', '/static/screens/posthast.png', '/static/screens/nzc.png', '/static/screens/cp.png'],
        tech: `ReactJS(SSR) · Redux · Graphql · Bootstrap5 · Figma · Storybook · SwaggerAPI · Trello · Jest · Cypress · AWS S3 · WordPress`,
        created: 'Feb 2021',
        hrefs:['https://www.nzcouriers.co.nz/', 'https://nowcouriers.co.nz/','https://www.posthaste.co.nz/','https://www.castleparcels.co.nz/']
    }, {
        title: 'STH Group',
        brands: 'Wallabies Travel',
        descriptions: ['Wallabies Travel is part of STH Group – global leaders in premium sporting events. STH Group has more than 20 years’ experience developing travel packages for some of the biggest sporting events in the world that meet the needs of the most demanding sports enthusiast.Wallabies Travel works in partnership with Rugby Australia to deliver a superior service to Wallabies fans. ',
            'As the single frontend developer, I create a travel booking portal for their sub-company Australia Wallabies Travel with the maximum responsibility and compatibility with SEO optimization for all uses crossed most of the devices including IE.'],
        srcs: ['/static/screens/wallabiestravel.png'],
        tech: `NextJS · Styled-Components · Graphql · Bootstrap5 · Next-Seo · NFormic · Trello · Storybook · Google SEO&GEO Service · StipeJS · Strapi Headless CMS · Jest · Bitbucket Pipelines · Figma`,
        created: 'Sep 2021',
        hrefs:['https://wallabiestravel.com.au/']
    }, {
        title: 'travel booking Portal (white-label)',
        brands: 'STH Japan · AO Travel · FIBA Travel',
        descriptions: ['Sports Travel & Hospitality Japan (STH Japan) is the leading provider of sports hospitality and premium spectator experiences in Japan. And AO Travel was established in 2021 as a partnership between Tennis Australia and STH Australia, and is the official global provider for Australian Open travel and premium experiences. I delivered the project  on time and the sales of AO Travel packages launched in Japan on 22 June, 2022 and is available for purchase via AO Travel’s dedicated Japan ecommerce site',
            'As the main frontend developer, I create a white-label booking platform from green project for their brands to sale, the project is a little bit similar with Wallabies Travel but have a new feature for dynamic theme with different colors and typography.'],
        srcs: ['/static/screens/sth.png', '/static/screens/aot.png', '/static/screens/fiba.png'],
        tech: `NextJS · Styled-Components · Graphql · Bootstrap5 · Next-Seo · Formic · Trello · Storybook · Google SEO&GEO Service · StipeJS · Strapi Headless CMS · Jest · Bitbucket Pipelines · Docker · Figma`,
        created: 'Apr 2022',
        hrefs:['https://events.sthjapan.com/en/events','https://ausopentravel.jp/en','https://fibajpn.staging.osynlig.nz/en']
    }, {
        title: 'Global Travel Portal (white-label)',
        brands: 'Active Travel · Austin Travel',
        descriptions: ['Active Adventures of Queenstown, New Zealand and Austin Adventures of Montana, USA have merged to provide a wider world of opportunities for global travelers.The combined company will now offer adventure travel tours to over 100 destinations in all seven continents!  Multiple adventure styles will be offered from adult only, to family friendly, plus various degrees of difficulty so that you can find the adventure tailored to your dream vacation!',
            'As the single frontend developer, I refactored Active Travel project to a white-label project and created the theme and styles for Austin Travel based on Active Travel project by using scss, bootstrap5 and SilverStrip.'],
        srcs: ['/static/screens/activea.png', '/static/screens/austina.png'],
        tech: `SASS · bootstrap5 · SilverStrip · PHP · Figma · Jira`,
        created: 'Sep 2022',
        hrefs:['https://activeadventures.com/','https://www.austinadventures.com/']
    }, {
        title: 'SeekStock (SPA, SaaS)',
        brands: '',
        descriptions: [`SeekStock is a NZ start-up company, which enables shop staff to share customer's feedback on products directly with buying teams, in real-time.`,
            `As the Lead Full Stack Developer, I created the MVP project myself and won many clients from NZ local retailers, During that time I managed both back-end and front-end with two other developers, and I'm responsible for product development independently (CI/CD, Hot-Fix, Version-Control, tech architecture patterns design, code quality optimization, cross-browser compatibility and maintenance deployment).`,
            `This project give me a strong sense of achievement although it doesn't alive from Covid as most of the retailer clients reduced their budget.`],
        srcs: ['/static/screens/ss.png'],
        tech: `React(SSR) · Graphql · Mobx · Docker · NodeJS · Jekins · Mysql · Redis · Nginx · Jest · Cypress · FullStory · Figma · Azure Pipeline · Algolia`,
        created: 'Oct 2016',
        hrefs:[]
    }, {
        title: 'Alps Mart',
        brands: '',
        descriptions: [`Alps Mart is one of New Zealand's start-up e-commerce sites. I created the portal myself by using shopify integration and Algolia`],
        srcs: ['/static/screens/alpsmart.png'],
        tech: `NextJS · Styled-Components · Graphql · Bootstrap5  · StipeJS · Strapi Headless CMS · Shopify integration · Algolia · Zendesk`,
        created: 'Aug 2022',
        hrefs:['https://alpsmart.co.nz/']
    }
]

const techCards = [
    {
        title: 'Front-End',
        items: [{icon: faReact, text: 'React v16.8+, NextJS'}, {icon: faJs, text: 'JavaScript'}, {
            icon: '',
            svg: <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="js"
            className="svg-inline--fa fa-js " role="img" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 28"><path clipRule="evenodd" d="m.98608 0h24.32332c.5446 0 .9861.436522.9861.975v24.05c0 .5385-.4415.975-.9861.975h-24.32332c-.544597 0-.98608-.4365-.98608-.975v-24.05c0-.538478.441483-.975.98608-.975zm13.63142 13.8324v-2.1324h-9.35841v2.1324h3.34111v9.4946h2.6598v-9.4946zm1.0604 9.2439c.4289.2162.9362.3784 1.5218.4865.5857.1081 1.2029.1622 1.8518.1622.6324 0 1.2331-.0595 1.8023-.1784.5691-.1189 1.0681-.3149 1.497-.5879s.7685-.6297 1.0187-1.0703.3753-.9852.3753-1.6339c0-.4703-.0715-.8824-.2145-1.2365-.1429-.3541-.3491-.669-.6186-.9447-.2694-.2757-.5925-.523-.9692-.7419s-.8014-.4257-1.2743-.6203c-.3465-.1406-.6572-.2771-.9321-.4095-.275-.1324-.5087-.2676-.7011-.4054-.1925-.1379-.3409-.2838-.4454-.4379-.1045-.154-.1567-.3284-.1567-.523 0-.1784.0467-.3392.1402-.4824.0935-.1433.2254-.2663.3959-.369s.3794-.1824.6269-.2392c.2474-.0567.5224-.0851.8248-.0851.22 0 .4523.0162.697.0486.2447.0325.4908.0825.7382.15.2475.0676.4881.1527.7218.2555.2337.1027.4495.2216.6475.3567v-2.4244c-.4015-.1514-.84-.2636-1.3157-.3365-.4756-.073-1.0214-.1095-1.6373-.1095-.6268 0-1.2207.0662-1.7816.1987-.5609.1324-1.0544.3392-1.4806.6203s-.763.6392-1.0104 1.0743c-.2475.4352-.3712.9555-.3712 1.5609 0 .7731.2268 1.4326.6805 1.9785.4537.546 1.1424 1.0082 2.0662 1.3866.363.146.7011.2892 1.0146.4298.3134.1405.5842.2865.8124.4378.2282.1514.4083.3162.5403.4946s.198.3811.198.6082c0 .1676-.0413.323-.1238.4662-.0825.1433-.2076.2676-.3753.373s-.3766.1879-.6268.2473c-.2502.0595-.5431.0892-.8785.0892-.5719 0-1.1383-.0986-1.6992-.2959-.5608-.1973-1.0805-.4933-1.5589-.8879z"  fill="#000" fillRule="evenodd"/></svg>,
            text: 'TypeScript'
        }, {icon: faHtml5, text: 'HTML5'}, {icon: faCss3, text: 'CSS3'}, {
            icon: faSass,
            text: 'SASS'
        }, {icon: faBootstrap, text: 'Bootstrap 5, Styled Components'}, {icon: faFigma, text: 'Figma'}]
    },
    {
        title: 'Back-End',
        items: [{
            icon: '',
            svg: <Image className={'inline-block'} layout='responsive' objectFit={'contain'} width={16} height={16} alt={''}
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkdyYXBoUUxfTG9nbyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8Zz4KCQkJCgkJCQk8cmVjdCB4PSIxMjIiIHk9Ii0wLjQiIHRyYW5zZm9ybT0ibWF0cml4KC0wLjg2NiAtMC41IDAuNSAtMC44NjYgMTYzLjMxOTYgMzYzLjMxMzYpIiBmaWxsPSIjMzgzODM4IiB3aWR0aD0iMTYuNiIgaGVpZ2h0PSIzMjAuMyIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cmVjdCB4PSIzOS44IiB5PSIyNzIuMiIgZmlsbD0iIzM4MzgzOCIgd2lkdGg9IjMyMC4zIiBoZWlnaHQ9IjE2LjYiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJCgkJCQk8cmVjdCB4PSIzNy45IiB5PSIzMTIuMiIgdHJhbnNmb3JtPSJtYXRyaXgoLTAuODY2IC0wLjUgMC41IC0wLjg2NiA4My4wNjkzIDY2My4zNDA5KSIgZmlsbD0iIzM4MzgzOCIgd2lkdGg9IjE4NSIgaGVpZ2h0PSIxNi42Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCQoJCQkJPHJlY3QgeD0iMTc3LjEiIHk9IjcxLjEiIHRyYW5zZm9ybT0ibWF0cml4KC0wLjg2NiAtMC41IDAuNSAtMC44NjYgNDYzLjM0MDkgMjgzLjA2OTMpIiBmaWxsPSIjMzgzODM4IiB3aWR0aD0iMTg1IiBoZWlnaHQ9IjE2LjYiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJCgkJCQk8cmVjdCB4PSIxMjIuMSIgeT0iLTEzIiB0cmFuc2Zvcm09Im1hdHJpeCgtMC41IC0wLjg2NiAwLjg2NiAtMC41IDEyNi43OTAzIDIzMi4xMjIxKSIgZmlsbD0iIzM4MzgzOCIgd2lkdGg9IjE2LjYiIGhlaWdodD0iMTg1Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCQoJCQkJPHJlY3QgeD0iMTA5LjYiIHk9IjE1MS42IiB0cmFuc2Zvcm09Im1hdHJpeCgtMC41IC0wLjg2NiAwLjg2NiAtMC41IDI2Ni4wODI4IDQ3My4zNzY2KSIgZmlsbD0iIzM4MzgzOCIgd2lkdGg9IjMyMC4zIiBoZWlnaHQ9IjE2LjYiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHJlY3QgeD0iNTIuNSIgeT0iMTA3LjUiIGZpbGw9IiMzODM4MzgiIHdpZHRoPSIxNi42IiBoZWlnaHQ9IjE4NSIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cmVjdCB4PSIzMzAuOSIgeT0iMTA3LjUiIGZpbGw9IiMzODM4MzgiIHdpZHRoPSIxNi42IiBoZWlnaHQ9IjE4NSIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQkKCQkJCTxyZWN0IHg9IjI2Mi40IiB5PSIyNDAuMSIgdHJhbnNmb3JtPSJtYXRyaXgoLTAuNSAtMC44NjYgMC44NjYgLTAuNSAxMjYuNzk1MyA3MTQuMjg3NSkiIGZpbGw9IiMzODM4MzgiIHdpZHRoPSIxNC41IiBoZWlnaHQ9IjE2MC45Ii8+CgkJPC9nPgoJPC9nPgoJPHBhdGggZmlsbD0iIzM4MzgzOCIgZD0iTTM2OS41LDI5Ny45Yy05LjYsMTYuNy0zMSwyMi40LTQ3LjcsMTIuOGMtMTYuNy05LjYtMjIuNC0zMS0xMi44LTQ3LjdjOS42LTE2LjcsMzEtMjIuNCw0Ny43LTEyLjggICBDMzczLjUsMjU5LjksMzc5LjIsMjgxLjIsMzY5LjUsMjk3LjkiLz4KCTxwYXRoIGZpbGw9IiMzODM4MzgiIGQ9Ik05MC45LDEzN2MtOS42LDE2LjctMzEsMjIuNC00Ny43LDEyLjhjLTE2LjctOS42LTIyLjQtMzEtMTIuOC00Ny43YzkuNi0xNi43LDMxLTIyLjQsNDcuNy0xMi44ICAgQzk0LjgsOTksMTAwLjUsMTIwLjMsOTAuOSwxMzciLz4KCTxwYXRoIGZpbGw9IiMzODM4MzgiIGQ9Ik0zMC41LDI5Ny45Yy05LjYtMTYuNy0zLjktMzgsMTIuOC00Ny43YzE2LjctOS42LDM4LTMuOSw0Ny43LDEyLjhjOS42LDE2LjcsMy45LDM4LTEyLjgsNDcuNyAgIEM2MS40LDMyMC4zLDQwLjEsMzE0LjYsMzAuNSwyOTcuOSIvPgoJPHBhdGggZmlsbD0iIzM4MzgzOCIgZD0iTTMwOS4xLDEzN2MtOS42LTE2LjctMy45LTM4LDEyLjgtNDcuN2MxNi43LTkuNiwzOC0zLjksNDcuNywxMi44YzkuNiwxNi43LDMuOSwzOC0xMi44LDQ3LjcgICBDMzQwLjEsMTU5LjQsMzE4LjcsMTUzLjcsMzA5LjEsMTM3Ii8+Cgk8cGF0aCBmaWxsPSIjMzgzODM4IiBkPSJNMjAwLDM5NS44Yy0xOS4zLDAtMzQuOS0xNS42LTM0LjktMzQuOWMwLTE5LjMsMTUuNi0zNC45LDM0LjktMzQuOWMxOS4zLDAsMzQuOSwxNS42LDM0LjksMzQuOSAgIEMyMzQuOSwzODAuMSwyMTkuMywzOTUuOCwyMDAsMzk1LjgiLz4KCTxwYXRoIGZpbGw9IiMzODM4MzgiIGQ9Ik0yMDAsNzRjLTE5LjMsMC0zNC45LTE1LjYtMzQuOS0zNC45YzAtMTkuMywxNS42LTM0LjksMzQuOS0zNC45YzE5LjMsMCwzNC45LDE1LjYsMzQuOSwzNC45ICAgQzIzNC45LDU4LjQsMjE5LjMsNzQsMjAwLDc0Ii8+CjwvZz4KPC9zdmc+"/>,
            text: 'Graphql'
        },
            {icon: faDatabase, text: 'MYSQL, Redis, Sqlite'}, {
                icon: faServer,
                text: 'Express & Koa2'
            }, {icon: faDocker, text: 'Docker'}, {
                icon: faNodeJs,
                text: 'NodeJs'
            }, {icon: faAws, text: 'AWS EC2, S3, Lambda'}, {
                icon: faNodeJs,
                text: 'NodeJs'
            }]
    },
    {
        title: 'Conceptions',
        items: [{icon: faLightbulb, text: 'Data Structures & Algorithms'}, {
            icon: faLightbulb,
            text: 'Test Driven Development'
        }, {
            icon: faLightbulb,
            text: 'Object Oriented Programming'
        }, {
            icon: faLightbulb,
            text: 'Functional Oriented Programming'
        }, {icon: faLightbulb, text: 'Design Patterns'}, {icon: faLightbulb, text: 'Monorepo'}, {icon: faLightbulb, text: 'White-Label (multi-theme)'}, {icon: faLightbulb, text: 'SEO Optimization'}, {icon: faLightbulb, text: 'Responsive UI Design'}]
    },
    {
        title: 'Quality Assurance',
        items: [{icon: faFlask, text: 'Jest, Cypress, React Testing Library'},{icon: faBook, text: 'StoryBook'},{icon: '',svg:'{.}', text: 'SwaggerAPI'}, {icon: faConfluence, text: 'Confluence'}, {icon: faJira, text: 'Jira'}, {
            icon: faGit,
            text: 'Git (Version Control)'
        },{icon: faTrello, text: 'Trello & Scrum'}, {icon: faTimeline, text: 'CI/CD (Bitbucket & Devops Pipeline)'}]
    }
];

export  {
    logos,projects,techCards
}
