import { StaticImage } from "gatsby-plugin-image";
import React from 'react';

const Logo = () => {
    return (
        <>
            <StaticImage
                src="../images/logo.svg"
                alt="App Logo"
                placeholder="blurred"
                layout="fixed"
                width={75}
                height={75}
          />
        </>
    )
}

export default Logo;