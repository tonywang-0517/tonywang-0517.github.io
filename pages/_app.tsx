import '../styles/globals.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';
import type {AppProps} from 'next/app';
import Head from "next/head";

function MyApp({Component, pageProps}: AppProps) {
    return <>
        <Head>
            <title>Tony Wang - Resume</title>
            <link rel="shortcut icon" href="/favicon/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
            <link rel="manifest" href="/favicon/site.webmanifest"/>
        </Head>
        <Component {...pageProps} />
    </>
}

export default MyApp
