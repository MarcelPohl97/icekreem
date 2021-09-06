
const Navbar = ({children}) => {
    return (
        <>
            <nav className="flex flex-row items-center justify-between">
                
                {children}
            </nav>
        </>
    )
}

export default Navbar;