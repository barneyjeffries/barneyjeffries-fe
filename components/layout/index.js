import { useLayoutEffect } from 'react';
import useInfo from '../../utils/hooks/use-info';
import Head from 'next/head';
import { SiteHeader } from '../site-header';
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
            </Head>
            <SiteHeader />

            <main className="site-main">
                {children}
                {infoDisplay}
            </main>

        </>
    )
};
