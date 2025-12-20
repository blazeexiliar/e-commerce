"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ProductGallery from "@/components/ProductGallery";
import ProductInfo from "@/components/ProductInfo";

// Mock data (in a real app this would be fetched)
const ALL_PRODUCTS = [
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
        image: "/images/featured-1.png",
    },
    {
        id: 3,
        name: "Golden Citrus",
        price: "$135",
        description: "Bright bergamot layered over warm cedarwood.",
        image: "/images/featured-1.png",
    },
    {
        id: 4,
        name: "Oceanic Mist",
        price: "$120",
        description: "Fresh sea salt and sage with a woody base.",
        image: "/images/featured-1.png",
    },
    {
        id: 5,
        name: "Noir Leather",
        price: "$210",
        description: "Intense leather accord with tobacco and saffron.",
        image: "/images/featured-1.png",
    },
    {
        id: 6,
        name: "Velvet Iris",
        price: "$160",
        description: "Powdery iris with white musk and violet.",
        image: "/images/featured-1.png",
    },
];

export default function ProductPage({ params }) {
    const { id } = use(params);
    const productId = parseInt(id);
    const product = ALL_PRODUCTS.find((p) => p.id === productId) || ALL_PRODUCTS[0];

    return (
        <main className="min-h-screen bg-background text-foreground py-12">
            <div className="container mx-auto px-4">
                {/* Breadcrumb */}
                <div className="mb-8">
                    <Link href="/shop" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <ArrowLeft className="h-4 w-4" /> Back to Collection
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left: Gallery */}
                    <ProductGallery image={product.image} name={product.name} />

                    {/* Right: Info */}
                    <ProductInfo product={product} />
                </div>
            </div>
        </main>
    );
}
