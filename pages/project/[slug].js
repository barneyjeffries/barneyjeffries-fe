import { useRouter } from 'next/router';
import { useEffect} from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Project({project}) {

    const { title, content } = project;
    const {
        agency,
        project_sections,
        background_colour,
        link,
    } = project.acf;

    useEffect(()=> {
        document.body.style.backgroundColor = background_colour;

        return () => {
            document.body.style.backgroundColor = '#000';
        }
    }, []);

    return (

        <div className="project">
            <Head>
                <title key="title">Barney Jeffries - { title.rendered }</title>
            </Head>

            <Link href="/">
                <a className="project__home">
                    <span></span>
                </a>
            </Link>

            <div id="project-container" className="scroll-container">
                <div className="project group">
                    <div className="project__item">
                        <h1>{title.rendered}</h1>
                        <div className="project__intro">
                            <h2>Agency</h2>
                            <p>{ agency }</p>
                            <div dangerouslySetInnerHTML={ { __html: content.rendered } } />
                        </div>
                    </div>
                    <div className="group">
                        { project_sections.map( ( projectSection, index ) => (
                            <div key={ `projectSection${index}` } className="project__item project__image">
                                { projectSection.video && (
                                    <video
                                        className={ `project__video ${projectSection.mobile ?? 'project__video--mobile'}` }
                                        playsInline muted loop
                                    >

                                        <source src={ projectSection.video } />
                                    </video>
                                ) }
                            </div>
                        ) ) }
                    </div>
                    <div className="spacer"></div>
                </div>
            </div>

        </div>
    )
};

export async function getStaticPaths() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_WP_API_URL}wp-json/wp/v2/project`);
    const projects = await res.json();

    const slugs = projects.map(project => ({
        params: {slug: project.slug}
    }));

    const paths = {
        paths: [
            ...slugs
        ],
        fallback: false
    }

    return paths;
}

export async function getStaticProps(args) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_WP_API_URL}wp-json/wp/v2/project/?_embed&slug=${args.params.slug}`);
    const projectResults = await res.json();
    const project = projectResults ? projectResults[0] : null;

    return {
        props: {
            project,
        },
    }
}
