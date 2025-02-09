import Image from "next/image";
import { Button } from "@/components/ui/button";

function RecentPosts() {
    return (
        <section>
            <h2 className="mb-6 text-3xl font-bold">Recent Posts</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((post) => (
                    <div key={post} className="bg-card overflow-hidden rounded-lg shadow-md">
                        <Image
                            src={`/images/placeholder.svg`}
                            alt={`Post ${post}`}
                            width={400}
                            height={200}
                            className="h-48 w-full object-cover"
                            priority
                        />
                        <div className="p-4">
                            <h3 className="mb-2 text-lg font-semibold">Blog Post Title {post}</h3>
                            <p className="text-muted-foreground mb-4">
                                {"A brief excerpt from the blog post to give readers an idea of what it's about."}
                            </p>
                            <Button variant="link" className="p-0">
                                Read More →
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default RecentPosts;
