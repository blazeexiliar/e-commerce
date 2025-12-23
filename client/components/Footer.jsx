import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-secondary text-secondary-foreground py-16 border-t border-border">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand Column */}
                <div className="md:col-span-1 space-y-6">
                    <Link href="/" className="font-serif text-2xl tracking-widest font-bold">
                        ELEGANCE
                    </Link>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Crafting memories through scent. Experience the essence of true luxury with our hand-picked botanical collections.
                    </p>
                    <div className="flex space-x-4">
                        <Link href="#" className="hover:text-primary transition-colors">
                            <Instagram className="h-5 w-5" />
                        </Link>
                        <Link href="#" className="hover:text-primary transition-colors">
                            <Facebook className="h-5 w-5" />
                        </Link>
                        <Link href="#" className="hover:text-primary transition-colors">
                            <Twitter className="h-5 w-5" />
                        </Link>
                    </div>
                </div>

                {/* Links Column */}
                <div>
                    <h3 className="font-serif text-lg mb-6">Explore</h3>
                    <ul className="space-y-4 text-sm text-muted-foreground">
                        <li><Link href="/shop" className="hover:text-primary transition-colors">Shop All</Link></li>
                        <li><Link href="/collections" className="hover:text-primary transition-colors">Collections</Link></li>
                        <li><Link href="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
                        <li><Link href="/locations" className="hover:text-primary transition-colors">Locations</Link></li>
                    </ul>
                </div>

                {/* Support Column */}
                <div>
                    <h3 className="font-serif text-lg mb-6">Support</h3>
                    <ul className="space-y-4 text-sm text-muted-foreground">
                        <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                        <li><Link href="/shipping" className="hover:text-primary transition-colors">Shipping & Returns</Link></li>
                        <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                        <li><Link href="/terms-and-conditions" className="hover:text-primary transition-colors">Terms and Conditions</Link></li>
                        <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                        <li><Link href="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
                    </ul>
                </div>

                {/* Newsletter Column */}
                <div>
                    <h3 className="font-serif text-lg mb-6">Stay Connected</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                        Subscribe to receive exclusive updates and offers.
                    </p>
                    <form className="flex flex-col space-y-3">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary text-sm"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors uppercase text-xs tracking-widest font-bold"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-16 pt-8 border-t border-border/50 text-center text-xs text-muted-foreground">
                &copy; {new Date().getFullYear()} Elegance Essence. All rights reserved.
            </div>
        </footer>
    );
}
