import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

export default function WorkItem( { index, project, handleFocus, displayClass } ) {

    return (
        <li key={ project.id } className={`work__item ${displayClass}`}>
            <div className="work__image">
                <Link href={ `/project/${project.slug}` }>
                    <a className="work__link">
                        { project._embedded && (
                            <Image
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
        </li>
    )
}
