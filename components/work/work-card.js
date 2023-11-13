import Link from 'next/link';
import Image from 'next/image';
import { WorkInfo } from './work-info';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

export const WorkCard = ({ project } ) => {

    return (
        <div className="work-card">
            <WorkInfo project={ project } />
            <Link href={ `/project/${project.slug}` }>
                <a className="work-card__image-wrap">
                    { project._embedded && (
                        <Image
                            className="work-card__image"
                            src={ project._embedded['wp:featuredmedia']['0'].source_url }
                            width={ project._embedded['wp:featuredmedia']['0'].media_details.width }
                            height={ project._embedded['wp:featuredmedia']['0'].media_details.height }
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                        />
                    ) }
                </a>
            </Link>

        </div>
    );
};
