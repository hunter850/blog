import Image from "next/image";
import { Button } from "@/components/ui/button";

function FeaturedPost() {
    return (
        <section className="mb-12">
            <h2 className="mb-4 text-3xl font-bold">Featured Post</h2>
            <div className="bg-card overflow-hidden rounded-lg shadow-lg">
                <Image
                    src="/images/placeholder.svg"
                    alt="Featured post"
                    className="h-64 w-full object-cover"
                    width={1200}
                    height={1200}
                    priority
                />
                <div className="p-6">
                    <h3 className="mb-2 text-xl font-semibold">My Journey into Web Development</h3>
                    <p className="text-muted-foreground mb-4">
                        Exploring the exciting world of web development and sharing my experiences along the way.
                    </p>
                    <Button>Read More</Button>
                </div>
            </div>
        </section>
    );
}

export default FeaturedPost;
