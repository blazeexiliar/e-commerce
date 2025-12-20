"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import ShopFilters from "@/components/ShopFilters";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Filter } from "lucide-react";

// Extended product data for the shop page
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

export default function ShopPage() {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    return (
        <main className="min-h-screen bg-background text-foreground py-12">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col items-center mb-12">
                    <h1 className="font-serif text-5xl mb-4">The Collection</h1>
                    <p className="text-muted-foreground text-center max-w-2xl">
                        Explore our full range of artisanal fragrances, each crafted to tell a unique story.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-12">
                    {/* Mobile Filter Trigger */}
                    <div className="md:hidden flex justify-between items-center pb-4 border-b border-border">
                        <span className="text-sm font-medium">{ALL_PRODUCTS.length} Products</span>
                        <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                            <SheetTrigger asChild>
                                <button className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-primary transition-colors">
                                    <Filter className="h-4 w-4" /> Filters
                                </button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                                <div className="py-6">
                                    <h2 className="font-serif text-2xl mb-6">Filters</h2>
                                    <ShopFilters />
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>

                    {/* Desktop Sidebar */}
                    <aside className="hidden md:block w-64 flex-shrink-0">
                        <div className="sticky top-24">
                            <h2 className="font-serif text-xl mb-6 pb-4 border-b border-border">Filters</h2>
                            <ShopFilters />
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <div className="flex-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {ALL_PRODUCTS.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>

                        {/* Pagination Placeholder */}
                        <div className="mt-16 flex justify-center space-x-2">
                            <span className="px-4 py-2 border border-primary text-primary">1</span>
                            <span className="px-4 py-2 border border-transparent hover:text-primary cursor-pointer">2</span>
                            <span className="px-4 py-2 border border-transparent hover:text-primary cursor-pointer">3</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
