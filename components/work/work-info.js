import { useEffect, createRef } from 'react';

export const WorkInfo = ( { index, project } ) => {

    return (
        <div key={ project.id } className="work-info">
            <h2 className="work-info__title">{ project.title.rendered }</h2>
            <p className="work-info__details">
                { project.acf.overview }
            </p>
            <a href="#" className="work-info__link"
               title={ project.title.rendered }>View project</a>
        </div>
    );
};
