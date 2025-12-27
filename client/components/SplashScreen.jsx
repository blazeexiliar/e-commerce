"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState, useRef, useEffect } from "react";

export default function SplashScreen() {
  const [hide, setHide] = useState(false);
  const [particles, setParticles] = useState([]);

  const containerRef = useRef(null);
  const brandRef = useRef(null);
  const subBrandRef = useRef(null);
  const taglineRef = useRef(null);
  const flameRingRef = useRef(null);

  // Generate particles safely
  useEffect(() => {
    const generated = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 1,
      opacity: Math.random() * 0.5 + 0.3,
    }));
    setParticles(generated);
  }, []);

  useGSAP(
    (context) => {
      const tl = gsap.timeline({
        onComplete: () => setTimeout(() => setHide(true), 400),
      });

      gsap.set(
        [
          brandRef.current,
          subBrandRef.current,
          taglineRef.current,
          flameRingRef.current,
          ".particle",
          ".letter",
        ],
        { clearProps: "all" }
      );

      gsap.set(brandRef.current, {
        scale: 0.3,
        opacity: 0,
        y: 100,
        rotationX: -90,
        transformPerspective: 1000,
      });

      gsap.set(subBrandRef.current, {
        scale: 0.3,
        opacity: 0,
        y: 80,
        rotationX: 90,
        transformPerspective: 1000,
      });

      gsap.set(taglineRef.current, { opacity: 0, y: 30, scale: 0.8 });
      gsap.set(flameRingRef.current, { scale: 0, opacity: 0, rotation: -180 });
      gsap.set(".particle", { opacity: 0, scale: 0 });
      gsap.set(".letter", { opacity: 0, y: 50, rotationX: -90 });

      tl.to(flameRingRef.current, {
        scale: 1,
        opacity: 0.6,
        rotation: 0,
        duration: 1.5,
        ease: "power2.out",
      })
        .to(
          ".particle",
          {
            opacity: 0.7,
            scale: 1,
            stagger: { each: 0.03, from: "random" },
            duration: 1.2,
          },
          "-=1"
        )
        .to(
          brandRef.current,
          {
            scale: 1,
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 1.4,
          },
          "-=0.8"
        )
        .to(
          subBrandRef.current,
          {
            scale: 1,
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 1.2,
          },
          "-=1"
        )
        .to(
          ".letter",
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            stagger: 0.05,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.8"
        )
        .to(taglineRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
        })
        .to(containerRef.current, {
          opacity: 0,
          duration: 0.6,
          ease: "power2.inOut",
        });

      // Scoped infinite animation
      context.add(() => {
        gsap.to(".particle", {
          x: "random(-20,20)",
          y: "random(-20,20)",
          repeat: -1,
          yoyo: true,
          duration: "random(2,4)",
          ease: "sine.inOut",
        });
      });
    },
    { scope: containerRef }
  );

  if (hide) return null;

  const blaze = "BLAZE".split("");
  const exiliar = "EXILIAR".split("");

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[1000] flex items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at center, #1a0a0a 0%, #0a0000 100%)",
      }}
    >
      <div
        ref={flameRingRef}
        className="absolute w-[600px] h-[600px] rounded-full blur-sm"
        style={{
          background:
            "radial-gradient(circle, transparent 40%, rgba(255,69,0,.2) 60%, transparent 70%)",
          boxShadow: "0 0 100px rgba(255,69,0,.5)",
        }}
      />

      {particles.map((p) => (
        <div
          key={p.id}
          className="particle absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: "orange",
            opacity: p.opacity,
            boxShadow: "0 0 10px orange",
          }}
        />
      ))}

      <div className="relative z-10 text-center">
        <h1
          ref={brandRef}
          className="flex justify-center text-8xl font-bold tracking-[0.2em]"
        >
          {blaze.map((letter, i) => (
            <span
              key={i}
              className="letter"
              style={{
                color: "transparent",
                WebkitTextStroke: "2px orange",
                textShadow: "0 0 20px rgba(255,69,0,0.8)",
              }}
            >
              {letter}
            </span>
          ))}
        </h1>

        <h2
          ref={subBrandRef}
          className="flex justify-center text-6xl font-light tracking-[0.3em] mt-4"
        >
          {exiliar.map((letter, i) => (
            <span
              key={i}
              className="letter"
              style={{
                color: "white",
                textShadow: "0 0 15px rgba(255,255,255,0.5)",
              }}
            >
              {letter}
            </span>
          ))}
        </h2>

        <p
          ref={taglineRef}
          className="text-orange-300 text-sm tracking-[0.4em] mt-8 uppercase"
        >
          Ignite Your Essence
        </p>
      </div>
    </div>
  );
}
