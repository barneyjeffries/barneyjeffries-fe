import Head from 'next/head';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import { useEffect, useState } from "react";
import WorkItem from '../components/work/work-item';
import WorkInfo from '../components/work/work-info';

export default function Home({ projects }) {
    const [infoToDisplay, setInfoToDisplay] = useState(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

        let smoother = ScrollSmoother.create({
            smooth: 2,
            normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
            ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
            effects: true,
            preventDefault: true
        });

    },[]);

    return (
        <div>
            <Head>
                <title key="title">Barney Jeffries - Creative Coder</title>
                <meta name="description" content="Creative Coder"/>
            </Head>

            { infoToDisplay !== null && (
                <WorkInfo key={projects[infoToDisplay].title.rendered} index={infoToDisplay} project={projects[infoToDisplay]} />
            )}

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <section className="work">
                        <ul className="work__items">
                            { projects.map((project, i) => (
                                <WorkItem key={project.title.rendered} index={i} project={project} handleFocus={setInfoToDisplay} displayClass={infoToDisplay === i ? 'is-visible' : ''} />
                            ))}
                        </ul>
                    </section>
                </div>
            </div>

        </div>
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
