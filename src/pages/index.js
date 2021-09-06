import * as React from "react"
import '../styles/global.css';
import useTheme from '../utils/useTheme';
import Logo from '../styles/svg-icons/logo';
import { StaticImage } from "gatsby-plugin-image";

const Landing = () => {
  const {colorTheme, setTheme} = useTheme();
  return (
    <main className="bg-light-primary">
        <button onClick={() => {setTheme(colorTheme)}}>Toggle Theme</button>
        <Logo />
    </main>
    
  )
}

export default Landing;
