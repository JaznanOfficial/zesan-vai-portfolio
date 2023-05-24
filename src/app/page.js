import Carousel from "@/components/Carousel/Carousel";
import Header from "@/components/Header/Header";
import Navigation from "@/components/Navbar/Navigation";

export default function Home() {
    return (
        <div className="w-10/12 mx-auto">
            <Navigation />
            <Header />
            <Carousel />
        </div>
    );
}
