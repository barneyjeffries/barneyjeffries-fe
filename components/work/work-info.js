import { useEffect, createRef } from 'react';

export default function WorkInfo({index, project} = props) {

    const workInfoRef = createRef();

    useEffect(() =>{
        workInfoRef.current.classList.add('is-visible');
    }, []);

    return (
        <div ref={workInfoRef} key={`work-info-${index}`} className="work-info">
            <h2 className="work-info__title">{ project.title.rendered }</h2>
            <p className="work-info__details">
                { project.acf.overview }
            </p>
            <a href="<?php the_permalink(); ?>" className="work-info__link"
               title="<?php the_title(); ?> - <?php the_field('overview'); ?>">View project</a>
        </div>
    )
}
