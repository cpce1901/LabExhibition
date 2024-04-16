import { Link, NavLink } from "react-router-dom";

type NavBarProps = {
    fondo: String
}

const NavBar = (props: NavBarProps) => {
    const { fondo } = props;

    return (
        <>
            <nav className="w-full z-10">
                <div className={fondo === 'main'? "relative top-20" : "relative top-16"}>
                    <div className="container mx-auto px-2 flex justify-around items-center">
                        <Link to='/' className="py-4">
                            <img src="src/assets/USSLogo.png" alt="LogoUSS" className="w-20" />
                        </Link>
                        <div className="flex justify-around w-3/12 items-center">
                            <NavLink to="/" className={({ isActive }) => {
                                return fondo === 'main' ? (isActive ? "font-rale text-white text-base font-semibold outline outline-2 outline-white px-4 py-1" : "font-rale text-white text-base font-semibold px-4 py-1") : (isActive ? "font-rale text-blue-500 text-base font-semibold outline outline-2 outline-white px-4 py-1" : "font-rale text-black text-base font-semibold outline outline-2 outline-white px-4 py-1")
                            }}>Inicio</NavLink>
                            <NavLink to="/proyectos" className={({ isActive }) => {
                                return fondo === 'main' ? (isActive ? "font-rale text-white text-base font-semibold outline outline-2 outline-white px-4 py-1" : "font-rale text-white text-base font-semibold px-4 py-1") : (isActive ? "font-rale text-blue-500 text-base font-semibold outline outline-2 outline-white px-4 py-1" : "font-rale text-black text-base font-semibold outline outline-2 outline-white px-4 py-1")
                            }}>Proyectos</NavLink>
                            <NavLink to="/contacto" className={({ isActive }) => {
                                return fondo === 'main' ? (isActive ? "font-rale text-white text-base font-semibold outline outline-2 outline-white px-4 py-1" : "font-rale text-white text-base font-semibold px-4 py-1") : (isActive ? "font-rale text-blue-500 text-base font-semibold outline outline-2 outline-white px-4 py-1" : "font-rale text-black text-base font-semibold outline outline-2 outline-white px-4 py-1")
                            }}>Contacto</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;