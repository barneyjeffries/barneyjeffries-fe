import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

export default function WorkItem({index, project, handleFocus, displayClass} = props) {

    const workItemRef = useRef();
    console.log(displayClass);
    const handleScrollEnter = ({isActive}) => {
        if(isActive) {
            handleFocus(index);
        }
        console.log(isActive);
        //workItemRef.current.classList.add('is-visible');
    }

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const startPoint = 200;
        const endPoint = startPoint + workItemRef.current.clientHeight;

        ScrollTrigger.create({
            trigger: workItemRef.current,
            pin: false,
            start: `top bottom-=${startPoint}`,
            end: `bottom bottom-=${endPoint}`,
            markers: true,
            toggleActions: 'play pause resume reverse',
            onEnter: handleScrollEnter,
            onEnterBack: handleScrollEnter,
            onLeave: handleScrollEnter,
            onLeaveBack: handleScrollEnter,
        });

    },[]);

    return (
        <li ref={workItemRef} key={index} className={`work__item ${displayClass}`}>
            <div className="work__image">
                <Link href={`/project/${project.slug}`}>
                    <a className="work__link">
                        {project._embedded && (
                            <Image
                                src={project._embedded['wp:featuredmedia']['0'].source_url}
                                width={project._embedded['wp:featuredmedia']['0'].media_details.width}
                                height={project._embedded['wp:featuredmedia']['0'].media_details.height}
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                            />
                        )}
                    </a>
                </Link>
            </div>
        </li>
    )
}
