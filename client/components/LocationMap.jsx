"use client";

import { useState, useEffect } from "react";
import { MapPin, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LocationMap({ onLocationSelect }) {
    const [location, setLocation] = useState(null);
    const [address, setAddress] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const getCurrentLocation = () => {
        setLoading(true);
        setError("");

        if (!navigator.geolocation) {
            setError("Geolocation is not supported by your browser");
            setLoading(false);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                setLocation({ lat: latitude, lng: longitude });

                // Reverse geocoding using OpenStreetMap Nominatim API
                try {
                    const response = await fetch(
                        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
                    );
                    const data = await response.json();

                    const formattedAddress = data.display_name || "Address not found";
                    setAddress(formattedAddress);

                    // Pass location data to parent
                    if (onLocationSelect) {
                        onLocationSelect({
                            address: formattedAddress,
                            city: data.address?.city || data.address?.town || "",
                            state: data.address?.state || "",
                            zip: data.address?.postcode || "",
                            lat: latitude,
                            lng: longitude,
                        });
                    }
                } catch (err) {
                    setError("Failed to fetch address");
                    console.error(err);
                }

                setLoading(false);
            },
            (err) => {
                setError("Unable to retrieve your location");
                setLoading(false);
                console.error(err);
            }
        );
    };

    return (
        <div className="space-y-4 p-6 border border-border rounded-sm bg-secondary/10">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <h3 className="text-sm font-bold uppercase tracking-widest">Auto-fill Address</h3>
                </div>
                <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={getCurrentLocation}
                    disabled={loading}
                    className="uppercase tracking-widest text-xs"
                >
                    {loading ? (
                        <>
                            <Loader2 className="h-3 w-3 mr-2 animate-spin" />
                            Getting Location...
                        </>
                    ) : (
                        <>
                            <MapPin className="h-3 w-3 mr-2" />
                            Use My Location
                        </>
                    )}
                </Button>
            </div>

            {error && (
                <div className="text-xs text-destructive bg-destructive/10 p-3 rounded-sm">
                    {error}
                </div>
            )}

            {location && address && (
                <div className="space-y-3">
                    <div className="relative w-full h-48 bg-secondary rounded-sm overflow-hidden border border-border">
                        <iframe
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                            src={`https://www.openstreetmap.org/export/embed.html?bbox=${location.lng - 0.01},${location.lat - 0.01},${location.lng + 0.01},${location.lat + 0.01}&layer=mapnik&marker=${location.lat},${location.lng}`}
                            style={{ border: 0 }}
                        />
                    </div>
                    <div className="text-xs text-muted-foreground p-3 bg-background rounded-sm border border-border">
                        <p className="font-medium text-foreground mb-1">Detected Location:</p>
                        <p className="line-clamp-2">{address}</p>
                    </div>
                </div>
            )}

            {!location && !loading && (
                <p className="text-xs text-muted-foreground text-center py-4">
                    Click the button above to automatically detect and fill your shipping address
                </p>
            )}
        </div>
    );
}
