"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function ShopFilters() {
    const [priceRange, setPriceRange] = useState([0, 300]);

    return (
        <div className="space-y-8">
            {/* Categories */}
            <div>
                <h3 className="font-serif text-lg mb-4">Collection</h3>
                <div className="space-y-3">
                    {["All Fragrances", "New Arrivals", "Best Sellers", "Gift Sets"].map((item) => (
                        <div key={item} className="flex items-center space-x-2">
                            <Checkbox id={item} />
                            <Label htmlFor={item} className="text-sm font-normal cursor-pointer hover:text-primary transition-colors">{item}</Label>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scent Profile */}
            <div>
                <h3 className="font-serif text-lg mb-4">Scent Family</h3>
                <div className="space-y-3">
                    {["Floral", "Woody", "Fresh", "Oriental", "Spicy"].map((item) => (
                        <div key={item} className="flex items-center space-x-2">
                            <Checkbox id={item} />
                            <Label htmlFor={item} className="text-sm font-normal cursor-pointer hover:text-primary transition-colors">{item}</Label>
                        </div>
                    ))}
                </div>
            </div>

            {/* Price Range */}
            <div>
                <h3 className="font-serif text-lg mb-4">Price</h3>
                <Slider
                    defaultValue={[0, 300]}
                    max={500}
                    step={10}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="my-6"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                </div>
            </div>
        </div>
    );
}
