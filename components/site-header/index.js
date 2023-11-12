import useInfo from '../../utils/hooks/use-info';

export const SiteHeader = () => {

    const [ infoIsOpen, setInfoIsOpen ] = useInfo(false);

    const handleClick = () => {
        setInfoIsOpen(!infoIsOpen);
    };

    return (
        <header className="site-header">
            <h1 className="site-header__logo">
                Barney Jeffries
                <span className="site-header__logo-line">_</span>
            </h1>
            <h2 className="site-header__tagline">
                {`/*`} creative coder & front-end designer {`*/`}
            </h2>
            <div className="site-header__info">
                <button onClick={ handleClick } className="site-header__info-toggle">
                    { infoIsOpen ? (
                        'Close'
                    ) : (
                        'Info'
                    ) }
                </button>
            </div>
        </header>
    );
};
