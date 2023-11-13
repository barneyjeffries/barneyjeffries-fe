import { WorkCard } from './work-card';

export const Work = ( { projects } ) => {

    return (
        <section className="work">
            <ul className="work__items">
                { projects.map( ( project ) => (
                    <li key={ project.id } className="work__item">
                        <WorkCard project={ project } />
                    </li>
                ) ) }
            </ul>
        </section>
    );
};
