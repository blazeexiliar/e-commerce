import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-[90vh] w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero.png"
                    alt="Luxury Perfume Bottle"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay for text readability */}
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-wider mb-6 animate-fade-in-up">
                    DISCOVER YOUR <br />
                    <span className="text-primary-foreground italic font-light">Essence</span>
                </h1>
                <p className="max-w-xl text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-light">
                    A symphony of scent designed to evoke memory and desire.
                    Experience the art of fine fragrance.
                </p>
                <Link
                    href="/shop"
                    className="group flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-all duration-300"
                >
                    Explore Collection
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </section>
    );
}
