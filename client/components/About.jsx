import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function About() {
    return (
        <section className="py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    {/* Image Side */}
                    <div className="w-full md:w-1/2">
                        <div className="relative aspect-square overflow-hidden rounded-sm">
                            {/* Using hero image again for about section but cropped differently or different context */}
                            {/* In a real app we'd want a different image, maybe just a solid color block for now to prevent repetition fatigue if we only have 2 images */}
                            <div className="absolute inset-0 bg-white p-8 flex items-center justify-center border border-border">
                                <div className="text-center">
                                    <span className="font-serif text-6xl text-primary/20 block mb-4">E</span>
                                    <p className="text-muted-foreground italic uppercase tracking-widest text-xs">Est. 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <span className="text-primary text-sm uppercase tracking-widest font-bold">Our Story</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-foreground">
                            Crafting Memories <br /> Through Scent
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            At Elegance Essence, we believe that fragrance is more than just a scent—it is an invisible accessory, a personal signature, and a powerful trigger of memory.
                        </p>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Our master perfumers blend the rarest botanicals from around the world to create olfactory masterpieces that transcend time and trend.
                        </p>
                        <div className="pt-4">
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 text-foreground font-bold tracking-widest hover:text-primary transition-colors border-b border-foreground hover:border-primary pb-1 uppercase text-sm"
                            >
                                Read Our Full Story
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
