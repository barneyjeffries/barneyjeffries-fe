import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/header';

export default function Home({ projects }) {

    return (
        <div>
            <Head>
                <title key="title">Barney Jeffries - Creative Coder</title>
                <meta name="description" content="Creative Coder"/>
            </Head>

            <main>
                { projects.map((project, i) => (
                    <div key={`work-info-${i}`} className="work-info">
                        <h2 className="work-info__title">{ project.title.rendered }</h2>
                        <p className="work-info__details">
                            { project.acf.overview }
                        </p>
                        <a href="<?php the_permalink(); ?>" className="work-info__link"
                           title="<?php the_title(); ?> - <?php the_field('overview'); ?>">View project</a>
                    </div>
                ))}

                <section className="work">
                    <ul className="work__items">
                        { projects.map((project, i) => (
                            <li key={i} className="work__item">
                                <div className="work__image">
                                    <Link href={`/project/${project.slug}`}>
                                        <a className="work__link">
                                            <Image
                                                src={project._embedded['wp:featuredmedia']['0'].source_url}
                                                width={project._embedded['wp:featuredmedia']['0'].media_details.width}
                                                height={project._embedded['wp:featuredmedia']['0'].media_details.height}
                                                layout="fill"
                                                objectFit="cover"
                                                objectPosition="center"
                                            />
                                        </a>
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
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
