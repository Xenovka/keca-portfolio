import { useGSAP } from "@gsap/react";
import gsap from "gsap/gsap-core";
import { useRef } from "react";
import SplitType from "split-type";

function App() {
    const container = useRef();

    useGSAP(
        () => {
            // const tl = gsap.timeline({ defaults: { ease: "power3.in" } });
            const name = SplitType.create(".name");
            const role = SplitType.create(".role");
            const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

            tl.fromTo(
                name.chars,
                {
                    y: "100%",
                    opacity: 0
                },
                {
                    y: "0%",
                    opacity: 1,
                    duration: 1,
                    stagger: 0.05
                }
            );

            tl.fromTo(
                role.chars,
                {
                    y: "100%",
                    opacity: 0
                },
                {
                    y: "0%",
                    opacity: 1,
                    duration: 1,
                    stagger: 0.05
                },
                "<.75"
            );
        },
        { scope: container }
    );

    return (
        <main className="relative h-screen w-screen">
            <div className="grid grid-cols-12 mx-[60px] gap-5" ref={container}>
                <div className="absolute top-[20%] leading-[0.8] col-start-1 col-span-9">
                    <div className="overflow-hidden">
                        <span className="name text-[200px] font-bold">Keisha</span> <br />
                    </div>
                    <div className="overflow-hidden block">
                        <span className="name text-[140px] font-bold">Fidelia.</span>
                    </div>
                </div>
                <img
                    className="w-[1200px] h-[860px] bg-cover absolute bottom-0 left-0 -z-10 opacity-60"
                    alt="Keisha"
                    src="../src/assets/pretty.png"
                />
                <div className="absolute top-[55%] left-[35%] col-start-5 col-span-4 w-[360px] ">
                    <span className="role font-light text-5xl">Freelance Designer</span>
                </div>
            </div>
        </main>
    );
}

export default App;
