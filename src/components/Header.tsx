import NavBar from "./NavBar";
import SocialHeader from "./SocialHeader";

type HeaderProps = {
    fondo: String
}

const Header = (props : HeaderProps) => {
    const {fondo} = props

    return (
        <>
            <header className="flex flex-col h-20">
                <SocialHeader fondo={fondo}/>
                <NavBar fondo={fondo}/>
            </header>
        </>
    )
}

export default Header;