import { useGSAP } from "@gsap/react";
import gsap from "gsap/gsap-core";
import { useRef } from "react";
import SplitType from "split-type";

function NavBar() {
    const container = useRef();

    useGSAP(
        () => {
            const tl1 = gsap.timeline({ defaults: { ease: "power4.out" } });
            const tl2 = gsap.timeline({ defaults: { ease: "power4.out" } });

            const navItem = gsap.utils.toArray([".nav-works", ".nav-about"]);

            navItem.forEach((item) => {
                const splitNavWorks = SplitType.create(item.querySelectorAll(".nav-item-works"));
                const splitNavWorksTop = SplitType.create(splitNavWorks.elements[0]);
                const splitNavWorksBottom = SplitType.create(splitNavWorks.elements[1]);
                const splitNavAbout = SplitType.create(item.querySelectorAll(".nav-item-about"));
                const splitNavAboutTop = SplitType.create(splitNavAbout.elements[0]);
                const splitNavAboutBottom = SplitType.create(splitNavAbout.elements[1]);

                item.addEventListener("mouseenter", () => {
                    if (item.classList.contains("nav-works")) {
                        tl1.to(splitNavWorksBottom.chars, {
                            y: "100%",
                            duration: 0.5,
                            stagger: 0.05
                        }).to(
                            splitNavWorksTop.chars,
                            {
                                y: "100%",
                                duration: 0.5,
                                stagger: 0.05
                            },
                            "<.25"
                        );

                        tl1.play();
                    } else {
                        tl2.to(splitNavAboutBottom.chars, {
                            y: "100%",
                            duration: 0.5,
                            stagger: 0.05
                        }).to(
                            splitNavAboutTop.chars,
                            {
                                y: "100%",
                                duration: 0.5,
                                stagger: 0.05
                            },
                            "<.25"
                        );

                        tl2.play();
                    }
                });

                item.addEventListener("mouseleave", () => {
                    if (item.classList.contains("nav-works")) {
                        tl1.reverse();
                    } else {
                        tl2.reverse();
                    }
                });
            });
        },
        { scope: container }
    );

    return (
        <nav className="mt-9 absolute top-0 left-0 w-screen z-10" ref={container}>
            <ul className="navbar grid grid-cols-12 mx-[60px] gap-5 overflow-hidden">
                <li className="nav-title col-span-2">Keisha Fidelia</li>
                <li className="relative nav-item nav-works w-fit col-start-11 col-span-1 cursor-pointer border-b-2">
                    <span className="absolute -top-[100%] right-0 nav-item-works">Works.</span>
                    <span className="nav-item-works">Works.</span>
                </li>
                <li className="relative nav-item nav-about w-fit col-start-12 col-span-1 cursor-pointer border-b-2">
                    <span className="absolute -top-[100%] right-0 nav-item-about">About.</span>
                    <span className="nav-item-about">About.</span>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
