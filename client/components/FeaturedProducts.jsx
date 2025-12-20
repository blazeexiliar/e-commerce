import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";

const PRODUCTS = [
    {
        id: 1,
        name: "Rose Élégante",
        price: "$145",
        description: "A soft floral bouquet with hints of velvet vanilla.",
        image: "/images/featured-1.png",
    },
    {
        id: 2,
        name: "Midnight Amber",
        price: "$185",
        description: "Deep, resinous amber with smoked spices.",
        image: "/images/featured-1.png", // Reuse placeholder
    },
    {
        id: 3,
        name: "Golden Citrus",
        price: "$135",
        description: "Bright bergamot layered over warm cedarwood.",
        image: "/images/featured-1.png", // Reuse placeholder
    },
];

export default function FeaturedProducts() {
    return (
        <section className="py-24 bg-background text-foreground">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-primary text-sm uppercase tracking-widest font-bold">Curated Collection</span>
                    <h2 className="font-serif text-4xl mt-3 mb-4">Signature Scents</h2>
                    <div className="w-20 h-1 bg-primary mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {PRODUCTS.map((product) => (
                        <div key={product.id} className="group cursor-pointer">
                            <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-6">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                                {/* Quick Add Button */}
                                <button className="absolute bottom-4 right-4 bg-white text-black p-3 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-white shadow-lg">
                                    <Plus className="h-5 w-5" />
                                </button>
                            </div>

                            <div className="text-center">
                                <h3 className="font-serif text-2xl mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                                <p className="text-muted-foreground text-sm mb-3 italic">{product.description}</p>
                                <div className="text-lg font-medium">{product.price}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Link href="/shop" className="inline-block border-b border-foreground pb-1 uppercase tracking-widest text-sm hover:text-primary hover:border-primary transition-colors">
                        View All Fragrances
                    </Link>
                </div>
            </div>
        </section>
    );
}
