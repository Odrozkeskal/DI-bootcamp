import React, { useEffect } from "react";
import { useTheme } from "./ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";
import "./App.css";


function App() {
  const { theme } = useTheme(); 

  useEffect(() => {
    document.body.className = `${theme}-theme`;
  }, [theme]);

  return (
    <div className="App">
      <h1>Theme Switcher Example</h1>
      <ThemeSwitcher />
    </div>
  );
}


export default App;