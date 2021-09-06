import { StaticImage } from "gatsby-plugin-image"

const SvgIcon = ({source, alt, width, height}) => {
    return (
        <>
            <StaticImage
                src={source}
                alt={alt}
                placeholder="blurred"
                layout="fixed"
                width={width}
                height={height}
            />
        </>
    )
}

export default SvgIcon;