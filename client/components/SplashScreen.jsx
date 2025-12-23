"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function SplashScreen() {
    const [complete, setComplete] = useState(false);
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const subTextRef = useRef(null);
    const overlayRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                setComplete(true);
            },
        });

        // Initial state
        gsap.set(containerRef.current, { visibility: "visible" });
        gsap.set([textRef.current, subTextRef.current], { opacity: 0, y: 20 });

        // Animation sequence
        tl.to(textRef.current, {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            delay: 0.5,
        })
            .to(subTextRef.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
            }, "-=1")
            .to(textRef.current, {
                letterSpacing: "0.2em",
                duration: 3,
                ease: "power1.inOut",
            }, "-=1.5")
            .to(overlayRef.current, {
                height: "0%",
                duration: 1.2,
                ease: "power4.inOut",
                delay: 0.5
            })
            .to(containerRef.current, {
                display: "none",
                duration: 0
            });

    }, { scope: containerRef });

    if (complete) return null;

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[1000] invisible"
        >
            {/* Main Background Overlay */}
            <div
                ref={overlayRef}
                className="absolute inset-0 bg-[#0a0a0a] flex flex-col items-center justify-center z-20 origin-top"
            >
                <div className="overflow-hidden mb-4">
                    <h1
                        ref={textRef}
                        className="text-primary font-serif text-4xl md:text-6xl font-bold tracking-normal"
                    >
                        ELEGANCE
                    </h1>
                </div>
                <div className="overflow-hidden">
                    <p
                        ref={subTextRef}
                        className="text-muted-foreground text-sm uppercase tracking-[0.3em]"
                    >
                        Essence of Luxury
                    </p>
                </div>
            </div>
        </div>
    );
}