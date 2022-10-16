import '../styles/globals.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';
import type {AppProps} from 'next/app';
import { GoogleAnalytics } from "nextjs-google-analytics";
import Head from "next/head";

const gaMeasurementId = 'G-EKR9VHENZK';



function MyApp({Component, pageProps}: AppProps) {
    return <>
        <Head>
            <link rel="shortcut icon" href="/favicon/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
            <link rel="manifest" href="/favicon/site.webmanifest"/>
            <meta name="keywords" content="tony wang, puyue wang, 王普岳, frontend developer, software engineering" data-react-helmet="true"/>
        </Head>
        <GoogleAnalytics trackPageViews={true} strategy="lazyOnload" gaMeasurementId={gaMeasurementId}/>
        <Component {...pageProps} />
    </>
}

export default MyApp
