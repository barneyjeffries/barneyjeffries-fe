import Head from 'next/head';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import { useEffect, useState } from "react";
import WorkItem from '../components/work/work-item';
import WorkInfo from '../components/work/work-info';

export default function Home( { projects } ) {

    return (
        <>
            <Head>
                <title key="title">Barney Jeffries - Creative Coder</title>
                <meta name="description" content="Creative Coder"/>
            </Head>

            <section className="work" style={ {display: 'none'}}>
                <ul className="work__items">
                    { projects.map( ( project, i) => (
                        <WorkItem key={ project.id } index={i} project={project} />
                    ) ) }
                </ul>
            </section>

        </>
    )
}

export async function getStaticProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_WP_API_URL}wp-json/wp/v2/project?_embed`);
    const projects = await res.json();

    return {
        props: {
            projects,
        },
    }
}
