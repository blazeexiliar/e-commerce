import Image from "next/image";

export default function ProductGallery({ image, name }) {
    return (
        <div className="flex flex-col gap-4">
            <div className="relative aspect-square w-full overflow-hidden bg-secondary">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="relative aspect-square bg-secondary cursor-pointer hover:opacity-80 transition-opacity">
                        <Image
                            src={image} // Using same image for placeholder thumbnails
                            alt={`${name} view ${i}`}
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
