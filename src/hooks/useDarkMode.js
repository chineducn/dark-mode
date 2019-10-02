import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react';

const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage('darkening', initialValue);

    useEffect(() => {
        const bodyElement = document.querySelector('body');
        if (darkMode) {
            bodyElement.classList.add('dark-mode')
        } else {
            bodyElement.classList.remove('dark-mode')
        }
    }, [darkMode]);

    const toggleDarkMode = event => {
        event.preventDefault();
        setDarkMode(!darkMode);
    }

    return [darkMode, toggleDarkMode];
};

export default useDarkMode;