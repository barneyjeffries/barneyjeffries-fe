import { createContext, useState } from 'react';

const InfoContext = createContext({
    infoIsOpen: false
});

function InfoProvider(props) {
    const [ infoIsOpen, setInfoIsOpen ] = useState(false);
    const value = [infoIsOpen, setInfoIsOpen];

    return <InfoContext.Provider value={value} {...props} />
}

export { InfoContext, InfoProvider };
