import { useEffect, useState } from "react"

import { Switch } from "./Switch"

export const Header = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }, [isDarkMode]);


  return (
    <header className="header">
      <h1>Gif App</h1>
      <Switch isDarkMode={isDarkMode} onToggle={() => setIsDarkMode(!isDarkMode)} />
    </header>
  )
}
