import Header from "./Header";

const HeroPrincipal = () => {


    return (
        <>
            <div className="container-fluid mx-auto mb-12">
                <section className="w-full h-screen overflow-hidden relative">
                    <div className="absolute inset-0 bg-main w-full h-full bg-[cover] bg-no-repeat bg-center"></div>
                    <div className="absolute inset-0 bg-slate-800 bg-opacity-60"></div>

                    <Header fondo='main'/>

                    <div className="h-full flex flex-col justify-center items-center gap-6 relative">
                        <div className="container w-auto flex flex-col gap-5">
                            <h1 className="text-9xl font-exo font-bold text-white md:text-center">UNLI</h1>
                            <h2 className="text-xl font-robo font-bold text-white md:text-center">Inidad Nacional Laboratorios Industria 4.0</h2>
                        </div>

                        <div className="container w-auto mx-1 p-1 flex flex-col">
                            <h3 className="font-rale font-medium text-white md:text-center md:text-xl md:font-light">Santiago - Concepción -Puerto Montt</h3>
                        </div>

                    </div>
                </section>
            </div>


        </>
    )
}

export default HeroPrincipal;

