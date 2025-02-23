import Image from "next/image";

interface AvatarProps {
    src: string;
    alt: string;
}

function Avatar({ src, alt }: AvatarProps) {
    return (
        <div className="relative mx-auto mb-6 h-48 w-48">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 blur-lg"></div>
            <div className="ring-gradient-to-r relative h-full w-full overflow-hidden rounded-full from-blue-500/50 to-cyan-500/50 ring-2">
                <Image src={src} alt={alt} fill sizes="(max-width: 768px) 192px, 192px" className="object-cover" />
            </div>
        </div>
    );
}

export default Avatar;
