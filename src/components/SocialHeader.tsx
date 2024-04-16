import { SlEarphonesAlt } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import { AiOutlineMessage } from "react-icons/ai";
import { CiLogin } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useState } from "react";

type SocialHeaderProps = {
    fondo: String
}

const SocialHeader = (props: SocialHeaderProps) => {
    const { fondo } = props;
    const [hovered, setHovered] = useState(false)

    const handleHover = () => {
        setHovered(!hovered);
    };

    return (
        <>
            <div className={fondo == 'main' ? "absolute container mx-auto z-20 h-auto" : "absolute container mx-auto z-20 h-auto bg-white"}>
                <div className={fondo === 'main' ? "flex items-center justify-center border-b border-gray-300/20" : "flex items-center justify-center border-b border-gray-300/50"}>

                    <div className="flex items-center gap-3 py-[0.8rem] px-9 border-r border-gray-300/20">
                        <div className="w-10 h-10"></div>
                    </div>

                    <Link to={"#"} className="py-[0.8rem] px-9 border-r border-gray-300/20">
                        <div className="flex items-center gap-3 h-10">
                            <SlEarphonesAlt color={fondo == 'main' ? "white" : "black"} size={24} />
                            <p className={fondo == 'main' ? "text-slate-400 text-sm font-robo tracking-widest" : "text-gray-400 text-sm font-robo tracking-widest"}>24/7 Support:</p>
                            <p className={fondo == 'main' ? "text-white text-sm font-robo tracking-widest" : "text-black text-sm font-robo tracking-widest"}>1-800-700-6200</p>
                        </div>
                    </Link>

                    <Link to={"#"} className=" py-[0.8rem] px-9 border-r border-gray-300/20">
                        <div className="flex items-center gap-3 h-10">
                            <TfiEmail color={fondo == 'main' ? "white" : "black"} size={24} />
                            <p className={fondo == 'main' ? "text-slate-400 text-sm font-robo tracking-widest" : "text-gray-400 text-sm font-robo tracking-widest"}>E-mail:</p>
                            <p className={fondo == 'main' ? "text-white text-sm font-robo tracking-widest" : "text-black text-sm font-robo tracking-widest"}>mail@demolink.org</p>
                        </div>
                    </Link>

                    <Link to={"#"} className=" py-[0.8rem] px-9 border-r border-gray-300/20">
                        <div className="flex items-center gap-3 h-10">
                            <AiOutlineMessage color={fondo == 'main' ? "white" : "black"} size={24} />
                            <p className={fondo == 'main' ? "text-slate-400 text-sm font-robo tracking-widest" : "text-gray-400 text-sm font-robo tracking-widest"}>Social Media:</p>
                            <p className={fondo == 'main' ? "text-white text-sm font-robo tracking-widest" : "text-black text-sm font-robo tracking-widest"}>1-800-700-6200</p>
                        </div>
                    </Link>

                    <Link
                        to='/login'
                        className={`
                            ${fondo === 'main' ? "py-[0.8rem] px-9 border-r border-gray-300/20" : "bg-gray-300 px-2 transition-all duration-300"}
                            ${fondo !== 'main' && hovered ? "hover:bg-blue-500" : ""}
                        `}
                        onMouseEnter={() => { if (fondo !== 'main') handleHover(); }}
                        onMouseLeave={() => { if (fondo !== 'main') handleHover(); }}
                    >
                        <div className="flex items-center gap-3 h-10">
                            <CiLogin color={hovered ? "white" : (fondo === 'main' ? "white" : "black")} size={24} />
                            <p className={`${hovered ? "text-white" : (fondo === 'main' ? "text-white" : "text-black")} text-sm font-robo font-semibold tracking-widest`}>
                                Login
                            </p>
                        </div>
                    </Link>

                    <div className="flex items-center gap-3 py-[0.8rem] px-9" >
                        <div className="w-10 h-10"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SocialHeader;