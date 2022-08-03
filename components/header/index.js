import useInfo from '../../utils/hooks/use-info';

export default function Header() {

    const [ infoIsOpen, setInfoIsOpen ] = useInfo(false);

    const handleClick = () => {
        setInfoIsOpen(!infoIsOpen);
    };

    return (
        <header className="header">
            <h1 className="header__logo">
                Barney Jeffries
                <span className="header__logo-line">_</span>
            </h1>
            <h2 className="header__tagline">
                {`/*`} creative coder & front-end designer {`*/`}
            </h2>
            <div className="header__info">
                <button onClick={ handleClick } className="header__info-toggle">
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
