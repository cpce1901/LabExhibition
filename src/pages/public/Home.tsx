import { Fade, Roll, Zoom, Slide } from "react-awesome-reveal";
import HeroPrincipal from "../../components/HeroPrincipal";

const Home = () => {
    return (
        <>
            <Fade duration={500}>
                < HeroPrincipal />
            </Fade>
        </>
    )
}

export default Home;