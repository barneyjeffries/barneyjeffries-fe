import { useLayoutEffect } from 'react';
import useInfo from '../../utils/hooks/use-info';
import Head from 'next/head';
import Header from '../header';
import Info from '../info';

export default function Layout({children}) {

    const [ infoIsOpen, ] = useInfo(false);

    const infoDisplay = infoIsOpen ? <Info /> : null;

    return (
        <>
            <Head>
                <title key="title">Barney Jeffries - Creative Coder</title>
                <meta name="description" content="Creative Coder"/>
                <link rel="icon" href="/favicon.ico"/>
                <link key="fonts" rel="stylesheet" href="//use.typekit.net/abe0jtk.css"/>
            </Head>
            <Header  />

            <main>
                {children}
                {infoDisplay}
            </main>

        </>
    )
};
