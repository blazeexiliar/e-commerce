import Link from "next/link";
import { Plus } from "lucide-react";
import ProductCard from "./ProductCard";

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
                        <ProductCard key={product.id} product={product} />
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
