function App() {
    return (
        <main>
            <div className="grid grid-cols-12 mx-[60px] gap-5">
                <h1 className="relative top-[30%] w-[1000px] h-80 leading-[0.6] text-[200px] col-start-1 col-span-9 font-bold">
                    Keisha <span className="text-[140px]">Fidelia.</span>
                </h1>
                <img
                    className="w-[1200px] h-[860px] bg-cover absolute bottom-0 left-0 -z-10 opacity-60"
                    alt="Keisha"
                    src="../src/assets/pretty.png"
                />
                <h2 className="relative top-[60%] col-start-5 col-span-4 w-[360px] font-light text-5xl">
                    Freelance Designer
                </h2>
            </div>
        </main>
    );
}

export default App;
