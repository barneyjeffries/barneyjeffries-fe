import { useContext } from 'react';
import { InfoContext } from '../../context/info';

export default function useInfo() {
    const context = useContext(InfoContext);
    return context;
}
