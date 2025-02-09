import Header from "@/components/organisms/Header";
import FeaturedPost from "@/components/organisms/FeaturedPost";
import RecentPosts from "@/components/organisms/RecentPosts";
import Footer from "@/components/organisms/Footer";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="container mx-auto mt-16 flex-grow px-4 py-8">
                <FeaturedPost />
                <RecentPosts />
            </main>
            <Footer />
        </div>
    );
}
