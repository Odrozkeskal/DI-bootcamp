import React from "react";
import {useTheme} from './ThemeContext';

function ThemeSwitcher() {
    const {theme, toggleTheme} = useTheme();
    return (
        <div>
            <button onClick={toggleTheme}>Toggle theme</button>
            <p>Current theme: {theme}</p>
        </div>
    );
}

export default ThemeSwitcher;